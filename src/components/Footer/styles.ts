import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 24rem;
  padding: 4rem;

  background: ${(props) => props.theme.colors["black-700"]};

  align-items: center;

  margin-top: auto;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;

  > h1 {
  }

  > p {
    > strong {
      color: ${(props) => props.theme.colors["purple-100"]};
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;


  margin-top: 2.5rem;

  > img {
    width: 100%;
    max-width: 45rem;
  }
`;

export const UpContainer = styled.div`
  display: flex;
  margin-left: auto;

  align-items: center;
  justify-content: center;
  padding: 1rem;

  width: 50px;
  height: 40px;

  background: ${(props)=>props.theme.colors["black-200"]};
  border-radius: 5px;

  transition: all ease 0.2s;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors["purple-500"]};
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }

`;