import { Message } from "./components/Message";
import { useState } from "react";
import {
  CloseContainer,
  Container,
  Content,
  ImageAndNameContainer,
  ImageContainer,
  MessageContainer,
  NameContainer,
  NewMessageContainer,
  ProfileContainer,
  TimeContainer,
} from "./styles";
import { Link } from "react-router-dom";

interface DataProps {
  background: string;
  hour: string;
  isMessageSend: boolean;
  message: string;
  name: string;
}

export function ChatComponent() {
  const date = new Date();
  const [message, setMessage] = useState("");
  const [data, setData] = useState<DataProps[]>([
    {
      background: "#633BBC",
      hour: "11:30",
      isMessageSend: false,
      message: "Tive uma ideia incrível para um projeto! 😍",
      name: "Cecilia",
    },
    {
      background: "#07847E",
      hour: "11:32",
      isMessageSend: true,
      message: "Sério? Me conta mais.",
      name: "Você",
    },
    {
      background: "#633BBC",
      hour: "11:34",
      isMessageSend: false,
      message:
        "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?",
      name: "Cecilia",
    },
    {
      background: "#07847E",
      hour: "11:36",
      isMessageSend: true,
      message: "#boraCodar! 🚀",
      name: "Você",
    },
  ]);

  function storeData(info: DataProps) {
    if (!info.message) return;
    setData((state) => [...state, info]);
    setMessage("");
  }

  return (
    <Container>
      <Content>
        <ProfileContainer>
          <ImageAndNameContainer>
            <ImageContainer>
              <img src="/assets/chat/images/foto.png" />
            </ImageContainer>
            <NameContainer>
              <h1>Cecilia Sassaki</h1>
              <li>Online</li>
            </NameContainer>
          </ImageAndNameContainer>
          <CloseContainer>
            <Link to="/">
              <img src="/assets/chat/images/close.png" />
            </Link>
          </CloseContainer>
        </ProfileContainer>

        <TimeContainer>
          <p>Hoje 11:30</p>
        </TimeContainer>

        <MessageContainer>
          {data.map((info) => (
            <Message
              key={Math.random() * 9999}
              background={info.background}
              hour={info.hour}
              isMessageSend={info.isMessageSend}
              message={info.message}
              name={info.name}
            />
          ))}
        </MessageContainer>
        <NewMessageContainer>
          <input
            type="text"
            placeholder="Digite sua mensagem"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <img
            src="/assets/chat/images/send.png"
            onClick={() =>
              storeData({
                background: "#07847E",
                hour: String(date.getHours()) + ":" + String(date.getMinutes()),
                isMessageSend: true,
                message: message,
                name: "Você",
              })
            }
          />
        </NewMessageContainer>
      </Content>
    </Container>
  );
}
