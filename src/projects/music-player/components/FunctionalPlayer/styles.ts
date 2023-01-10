import styled from "styled-components";

interface IOnScreen {
  isOnScreen: boolean;
}

interface IOnScreenContainer {
  isOnScreen: boolean;
  isPlayerOnScreen:boolean;
}

export const Container = styled.div<IOnScreenContainer>`
  display: ${(props) => (props.isPlayerOnScreen === true ? "flex" : "none")};;
  flex-direction: column;


  padding: 1.75rem;
  gap: 1.75rem;

  background: ${(props) => props.theme.colors["music-player"]["purple-300"]};

  width: 22.5rem;

  transition: height 400ms, background-color 400ms;

  height: ${(props) => (props.isOnScreen === true ? "19.6rem" : "12.4rem")};

  border-radius: 9.6px;

  @media screen and (max-width: 425px) {
    height: ${(props) => (props.isOnScreen === true ? "31.125rem" : "26.4rem")};
    width: 16rem;
  }
`;

export const MusicTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  > img {
    width: 5.25rem;
    height: 5.25rem;
  }

  > div {
    display: flex;

    flex-direction: column;
    justify-content: center;

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

  @media screen and (max-width: 425px) {
    flex-direction: column;
    gap: 1.75rem;

    > img {
      width: 11.8rem;
      height: 11.8rem;
    }
  }
`;



export const PlayerOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

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

export const RangeContainer = styled.div<IOnScreen>`
  display: ${(props) => (props.isOnScreen === true ? "flex" : "none")};
  width: 100%;

  > input {
    width: 100%;
  
  }

`;

export const TimeContainer = styled.div<IOnScreen>`
  display: ${(props) => (props.isOnScreen === true ? "flex" : "none")};

  align-items: center;
  justify-content: space-between;

  width: 100%;

  > p {
    font-family: Roboto;
    font-weight: 400;
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors["music-player"]["gray-200"]};
    opacity: 67%;
  }
`;
