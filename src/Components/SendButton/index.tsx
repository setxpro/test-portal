import React from "react";

import * as C from "./styles";

interface Props {
  text: string;
  onClick: () => void;
}
const SendButton: React.FC<Props> = ({ text, onClick }) => {
  return <C.Button onClick={onClick}>{text}</C.Button>;
};

export default SendButton;
