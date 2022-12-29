import Signin from "../Pages/Login/Signin";
import { useContext } from "react";
import { AuthContext } from "../Contexts/Auth";
import SignUp from "../Pages/Login/SignUp";
import { toast } from "react-toastify";

interface SecurityElementChildren {
  children: JSX.Element;
}

const SecurityElements = ({ children }: SecurityElementChildren) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Signin />;
  }

  if (auth.message === "Primeiro Login") {
    toast.info(
      "1° Login, verifique a senha enviada para o seu e-mail para que seja feita a redefinição."
    );
    return <SignUp />;
  }

  return children;
};

export default SecurityElements;
