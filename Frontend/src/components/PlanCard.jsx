import React from "react";
import { Link } from "react-router";

const PlanCard = ({ planDetails }) => {
  const { planId, name, image, price, regularPrice, description } = planDetails;

  function redirectToWhatsApp() {
    const phoneNumber = "8801784410162"; // Your WhatsApp Business number (Bangladesh example)

    // Order details (you can replace these with dynamic values)
    const orderDetails = {
      Plan: name,
      Price: price,
    };

    // Construct message
    const message = `*Order Details:*
    *Plan:* ${orderDetails.Plan}
    *Price:* ${orderDetails.Price} BDT`;

    // Encode message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
  }
  return (
    <div className="shadow-xl transform hover:-translate-y-2 transition duration-500 border border-gray-400 rounded-lg">
      <div className="p-3 h-full flex flex-col justify-between">
        <div>
          <figure className="aspect-3/2 overflow-hidden rounded-t-lg">
            <img
              className="object-cover h-full w-full transform hover:scale-105 transition duration-500"
              src={image}
              alt={name}
            />
          </figure>
          <Link to={`plan/${planId}`}>
            <h2 className="font-bold text-2xl mt-3">{name}</h2>
            <p className="flex items-center gap-2 text-lg mt-1">
              {description.slice(0, 100)}...
            </p>
          </Link>
        </div>

        <div className="">
          <div className="flex items-center justify-between mt-3">
            <p className="space-x-1">
              <span className="text-xl font-semibold">৳ {price}</span>{" "}
              <span className="line-through">{regularPrice}</span>
              <span className="">/month</span>
            </p>
            <p>
              {Math.floor(((regularPrice - price) / regularPrice) * 100)}% off
            </p>
          </div>
          <div className="mt-3 flex gap-3">
            <Link
              to={`plan/${planId}`}
              state={planDetails}
              className="w-full block text-center py-2 rounded-lg bg-amber-200"
            >
              See Details
            </Link>
            <button
              onClick={() => redirectToWhatsApp()}
              className="w-full block text-center py-2 rounded-lg bg-amber-200 cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
