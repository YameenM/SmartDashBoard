import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);