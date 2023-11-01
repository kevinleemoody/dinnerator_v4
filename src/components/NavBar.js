import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-yellow-300">
                    Dinnerator
        </Link>
                <div>
                    <Link to="/recipes" className="ml-4 hover:underline">
                        Recipes
          </Link>
                    <Link to="/about" className="ml-4 hover:underline">
                        About
          </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

