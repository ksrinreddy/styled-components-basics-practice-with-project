import { styled } from "styled-components";

export const StyledHeader = styled.header`
  //   background: #ebfbff;
  //   background: ${(props) => props.bg};
  background: ${({ theme }) => theme.colors.header};
  padding: 2.5rem 0;
`;
