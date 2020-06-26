import React from "react";
import { Container } from "./styles";
import ChannelListCategory from "../ChannelListCategory";
import ChannelListItem from "../ChannelListItem";

export default function ChannelList() {
  return (
    <Container>
      <ChannelListCategory name="Text Channels">
        <ChannelListItem name="general" selected />
        <ChannelListItem name="work" />
      </ChannelListCategory>
      <ChannelListCategory name="Voice Channels">
        <ChannelListItem name="General" />
        <ChannelListItem name="Work" />
      </ChannelListCategory>
      <ChannelListCategory name="Test">
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
      </ChannelListCategory>
      <ChannelListCategory name="Test">
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
      </ChannelListCategory>
      <ChannelListCategory name="Test">
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
      </ChannelListCategory>
      <ChannelListCategory name="Test">
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
        <ChannelListItem name="test" />
      </ChannelListCategory>
    </Container>
  );
}
