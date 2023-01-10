import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 1rem 0rem 0rem 0rem;
`;

export const TextContainer = styled.div`
  display: flex;

  flex-direction: column;
  text-align: center;

  color: white;
  gap: 0.75rem;

  > h1 {
    font-size: 1.85rem;

    > strong {
      color: ${(props) => props.theme.colors["purple-100"]};
    }
  }

  > p {
    font-size: 1.125rem;
    > strong {
      color: ${(props) => props.theme.colors["purple-100"]};
    }
  }

  > h2 {
    text-decoration: underline;
    margin-top: 1.5rem;
  }
`;

export const ChallengeImageContainer = styled.div`
  display: flex;

  margin-top: 2rem;
  padding: 0rem 4rem;

  > img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:hover {
      box-shadow: 10px 10px 33px 12px rgba(0, 0, 0, 0.75);
    }
  }
`;

export const InstructionsContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 16rem;
  width: 100%;

  padding: 2rem;
  gap: 1.5rem;
  background: #271a45;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 30rem;
  }
`;

export const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;


  width: 33.25rem;
  height: 12rem;

  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    padding: 1.1rem 0rem;

    justify-content: center;

    border-radius: 62.4375rem;
    background: ${(props) => props.theme.colors["purple-500"]};

    width: 7rem;
    height: 1.1875rem;
  }

  > h1 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }
  > p {
    font-size: 1.2rem;
    flex-wrap: wrap;
    width: 24rem;
    color: #c4c4cc;
  }

  @media screen and (max-width: 768px) {
   display: none;
  }

`;

export const FigmaContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 33.25rem;
  height: 12rem;

  border: 2px solid ${(props) => props.theme.colors["purple-500"]};
  border-radius: 5px;

  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }

  @media screen and (max-width: 768px) {
    width: 18rem;
  }
`;

export const FolderFigmaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 5.875rem;
  border-radius: 5px;

  > img {
    width: 50%;
  }

  background: ${(props) => props.theme.colors["purple-500"]};
`;

export const FigmaTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  > h1 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  > p {
    font-size: 0.8rem;
    flex-wrap: wrap;
    width: 14rem;
    color: #c4c4cc;

    @media screen and (max-width: 768px) {
    width: 8rem;
  }
  }
`;
