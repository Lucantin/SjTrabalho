import React from "react";
import * as S from "./styles";
import { InputText } from "../../components/inputText";
import { ButtonGeneral } from "../../components/button";

const Contact = () => {
  return (
    <S.Container>
      <S.Title>Nome</S.Title>
      <InputText />
      <S.Title>E-mail</S.Title>
      <InputText />
      <S.Title>Endereço</S.Title>
      <InputText />
      <S.Title>Telefone</S.Title>
      <InputText />
      <ButtonGeneral />
    </S.Container>
  );
};

export default Contact;
