import styled from "styled-components";

import { AiOutlineCheck } from "react-icons/ai";

export const Container = styled.div`
  height: 100vh;
`;

export const ContentTop = styled.div`
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    height: 2px;
    width: 10px;
    background: ${(props) => props.theme.colors.text};
  }
`;
export const Title = styled.h1`
  border-bottom: 2px solid #053333;
  font-size: 2em;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
`;

export const ContentMiddleArea = styled.div`
  height: calc(100vh - 50px);
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ContentArea = styled.div`
  height: 40px;
  background: ${(props) => props.theme.colors.sidebar};
  border-radius: 1rem;

  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 1rem;

  span {
    width: 10px;
    height: 2px;
    background: #555;

    @media (max-width: 428px) {
      display: none;
    }
  }

  &:nth-child(9) {
    height: calc(100vh - (40px * 7) - 70px);
    display: flex;
    gap: 3rem;
  }

  @media (max-width: 428px) {
    &:nth-child(4) {
      height: 100px;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    &:nth-child(3) {
      height: 70px;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    &:nth-child(6) {
      height: 70px;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    &:nth-child(7) {
      height: 70px;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    &:nth-child(8) {
      height: 100px;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;

export const H3 = styled.h3`
  color: ${(props) => props.theme.colors.modalH3};
  font-weight: 400;
  font-size: 1.3em;

  @media (max-width: 428px) {
    white-space: nowrap;
  }
`;
export const H4 = styled.h4`
  color: ${(props) => props.theme.colors.text};
  font-weight: 400;
  font-size: 1.1em;
`;

export const FormArea = styled.div`
  div {
    background: transparent !important;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ContentForm = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;

  .area {
    transition: all 1s ease;
    width: 25px;
    height: 25px;
    border: 1px solid ${(props) => props.theme.colors.text};
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    input[type="radio"] {
      width: 25px;
      height: 25px;
      opacity: 0;
      position: absolute;
    }
  }

  > div {
    color: ${(props) => props.theme.colors.text};
  }
`;

export const CheckIcon = styled(AiOutlineCheck)`
  color: ${(props) => props.theme.colors.text};
  transition: all 1s ease;
  font-size: 2rem;
`;

export const ContentBtnArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 428px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

export const SendButton = styled.button`
  padding: 0.5rem 2rem;
  background: darkcyan;
  border: none;
  border-radius: 8px;

  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.83;
  }
`;
export const GobackButton = styled.button`
  padding: 0.5rem 2rem;
  background: darkgray;
  border: none;
  border-radius: 8px;

  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.83;
  }
`;
