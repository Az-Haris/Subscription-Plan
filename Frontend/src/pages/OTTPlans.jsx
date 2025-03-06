import React, { useEffect, useState } from "react";
import PlanCard from "../components/PlanCard";
import ScrollToTop from "../components/ScrollToTop";

const OTTPlans = () => {
  const [plans, setPlans] = useState([]);
  
    useEffect(()=>{
      fetch("OttPlans.json")
      .then(response => response.json())
      .then(data => setPlans(data))
    },[])
  return (
    <div className=" text-gray-800">
      <ScrollToTop></ScrollToTop>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 md:py-16 px-3 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Best OTT Plans</h1>
        <p className="mt-4 text-xs md:text-lg max-w-xl mx-auto">
          Empowering individuals to achieve their fitness goals through expert
          guidance and an inspiring community.
        </p>
      </section>

      {/* Plans */}
      <section className="container mx-auto px-3 mt-5 md:mt-10">
        

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {plans.map((plan) => (
            <PlanCard key={plan.planId} planDetails={plan}></PlanCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OTTPlans;
