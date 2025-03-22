import React from 'react';
import Features from "../components/Features";
import Hero from '../components/Hero';
import Pricing from "../components/Pricing";
import Dashboard from '../components/Dashboard';


const Home = () => {

    return(
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4">
    <Hero /> 
    <Dashboard />
    <Features />
    <Pricing />
    
    </div>
  );
};
  export default Home;
  