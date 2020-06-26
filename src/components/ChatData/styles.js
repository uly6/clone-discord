import styled from "styled-components";
import { AddCircle, Gif } from "@styled-icons/material";
import { Gift } from "@styled-icons/fa-solid";
import { EmojiHappy } from "@styled-icons/heroicons-solid";

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px - 68px);
  width: calc(100% - 4px);
  margin-right: 4px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
    border-radius: 4px;
  }
`;

export const SendMessage = styled.div`
  height: 68px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div`
  height: 44px;
  width: calc(100% - 32px);
  background-color: var(--chat-input);
  border-radius: 10px;

  display: flex;
  align-items: center;
  padding: 0 8px;
`;

export const Input = styled.input`
  height: 22px;
  width: 100%;
  background-color: transparent;
  margin-left: 8px;

  color: var(--white);

  &::placeholder {
    font-size: 15px;
    color: var(--symbol);
  }
`;

export const AttachmentIcon = styled(AddCircle)`
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  color: var(--white);
  opacity: 0.6;
  cursor: pointer;

  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

export const GiftIcon = styled(Gift)`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: var(--white);
  opacity: 0.6;
  cursor: pointer;

  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }

  margin-left: 8px;
`;

export const GifIcon = styled(Gif)`
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  color: var(--white);
  opacity: 0.6;
  cursor: pointer;

  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }

  margin-left: 8px;
`;

export const EmojiIcon = styled(EmojiHappy)`
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  color: var(--white);
  opacity: 0.6;
  cursor: pointer;

  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }

  margin-left: 8px;
`;
