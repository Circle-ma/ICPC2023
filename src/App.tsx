import styled from "@emotion/styled";
import { createTheme, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import Header from "./Header";
import Contest from "./Contestcomponents/Contest";
import Footer from "./Footer";
import Home from "./Homecomponents/Home";

// const Bg = styled.div`
//   background-image: url(/icpc-bg.png);
//   background-size: cover;
//   background-position: center center;
// `;

const font = createTheme({
  typography: {
    fontFamily: ["B612 Mono"].join(","),
  },
});

const routerConfig = [
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/Contest",
    element: (
      <>
        <Contest />
      </>
    ),
  },
];

function App() {
  const element = useRoutes(routerConfig);
  return (
    <>
      {/* <Bg> */}
      <ThemeProvider theme={font}>
        <Header />

        {element}
        <Footer />
      </ThemeProvider>

      {/* </Bg> */}
    </>
  );
}

export default App;
