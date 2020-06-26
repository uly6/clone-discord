import React from "react";
import { Container, Avatar, UserData } from "./styles";

export default function UserListCard({ user }) {
  return (
    <Container>
      <Avatar />
      <UserData>
        <div>{user.name}</div>
        <span>{user.activity}</span>
      </UserData>
    </Container>
  );
}
