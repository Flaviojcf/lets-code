import { ButtonsStyles, ButtonStyles, CursorImage } from "./styles";

interface ButtonsProps {
  background: string[];
  name: string[];
  border: string;
  disabled: boolean;
  loading: boolean;
  movable: boolean;
}

interface ButtonsContainer {
  img: string;
  property: ButtonsProps;
}

export function ButtonsContainer({ img, property }: ButtonsContainer) {
  const showImage =
    (property.loading && (
      <img src="/assets/buttons-cursors/images/loading.png" />
    )) ||
    (property.movable && (
      <img src="/assets/buttons-cursors/images/vector.png" />
    ));

  return (
    <ButtonsStyles>
      <ButtonStyles
        background={property.background[0]}
        border={property.border}
        disabled={property.disabled}
      >
        {showImage}
        {property.name[0]}
      </ButtonStyles>
      <ButtonStyles
        background={property.background[1]}
        border={property.border}
        disabled={property.disabled}
      >
        {showImage}
        {property.name[1]}
      </ButtonStyles>
      <ButtonStyles
        background={property.background[2]}
        border={property.border}
        disabled={property.disabled}
      >
        {showImage}
        {property.name[2]}
      </ButtonStyles>
      <CursorImage>
        <img src={img} />
      </CursorImage>
    </ButtonsStyles>
  );
}
