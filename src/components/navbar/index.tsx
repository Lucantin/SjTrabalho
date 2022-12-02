import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Nav>
      <S.Container>
        <S.List>
          <S.Item>
            <Link to="/" style={{ textDecoration: "none" }}>
              <S.DirectLink>Home</S.DirectLink>
            </Link>
          </S.Item>
          <S.Item>
            <Link to="/aboutme" style={{ textDecoration: "none" }}>
              <S.DirectLink>Sobre</S.DirectLink>
            </Link>
          </S.Item>
          <S.Item>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <S.DirectLink>Contato</S.DirectLink>
            </Link>
          </S.Item>
        </S.List>
      </S.Container>
    </S.Nav>
  );
};
