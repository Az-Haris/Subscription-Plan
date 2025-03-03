import React from "react";
import { Link } from "react-router";
import { assets } from "../assets/assets";
import ScrollToTop from "../components/ScrollToTop";

const PlanDetails = () => {
  const plan = {
    name: "Netflix Premium",
    price: "BDT 999 / Month",
    description: "Enjoy Ultra HD streaming on up to 4 screens simultaneously.",
    features: [
      "4K Ultra HD & HDR",
      "Download & Watch Offline",
      "No Ads, Unlimited Streaming",
      "Up to 4 Screens",
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
  };


  function redirectToWhatsApp() {
    const phoneNumber = "8801784410162"; // Your WhatsApp Business number (Bangladesh example)
    
    // Order details (you can replace these with dynamic values)
    const orderDetails = {
        product: plan.name,
        price: 3000
    };

    // Construct message
    const message = `*Order Details:*
    *Plan:* ${orderDetails.product}
    *Price:* ${orderDetails.price} BDT`;

    // Encode message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
}

  return (

    <>
    <ScrollToTop />
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 container mx-auto px-3 mt-0 md:mt-5">
      <div className="flex-1">
        <img className="w-full rounded-lg" src={assets.Amazon} alt="" />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold">{plan.name}</h2>
        <p className="text-2xl font-semibold mt-5">{plan.price}</p>
        <p className="text-lg my-5">{plan.description}</p>
        <button onClick={()=>redirectToWhatsApp()} className="px-6 py-2 bg-amber-300 rounded-lg cursor-pointer">Buy Now</button>
      </div>
    </div>
    </>
  );
};

export default PlanDetails;
