import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(234, 234, 234, 1);
  border-radius: 8px;
  max-width: 24rem;
  max-height: 20rem;
  padding-bottom: 1rem;

  cursor: pointer;
  transition: all ease 0.2s;

  > img {
    width: 100%;
    max-width: 24rem;
    max-height: 153px;
  }

  &:hover {
    box-shadow: 10px 10px 35px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;

  > h1 {
    font-size: 20px;
    line-height: 28px;
    color: #121214;
  }

  > p {
    font-size: 16px;
    line-height: 26px;
    color: rgba(0, 0, 0, 0.75);
  }
`;

export const Locale = styled.div`
  display: flex;
  align-items: center;
  gap: 0.78rem;
  padding: 0rem 1rem;
`;
