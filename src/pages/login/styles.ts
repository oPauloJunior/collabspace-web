import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: var(--zinc-900);
`;

export const Form = styled.form`
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  width: 320px;

  h1 {
    color: var(--zinc-100);
    font-weight: 600;
    font-size: 3rem;
    margin-bottom: 2.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }
`;

export const Label = styled.label`
  color: var(--zinc-100);
  font-weight: 300;
`;

export const Input = styled.input`
  height: 48px;
  background-color: var(--zinc-800);
  color: var(--zinc-100);
  font-size: 1rem;
  padding: 1.25rem 1rem;
  border-radius: 4px;
  border: 0;
  outline: 0;

  ::placeholder {
    color: var(--zinc-500);
  }
`;

export const Button = styled.button`
  height: 48px;
  background-color: var(--emerald-600);
  color: var(--zinc-100);
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 1rem;
  border: 0;
  outline: 0;
  border-radius: 4px;
  transition: all 0.25s;

  cursor: pointer;

  &:hover {
    background: var(--emerald-800);
  }
`;
