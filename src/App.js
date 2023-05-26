import React from "react";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global.styled";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

// theme can be placed in seperate file if its large.
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  screens: {
    mobile: "26.563rem",
    medium: "48rem",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container ptb="3rem">
          {content.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
