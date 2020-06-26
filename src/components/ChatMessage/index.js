import React from "react";
import { Container, Avatar, Message, Header, Content } from "./styles";

export default function ChatMessage({ data: { author, date, message } }) {
  return (
    <Container>
      <Avatar />
      <Message>
        <Header>
          <strong>{author}</strong>
          <time>{date}</time>
        </Header>
        <Content>{message}</Content>
      </Message>
    </Container>
  );
}
