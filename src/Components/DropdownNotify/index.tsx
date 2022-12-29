import { useDropNotify } from "../../Hooks/useDropNotify";
import * as C from "./styles";
import { useContext } from "react";
import { GetTitlesContext } from "./../../Contexts/GetTitles/index";
import { Link } from "react-router-dom";
import { RenderPageContext } from "../../Contexts/RenderPage";

const DropdownNotify = () => {
  const { openDropdownNotify } = useDropNotify();
  const { titles } = useContext(GetTitlesContext);
  const { getValue } = useContext(RenderPageContext);

  let items = titles.map((i) => i.ADFIWKF);

  let newArr = items.filter(function (info, i) {
    return items.indexOf(info) === i;
  });

  let arrItems = newArr.map((i) => i !== "");

  return (
    <C.Container
      openDropdownNotify={openDropdownNotify}
      countItem={arrItems.length}
    >
      {newArr.map((i, index) => {
        if (i !== "")
          return (
            <Link to="/bills-to-pay" onClick={() => getValue(i)} key={index}>
              {i.toLowerCase()}
            </Link>
          );
        return null;
      })}
    </C.Container>
  );
};

export default DropdownNotify;
