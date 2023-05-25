import { styled } from "styled-components";

export const StyledHeader = styled.header`
  //   background: #ebfbff;
  //   background: ${(props) => props.bg};
  background: ${({ theme }) => theme.colors.header};
  padding: 2.5rem 0;
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  row-gap: 2rem;

  & Button {
    justify-self: center;

    @media screen and (min-width: ${({ theme }) => theme.screens.medium}) {
      justify-self: start;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.medium}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

export const Info = styled.div`
  display: grid;
  row-gap: 1rem;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.screens.medium}) {
    text-align: left;
  }
`;
