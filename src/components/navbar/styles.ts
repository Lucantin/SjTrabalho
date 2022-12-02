import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #222;
  padding: 1em;
`;

export const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li`
  margin-right: 5em;
  align-items: center;
`;

export const DirectLink = styled.p`
  font-size: 30px;
  color: #fff;
  text-shadow: 0 0 7px #c32aff, 0 0 10px #c32aff, 0 0 21px #c32aff,
    0 0 42px #c32aff;
  text-decoration: none;

  &:hover {
    text-shadow: 0 0 7px #c32aff, 0 0 10px #c32aff, 0 0 21px #c32aff,
      0 0 42px #c32aff, 0 0 82px #fff, 0 0 92px #fff, 0 0 102px #fff,
      0 0 151px #fff;
  }
`;
