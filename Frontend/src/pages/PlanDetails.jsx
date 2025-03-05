import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop";
import { CiSquareCheck } from "react-icons/ci";

const PlanDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const planDetails = location.state;
  console.log(location.state);

  useEffect(() => {
    if (!planDetails) {
      navigate("/");
    }
  }, [planDetails, navigate]);

  // If planDetails is null, prevent rendering
  if (!planDetails) return null;

  const { name, image, price, description, features } = planDetails;

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
    <>
      <ScrollToTop />
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 container mx-auto px-3 mt-0 md:mt-8">
        <div className="flex-1">
          <img className="w-full rounded-lg" src={image} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="text-2xl font-semibold mt-5">৳ {price} /month</p>
          <p className="text-xl my-5">{description}</p>
          <ul className="mb-5 text-lg">
            {features.map((feature) => (
              <>
                <CiSquareCheck />
                <li>{feature}</li>
              </>
            ))}
          </ul>
          <button
            onClick={() => redirectToWhatsApp()}
            className="px-6 py-2 bg-amber-300 rounded-lg cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default PlanDetails;
