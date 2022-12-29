import * as C from "./styles";

const TitleLogin = ({ title }: { title: string }) => {
  return (
    <C.Container>
      <C.H1>{title}</C.H1>
    </C.Container>
  );
};

export default TitleLogin;
