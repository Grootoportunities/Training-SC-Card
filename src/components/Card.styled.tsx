import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

type CardPropsType = {
  color?: string;
};

export const Card = styled.div<CardPropsType>`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: ${(props) => props.color || "#FFF"};
  box-shadow: 0px 4px 20px 5px;
`;
