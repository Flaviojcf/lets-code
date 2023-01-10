import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home/Home";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles/global";

import { defaultTheme } from "./styles/theme/defaultTheme";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
