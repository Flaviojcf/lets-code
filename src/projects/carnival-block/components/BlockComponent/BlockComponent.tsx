import { Container, Locale, TextContainer } from "./styles";

interface BlockComponentInterface {
  title: string;
  description: string;
  locale: string;
  image: string;
}

export function BlockComponent({
  description,
  locale,
  title,
  image,
}: BlockComponentInterface) {

  return (
    <Container>
      <img src={image} />
      <TextContainer>
        <h1>{title}</h1>
        <p>{description}</p>
      </TextContainer>
      <Locale>
        <img src="/assets/carnival-block/images/gps.png" />
        {locale}
      </Locale>
    </Container>
  );
}
