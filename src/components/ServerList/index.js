import React from "react";
import { Container, Separator } from "./styles";
import ServerButton from "../ServerButton";

export default function ServerList() {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton hasNotifications mentions={2} />
      <ServerButton />
      <ServerButton mentions={4} />
      <ServerButton />
      <ServerButton />
    </Container>
  );
}
