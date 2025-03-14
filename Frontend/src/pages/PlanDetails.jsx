import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import ScrollToTop from "../components/ScrollToTop";
import { FaRegSquareCheck } from "react-icons/fa6";

const PlanDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const planDetails = location.state;

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
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 container mx-auto px-3 mt-5 md:mt-8">
        <div className="flex-1">
          <img className="w-full rounded-lg" src={image} alt="" />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="text-2xl text-primary dark:text-primary-dark font-semibold mt-5">৳ {price} /month</p>
          <p className="text-xl my-5">{description}</p>
          <ul className="mb-5 text-lg ml-5">
            {features.map((feature, idx) => (
              <p key={idx} className="flex items-center gap-2 mb-2">
                <FaRegSquareCheck className="text-accent"/>
                <li>{feature}</li>
              </p>
            ))}
          </ul>
          <button
            onClick={() => redirectToWhatsApp()}
            className="px-6 py-2 bg-accent text-black rounded-lg cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default PlanDetails;
