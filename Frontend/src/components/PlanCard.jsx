import React from "react";
import { Link } from "react-router";

const PlanCard = ({planDetails}) => {
  const {name, image, price, regularPrice, description} = planDetails;
  return (
    <div className="shadow-xl transform hover:-translate-y-2 transition duration-500 border border-gray-400 rounded-lg">
      <figure className="aspect-3/2 overflow-hidden rounded-t-lg">
        <img
          className="object-cover h-full w-full transform hover:scale-105 transition duration-500"
          src={image}
          alt={name}
        />
      </figure>
      <div className="p-3 flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-2xl">{name}</h2>
          <p className="flex items-center gap-2 text-lg mt-1">{description.slice(0, 100)}...</p>
        </div>

        <div className="">
          <div className="flex items-center justify-between mt-3">
            <p className="space-x-1">
              <span className="text-xl font-semibold">৳ {price}</span>{" "}
              <span className="line-through">{regularPrice}</span>
              <span className="">/month</span>
            </p>
            <p>{Math.floor(((regularPrice-price)/regularPrice)*100)}% off</p>
          </div>
          <div className="mt-3 flex gap-3">
            <Link to={`plan/id`} className="w-full block text-center py-2 rounded-lg bg-amber-200">
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

export default PlanCard;
