import { WeekChallengeContainer } from "../WeekChallengeContainer/WeekChallenge";
import { Container, TextContainer } from "./styles";

export function Main() {
  return (
    <Container>
      <TextContainer>
        <h1>
          <strong>#boraCodar</strong> um desafio toda semana
        </h1>
        <p>
          e postar nas redes sociais com a hashtag <strong>#boraCodar</strong>.
        </p>
      </TextContainer>
      <WeekChallengeContainer
        linkChallenge="/challenges/week01"
        imgChallenge="/assets/music-player/images/Challenge-01.webp"
        titleChallenge="Desafio #01 - um player de música"
        descriptionChallenge=" Desenvolva o player conforme especificado utilizando as tecnologias
        da sua preferência. Você pode adicionar outros detalhes, como
        animações."
        figmaLink="https://www.figma.com/file/CFh7PW6dxBMwf4lQM3Eeot/boraCodar-Desafio-1-Copy?fuid=1032418892003585096"
      />
      <WeekChallengeContainer
        linkChallenge="/challenges/week02"
        imgChallenge="/assets/card-product/images/Challenge-02.webp"
        titleChallenge="Desafio #02 - um card de produto"
        descriptionChallenge=" Desenvolva o card de produto conforme especificado utilizando as tecnologias da sua preferência. O arquivo do Figma contém um protótipo e o link para baixar o arquivo .gif a ser utilizado."
        figmaLink="https://www.figma.com/file/Sk04cAowKXOWVO3vlaNqLu/23boraCodar-Desafio-2/duplicate"
      />
    </Container>
  );
}
