import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 2px 8px;
  margin: 2px 8px;
  border-radius: 4px;
  height: 42px;

  cursor: pointer;

  &:hover {
    background-color: var(--quinary);
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--symbol);

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
  flex-shrink: 0;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;

  > div {
    width: 170px;

    font-size: 15px;
    font-weight: 500;
    color: var(--white);

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    width: 170px;

    font-size: 11px;
    font-weight: 300;
    color: var(--gray);

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
