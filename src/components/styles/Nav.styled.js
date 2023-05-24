import { styled } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;
