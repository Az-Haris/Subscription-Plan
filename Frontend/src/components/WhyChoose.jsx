import React from 'react';
import { assets } from '../assets/assets';
import Title from './Title';

const WhyChoose = () => {
    const features = [
        {
          title: "🚀 Affordable & Exclusive Deals",
          description: "💰 Get the best subscription plans at unbeatable prices! Enjoy premium streaming without breaking the bank.",
          image: assets.Money,
        },
        {
          title: "⚡ Instant Activation",
          description:
            "⏳ No waiting, no delays! Get your subscription activated instantly after purchase.",
          image: assets.Clock,
        },
        {
          title: "🌍 Access Global & Local Content",
          description: "🎬 Watch Hollywood, Bollywood, Bangla, and international content on platforms like Netflix, Hoichoi, Bongo, and more.",
          image: assets.Global,
        },
        {
          title: "🔒 100% Secure & Reliable",
          description:
            "🔐 We ensure safe transactions and provide 100% working subscriptions with secure payments.",
          image: assets.Secure,
        },
        {
          title: "📞 24/7 Customer Support",
          description:
            "📩 Need help? Our expert team is available round-the-clock for any queries or issues.",
          image: assets.Support,
        },
        {
          title: "✅ Join Thousands of Happy Customers Today!",
          description:
            "📢 Subscribe Now & Enjoy Unlimited Entertainment!",
          image: assets.Team,
        },
      ];
      return (
        <div className="container mx-auto px-3">
          <Title
            title={"Why Choose Us?"}
            description={
              "Empowering fitness journeys with personalized plans, community, and guidance."
            }
          ></Title>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
            {features.map((feature, idx) => (
              <div key={idx} className="hover:shadow-2xl p-5 space-y-4 border border-gray-400 rounded-lg">
                <div className="relative flex items-center justify-between">
                  <img src={feature.image} className="w-20" alt="Feature" />
                  <p className="absolute right-0 text-9xl font-bold text-gray-200 dark:text-gray-700">{idx+1}</p>
                </div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {feature.title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default WhyChoose;