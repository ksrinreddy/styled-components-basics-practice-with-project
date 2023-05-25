import { styled } from "styled-components";

export const Button = styled.button`
  padding: 0.6rem 2rem;
  border: none;
  border-radius: 3rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.15);
  font-size: 1rem;
  font-weight: 700;
  background: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    cursor: pointer;
    transition: all 300ms;
  }
`;
