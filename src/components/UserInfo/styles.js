import styled from "styled-components";
import { Settings, Mic, Headset } from "styled-icons/material";

export const Container = styled.div`
  grid-area: UI;

  background-color: var(--quaternary);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8px;

  > div {
    display: flex;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--primary);

  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-color: lightgreen;
    border-radius: 50%;
    border: 2px solid black;
    bottom: -2px;
    right: -2px;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white);
  font-size: 15px;
  > span {
    font-size: 13px;
    font-weight: 300;
  }
  margin-left: 8px;
`;

export const MicIcon = styled(Mic)`
  width: 32px;
  height: 32px;
  padding: 6px;
  border-radius: 4px;

  color: var(--white);
  opacity: 0.6;
  cursor: pointer;

  transition: opacity 0.2s background-color 0.2s;
  &:hover {
    opacity: 0.8;
    background-color: var(--primary);
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 32px;
  height: 32px;
  padding: 6px;
  border-radius: 4px;

  color: var(--white);
  opacity: 0.6;
  cursor: pointer;

  transition: opacity 0.2s background-color 0.2s;
  &:hover {
    opacity: 0.8;
    background-color: var(--primary);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 32px;
  height: 32px;
  padding: 6px;
  border-radius: 4px;

  color: var(--white);
  opacity: 0.6;
  cursor: pointer;

  transition: opacity 0.2s background-color 0.2s;
  &:hover {
    opacity: 0.8;
    background-color: var(--primary);
  }
`;
