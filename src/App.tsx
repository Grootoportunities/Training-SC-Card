import React from "react";
import "./App.css";
import styled from "styled-components";
import { myTheme } from "./styles/Theme.styled";
import { Card } from "./components/Card.styled";
import { Image } from "./components/Image.styled";
import { Headline } from "./components/Headline.styled";
import { Text } from "./components/Text.styled";
import { BoldButton, Button } from "./components/Button.styled";

function App() {
  return (
    <div className="App">
      <Box>
        <Card>
          <Image />
          <Headline>Headline</Headline>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
          <Button>See More</Button>
          <BoldButton>Save</BoldButton>
        </Card>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
