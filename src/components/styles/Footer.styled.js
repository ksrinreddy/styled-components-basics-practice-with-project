import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 3rem 0;

  img {
    margin-inline: auto;

    @media screen and (min-width: ${({ theme }) => theme.screens.medium}) {
      margin-inline: 0;
    }
  }

  p {
    text-align: center;

    @media screen and (min-width: ${({ theme }) => theme.screens.medium}) {
      text-align: right;
    }
  }
`;

export const Links = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 2.5rem;

  ul {
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    text-align: center;

    @media screen and (min-width: ${({ theme }) => theme.screens.medium}) {
      text-align: left;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.medium}) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    column-gap: 2rem;
  }
`;
