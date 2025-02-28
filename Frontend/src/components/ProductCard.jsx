import React from "react";
import { Link } from "react-router";

const ProductCard = () => {
  return (
    <div className=" shadow-xl transform hover:-translate-y-2 transition duration-500 border border-gray-400 rounded-lg">
      <figure className="aspect-3/2 overflow-hidden rounded-t-lg">
        <img
          className="object-cover h-full w-full transform hover:scale-105 transition duration-500"
          src=""
          alt=""
        />
      </figure>
      <div className="p-3">
        <div>
          <h2 className="text-primary font-bold text-2xl">rtyrtyt</h2>
          <p className="flex items-center gap-2 text-lg mt-1">radgdffdf ytry try rty rty t</p>
        </div>

        <div>
          <div className="flex items-center justify-between mt-3">
            <p className="space-x-1">
              <span className="text-xl font-semibold">৳ 454</span>{" "}
              <span className="line-through">454</span>
            </p>
            <p>15% off</p>
          </div>
          <div className="mt-3 flex gap-3">
            <Link className="w-full block text-center py-2 rounded-lg bg-amber-200">
              See Details
            </Link>
            <Link className="w-full block text-center py-2 rounded-lg bg-amber-200">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
