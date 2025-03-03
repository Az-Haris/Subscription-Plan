import React from "react";
import Title from "./Title";
import ProductCard from "./PlanCard";
import { assets } from "../assets/assets";

const Plans = () => {
  const plans = [
    {
      productId: 1,
      name: "Amazon Prime Video",
      image: assets.Amazon,
      price: 300,
      regularPrice: 450,
      description:
        "Enjoy The Lord of the Rings: The Rings of Power and other Amazon Originals, popular movies, and hit TV shows — all available with your Prime membership.",
      features: [
        "Official",
        "Subscribed Email & Password",
        "1-12 Months",
        "All Devices",
      ],
    },
    {
      productId: 2,
      name: "Ullu Premium Subscription",
      image: assets.Ullu,
      price: 280,
      regularPrice: 350,
      description:
        "Ullu Entertainment website. A plethora of all your favourite nail-biting Mysteries, Thrillers, Romance, Drama and Humour.",
      features: [
        "Official",
        "2 Profile",
        "Subscribed Email & Password",
        "1-12 Months",
        "All Devices",
      ],
    },
    {
      productId: 3,
      name: "Netflix Subscription",
      image: assets.Netflix,
      price: 250,
      regularPrice: 300,
      description:
        "Netflix Subscription at the cheapest Price From The Infinite Click. Unlock a world of entertainment with a Netflix subscription! Dive into an extensive library of movies, TV shows.",
      features: [
        "Official",
        "Subscribed Email & Password",
        "1-12 Months",
        "All Devices",
      ],
    },
  ];
  return (
    <section className="container mx-auto px-3">
      <Title title={"All Plans"} description={"Choose the best plans"}></Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {plans.map((plan) => (
          <ProductCard key={plan.productId} planDetails={plan}></ProductCard>
        ))}
      </div>
    </section>
  );
};

export default Plans;
