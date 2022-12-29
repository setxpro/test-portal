import styled from "styled-components";

import { GiSmartphone } from "react-icons/gi";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { RiMailLockLine } from "react-icons/ri";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  height: 100vh;
`;
export const Content = styled.div`
  background: ${(props) => props.theme.colors.header};
  height: 500px;
  width: 500px;
  max-width: 500px;
  margin: auto;
  border-radius: 1rem;
  box-shadow: 1px 1px 10px #5555;

  @media (max-width: 428px) {
    width: 350px;
    background: transparent;
  }
`;
export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .active-error {
    border: 1px solid red;
  }
`;
export const InputArea = styled.div`
  width: 90%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 10px #5555;
`;
export const Input = styled.input`
  width: 90%;
  font-size: 1.2em;
  outline: none;
  border: none;
  background: transparent;
  padding: 1rem 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;
export const ContentBtns = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  padding: 0.8rem 5rem;
  border-radius: 9px;
  border: none;
  font-size: 1.2em;
  background: #444ddd;
  color: #fff;
  font-weight: 500;
  cursor: pointer;

  transition: 1s;

  &:hover {
    opacity: 0.83;
  }
`;
export const PhoneIcon = styled(GiSmartphone)`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.8em;
`;
export const UserIcon = styled(BiUser)`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.8em;
`;
export const PassIcon = styled(AiOutlineLock)`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.8em;
`;
export const PassEmailIcon = styled(RiMailLockLine)`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.8em;
`;
