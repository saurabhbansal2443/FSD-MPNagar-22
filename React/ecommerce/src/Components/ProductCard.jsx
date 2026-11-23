import React from "react";

const ProductCard = ({ data }) => {
  const { title } = data;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default ProductCard;
