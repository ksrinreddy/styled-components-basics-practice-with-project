import React from "react";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { StyledContainer } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global.styled";

// theme can be placed in seperate file if its large.
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "003333",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <StyledContainer>Container</StyledContainer>
      </>
    </ThemeProvider>
  );
};

export default App;
