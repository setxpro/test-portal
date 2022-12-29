import { useContext } from "react";
import { ThemeContext } from "./../Contexts/Theme/ThemeContext";
export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
