import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 3em;
  background-color: #222;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Item = styled.li`
  align-items: center;
`;

export const DirectLink = styled.p`
  font-size: 30px;
  color: #fff;
  text-shadow: 0 0 7px #c32aff, 0 0 10px #c32aff, 0 0 21px #c32aff,
    0 0 42px #c32aff;
  text-decoration: none;
`;
