import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const Card = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: ${myTheme.colors.back};
  box-shadow: 0px 4px 20px 5px;
`;
