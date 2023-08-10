import { styled } from "styled-components";

export const Container = styled.button`
  width: 150px;
  padding: 0.75rem 1rem;
  background: var(--emerald-600);
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid var(--emerald-600);
  outline: 0;
  color: var(--zinc-200);
  transition: all 0.25s;

  cursor: pointer;

  &:hover {
    color: var(--emerald-600);
    background: transparent;
  }
`;
