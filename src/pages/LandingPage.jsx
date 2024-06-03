import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo.png'; // Adjust the path based on your file structure

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-t from-slate-50 to-indigo-200">
      <div className="text-center">
        <img src={logo} alt="Logo" className="mx-auto mb-4 h-32 w-32 max-w-full max-h-full" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Explainable Graph for Anti-Money Laundering
        </h1>
        <Link to="/graph">
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go to Graph
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;


