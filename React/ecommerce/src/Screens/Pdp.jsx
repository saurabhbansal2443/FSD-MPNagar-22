import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import PdpSkeleton from "../Skeleton/PdpSkeleton";

const Pdp = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(productData);

  async function getData() {
    if (!id) return;
    try {
      setLoading(true);
      let apiData = await fetch(`https://dummyjson.com/products/${id}`);
      let data = await apiData.json();
      setProductData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(
    function () {
      getData();
    },
    [id],
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {loading ? (
        <PdpSkeleton />
      ) : productData ? (
        <div className="mx-auto max-w-7xl px-5 py-10">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-gray-500">
            Home / Products /{" "}
            <span className="capitalize text-gray-900">
              {productData.category}
            </span>
          </div>

          {/* Main Product Section */}
          <div className="grid grid-cols-1 gap-10 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">
            {/* Product Images */}
            <div>
              <div className="relative flex h-[420px] items-center justify-center rounded-xl bg-gray-50 p-8">
                <span className="absolute left-5 top-5 rounded-md bg-red-500 px-3 py-1.5 text-xs font-semibold text-white">
                  {Math.round(productData.discountPercentage)}% OFF
                </span>

                <img
                  src={productData.thumbnail}
                  alt={productData.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Image Thumbnails */}
              <div className="mt-4 flex gap-3 overflow-x-auto">
                {productData.images?.map((image, index) => (
                  <div
                    key={index}
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-2"
                  >
                    <img
                      src={image}
                      alt={productData.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="flex flex-col">
              {/* Category */}
              <span className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                {productData.brand || productData.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                {productData.title}
              </h1>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2">
                <span className="font-semibold text-gray-800">
                  {productData.rating}
                </span>

                <span className="text-lg tracking-wide text-yellow-500">
                  ★★★★★
                </span>

                <span className="text-sm text-gray-500">Customer Rating</span>
              </div>

              <div className="my-6 border-t border-gray-100" />

              {/* Price */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  $
                  {(
                    productData.price -
                    (productData.price * productData.discountPercentage) / 100
                  ).toFixed(2)}
                </span>

                <span className="text-lg text-gray-400 line-through">
                  ${productData.price}
                </span>

                <span className="rounded-md bg-green-50 px-3 py-1 text-sm font-semibold text-green-700">
                  Save {Math.round(productData.discountPercentage)}%
                </span>
              </div>

              {/* Availability */}
              <div className="mt-5">
                <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  {productData.availabilityStatus}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-sm leading-7 text-gray-600">
                {productData.description}
              </p>

              {/* Shipping */}
              <div className="mt-6 space-y-3 rounded-xl bg-gray-50 p-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-lg">🚚</span>
                  {productData.shippingInformation}
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-lg">🛡️</span>
                  {productData.warrantyInformation}
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-lg">↩️</span>
                  {productData.returnPolicy}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-black px-6 py-4 font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  Add to Cart
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-4 font-semibold text-gray-800 transition-colors hover:bg-gray-100"
                >
                  <span className="text-xl">♡</span>
                  Wishlist
                </button>
              </div>

              {/* SKU */}
              <p className="mt-5 text-xs text-gray-400">
                SKU: {productData.sku}
              </p>
            </div>
          </div>

          {/* Additional Product Details */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Product Information
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-sm text-gray-500">Brand</p>
                <p className="mt-1 font-semibold text-gray-900">
                  {productData.brand || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="mt-1 font-semibold capitalize text-gray-900">
                  {productData.category}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Stock</p>
                <p className="mt-1 font-semibold text-gray-900">
                  {productData.stock} units
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Minimum Order</p>
                <p className="mt-1 font-semibold text-gray-900">
                  {productData.minimumOrderQuantity} units
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Weight</p>
                <p className="mt-1 font-semibold text-gray-900">
                  {productData.weight} g
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p className="mt-1 font-semibold text-gray-900">
                  {productData.availabilityStatus}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-20 text-center text-gray-500">
          Product not found.
        </div>
      )}
    </div>
  );
};

export default Pdp;
