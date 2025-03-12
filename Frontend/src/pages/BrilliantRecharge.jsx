import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const BrilliantRecharge = () => {
  const axiosPublic = useAxiosPublic();

  const { data: rechargeHistory = [] } = useQuery({
    queryKey: ["rechargeHistory"],
    queryFn: async () => {
      const response = await axiosPublic.get("/getRecharge");
      return response.data;
    },
  });



  const handleRecharge = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    const amount = e.target.amount.value;

    const paymentMethod = e.target.paymentMethod.value;
    const last4Digit = e.target.last4Digit.value;

    const phoneNumber = "8801784410162"; // Your WhatsApp Business number (Bangladesh example)

    // Recharge details (you can replace these with dynamic values)
    const RechargeDetails = {
      Number: number,
      Amount: amount,
      PaymentMethod: paymentMethod,
      Last4Digit: last4Digit,
      Status: "Success",
      Date: new Date().toLocaleString(),
    };

    // Construct message
    const message = `*Recharge Details:*
    *Number:* ${RechargeDetails.Number}
    *Amount:* ${RechargeDetails.Amount} BDT
    *Payment Method:* ${RechargeDetails.PaymentMethod}
    *Last 4 Digit:* ${RechargeDetails.Last4Digit}`;

    // Encode message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    axiosPublic.post("/saveRecharge", RechargeDetails).then((res) => {
      console.log(res.data);
    });

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");

    e.target[0].value = "";
    e.target[1].value = "";
    e.target.paymentMethod.value = "";
    e.target.last4Digit.value = "";
    document.getElementById("paymentNumber").classList.remove("bg-green-200");
  };

  const copyNumber = () => {
    const number = "01784410162";
    navigator.clipboard.writeText(number);

    document.getElementById("paymentNumber").classList.add("bg-green-200");
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
            <label className="font-semibold">Brilliant or Mobile Number</label>
            <input
              className="border border-gray-400 rounded-lg text-lg px-3 py-2"
              type="tel"
              name="number"
              pattern="[0-9]{11}" // 11 digit number
              autoComplete="tel"
              placeholder="09********* / 01*********"
              required
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label className="font-semibold">Enter Amount</label>
            <input
              className="border border-gray-400 rounded-lg text-lg px-3 py-2"
              type="number"
              name="amount"
              min="20"
              placeholder="৳0 Enter Amount"
              required
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <label className="font-semibold">Send Money Number</label>
            <div className="flex gap-2 items-center">
              <input
                className="flex-1 border border-gray-400 rounded-lg text-lg px-3 py-2"
                type="text"
                id="paymentNumber"
                value="01784410162"
                readOnly
                placeholder="01784410162"
                required
              />
              <button
                onClick={() => copyNumber()}
                type="button"
                className="cursor-pointer py-2 bg-amber-300 px-4 rounded-lg"
              >
                Copy Number
              </button>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex-1 flex flex-col gap-2 mt-5">
              <label className="font-semibold">Payment Method</label>
              <select
                className="border border-gray-400 rounded-lg text-lg px-3 py-2"
                name="paymentMethod"
                required
              >
                {" "}
                <option value="">Payment Method</option>
                <hr />
                <option value="bKash">bKash</option>
                <option value="Rocket">Rocket</option>
                <option value="Nagad">Nagad</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <label className="font-semibold">Last 4 Digit</label>
              <input
                className="border border-gray-400 rounded-lg text-lg px-3 py-2"
                type="tel"
                name="last4Digit"
                pattern="[0-9]{4}" // 4 digit number
                placeholder="Last 4 Digit"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-10 py-2 w-full bg-amber-400 rounded-lg mt-5 cursor-pointer mx-auto block"
          >
            Recharge
          </button>
        </form>
      </section>

      {/* History */}
      <section className="container mx-auto px-3 mt-5 md:mt-10">
        <h2 className="text-2xl font-bold text-center">
          Latest Recharge History
        </h2>
        <table className="table-auto w-full mt-5 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="pl-3 py-2 border border-gray-400">Number</th>
              <th className="pl-3 py-2 border border-gray-400">Amount</th>
              <th className="pl-3 py-2 border border-gray-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {
              // Loop through the recharge history
              rechargeHistory.map((recharge) => (
                <tr key={recharge._id}>
                  <td className="pl-3 py-1 border border-gray-400">
                    {recharge.Number}
                  </td>
                  <td className="pl-3 py-1 border border-gray-400">৳ {recharge.Amount}</td>
                  <td className={`pl-3 py-1 border border-gray-400 ${recharge.Status === "Success" ? "bg-green-200" : "bg-red-200"}`}>
                    {recharge.Status}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default BrilliantRecharge;
