import React, { useState } from "react";

import * as C from "./styles";
import TitleLogin from "./../../../Components/TitleLogin/index";
import { Link, useNavigate } from "react-router-dom";
import { useApi } from "./../../../Hooks/useApi";
import { toast } from "react-toastify";

const ForgetPass: React.FC = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [errorUser, setErrorUser] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);

  const submitForgetPass = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    let number = phoneNumber;

    try {
      if (!user) {
        setErrorUser(true);
        return toast.error("Por favor, insira ao menos um usuário!");
      }
      if (!number) {
        setErrorPhone(true);
        return toast.error("Por favor, insira ao menos um numero de telefone!");
      }

      if (number && user) {
        const data = await api.forgetPass(user, number);

        if (data[0].MESSAGE === "Usuario Inexistente") {
          setErrorUser(true);
          return toast.error("Usuário não encontrado!");
        }

        if (data[0].MESSAGE === "Telefone Invalido") {
          setErrorPhone(true);
          return toast.error("Numero de telefone inválido!");
        }

        setErrorUser(false);

        setErrorPhone(false);

        if (data[0].STATUS === "true") {
          navigate("/signUp");
        }

        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <C.Container>
      <TitleLogin title="Esqueci minha senha" />
      <C.Content>
        <C.Form>
          <C.InputArea className={errorUser ? "active-error" : ""}>
            <C.UserIcon />
            <C.Input
              type="text"
              name="user"
              placeholder="Usuários"
              value={user}
              onChange={(e) => [setUser(e.target.value), setErrorUser(false)]}
            />
          </C.InputArea>
          <C.InputArea className={errorPhone ? "active-error" : ""}>
            <C.PhoneIcon />
            <C.Input
              type="text"
              name="phone"
              placeholder="Celular"
              value={phoneNumber}
              onChange={(e) => [
                setPhoneNumber(e.target.value),
                setErrorPhone(false),
              ]}
            />
          </C.InputArea>
          <C.ContentBtns>
            <C.Button onClick={submitForgetPass}>Enviar</C.Button>
          </C.ContentBtns>
        </C.Form>
        <C.ContentBtns>
          <Link to="/login">Lembrei minha senha</Link>
        </C.ContentBtns>
      </C.Content>
    </C.Container>
  );
};

export default ForgetPass;
