import React from "react";

import { Container } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default Loading;

// Midware 13/01
// Caxias do sul - Correio 06/01
//
