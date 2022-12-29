import styled from "styled-components";

export const Container = styled.div`
  height: 70px;

  display: flex;
  align-items: center;

  padding: 0 1rem;
`;
export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
`;
