import { useState } from "react";

import {
  ButtonContainer,
  Container,
  Content,
  CouchContainer,
  InformationsContainer,
  TextContainer,
} from "./styles";

export function CardProduct() {
  const [isRotating, setIsRotating] = useState(false);

  return (
    <Container>
      <Content>
        <CouchContainer>
          <img
            src={
              !isRotating
                ? "/assets/card-product/images/couch.png"
                : "/assets/card-product/images/couchGif.gif"
            }
          />
          <img
            onClick={() => setIsRotating((state) => !state)}
            src={
              isRotating
                ? "/assets/card-product/images/closeVector.png"
                : "/assets/card-product/images/360Vector.png"
            }
          />
        </CouchContainer>
        <InformationsContainer>
          <TextContainer>
            <p>CÓDIGO: 42404</p>
            <h1>Sofá Margot II - Rosé</h1>
            <h2>R$ 4.000 </h2>
          </TextContainer>
          <ButtonContainer>ADICIONAR À CESTA</ButtonContainer>
        </InformationsContainer>
      </Content>
    </Container>
  );
}
