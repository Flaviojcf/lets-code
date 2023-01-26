import styled from "styled-components";

interface ContainerProps {
    isMessageSend: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.isMessageSend === false ? 'start' : 'end'};
  gap: 0.625rem;
  width: 100%;
  
`;

export const NameContainer = styled.div`
  display: flex;

  > p {
    font-size: 0.75rem;
    line-height: 14px;
    color: ${(props) => props.theme.colors.chat.gray};
  }
`;

interface MessageContainer {
  background: string;
  isMessageSend: boolean;
}

export const MessageContainer = styled.div<MessageContainer>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.background};

  
  height: 2.625rem;
  padding: 0.875rem;
  border-radius: ${(props) => props.isMessageSend === false ? "0px 8px 8px 8px" : "8px 8px 0px 8px"};

  > p {
    font-size: 0.75rem;
    line-height: 12px;
    color: ${(props) => props.theme.colors.chat.gray};
  }
`;
