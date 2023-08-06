import React, { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  BodyContainer,
  Card,
  CardCartButton,
  CardGrid,
  CardImage,
  CardInfo,
  CardPrice,
  CardRef,
  CardTitle,
} from "./CapsMale.js";
import caps from "../../../db/maledb.json";

import { CartContext } from "../../../components/CartContext";

function CapsMale() {
  const { handleAddToCart } = useContext(CartContext);

  const handleAddToCartClick = (item) => {
    handleAddToCart(item);
  };

  return (
    <BodyContainer>
      <CardGrid>
        {caps.caps.map((cap) => (
          <Card key={cap.id}>
            <CardImage src={cap.image_url} alt={cap.name} />
            <CardInfo>
              <CardTitle>{cap.name}</CardTitle>
              <CardPrice>{`R$ ${cap.price.toFixed(2)}`}</CardPrice>
              <CardRef>{`Ref: ${cap.reference}`}</CardRef>
            </CardInfo>
            <CardCartButton onClick={() => handleAddToCartClick(cap)}>
              <FaShoppingCart />
            </CardCartButton>
          </Card>
        ))}
      </CardGrid>
    </BodyContainer>
  );
}

export default CapsMale;
