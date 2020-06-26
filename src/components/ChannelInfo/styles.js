import styled from "styled-components";
import { Hashtag } from "@styled-icons/heroicons-outline/Hashtag";

export const Container = styled.div`
  grid-area: CI;

  background-color: var(--primary);

  display: flex;
  align-items: center;
  padding: 0 8px;

  box-shadow: rgb(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;

  color: var(--symbol);
  margin-right: 8px;
`;

export const Separator = styled.div`
  height: 24px;
  border-right: solid 1px var(--gray);
  margin: 0 8px;
`;

export const Title = styled.h1`
  color: var(--white);
  font-weight: bold;
  font-size: 16px;
  margin-right: 8px;
`;

export const Description = styled.div`
  color: var(--gray);
  font-size: 14px;
  margin-left: 8px;
`;
