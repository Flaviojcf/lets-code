import { ButtonsContainer } from "./components/ButtonsContainer";
import {
  Buttons,
  ButtonsForTest,
  ButtonsStates,
  ButtonsStatesContainer,
  ButtonStyles,
  Container,
  ContentButtons,
  CursorImage,
  TestButtons,
  TextButtons,
  TextTestButtons,
  TypesButtons,
  TypesTitlesButtons,
} from "./styles";

export function ButtonsCursors() {
  const defaultButton = {
    background: ["#8257E5", "#3C3748", "#0B0911"],
    border: "none",
    name: ["DEFAULT PRIMARY", "DEFAULT SECONDARY", "DEFAULT TERTIARY"],
    disabled: false,
    loading: false,
    movable: false,
  };

  const hover = {
    background: ["#9674E5", "#6A617F", "#0B0911"],
    border: "none",
    name: ["HOVER PRIMARY", "HOVER SECONDARY", "HOVER TERTIARY"],
    disabled: false,
    loading: false,
    movable: false,
  };

  const focus = {
    background: ["#8257E5", "#3C3748", "#0B0911"],
    border: "#D9CDF7",
    name: ["FOCUS PRIMARY", "FOCUS SECONDARY", "FOCUS TERTIARY"],
    disabled: false,
    loading: false,
    movable: false,
  };

  const disabled = {
    background: ["#8257E5", "#3C3748", "#0B0911"],
    border: "none",
    name: ["DISABLED PRIMARY", "DISABLED SECONDARY", "DISABLED TERTIARY"],
    disabled: true,
    loading: false,
    movable: false,
  };

  const loading = {
    background: ["#8257E5", "#3C3748", "#0B0911"],
    border: "none",
    name: ["LOADING PRIMARY", "LOADING SECONDARY", "LOADING TERTIARY"],
    loading: true,
    disabled: false,
    movable: false,
  };

  const movable = {
    background: ["#8257E5", "#3C3748", "#0B0911"],
    border: "none",
    name: ["MOVABLE PRIMARY", "MOVABLE SECONDARY", "MOVABLE TERTIARY"],
    movable: true,
    disabled: false,
    loading: false,
  };

  return (
    <Container>
      <TypesButtons>
        <TextButtons>
          <h1>Tipos de botão</h1>
          <p>
            Dentro de um layout, botões servem para destacar ações importantes a
            serem tomadas. Acompanhe abaixo um exemplo de tipos e propriedades.
          </p>
        </TextButtons>
        <ContentButtons>
          <TypesTitlesButtons>
            <p>BOTÃO PRIMÁRIO</p>
            <p>BOTÃO SECUNDÁRIO</p>
            <p>BOTÃO TERCIÁRIO</p>
            <p>CURSOR</p>
          </TypesTitlesButtons>
          <Buttons>
            <ButtonsStates>
              <p>DEFAULT</p>
              <p>HOVER</p>
              <p>FOCUS</p>
              <p>DISABLED</p>
              <p>LOADING</p>
              <p>MOVABLE</p>
            </ButtonsStates>
            <ButtonsStatesContainer>
              <ButtonsContainer
                property={defaultButton}
                img="/assets/buttons-cursors/images/pointer.png"
              />
              <ButtonsContainer
                property={hover}
                img="/assets/buttons-cursors/images/pointer.png"
              />
              <ButtonsContainer
                property={focus}
                img="/assets/buttons-cursors/images/pointer.png"
              />
              <ButtonsContainer
                property={disabled}
                img="/assets/buttons-cursors/images/Frame7896.png"
              />
              <ButtonsContainer
                property={loading}
                img="/assets/buttons-cursors/images/busybutclickable.png"
              />
              <ButtonsContainer
                property={movable}
                img="/assets/buttons-cursors/images/move.png"
              />
            </ButtonsStatesContainer>
          </Buttons>
        </ContentButtons>
      </TypesButtons>

      <TestButtons>
        <TextTestButtons>
          <h1>Teste os botões</h1>
          <p>
            Interaja com os botões e observe a mudança de aparência e de
            cursores
          </p>
        </TextTestButtons>
        <ButtonsForTest>
          <button>INTERAJA COMIGO</button>
          <button>INTERAJA COMIGO</button>
          <button> <img src="/assets/buttons-cursors/images/vector.png" /> INTERAJA COMIGO</button>
        </ButtonsForTest>
      </TestButtons>
    </Container>
  );
}
