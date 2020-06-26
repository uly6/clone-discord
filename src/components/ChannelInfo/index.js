import React from "react";
import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from "./styles";

export default function ChannelInfo() {
  return (
    <Container>
      <HashtagIcon />
      <Title>general</Title>
      <Separator />
      <Description>You can talk about whatever you want here</Description>
    </Container>
  );
}
