import { useContext } from "react";
import { DropdownNotifyContext } from "../Contexts/DropdownNotify";

export const useDropNotify = () => {
  const notify = useContext(DropdownNotifyContext);
  return notify;
};
