import { createContext, ReactNode, useState } from "react";

// Guardar os valores de cada link para determinada dendenização

interface Props {
  getValue: (text: string) => void;
  infoNavigate: string;
}

export const RenderPageContext = createContext({} as Props);

const RenderPageProvider = ({ children }: { children: ReactNode }) => {
  const [infoNavigate, setInfoNabvigate] = useState("");

  function getValue(text: string) {
    return setInfoNabvigate(text);
  }

  return (
    <RenderPageContext.Provider value={{ infoNavigate, getValue }}>
      {children}
    </RenderPageContext.Provider>
  );
};

export default RenderPageProvider;
