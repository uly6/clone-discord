import React from "react";
import {
  Container,
  Messages,
  SendMessage,
  InputWrapper,
  Input,
  AttachmentIcon,
  GiftIcon,
  GifIcon,
  EmojiIcon,
} from "./styles";
import ChatMessage from "../ChatMessage";

const messages = [...new Array(20)].map((v, idx) => ({
  author: "uly6",
  date: "10/10/2020",
  message: "This is the message " + idx,
}));

export default function ChatData() {
  return (
    <Container>
      <Messages>
        {messages.map((msg, idx) => (
          <ChatMessage data={msg} key={idx} />
        ))}
      </Messages>
      <SendMessage>
        <InputWrapper>
          <AttachmentIcon />
          <Input type="text" placeholder="Message #general" />
          <GiftIcon />
          <GifIcon />
          <EmojiIcon />
        </InputWrapper>
      </SendMessage>
    </Container>
  );
}
