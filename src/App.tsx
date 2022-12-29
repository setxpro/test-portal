import { ThemeProvider } from "styled-components";
import Template from "./Components/Template";
import { useTheme } from "./Hooks/useTheme";
import RoutesApp from "./Routes";
import { ToastContainer } from "react-toastify";
import RenderPageProvider from "./Contexts/RenderPage";

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <RenderPageProvider>
        <Template>
          <RoutesApp />
        </Template>
        <ToastContainer />
      </RenderPageProvider>
    </ThemeProvider>
  );
};

export default App;
