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
        descriptionChallenge=" Desenvolva o card de produto conforme especificado utilizando 
        as tecnologias da sua preferência. O arquivo do Figma contém um protótipo e o link para baixar o arquivo .gif a ser utilizado."
        figmaLink="https://www.figma.com/file/Sk04cAowKXOWVO3vlaNqLu/23boraCodar-Desafio-2/duplicate"
      />
      <WeekChallengeContainer
        linkChallenge="/challenges/week03"
        imgChallenge="/assets/buttons-cursors/images/Challenge-03.webp"
        titleChallenge="Desafio #03 - botões e cursores"
        descriptionChallenge=" Desenvolva uma tela de documentação de botões que possui uma 
        área de pré-visualização dos mesmos. Os estados dos botões e os cursores adequados devem ser exibidos. Você pode ir além e adicionar animações, por exemplo."
        figmaLink="https://www.figma.com/file/1tQYGEDabinStCRMbGFXzR/%23boraCodar---Desafio-3-(Community)?node-id=102%3A549&t=vR5W3B9rcxgbDKmD-0"
      />
      <WeekChallengeContainer
        linkChallenge="/challenges/week04"
        imgChallenge="/assets/chat/images/Challenge-04.png"
        titleChallenge="Desafio #04 - um chat"
        descriptionChallenge=" Desenvolva um chat mobile/desktop, que pode ser responsivo. Você pode ir 
        além e adicionar animações, ou mesmo implementar um chat funcional.."
        figmaLink="https://www.figma.com/file/Gtnv7lna4wQ3MvhNcQv5vk/%23boraCodar---Desafio-4-(Community)"
      />
      <WeekChallengeContainer
        linkChallenge="/challenges/week05"
        imgChallenge="/assets/calculator/images/Challenge-05.webp"
        titleChallenge="Desafio #05 - uma calculadora"
        descriptionChallenge=" Desenvolva uma calculadora. Você pode ir além e adicionar estados 
        para os botões e animações, por exemplo, além de tornar a calculadora funcional."
        figmaLink="https://www.figma.com/community/file/1202607074523509182"
      />
      <WeekChallengeContainer
        linkChallenge="/challenges/week06"
        imgChallenge="/assets/boarding-pass/images/Challenge-06.png"
        titleChallenge="Desafio #06 - um cartão de embarque"
        descriptionChallenge=" Desenvolva um cartão de embarque"
        figmaLink="https://www.figma.com/file/gR4zDSK9ULixZjGcR5v6rx/%23boraCodar---Desafio-6-(Community)?node-id=1%3A7&t=Y4KbbpfLjV4sA7bQ-0"
      />
    </Container>
  );
}
