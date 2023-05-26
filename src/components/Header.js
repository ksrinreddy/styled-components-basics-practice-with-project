import React from "react";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Grid, Info, StyledHeader } from "./styles/Header.styled";
import { Logo } from "./styles/Logo.styled";
import { Nav } from "./styles/Nav.styled";
import logo from "../images/logo.svg";
import { Image } from "./styles/Image.styled";
import heroImage from "../images/illustration-mockups.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={logo} alt="logo" />
          <Button>Try it Free</Button>
        </Nav>
        <Grid>
          <Info>
            <h1>Build the community your fans will love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get started for free
            </Button>
          </Info>
          <Image src={heroImage} alt="heroImage" />
        </Grid>
      </Container>
    </StyledHeader>
  );
};

export default Header;
