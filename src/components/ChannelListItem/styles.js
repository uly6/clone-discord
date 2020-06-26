import styled from "styled-components";
import { Settings, PersonAdd } from "styled-icons/material";
import { Hashtag } from "@styled-icons/heroicons-outline/Hashtag";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  margin: 2px 8px;
  padding: 0 8px;
  color: var(--gray);
  border-radius: 4px;
  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
  }

  transition: color 0.2s;

  > div.actions {
    display: none;
  }

  &:hover,
  &.active {
    color: var(--white);
    background-color: var(--quinary);
    > div.actions {
      display: inline;
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
  margin-right: 8px;
`;

export const ChannelName = styled.strong`
  font-size: 16px;
  font-weight: 500;
`;

export const InvitePeopleIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--white);
  opacity: 0.6;
  cursor: pointer;

  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }

  margin-right: 4px;
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  color: var(--white);
  opacity: 0.6;
  cursor: pointer;

  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
