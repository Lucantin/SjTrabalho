import React from "react";
import * as S from "./styles";
import { InputText } from "../../components/inputText";
import { ButtonGeneral } from "../../components/button";

const Contact = () => {
  return (
    <S.Container>
      <S.Title>Para entrar em contato deixe seus dados</S.Title>
      <S.SubTitle>Nome</S.SubTitle>
      <InputText />
      <S.SubTitle>E-mail</S.SubTitle>
      <InputText />
      <S.SubTitle>Endereço</S.SubTitle>
      <InputText />
      <S.SubTitle>Telefone</S.SubTitle>
      <InputText />
      <ButtonGeneral />
    </S.Container>
  );
};

export default Contact;
