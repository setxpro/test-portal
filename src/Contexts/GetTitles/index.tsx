import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import { TableType } from "../../Types/Table";
import { AuthContext } from "../Auth";
import axios from "axios";

interface Props {
  setOptions: React.Dispatch<
    React.SetStateAction<{
      [x: number]: string;
    }>
  >;
  options: {
    [x: number]: string;
  };
  sendAllResp: () => void;
  titles: TableType[];
  sendOneInfo: (index: number) => void;
  loading: boolean;
}

export const GetTitlesContext = createContext({} as Props);

export const GetTitlesProvider = ({ children }: { children: ReactNode }) => {
  const [options, setOptions] = useState<{ [x: number]: string }>({});
  const { user, getAllTables } = useContext(AuthContext);
  const [titles, setTitulo] = useState<TableType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await getAllTables(`${user?.ID}`);
      setTitulo(data);
    })();
    setLoading(false);
  }, [getAllTables, user?.ID]);
  // Send All Title

  const sendAllResp = async () => {
    if (!options) {
      toast("Você deve ao menos selecionar uma opção!");
      return;
    }

    let conf = window.confirm("Deseja Realmente enviar todas as respostas ?");

    if (!conf) {
      toast("Abortadas pelo aprovador!");
      return;
    }

    let ID = user?.ID;
    const allOpt = titles.map((item, index) => {
      return {
        ...item,
        option: options[index] || "",
        ID,
      };
    });
    const { data } = await axios.post(
      `${process.env.REACT_APP_URL as string}/ctitwkf`,
      allOpt.filter((x) => x.option)
    );

    toast("Respostas enviadas com sucesso!");

    // load the page
    // window.location.reload();

    return data;
  };
  // Send One Title
  const sendOneInfo = async (index: number) => {
    if (!options[index]) {
      toast("Você deve ao menos selecionar uma opção!");
      return;
    }
    let conf = window.confirm("Deseja Realmente enviar essa resposta ?");

    if (!conf) {
      toast("Abortada pelo aprovador!");
      return;
    }

    let ID = user?.ID;

    const newObject = {
      ...titles[index],
      option: options[index],
      ID,
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_URL as string}/ctitwkf`,
      [newObject]
    );
    removeItems(index + 1);
    toast(`Resposta enviada com sucesso!`);

    // load the page
    // window.location.reload();

    return data;
  };

  function removeItems(id: number) {
    const remove = titles.filter((i) => parseInt(i.ANTIWKF) !== id);
    setTitulo(remove);
  }

  return (
    <GetTitlesContext.Provider
      value={{
        loading,
        options,
        setOptions,
        titles,
        sendAllResp,
        sendOneInfo,
      }}
    >
      {children}
    </GetTitlesContext.Provider>
  );
};
