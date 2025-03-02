import React from "react";
import { Link } from "react-router";

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
    // <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-4">
    //   <div className="max-w-lg w-full bg-gray-800 rounded-2xl shadow-lg p-6">
    //     <div className="flex items-center space-x-4">
    //       <img src={plan.logo} alt={plan.name} className="w-16 h-16 rounded-lg" />
    //       <h2 className="text-2xl font-bold">{plan.name}</h2>
    //     </div>

    //     <p className="mt-4 text-lg text-gray-300">{plan.description}</p>

    //     <ul className="mt-4 space-y-2">
    //       {plan.features.map((feature, index) => (
    //         <li key={index} className="flex items-center space-x-2">
    //           <span className="text-yellow-400">✔</span>
    //           <span>{feature}</span>
    //         </li>
    //       ))}
    //     </ul>

    //     <div className="mt-6 text-xl font-semibold text-red-500">{plan.price}</div>

    //     <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition">
    //       Subscribe Now
    //     </button>
    //   </div>
    // </div>

    <div className="flex flex-col md:flex-row gap-10 container mx-auto px-3 mt-0 md:mt-5">
      <div>
        <img className="w-full rounded-lg" src={plan.logo} alt="" />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{plan.name}</h2>
        <p className="text-lg mt-3 mb-5">{plan.description}</p>
        <p className="text-2xl font-bold mb-3">{plan.price}</p>
        <button onClick={()=>redirectToWhatsApp()} className="px-6 py-2 bg-amber-300 rounded-lg cursor-pointer">Buy Now</button>
      </div>
    </div>
  );
};

export default PlanDetails;
