import { styled } from "styled-components";

export const StyledHeader = styled.header`
  //   background: #ebfbff;
  //   background: ${(props) => props.bg};
  background: ${({ bg }) => bg};
  padding: 2.5rem 0;

  h1 {
    // color: red;
  }

  &:hover {
    background: black;
  }
`;
