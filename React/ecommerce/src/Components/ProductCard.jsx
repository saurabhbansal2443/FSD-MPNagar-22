
import React from "react";

const ProductCard = ({ data }) => {
  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    thumbnail,
  } = data;

  const discountedPrice = (
    price -
    (price * discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-50 p-5">

        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Discount Badge */}
        <span className="absolute left-3 top-3 rounded-md bg-red-500 px-2.5 py-1 text-xs font-semibold text-white">
          {Math.round(discountPercentage)}% OFF
        </span>

        {/* Wishlist Button */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition-colors hover:bg-red-50 hover:text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0 4.5-9 11.25-9 11.25S3 12.75 3 8.25a4.5 4.5 0 018.1-2.7A4.5 4.5 0 0121 8.25z"
            />
          </svg>
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">

        {/* Brand and Category */}
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            {brand || category}
          </span>

          <span className="text-xs text-green-600">
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 line-clamp-1 text-base font-semibold text-gray-800">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-3 line-clamp-2 min-h-10 text-sm leading-5 text-gray-500">
          {description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-1.5">
          <span className="text-sm font-semibold text-gray-800">
            {rating}
          </span>

          <span className="text-sm text-yellow-500">
            ★★★★★
          </span>

          <span className="text-xs text-gray-400">
            Rating
          </span>
        </div>

        {/* Price */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ${discountedPrice}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${price}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          type="button"
          className="w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-gray-800"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
