import React from "react";
import { Container, UserListRole } from "./styles";
import UserListCard from "../UserListCard";

export default function UserList() {
  return (
    <Container>
      <UserListRole>Admin</UserListRole>
      <UserListCard
        user={{ name: "uly6", activity: "Coding a discord clone" }}
      />
      <UserListCard
        user={{
          name: "John",
          activity: "Playing Animal Crossing on my new Nintendo Switch",
        }}
      />

      <UserListRole>Online</UserListRole>
      <UserListCard user={{ name: "Mary", activity: "Doing something" }} />
      <UserListCard user={{ name: "Kate", activity: "Away" }} />
      <UserListCard
        user={{
          name: "Jacob Milford Abraham Joseh VI",
          activity: "Playing The Witcher 3",
        }}
      />
      <UserListRole>Fake</UserListRole>
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
      <UserListCard
        user={{ name: "User X", activity: "Listening to spotify" }}
      />
    </Container>
  );
}
