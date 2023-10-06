import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const Button = styled.button`
  width: 86px;
  height: 30px;
  float: left;
  margin-left: 20px;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: ${myTheme.colors.blue.light};
  color: ${myTheme.colors.white};
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
