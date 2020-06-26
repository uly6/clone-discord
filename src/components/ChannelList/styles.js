import styled from "styled-components";

export const Container = styled.div`
  grid-area: CL;

  background-color: var(--secondary);

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px - 52px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;
