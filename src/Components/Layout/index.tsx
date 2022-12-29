import Header from "../Header";
import Main from "../Main";
import Sidebar from "../Sidebar";
import * as C from "./styles";
import { ReactNode } from "react";
import DropdownNotifyProvider from "../../Contexts/DropdownNotify";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <C.Container>
      <DropdownNotifyProvider>
        <Sidebar />
        <Header />
        <Main children={children} />
      </DropdownNotifyProvider>
    </C.Container>
  );
};

export default Layout;
