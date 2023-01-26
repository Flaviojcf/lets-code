import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding: 2rem 4.5rem;

  background: ${(props) => props.theme.colors.chat["purple-700"]};

  @media screen and (max-width: 1024px) {
    padding: 1.5rem 2rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageAndNameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ImageContainer = styled.picture`
  >img {
    object-fit: contain;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > h1 {
    font-size: 1rem;
    line-height: 19px;
    color: ${(props) => props.theme.colors.chat.gray};
  }

  > li {
    font-size: 0.75rem;
    line-height: 14px;
    color: ${(props) => props.theme.colors.chat["green-500"]};
    list-style-image: url("/assets/chat/images/greenCircle.png");
  }
`;

export const CloseContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

export const TimeContainer = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;

  margin-top: 0.875rem;

  > p {
    font-size: 0.75rem;
    line-height: 14px;
    color: ${(props) => props.theme.colors.chat.gray};
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 4rem;
  width: 100%;

  gap: 1.875rem;
`;

export const NewMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;

  > input {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.18rem 1.5rem;

    width: 100%;
    height: 3.25rem;

    background: ${(props) => props.theme.colors.chat["black-400"]};
    border-radius: 999px;
    border: none;

    outline: none;

    font-size: 0.75rem;
    line-height: 14px;
    color: ${(props) => props.theme.colors.chat.gray};

    &:focus {
      border: 1px solid #633bbc;
    }

    &::placeholder {
      font-size: 0.75rem;
      line-height: 14px;
      color: ${(props) => props.theme.colors.chat.gray};
    }
  }

  > img {
    display: flex;
    position: relative;
    left: -4rem;
    cursor: pointer;

    @media screen and (max-width: 475px) {
      left: -3rem;
    }
  }
`;
