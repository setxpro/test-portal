import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 127px);
  max-height: calc(100vh - 127px);
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;
export const TextName = styled.h1`
  font-size: 5em;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;

  text-transform: capitalize;
`;
export const TextMessageWelcome = styled.h4`
  font-size: 2em;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
`;
