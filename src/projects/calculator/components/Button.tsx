import { ButtonContainer } from "./styles";

interface ButtonProps {
  value?: string;
  background: string;
  arithmetic?: string;
  image?: string;
  color: string;
  handleClickNumber: (value: string) => void;
  handleClickArithmetic: (type: string) => void;
  handleClickResult: () => void;
  handleDeleteAll: () => void;
  handleDeleteSecondNumber: () => void;
  handleTransform:()=>void;
}

export function Button({
  color,
  value,
  image,
  background,
  handleClickNumber,
  handleClickArithmetic,
  handleClickResult,
  handleDeleteAll,
  handleDeleteSecondNumber,
  handleTransform,
  arithmetic,
}: ButtonProps) {
  const existsImage = image;

  function handleSelectFunction() {
    switch (arithmetic || value) {
      case "result":
        return handleClickResult();
      case "CE":
        return handleDeleteSecondNumber();
      case "C":
        return handleDeleteAll();
      case "transform":
        return handleTransform();
      case ",":
        return handleClickNumber(".");
      default:
        if (Number(value) >= 0) {
          return handleClickNumber(String(value));
        }
        return handleClickArithmetic(String(arithmetic));
    }
  }

  return (
    <ButtonContainer
      color={color}
      background={background}
      onClick={handleSelectFunction}
    >
      {existsImage ? <img src={image} /> : value}
    </ButtonContainer>
  );
}
