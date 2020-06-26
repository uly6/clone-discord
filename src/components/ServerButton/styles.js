import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;

  width: 48px;
  height: 48px;

  background-color: ${(props) =>
    props.isHome ? "var(--rocketseat)" : "var(--primary)"};

  border-radius: 50%;
  margin-bottom: 10px;

  position: relative;

  > img {
    width: 24px;
    height: 24px;
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome ? "var(--rocketseat)" : "var(--discord)"};
  }

  &::before {
    position: absolute;
    content: "";
    width: 9px;
    height: 9px;
    background-color: var(--white);
    left: -17px;
    top: calc(50% -4.5px);
    border-radius: 50%;
    display: ${({ hasNotifications }) =>
      hasNotifications ? "inline" : "none"};
  }

  &::after {
    position: absolute;
    right: -4px;
    bottom: -4px;

    width: auto;
    height: 16px;
    border-radius: 12px;
    padding: 0 4px;

    background-color: var(--notification);
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: "${({ mentions }) => mentions && mentions} ";
    display: ${({ mentions }) => (mentions ? "inline" : "none")};
  }
`;
