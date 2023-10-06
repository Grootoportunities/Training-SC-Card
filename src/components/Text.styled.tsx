import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const Text = styled.div`
  margin: 20px;
  width: 260px;
  height: 40px;
  color: ${myTheme.colors.black.light};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`;
