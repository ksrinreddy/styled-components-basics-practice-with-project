import React from "react";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { StyledHeader } from "./styles/Header.styled";
import { Logo } from "./styles/Logo.styled";
import { Nav } from "./styles/Nav.styled";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt="logo" />
          <Button>Try it Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
};

export default Header;
