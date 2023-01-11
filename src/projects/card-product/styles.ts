import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100vh;

  padding: 1rem;

  background: ${(props) => props.theme.colors["music-player"]["purple-500"]};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  max-width: 54rem;
  width: 100%;
  height: 31.125rem;

  border-radius: 6px;
  background: ${(props) => props.theme.colors["card-product"]["rose-200"]};

  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const CouchContainer = styled.div`
  display: flex;
  align-items: center;

  > img:first-child {
    max-width: 28rem;
    width: 100%;
    height: 15.8rem;
    object-fit: contain;

    position: relative;
  }

  > img:last-child {
    display: flex;

    width: 2.0625rem;
    height: 1.375rem;
    object-fit: contain;

    cursor: pointer;

    position: absolute;

    margin-left: 22rem;
    margin-bottom: 15rem;

    &:hover {
        opacity: 0.7;
    }

    @media screen and (max-width: 768px) {
      margin-left: 43%;
      margin-bottom: 13rem;
    }
  }
`;

export const InformationsContainer = styled.div`

    display: flex;
    flex-direction: column;



`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
  margin-bottom: 1.25rem;

  color: ${(props) => props.theme.colors["card-product"]["purple-700"]};

  > p {
    font-size: 0.625rem;
    line-height: 10px;
    font-family: Lato;
    font-weight: 300;
  }

  > h1 {
    font-size: 2rem;
    line-height: 32px;
    font-family: Lato;
    font-weight: 700;
  }
  > h2 {
    font-size: 1rem;
    line-height: 16px;
    font-family: Lato;
    font-weight: 400;
  }
`;

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 999px;
    background: none;

    width: 9.25rem;
    height: 2rem;

    border: 0.5px solid ${(props) => props.theme.colors["card-product"]["purple-700"]};

    &:hover {
        opacity: 0.7;
    }

`;