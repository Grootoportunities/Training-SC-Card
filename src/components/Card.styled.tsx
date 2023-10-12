import styled from "styled-components";

type CardPropsType = {
    color?: string;
};

export const Card = styled.article<CardPropsType>`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: ${(props) => props.color || "#FFF"};
  box-shadow: 0 4px 20px 5px;

`;