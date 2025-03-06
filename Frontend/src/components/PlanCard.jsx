import React from "react";
import { Link } from "react-router";

const PlanCard = ({ planDetails }) => {
  const { planId, name, image, price, regularPrice } = planDetails;

  // function redirectToWhatsApp() {
  //   const phoneNumber = "8801784410162"; // Your WhatsApp Business number (Bangladesh example)

  //   // Order details (you can replace these with dynamic values)
  //   const orderDetails = {
  //     Plan: name,
  //     Price: price,
  //   };

  //   // Construct message
  //   const message = `*Order Details:*
  //   *Plan:* ${orderDetails.Plan}
  //   *Price:* ${orderDetails.Price} BDT`;

  //   // Encode message
  //   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  //     message,
  //   )}`;

  //   // Open WhatsApp in a new tab
  //   window.open(whatsappURL, "_blank");
  // }


  return (
    <Link to={`plan/${planId}`} state={planDetails} className="transform hover:-translate-y-2 border border-gray-400 transition duration-500 rounded-lg">
      <div className="h-full flex flex-col justify-between">
        <div>
          <figure className="aspect-3/2 overflow-hidden rounded-t-lg">
            <img
              className="object-cover h-full w-full transform hover:scale-105 transition duration-500"
              src={image}
              alt={name}
            />
          </figure>
          <div className="p-3">
            <h2 className="md:text-lg font-semibold">{name}</h2>
            {/* <p className="flex items-center text-xs md:text-[16px] gap-2 mt-1">
              {description.slice(0, 100)}...
            </p> */}
          </div>
        </div>

        <div className="px-3 pb-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="space-x-1">
              <span className="md:text-xl font-semibold">৳ {price}</span>{" "}
              <span className="line-through">{regularPrice}</span>
              <span className="">/month</span>
            </p>
            <p>
              {Math.floor(((regularPrice - price) / regularPrice) * 100)}% off
            </p>
          </div>
          {/* <div className="mt-3 flex gap-3">
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
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default PlanCard;
