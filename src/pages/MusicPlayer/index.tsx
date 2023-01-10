import { DesignPlayers } from "../../projects/music-player/components/DesignPlayers/DesignPlayers";
import { Player } from "../../projects/music-player/components/FunctionalPlayer/Player";
import { Container, TextContainer } from "./styles";
import { useState } from "react";

export function MusicPlayer() {
  const [isPlayerOnScreen, setIsPlayerOnScreen] = useState(false);

  return (
    <Container>
      <TextContainer  isPlayerOnScreen={isPlayerOnScreen}>
        <h1 onClick={() => setIsPlayerOnScreen(!isPlayerOnScreen)}>
          {!isPlayerOnScreen
            ? "Mudar para versão funcional"
            : "Mudar para versão de design"}
        </h1>
      </TextContainer>
      <DesignPlayers isPlayerOnScreen={isPlayerOnScreen}/>
      <Player isPlayerOnScreen={isPlayerOnScreen}/>
    </Container>
  );
}
