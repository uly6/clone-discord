import styled from "styled-components";
import { ExpandMore, Add, ChevronRight } from "styled-icons/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  color: var(--gray);
  font-size: 12px;
  text-transform: uppercase;

  padding: 0 16px;
  margin-top: 16px;

  position: relative;
  cursor: pointer;
`;

export const ExpandedIcon = styled(ExpandMore)`
  position: absolute;
  top: calc(50% -6px);
  left: 2px;

  width: 12px;
  height: 12px;

  color: var(--gray);
  cursor: pointer;
`;

export const CollapsedIcon = styled(ChevronRight)`
  position: absolute;
  top: calc(50% -6px);
  left: 2px;

  width: 12px;
  height: 12px;

  color: var(--gray);
  cursor: pointer;
`;

export const AddCategoryIcon = styled(Add)`
  width: 20px;
  height: 20px;

  color: var(--gray);
  cursor: pointer;
`;
