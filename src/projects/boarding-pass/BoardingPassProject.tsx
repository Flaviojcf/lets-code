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
  PassagerContainer,
  PassagerContainerInfo,
  QrCodeContainer,
  EntranceContainer,
  EntranceInfoContainer,
  QrCodeImageContainer,
  AttentionContainer,
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
              <p>Recife, Brasil</p>
              <h1>REC</h1>
              <p>
                13:00 <sup></sup>
              </p>
            </FlyingDateContainerInfo>

            <FlyingDateContainerImage>
              <img
                src="/assets/boarding-pass/images/ion-airplane.png"
                alt="airplane"
              />
            </FlyingDateContainerImage>

            <FlyingDateContainerInfo>
              <p>São Francisco, EUA</p>
              <h1>SFO</h1>
              <p>
                11:48 <sup>+1</sup>
              </p>
            </FlyingDateContainerInfo>
          </FlyingTimeContainer>
        </FirstSection>

        <SecondSection>
          <PassagerContainer>
            <PassagerContainerInfo>
              <p>Passageiro</p>
              <h1>Flávio Costa</h1>
            </PassagerContainerInfo>
            <PassagerContainerInfo>
              <p>Assento</p>
              <h1>38A</h1>
            </PassagerContainerInfo>
          </PassagerContainer>
        </SecondSection>

        <ThirdSection>
          <QrCodeContainer>
            <EntranceContainer>
              <EntranceInfoContainer>
                <p>Embarque</p>
                <h1>11:15</h1>
              </EntranceInfoContainer>
              <EntranceInfoContainer>
                <p>Terminal</p>
                <h1>2</h1>
              </EntranceInfoContainer>
              <EntranceInfoContainer>
                <p>Portão</p>
                <h1>15</h1>
              </EntranceInfoContainer>
            </EntranceContainer>
            <QrCodeImageContainer>
              <img
                src="/assets/boarding-pass/images/qr-code.png"
                alt="QrCode"
              />
              <p>Grupo de embarque: 3</p>
            </QrCodeImageContainer>
          </QrCodeContainer>
          <AttentionContainer>
            <h1>
              <strong>Atenção:</strong> o portão fecha 16:45
            </h1>
          </AttentionContainer>
        </ThirdSection>

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
