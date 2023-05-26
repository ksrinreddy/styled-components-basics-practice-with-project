import { styled } from "styled-components";

export const Container = styled.div`
  width: 90vw;
  max-width: 64rem;
  margin-inline: auto;
  padding-block: ${({ ptb }) => ptb};

  display: grid;
  row-gap: 2rem;
`;
