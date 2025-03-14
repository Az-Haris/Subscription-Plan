import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "OTT Plans",
      image: assets.OTT,
      link: "/ott-plans",
      description:
        "Get guidance from certified trainers with years of experience.",
    },
    {
      id: 2,
      name: "Brilliant Recharge",
      image: assets.Brilliant,
      link: "/brilliant-recharge",
      description:
        "Get guidance from certified trainers with years of experience.",
    },
  ];
  return (
    <div className="container mx-auto px-3 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
      {categories.map((category) => (
        <Link key={category.id}
          to={category.link}
          className="bg-background dark:bg-background-dark border border-accent dark:border-accent-dark p-2 md:p-5 rounded-lg hover:shadow-xl"
        >
          <img src={category.image} className="w-16 md:w-24 rounded-full" alt="" />
          <h3 className="md:text-xl font-semibold dark:text-gray-300 mt-3">
            {category.name}
          </h3>
          <p className="mt-2 text-xs dark:text-gray-400">
            {category.description}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Category;
