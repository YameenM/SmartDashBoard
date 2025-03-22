import React from 'react';
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9/mo",
      features: [
        "Access to dashboard",
        "Basic analytics",
        "Email support",
        "7-day free trial",
      ],
      isPopular: false,
    },
    {
      name: "Pro",
      price: "$19/mo",
      features: [
        "Everything in Basic",
        "Advanced analytics",
        "Export reports (CSV, PDF)",
        "Priority support",
        "7-day free trial",
      ],
      isPopular: true,
    },
    {
      name: "Premium",
      price: "$39/mo",
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "Custom integrations",
        "Dedicated account manager",
        "7-day free trial",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-gray-200 dark:bg-gray-700 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 dark:text-orange mb-4">Pricing Plans</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Choose a plan that fits your business needs. All plans include a 7-day free trial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative border rounded-2xl p-6 shadow-emerald-400 transition hover:shadow-lg bg-white dark:bg-gray-900 ${
                plan.isPopular ? "border-indigo-600" : "border-gray-500 dark:border-orange-100"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="text-3xl font-bold text-orange-600 mt-2">{plan.price}</p>

              <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full bg-indigo-600 hover:bg-orange-500 text-white py-2 rounded-xl transition">
                Start Free Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
