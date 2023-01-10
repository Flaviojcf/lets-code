import {
  Container,
  ImageContainer,
  TextContainer,
  UpContainer,
} from "./styles";

export function Footer() {
  function scrollToTop(scrollDuration: number) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
      scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
      }, 15);
  }

  return (
    <Container>
      <TextContainer>
        <h1>Junte-se a uma comunidade que pratica</h1>
        <p>
          Poste a hashtag <strong>#boraCodar </strong>nas redes sociais e você
          poderá aparecer no hall de projetos em destaque
        </p>
      </TextContainer>
      <ImageContainer>
        <img src="/depositions.webp" />
      </ImageContainer>
      <UpContainer onClick={() => scrollToTop(300)}>
        <img src="/arrow-up.svg" />
      </UpContainer>
    </Container>
  );
}
