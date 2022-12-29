import React, { useContext, memo } from "react";

import * as C from "./styles";
import { GetTitlesContext } from "./../../Contexts/GetTitles/index";

interface Props {
  children: React.ReactNode;
}

const BillsToPay: React.FC<Props> = ({ children }) => {
  const { titles, sendAllResp } = useContext(GetTitlesContext);

  const fiscal = titles.find((t) => t.ALBLWKF === "FISCAL");
  const finance = titles.find((t) => t.ALBLWKF === "FINANCEIRO");
  const cc = titles.find((t) => t.ALBLWKF === "CC");

  let ccc = false;

  return (
    <C.Container>
      <C.ContentAreaTop>
        <C.ContentTitle>
          <C.TitleTopCenter>
            {fiscal && "FISCAL"}
            {finance && "FINANCEIRO"}
            {ccc && cc && "Centro de Custo"}
          </C.TitleTopCenter>{" "}
        </C.ContentTitle>
        <C.ContentButtons></C.ContentButtons>
        <C.ContentSendAll>
          <C.ButtonSendAll onClick={sendAllResp}>Enviar Todos</C.ButtonSendAll>
        </C.ContentSendAll>
      </C.ContentAreaTop>
      <C.AreaContentMiddle>{children}</C.AreaContentMiddle>
      <C.ContentBottom>
        <C.ButtonSendAll onClick={sendAllResp}>Enviar Todos</C.ButtonSendAll>
      </C.ContentBottom>
    </C.Container>
  );
};

export default memo(BillsToPay);
