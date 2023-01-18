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
          {!isRotating ? (
            <img src={"/assets/card-product/images/couch.png"} />
          ) : (
            <iframe
              title="Margot 2 Seater Sofa, Old Rose Velvet"
              height={300}
              style={{border: "0px"}}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src="https://sketchfab.com/models/b3d693a003c94f4e989c08fe08c3af8c/embed?autostart=1&camera=0&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"
            />
          )}
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
