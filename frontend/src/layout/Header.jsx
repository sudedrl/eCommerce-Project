// src/components/Header.jsx
import { useState } from "react";
import BandageLogo from "../assets/Bandage.png";
import IconUser from "../assets/icn_settings.png";
import IconCart from "../assets/icn_shopping_cart.png";
import IconSearch from "../assets/icn_search.png";
import IconMenu from "../assets/icn_menu.png";

export default function Header() {
  const handleClick = (action) => {
    console.log(`${action} clicked`);
  };

  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={BandageLogo} alt="Bandage" className="h-8 w-auto" />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleClick("User")}
            className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg"
          >
            <img src={IconUser} alt="User" className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleClick("Search")}
            className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg"
          >
            <img src={IconSearch} alt="Search" className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleClick("Cart")}
            className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg"
          >
            <img src={IconCart} alt="Cart" className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleClick("Menu")}
            className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg"
          >
            <img src={IconMenu} alt="Menu" className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Nav Row */}
      <div className="max-w-7xl mx-auto flex justify-center space-x-8 py-3">
        <button
          onClick={() => handleClick("Home")}
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Home
        </button>
        <button
          onClick={() => handleClick("Product")}
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Product
        </button>
        <button
          onClick={() => handleClick("Pricing")}
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Pricing
        </button>
        <button
          onClick={() => handleClick("Contact")}
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          Contact
        </button>
      </div>
    </header>
  );
}
