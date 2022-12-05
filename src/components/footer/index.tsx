import React from "react";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <S.List>
        <S.Item>
          <S.DirectLink>Lucca Bento</S.DirectLink>
        </S.Item>
        <S.Item>
          <S.DirectLink>RA: 821134243</S.DirectLink>
        </S.Item>
        <S.Item>
          <S.DirectLink>Sistemas para internet</S.DirectLink>
        </S.Item>
      </S.List>
    </S.Container>
  );
};
