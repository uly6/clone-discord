import React, { useState } from "react";
import {
  Container,
  HashtagIcon,
  ChannelName,
  InvitePeopleIcon,
  SettingsIcon,
} from "./styles";

export default function ChannelListItem({ name, selected }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleOnClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container onClick={handleOnClick} className={selected ? "active" : ""}>
      <div>
        <HashtagIcon />
        <ChannelName>{name}</ChannelName>
      </div>
      <div className="actions">
        <InvitePeopleIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}
