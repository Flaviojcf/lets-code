import styled from "styled-components";

export const BlocksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  padding: 2rem;
`;

export const TitleBlockContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  width: 100%;
  justify-content: center;

  margin-bottom: 7rem;

  @media screen and (max-width: 768px) {
    margin-top: -7rem;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonsTitleBLock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #eaeaea;
  border-radius: 6px;
  gap: 0.5rem;
  padding: 0.5rem;

  > p {
    font-size: 14px;
    line-height: 24px;
    color: white;
    cursor: pointer;
  }

  > p:nth-child(1) {
    background: rgba(98, 70, 234, 1);
    padding: 4px 24px;
    border-radius: 6px;
  }

  > p:nth-child(2) {
    padding: 4px 24px;
    border-radius: 6px;
    color: rgba(98, 70, 234, 1);
  }


`;

export const Blocks = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

`;
