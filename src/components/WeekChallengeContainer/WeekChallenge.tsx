import { Link } from "react-router-dom";
import {
  ChallengeContainer,
  ChallengeImageContainer,
  Container,
  FigmaContainer,
  FigmaTextContainer,
  FolderFigmaContainer,
  InstructionsContainer,
} from "./styles";

interface WeekChallengeProps {
  imgChallenge: string;
  linkChallenge: string;
  titleChallenge:string;
  descriptionChallenge: string;
  figmaLink:string;
}

export function WeekChallengeContainer({linkChallenge,imgChallenge,titleChallenge,descriptionChallenge,figmaLink}:WeekChallengeProps) {
  return (
    <Container>
      <ChallengeImageContainer>
        <Link to={linkChallenge}>
          <img src={imgChallenge} />
        </Link>
      </ChallengeImageContainer>

      <InstructionsContainer>
        <ChallengeContainer>
          <div>Instruções</div>
          <h1>{titleChallenge}</h1>
          <p>
           {descriptionChallenge}
          </p>
        </ChallengeContainer>
        <FigmaContainer
          href={
            figmaLink
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
