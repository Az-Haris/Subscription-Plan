import React from "react";
import ScrollToTop from "../components/ScrollToTop";

const BrilliantRecharge = () => {
  const handleRecharge = (e) => {
    e.preventDefault();
    const number = e.target[0].value;
    const amount = e.target[1].value;
    

    const phoneNumber = "8801784410162"; // Your WhatsApp Business number (Bangladesh example)

    // Recharge details (you can replace these with dynamic values)
    const RechargeDetails = {
      Number: number,
      Amount: amount,
    };

    // Construct message
    const message = `*Recharge Details:*
    *Number:* ${RechargeDetails.Number}
    *Amount:* ${RechargeDetails.Amount} BDT`;

    // Encode message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
  };
  return (
    <div className=" text-gray-800">
      <ScrollToTop></ScrollToTop>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 md:py-16 px-3 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Brilliant Recharge</h1>
        <p className="mt-4 text-xs md:text-lg max-w-xl mx-auto">
          Empowering individuals to achieve their fitness goals through expert
          guidance and an inspiring community.
        </p>
      </section>

      {/* Recharge Form */}
      <section>
        <form
          onSubmit={handleRecharge}
          className="max-w-lg mx-auto mt-5 md:mt-10 border border-gray-400 rounded-lg p-5 shadow-xl"
        >
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Enter Brilliant Number</label>
            <input
              className="border border-gray-400 rounded-lg text-lg px-3 py-2"
              type="number"
              placeholder="Enter Brilliant Number"
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label className="font-semibold">Enter Amount</label>
            <input
              className="border border-gray-400 rounded-lg text-lg px-3 py-2"
              type="number"
              placeholder="Enter Amount"
            />
          </div>
          <button className="px-10 py-2 bg-amber-400 rounded-lg mt-5 cursor-pointer">
            Recharge
          </button>
        </form>
      </section>
    </div>
  );
};

export default BrilliantRecharge;
