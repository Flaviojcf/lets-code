import styled from "styled-components";

interface ButtonProps {
  color: string;
  background: string;
}

export const ButtonContainer = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;
  border-radius: 999px;

  font-size: 24px;
  line-height: 28px;

  background: ${(props) => props.background};
  color: ${(props) => props.color};
  box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04),
    0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26),
    0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);

  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    opacity: 0.2;
  }
`;
