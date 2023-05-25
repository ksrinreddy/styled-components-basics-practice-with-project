import React from "react";
import { Info, StyledCard } from "./styles/Card.styled";

const Card = ({ item }) => {
  const { id, title, body, image } = item;
  return (
    <StyledCard>
      <Info>
        <h3>{title}</h3>
        <p>{body}</p>
      </Info>
      <img src={image} alt="illustrationImg" />
    </StyledCard>
  );
};

export default Card;
