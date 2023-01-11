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