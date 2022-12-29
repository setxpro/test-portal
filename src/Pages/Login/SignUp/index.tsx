import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleLogin from "../../../Components/TitleLogin";
import { useApi } from "../../../Hooks/useApi";

import * as C from "./styles";
import { toast } from "react-toastify";

const SignUp: React.FC = () => {
  const api = useApi();
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [senhaEmail, setPassEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passMetch, setPassMetch] = useState("");

  const [errorUser, setErrorUser] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorPassEmail, setErrorPassEmail] = useState(false);
  const [errorPassMatch, setErrorPassMatch] = useState(false);

  const submitUpdate = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    let newPass = pass;

    if (!user) {
      setErrorUser(true);
      return toast.error("Por favor, insira o seu login.");
    }
    if (!senhaEmail) {
      setErrorPassEmail(true);
      return toast.error(
        "Por favor, insira a senha enviada para o seu e-mail."
      );
    }
    if (!newPass) {
      setErrorPass(true);
      return toast.error("Por favor, insira ao menos uma senha!");
    }
    if (!passMetch) {
      setErrorPassMatch(true);
      return toast.error("Por favor, repita a nova senha!");
    }

    if (newPass !== passMetch) {
      setErrorPassMatch(true);
      return toast.error("As senhas não são iguais.");
    }
    if (newPass.length < 5) {
      setErrorPass(true);
      setErrorPassMatch(true);
      return toast.error(
        "Por motivos de segurança a senha deve conter ao menos 8 caracteres!"
      );
    }

    if (user && senhaEmail && pass && passMetch) {
      const data = await api.signUp(user, senhaEmail, newPass);

      if (data[0].MESSAGE === "Usuario Inexistente") {
        setErrorUser(true);
        return toast.error("Usuário não encontrado!");
      }
      if (data[0].MESSAGE === "Senha Inavalida") {
        setErrorPassEmail(true);
        return toast.error("A senha do e-mail é inválida!");
      }
      if (data[0].STATUS === "false") {
        return toast.error("Não foi possível atualizar a sua senha!");
      }
      if (data[0].STATUS === "true") {
        toast.success("Usuário Atualizado com sucesso!");
        navigate("/login");
        return data;
      }
    }
  };

  return (
    <C.Container>
      <TitleLogin title="Atualização de Cadastro" />
      <C.Content>
        <C.Form>
          <C.InputArea className={errorUser ? "active-error" : ""}>
            <C.UserIcon />
            <C.Input
              type="text"
              name="user"
              placeholder="Usuário"
              value={user}
              onChange={(e) => [setUser(e.target.value), setErrorUser(false)]}
            />
          </C.InputArea>

          <C.InputArea className={errorPassEmail ? "active-error" : ""}>
            <C.PassEmailIcon />
            <C.Input
              type="password"
              name="pass"
              placeholder="Senha enviada para o e-mail!"
              value={senhaEmail}
              onChange={(e) => [
                setPassEmail(e.target.value),
                setErrorPassEmail(false),
              ]}
            />
          </C.InputArea>

          <C.InputArea className={errorPass ? "active-error" : ""}>
            <C.PassIcon />
            <C.Input
              type="password"
              name="pass"
              placeholder="Nova senha"
              value={pass}
              onChange={(e) => [setPass(e.target.value), setErrorPass(false)]}
            />
          </C.InputArea>

          <C.InputArea className={errorPassMatch ? "active-error" : ""}>
            <C.PassIcon />
            <C.Input
              type="password"
              name="pass"
              placeholder="Repetir nova senha"
              value={passMetch}
              onChange={(e) => [
                setPassMetch(e.target.value),
                setErrorPassMatch(false),
              ]}
            />
          </C.InputArea>

          <C.ContentBtns>
            <C.Button onClick={submitUpdate}>Atualizar</C.Button>
          </C.ContentBtns>
        </C.Form>
      </C.Content>
    </C.Container>
  );
};

export default SignUp;
