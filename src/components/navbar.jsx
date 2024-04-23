import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white text-lg font-bold">My Website</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/buy" className="text-gray-300 hover:text-white">Buy</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/prediction" className="text-gray-300 hover:text-white">Prediction</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
