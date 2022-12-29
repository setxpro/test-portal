import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Contexts/Auth";
import GetThemeProvider from "./Contexts/Theme/ThemeContext";
import GlobalStyle from "./Styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";
import { GetTitlesProvider } from "./Contexts/GetTitles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GetTitlesProvider>
          <GetThemeProvider>
            <GlobalStyle />
            <App />
          </GetThemeProvider>
        </GetTitlesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
