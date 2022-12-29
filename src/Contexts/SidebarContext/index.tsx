import { createContext, ReactNode, useState } from "react";

interface Props {
  openSidebar: boolean;
  wrapperSidebar: () => void;
}

export const SidebarContext = createContext({} as Props);

const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const wrapperSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <SidebarContext.Provider value={{ openSidebar, wrapperSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
