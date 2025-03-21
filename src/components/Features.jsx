import React from 'react';
import { BarChart2, Activity, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
    title: 'Real-Time Analytics',
    description: 'Get live insights and track your business performance in real-time.',
  },
  {
    icon: <Activity className="w-8 h-8 text-green-600" />,
    title: 'Smart Reports',
    description: 'Generate smart, automated reports to understand trends and patterns.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
    title: 'Secure & Reliable',
    description: 'All your data is encrypted and backed by enterprise-grade security.',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Powerful Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
