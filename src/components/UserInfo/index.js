import React from "react";

import {
  Container,
  Avatar,
  UserData,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles";

const user = {
  name: "uly6",
  number: "3099",
};

export default function UserInfo() {
  return (
    <Container>
      <div>
        <Avatar />
        <UserData>
          <strong>{user.name}</strong>
          <span>#{user.number}</span>
        </UserData>
      </div>
      <div>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}
