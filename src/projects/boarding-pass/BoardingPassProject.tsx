import {
  Container,
  Content,
  FirstSection,
  FlyingInfo,
  FlyingDateContainer,
  Footer,
  SecondSection,
  ThirdSection,
  TitleContent,
  FlyingTimeContainer,
  FlyingDateContainerInfo,
  FlyingDateContainerImage,
} from "./styles";

export function BoardingPassProject() {
  return (
    <Container>
      <Content>
        <TitleContent>
          <h1>Cartão de embarque</h1>
        </TitleContent>
        <FirstSection>
          <FlyingDateContainer>
            <FlyingInfo>
              <p>Voo</p>
              <h1>RS995</h1>
            </FlyingInfo>

            <FlyingInfo>
              <p>Data</p>
              <h1>23/05/2023</h1>
            </FlyingInfo>
          </FlyingDateContainer>

          <FlyingTimeContainer>

            <FlyingDateContainerInfo>
              <p>São Paulo, Brasil</p>
              <h1>GRU</h1>
              <p>17:00</p>
            </FlyingDateContainerInfo>
       
           

            <FlyingDateContainerInfo>
              <p>São Francisco, EUA</p>
              <h1>SFO</h1>
              <p>
                04:48 <sup>+1</sup>
              </p>
            </FlyingDateContainerInfo>
          </FlyingTimeContainer>
        </FirstSection>

        <SecondSection></SecondSection>

        <ThirdSection></ThirdSection>

        <Footer>
          <p>
            Qualquer problema procure o balcão de atendimento da sua companhia
            aérea
          </p>
        </Footer>
      </Content>
    </Container>
  );
}
