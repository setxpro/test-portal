import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 127px);
  max-height: calc(100vh - 127px);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: hidden;
`;

export const ContentAreaTop = styled.div`
  background: transparent;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
`;
export const TitleTop = styled.h1`
  transition: all 1s ease;
  color: ${(props) => props.theme.colors.text};
`;
export const TitleTopCenter = styled.h1`
  transition: all 1s ease;
  color: ${(props) => props.theme.colors.text};
`;

export const AreaContentMiddle = styled.div``;

export const ButtonSendAll = styled.button`
  padding: 0.4rem 3rem;
  margin: 0.5rem 0;

  border-radius: 5px;
  border: none;
  background: #444ddd;
  color: #ffff;
  font-size: 1em;

  transition: 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 0.83;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    height: 5px;
    width: 15px;
    transition: all 1s ease;
    background: ${(props) => props.theme.colors.text};
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  gap: 1rem;

  button {
    border-radius: 0.3rem;
    width: auto;
    padding: 3px 4px;
    border: none;
    background: #444ddd;
    color: #ffff;
    font-size: 1em;

    transition: 0.5s;
    cursor: pointer;

    &:hover {
      opacity: 0.83;
    }
  }
`;
export const ContentSendAll = styled.div`
  @media (max-width: 428px) {
    display: none;
  }
`;

export const ContentBottom = styled.div`
  display: none;

  @media (max-width: 428px) {
    display: flex;
    justify-content: end;
  }
`;
