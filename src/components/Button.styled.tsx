import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

type ButtonPropsType = {
  color?: string;
  textColor?: string;
};

export const Button = styled.button<ButtonPropsType>`
  border: 0;
  width: 86px;
  height: 30px;
  float: left;
  margin-left: 20px;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: ${(props) => props.color || "#4E71FE"};
  color: ${(props) => props.textColor || "#ffff"};
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
`;

export const BoldButton = styled(Button)`
  background-color: transparent;
  border: 2px solid ${myTheme.colors.blue.light};
  color: ${myTheme.colors.blue.light};
  margin-left: 12px;
`;
