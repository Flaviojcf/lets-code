import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.colors.calculator["purple-100"]};

  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1.625rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 33rem;
  width: 23rem;
  min-width: 19rem;

  padding: 3rem 2rem 2rem 2rem;

  background: ${(props) => props.theme.colors.calculator["gray-300"]};

  border-radius: 48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
    0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
    0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1),
    inset 0px -4px 5px rgba(0, 0, 0, 0.22);

  @media screen and (max-width: 425px) {
    width: 100%;
    padding: 3rem 1rem 1rem 1rem;
  }
`;

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem ;
`;

export const NumbersInResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > span {
    font-size: 20px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.calculator["gray-200"]};
    letter-spacing: -2%;
  }
  > p {
    font-size: 36px;
    line-height: 50px;
    color: ${(props) => props.theme.colors.calculator["gray-100"]};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
 

  

  @media screen and (max-width: 375px) {
    gap: 0.25rem;
  }
`;
