import React from "react";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global.styled";

// theme can be placed in seperate file if its large.
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "003333",
    button: "#fff",
  },
  mobile: "26.563rem",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>Content</Container>
      </>
    </ThemeProvider>
  );
};

export default App;
