import styled from "styled-components";

interface DesignPlayer {
  isPlayerOnScreen: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  background-size: cover;

  background: ${(props) => props.theme.colors["music-player"]["purple-500"]};

  align-items: center;
  justify-content: center;

  overflow-x: hidden;

  padding: 1rem;
`;

export const TextContainer = styled.div<DesignPlayer>`
  display: flex;
  text-align: center;

  color: white;
  margin-bottom: 4rem;
  cursor: pointer;

  transition: all ease 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors["purple-500"]};
  }
`;
