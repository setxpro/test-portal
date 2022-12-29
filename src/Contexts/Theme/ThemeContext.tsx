import React, { createContext } from "react";
import usePersistedState from "./../../Hooks/usePersistedStateTheme";
import { light } from "./../../Styles/theme/light";
import { DefaultTheme } from "styled-components";
import { dark } from "./../../Styles/theme/dark";

interface Props {
  children: React.ReactNode;
}

type ThemeProps = {
  theme: DefaultTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeProps);

const GetThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => setTheme(theme.title === "light" ? dark : light);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default GetThemeProvider;
