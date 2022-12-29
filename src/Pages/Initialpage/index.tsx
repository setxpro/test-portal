import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth";

import * as C from "./styles";

const Initialpage: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <C.Container>
      <C.TextMessageWelcome>Seja bem-vindo!</C.TextMessageWelcome>
      <C.TextName>{user?.FULLNAME.replace(".", " ")}</C.TextName>
    </C.Container>
  );
};

export default Initialpage;
