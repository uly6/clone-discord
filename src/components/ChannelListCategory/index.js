import React, { useState } from "react";
import {
  Container,
  CollapsedIcon,
  ExpandedIcon,
  AddCategoryIcon,
  CategoryHeader,
} from "./styles";

export default function ChannelListCategory({ name, children }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleOnClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container onClick={handleOnClick}>
      <CategoryHeader>
        {isExpanded ? <ExpandedIcon /> : <CollapsedIcon />}
        <span>{name}</span>
        <AddCategoryIcon />
      </CategoryHeader>
      <div>{children}</div>
    </Container>
  );
}
