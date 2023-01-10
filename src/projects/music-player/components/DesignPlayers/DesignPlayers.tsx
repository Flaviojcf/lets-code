import {
  Container,
  Content,
  TitleContent,
  PlayerOptionsContent,
  RangerContent,
  TimeContent,
  DoubleContent,
} from "./styles";

interface DesignPlayer {
  isPlayerOnScreen:boolean;
}

export function DesignPlayers({isPlayerOnScreen}:DesignPlayer) {

  return (
    <Container isPlayerOnScreen={isPlayerOnScreen}>
      <Content isMobile={true}>
        <TitleContent isMobile={true}>
          <img src="/assets/music-player/images/has-logo-mobile.png" />
          <div>
            <h1>Acorda Devinho</h1>
            <p>Banda Rocketseat</p>
          </div>
        </TitleContent>
        <PlayerOptionsContent isMobile={true}>
          <img id="back" src="/assets/music-player/images/play-back.png" />
          <img src="/assets/music-player/images/play.png" />
          <img
            id="forward"
            src="/assets/music-player/images/play-forward.png"
          />
        </PlayerOptionsContent>
        <RangerContent>
          <input type="range" disabled value={85} max={100} />
        </RangerContent>
        <TimeContent>
          <p>03:20</p>
          <p>00:12</p>
        </TimeContent>
      </Content>

      <DoubleContent>
        <Content isPlaying={true}>
          <TitleContent>
            <img src="/assets/music-player/images/has-logo-mobile.png" />
            <div>
              <h1>Acorda Devinho</h1>
              <p>Banda Rocketseat</p>
            </div>
          </TitleContent>
          <PlayerOptionsContent>
            <img id="back" src="/assets/music-player/images/play-back.png" />
            <img src="/assets/music-player/images/play.png" />
            <img
              id="forward"
              src="/assets/music-player/images/play-forward.png"
            />
          </PlayerOptionsContent>
          <RangerContent>
            <input type="range" disabled value={85} max={100} />
          </RangerContent>
          <TimeContent>
            <p>03:20</p>
            <p>00:12</p>
          </TimeContent>
        </Content>
        <Content isPlaying={false}>
          <TitleContent>
            <img src="/assets/music-player/images/has-logo-mobile.png" />
            <div>
              <h1>Acorda Devinho</h1>
              <p>Banda Rocketseat</p>
            </div>
          </TitleContent>
          <PlayerOptionsContent>
            <img id="back" src="/assets/music-player/images/play-back.png" />
            <img src="/assets/music-player/images/play.png" />
            <img
              id="forward"
              src="/assets/music-player/images/play-forward.png"
            />
          </PlayerOptionsContent>
        </Content>
      </DoubleContent>
    </Container>
  );
}
