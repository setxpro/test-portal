import { useState, createContext, ReactNode } from "react";

interface Props {
  openDropdownNotify: boolean;
  wrapperDropdownNotify: () => void;
  setOpenDropdownNotify: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropdownNotifyContext = createContext({} as Props);

const DropdownNotifyProvider = ({ children }: { children: ReactNode }) => {
  const [openDropdownNotify, setOpenDropdownNotify] = useState(false);
  const wrapperDropdownNotify = () =>
    setOpenDropdownNotify(!openDropdownNotify);

  return (
    <DropdownNotifyContext.Provider
      value={{
        openDropdownNotify,
        wrapperDropdownNotify,
        setOpenDropdownNotify,
      }}
    >
      {children}
    </DropdownNotifyContext.Provider>
  );
};

export default DropdownNotifyProvider;
