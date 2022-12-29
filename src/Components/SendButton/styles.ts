import styled from "styled-components";

export const Button = styled.button`
  background: darkcyan;
  padding: 0.5rem;
  font-size: 1em;
  color: #ffff;

  border: none;
  border-radius: 8px;
  box-shadow: 2px 3px 10px #000;

  cursor: pointer;

  transition: 0.5s;

  &:hover {
    opacity: 0.83;
  }
`;
