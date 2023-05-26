import styled from "styled-components";

export const StyledCard = styled.article`
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: calc(40 * 0.0625rem);
  box-shadow: 0 0 0.625rem rgba(0 0 0 / 0.15);
  border-radius: 0.625rem;

  img {
    @media screen and (min-width: ${({ theme }) => theme.screens.medium}) {
      width: 50%;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.screens.medium}) {
    flex-direction: ${({ layout }) => layout || "row"};
    align-items: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
