import styled, {css} from "styled-components";

type ImagePropsType = {
    pic: "desert" | "village";
};

export const Image = styled.img<ImagePropsType>`
  width: 280px;
  height: 170px;
  flex-shrink: 0;
  border-radius: 10px;
  /* background-image: url("https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1697414400&Signature=hYfX8~buDCDA28nakOZ7oIR20W2zGULWqaCGf9pjQRQTiIqN2od~UTgU1LsHEaH5gUzcqM5sbOaiHSqbZhzRVYGZbbqSHzPercCqx4G0-F5vDUdvCnuvCO4ECScKxGbFdpIkHUSUYa0nKosHy1AGfsiL9OXznlBAm6WwGlB7lEke0LJ3QzqjSKIJGdwCt1B87-DVa7ZObJizwHIzOCsU9nFh0rR978GCCXVl9riH7QhhTjOt4Ld79EcgQiQ4jCKICyVanIg-MKBnxcI5kD8rigJsUtoOfIr5rTpaoFt7ro-z3DOdC5OANqusM9eYunK0hq5EL0wnZeNJN8yl~6I1dA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"); */
  background-repeat: no-repeat;
  margin: 10px 10px;
  background-size: cover;

  ${(props) =>
          props.pic === "desert" &&
          css<ImagePropsType>`
            background-image: url("https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1697414400&Signature=hYfX8~buDCDA28nakOZ7oIR20W2zGULWqaCGf9pjQRQTiIqN2od~UTgU1LsHEaH5gUzcqM5sbOaiHSqbZhzRVYGZbbqSHzPercCqx4G0-F5vDUdvCnuvCO4ECScKxGbFdpIkHUSUYa0nKosHy1AGfsiL9OXznlBAm6WwGlB7lEke0LJ3QzqjSKIJGdwCt1B87-DVa7ZObJizwHIzOCsU9nFh0rR978GCCXVl9riH7QhhTjOt4Ld79EcgQiQ4jCKICyVanIg-MKBnxcI5kD8rigJsUtoOfIr5rTpaoFt7ro-z3DOdC5OANqusM9eYunK0hq5EL0wnZeNJN8yl~6I1dA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4");
          `}

  //todo: поменять на src
  
  ${(props) =>
          props.pic === "village" &&
          css<ImagePropsType>`
            background-image: url("https://sun9-80.userapi.com/impg/7fjQcFqHmWpKRZll8vTdFdek6gpnw7aeWo8O9A/2qNtWdp5oAQ.jpg?size=1440x1920&quality=96&sign=23d04c05f15117ca9c28f7351c77651f&type=album");
          `}
`;
