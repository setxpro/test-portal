import { useContext } from "react";
import { SidebarContext } from "../Contexts/SidebarContext";

const useSidebar = () => {
  const sidebar = useContext(SidebarContext);
  return sidebar;
};

export default useSidebar;
