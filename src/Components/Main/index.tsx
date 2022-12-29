import React from "react";
import { useDropNotify } from "../../Hooks/useDropNotify";
import * as C from "./styles";

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  const { setOpenDropdownNotify } = useDropNotify();
  return (
    <C.Container onClick={() => setOpenDropdownNotify(false)}>
      <C.Content>{children}</C.Content>
    </C.Container>
  );
};

export default Main;
