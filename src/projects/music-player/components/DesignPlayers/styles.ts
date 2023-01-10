import styled from "styled-components";

interface DesignPlayer {
  isPlayerOnScreen: boolean;
}

export const Container = styled.div<DesignPlayer>`
  display: ${(props) => (props.isPlayerOnScreen === true ? "none" : "flex")};

  height: 100%;

  align-items: center;
  justify-content: center;

  padding: 1rem;

  flex-wrap: wrap;
  gap: 2rem;
`;

interface Info {
  isMobile?: boolean;
  isPlaying?: boolean;
}

export const Content = styled.div<Info>`
  display: flex;
  flex-direction: column;

  width: ${(props) => (props.isMobile === true ? "16.62rem" : "22.31rem")};
  height: ${(props) =>
    props.isMobile === true
      ? "31.125rem"
      : props.isPlaying === true
      ? "16.62rem"
      : "12.43rem"};

  padding: ${(props) =>
    props.isMobile === true ? " 3.125rem 2.375rem;" : "1.5rem 1rem"};

  border-radius: 9.6px;
  background: ${(props) => props.theme.colors["music-player"]["purple-300"]};

  @media screen and (max-width: 425px) {
    width: ${(props) => (props.isMobile === true ? "16.62rem" : "18.31rem")};
  }
`;

export const TitleContent = styled.div<Info>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile === true ? "column" : "row")};

  gap: ${(props) => (props.isMobile === true ? "0rem" : "1.05rem")};

  width: ${(props) => (props.isMobile === true ? "11.8rem" : "17.25rem")};

  > img {
    width: ${(props) => (props.isMobile === true ? "11.8rem" : "5.25rem")};
    height: ${(props) => (props.isMobile === true ? "11.8rem" : "5.25rem")};
    border-radius: 6px;
  }

  > div {
    display: flex;

    margin-bottom: auto;

    width: 100%;

    flex-direction: column;
    justify-content: center;

    margin-top: auto;

    margin-top: ${(props) => (props.isMobile === true ? "1.75rem" : "")};
    gap: 0.5rem;

    > h1 {
      font-family: Roboto;
      font-weight: 700;
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors["music-player"]["gray-100"]};
    }
    > p {
      font-family: Roboto;
      font-weight: 400;
      font-size: 1.18rem;
      color: ${(props) => props.theme.colors["music-player"]["gray-100"]};
      opacity: 67%;
      max-width: 10rem;
    }
  }
`;

export const PlayerOptionsContent = styled.div<Info>`
  display: flex;
  justify-content: ${(props) =>
    props.isMobile === true ? "space-between" : "center"};

  gap: ${(props) => (props.isMobile === true ? "" : "3.15rem")};

  width: 100%;

  margin-top: 1.75rem;

  > img {
    cursor: pointer;
    transition: all ease 0.2s;
    max-width: 28px;
    max-height: 28px;

    &:hover {
      opacity: 0.7;
    }

    &::after {
      content: "sas";
      color: red;
    }
  }
`;

export const RangerContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1.75rem;

  > input {
    width: 100%;
  }
`;

export const TimeContent = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-top: 0.45rem;
  width: 100%;

  > p {
    font-family: Roboto;
    font-weight: 400;
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors["music-player"]["gray-200"]};
    opacity: 67%;
  }
`;

export const DoubleContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;
