import { Container, MessageContainer, NameContainer } from "./styles";

interface MessageProps {
  name: string;
  hour: string;
  message: string;
  background: string;
  isMessageSend: boolean;
}

export function Message({
  background,
  hour,
  message,
  name,
  isMessageSend = true,
}: MessageProps) {
  return (
    <Container isMessageSend={isMessageSend}>
      <NameContainer>
        <p>
          {name} - {hour}
        </p>
      </NameContainer>

      <MessageContainer background={background} isMessageSend={isMessageSend}>
        <p>{message}</p>
      </MessageContainer>
    </Container>
  );
}
