import React, { useState, useContext, useEffect, useCallback } from "react";
import { AuthContext } from "../../../Contexts/Auth";
import { useNavigate } from "react-router-dom";

import * as C from "./styles";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Signin: React.FC = () => {
  const { signIn, message, setMessage } = useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const [errorUser, setErrorUser] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!user) {
      setErrorUser(true);
      return toast.error("Por favor, insira ao menos um login!");
    }

    if (!pass) {
      setErrorPass(true);
      return toast.error("Por favor, insira ao menos uma senha!");
    }

    if (user && pass) {
      signIn(user, pass);
      setErrorUser(false);
      setErrorPass(false);
      navigate("/");
    }
  };
  const returnedMessage = useCallback(() => {
    if (message === "Usuario Inexistente") {
      setErrorUser(true);
      return toast.error("Usuário não encontrado!");
    }

    if (message === "Senha Invalida") {
      setErrorPass(true);
      return toast.error("Senha incorreta!");
    }
  }, [message]);

  useEffect(() => {
    returnedMessage();
  }, [returnedMessage]);

  return (
    <C.Container>
      <C.ContainerLeft>
        <h1>BAGAGGIO</h1>
        <h4>Leve sempre com você.</h4>
      </C.ContainerLeft>
      <C.ContainerRight>
        <C.ContentFormTop>
          <img
            src="https://blog.bagaggio.com.br/wp-content/uploads/2022/06/miniatura-logo.png"
            alt="ico"
          />
        </C.ContentFormTop>
        <C.ContentMessageError>
          {/* <p>{message && `${message}!`}</p> */}
        </C.ContentMessageError>
        <C.ContentFormMiddle>
          <form autoComplete="off">
            <div className={!errorUser ? "area-input" : "error"}>
              <C.UserIcon />
              <input
                autoComplete="false"
                type="text"
                name="login"
                placeholder="Usuário"
                value={user}
                onChange={(e) => [
                  setUser(e.target.value),
                  setMessage(""),
                  setErrorUser(false),
                ]}
              />
            </div>
            <div className={!errorPass ? "area-input" : "error"}>
              <C.PassIcon />
              <input
                autoComplete="false"
                type="password"
                name="senha"
                placeholder="Senha"
                value={pass}
                onChange={(e) => [
                  setPass(e.target.value),
                  setMessage(""),
                  setErrorPass(false),
                ]}
              />
            </div>
          </form>
          <C.ContentButton>
            <button onClick={handleSubmit}>Fazer Login</button>
            <Link to="/forget-pass">Esqueci minha senha</Link>
          </C.ContentButton>
        </C.ContentFormMiddle>
        <C.ContentFormBottom>
          © Copyright <a href="https://www.bagaggio.com.br">BAGAGGIO</a> 2022
        </C.ContentFormBottom>
      </C.ContainerRight>
    </C.Container>
  );
};

export default Signin;
