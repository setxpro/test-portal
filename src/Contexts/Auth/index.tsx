import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { User } from "../../Types/User";
import { useApi } from "./../../Hooks/useApi";
import { toast } from "react-toastify";

type AuthContextType = {
  user: User | null;
  signIn: (user: string, pass: string) => Promise<boolean>;
  firstLogin: (user: string, pass: string, newPass: string) => Promise<any>;
  getAllTables: (ID: string) => Promise<any>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  signout: () => void;
};

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: Props) => {
  const api = useApi();

  const [user, setUser] = useState<User | null>(null);
  // const [status, setStatus] = useState(""); // Setar o status vindo do servidor
  // const [loading, setLoading] = useState(false); // Vai pegar o loading como true na requisição
  const [message, setMessage] = useState(""); // Vai setar a mensagem do servidor

  const signIn = async (user: string, pass: string) => {
    const data = await api.signIn(user, pass);

    // Verifica se existe um usuário pelo STATUS
    if (data[0].STATUS === "true") {
      // Cancela o loading caso exista um usuário
      // setLoading(false); // OBS
      // Seta esse usuário no STATE "user"
      setUser(data[0]);
      // Seta o valor do STATUS em um estado "status"
      //para que seja feita outras verificações
      // setStatus(data[0].STATUS); // OBS

      // Salva o usuário no LocalStorage para que ele mantenha logado
      setLocalStorage(data[0]);

      setMessage(data[0].MESSAGE);
      getAllTables(data[0].ID);

      // timeUserLogged(); // Executo o time do usuário com 20 minutos de atividade no sistema

      // Retorno final como true
      return true;
    }
    // Caso não aja ussuário logado
    if (data[0].STATUS === "false") {
      // Setar o valor do status em um state
      // setStatus(data[0].STATUS); // OBS
      // Cancela o loading
      setMessage(data[0].MESSAGE);
      // setLoading(false); // OBS
    }
    return false;
  };

  // Função para fazer logout
  const signout = async () => {
    setMessage("");
    // Seta o usuário como nulo
    setUser(null);
    setLocalStorage("");
    localStorage.removeItem("auth-bag");
    // Reseta o localStorage
  };

  // salvando no lovalStorage
  const setLocalStorage = (user: string) => {
    // Vai no localStorage e seta na variável "auth" um usuário como OBJECT JSON
    localStorage.setItem("auth-bag", JSON.stringify(user));
  };

  // Persistindo o usuário logado no portal
  useEffect(() => {
    const isLoggedUser = localStorage.getItem("auth-bag"); // Busca um item no localStorage cuja chave "auth"
    if (isLoggedUser) {
      // Verifica se tem algum usuário setado no localStorage
      const foundUser = JSON.parse(isLoggedUser);
      // Seta esse usuário no STATE
      setUser(foundUser);
    }
  }, []);

  const firstLogin = async (user: string, pass: string, newPass: string) => {
    const { data } = await api.firstLogin(user, pass, newPass);
    toast("Primeiro Login!");
    return data;
  };

  const getAllTables = async (ID: string) => {
    const data = await api.getAllTables(ID);
    return data;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        firstLogin,
        message,
        setMessage,
        signout,
        getAllTables,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
