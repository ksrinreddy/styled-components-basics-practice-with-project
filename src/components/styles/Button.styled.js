import { styled } from "styled-components";

export const Button = styled.button`
  /* background: ${({ theme }) => theme.colors.button}; */
  padding: 0.7rem 2rem;
  border: none;
  border-radius: 3rem;
  box-shadow: 0 0 0.7rem rgba(#000, 0.15);
  font-size: 1rem;
  font-weight: 700;
  background: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    transform: scale(0.98);
    cursor: pointer;
    transition: all 300ms;
  }
`;
