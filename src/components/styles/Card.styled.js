import styled from "styled-components";

export const StyledCard = styled.article`
  display: grid;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  padding: calc(40 * 0.0625rem);
  box-shadow: 0 0 0.625rem rgba(0 0 0 / 0.15);

  img {
    width: 80%;
    margin-inline: auto;

    /* @media screen and (min-width: ${({ theme }) => theme.screens.medium}) {
      grid-column: ${({ layout }) => layout || "0 / 1"};
    } */
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.medium}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
