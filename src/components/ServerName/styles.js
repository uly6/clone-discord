import styled from "styled-components";
import { ExpandMore } from "@styled-icons/material/ExpandMore";

export const Container = styled.div`
  grid-area: SN;

  background-color: var(--secondary);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  box-shadow: rgb(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;

export const Title = styled.h1`
  color: var(--white);
  font-weight: bold;
  font-size: 16px;
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 20px;
  height: 20px;

  color: var(--white);
  cursor: pointer;
`;
