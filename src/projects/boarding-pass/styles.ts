import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(130, 87, 229, 1), rgba(39, 26, 69, 1));

  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1.625rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 20rem;
  height: 41rem;

  @media screen and (max-width: 375px) {
    width: 18rem;
  }
`;

export const TitleContent = styled.div`
  margin-bottom: 1.25rem;

  > h1 {
    color: white;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  width: 100%;
  height: 11.9rem;

  background: white;
  padding: 24px 32px 24px 32px;
  border-radius: 24px 24px 0px 0px;
  --mask: radial-gradient(12px at 12px 100%, #0000 98%, #000) -12px;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

export const FlyingDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const FlyingInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & + & {
    align-items: flex-end;
  }

  > p {
    color: rgba(0, 0, 0, 0.64);
    font-size: 14px;
    line-height: 17px;
  }

  > h1 {
    color: rgba(0, 0, 0, 0.88);
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const FlyingTimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const FlyingDateContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:last-child {
    align-items: flex-end;
  }

  > p:first-child {
    color: rgba(0, 0, 0, 0.64);
    font-size: 14px;
    line-height: 17px;
  }

  > h1 {
    color: rgba(0, 0, 0, 0.88);
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
  }

  > p:last-child {
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    line-height: 19px;
  }
`;

export const FlyingDateContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SecondSection = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 5.25rem;
  padding: 24px 32px 24px 32px;

  background: white;
  border-top: dashed 1px rgba(0, 0, 0, 0.32);

  --mask: radial-gradient(12px at 12px 12px, #0000 98%, #000) -12px -12px;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

export const PassagerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const PassagerContainerInfo = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    color: rgba(0, 0, 0, 0.64);
    font-size: 14px;
    line-height: 17px;
  }
  > h1 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    line-height: 19px;
  }
`;

export const ThirdSection = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 16.8rem;

  background: white;
  border-top: dashed 1px rgba(0, 0, 0, 0.32);
  border-radius: 0px 0px 24px 24px;
  padding: 24px 32px 24px 32px;

  --mask: radial-gradient(12px at 12px 0, #0000 98%, #000) -12px;
  -webkit-mask: var(--mask);
  mask: var(--mask);
`;

export const QrCodeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const EntranceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EntranceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;

  &:first-child {
    gap: 0.125rem;
    > p {
      color: rgba(0, 0, 0, 0.64);
      font-size: 14px;
      line-height: 17px;
    }
    > h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3.375rem;
      height: 1.687rem;
      border-radius: 8px;
      background: rgba(99, 59, 188, 1);
      color: white;
    }
  }

  > p {
    color: rgba(0, 0, 0, 0.64);
    font-size: 14px;
    line-height: 17px;
  }

  > h1 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 16px;
    line-height: 19px;
  }
`;

export const QrCodeImageContainer = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    max-width: 10rem;
    max-height: 10rem;
  }

  > p {
    color: rgba(0, 0, 0, 0.64);
    font-size: 14px;
    line-height: 17px;
  }
`;

export const AttentionContainer = styled.div`
  display: flex;
  align-self: center;
  text-align: center;

  margin-top: 1.5rem;

  > h1 {
    font-size: 16px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 400;
  }
`;

export const Footer = styled.div`
  margin-top: 1.25rem;

  > p {
    color: white;
    font-size: 14px;
    line-height: 24px;
    opacity: 0.64;
  }
`;
