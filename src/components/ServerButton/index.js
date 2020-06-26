import React from "react";
import { Button } from "./styles";
import LogoImg from "../../assets/logo.svg";

export default function ServerButton({
  hasNotifications,
  isHome,
  mentions,
  selected,
}) {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={LogoImg} alt="Logo" />}
    </Button>
  );
}
