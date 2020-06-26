import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 16px;
  margin-top: 10px;
`;

export const Message = styled.div`
  width: 100%;
  margin-left: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--symbol);
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: lightgreen;
    font-size: 16px;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  > time {
    color: var(--gray);
    font-size: 12px;
    font-weight: 300;
    margin-left: 8px;
  }
`;

export const Content = styled.div`
  color: var(--white);
  font-size: 14px;
  line-height: 28px;
`;
