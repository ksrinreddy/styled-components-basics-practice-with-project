import { styled } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: calc(10 * 0.0625rem);
  margin-bottom: calc(40 * 0.0625rem);

  @media screen and (min-width: ${({ theme }) => theme.screens.mobile}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
