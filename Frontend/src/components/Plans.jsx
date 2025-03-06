import React, { useEffect, useState } from "react";
import Title from "./Title";
import PlanCard from "./PlanCard";

const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(()=>{
    fetch("OttPlans.json")
    .then(response => response.json())
    .then(data => setPlans(data))
  },[])

  return (
    <section className="container mx-auto px-3">
      <Title title={"Best OTT Plans"} description={"Choose the best plans"}></Title>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {plans.map((plan) => (
          <PlanCard key={plan.planId} planDetails={plan}></PlanCard>
        ))}
      </div>
    </section>
  );
};

export default Plans;
