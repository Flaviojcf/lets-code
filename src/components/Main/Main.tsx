import { Link } from "react-router-dom";
import {
  ChallengeContainer,
  ChallengeImageContainer,
  Container,
  FigmaContainer,
  FigmaTextContainer,
  FolderFigmaContainer,
  InstructionsContainer,
  TextContainer,
} from "./styles";

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
      <Link to="/challenges/week01">
        <ChallengeImageContainer>
          <img src="/Challenge-01.webp" />
        </ChallengeImageContainer>
      </Link>
      <InstructionsContainer>
        <ChallengeContainer>
          <div>Instruções</div>
          <h1>Desafio #01 - um player de música</h1>
          <p>
            Desenvolva o player conforme especificado utilizando as tecnologias
            da sua preferência. Você pode adicionar outros detalhes, como
            animações.
          </p>
        </ChallengeContainer>
        <FigmaContainer
          href={
            "https://www.figma.com/file/CFh7PW6dxBMwf4lQM3Eeot/boraCodar-Desafio-1-Copy?fuid=1032418892003585096"
          }
          target="_blank"
        >
          <FolderFigmaContainer>
            <img src="/folder.svg" />
          </FolderFigmaContainer>
          <FigmaTextContainer>
            <h1>Material complementar</h1>
            <p>
              Acesse o material complementar, arquivo do Figma e informações
              sobre os assets.
            </p>
          </FigmaTextContainer>
          <img src="/arrow-figma.svg" />
        </FigmaContainer>
      </InstructionsContainer>
    </Container>
  );
}
