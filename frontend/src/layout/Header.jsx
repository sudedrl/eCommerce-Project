// src/components/Header.jsx
import { useState } from "react";
import Logo from "../assets/navbar_nav.png";
import IconUser from "../assets/icn_settings.png";
import IconCart from "../assets/icn_shopping_cart.png";
import IconSearch from "../assets/icn_search.png";
import IconMenu from "../assets/icn_menu.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (action) => {
    console.log(`${action} clicked`);
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      {/* Navbar üstte */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Brand Logo" className="h-14 w-auto" />
        </div>

        {/* Desktop Menü */}
        <div className="hidden md:flex items-center space-x-4">
          <button onClick={() => handleClick("Profile")}>
            <img src={IconUser} alt="User" className="h-6 w-6" />
          </button>
          <button onClick={() => handleClick("Search")}>
            <img src={IconSearch} alt="Search" className="h-6 w-6" />
          </button>
          <button onClick={() => handleClick("Cart")}>
            <img src={IconCart} alt="Cart" className="h-6 w-6" />
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src={IconMenu} alt="Menu" className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menü Butonu */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src={IconMenu} alt="Menu" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile açılır menü */}
      {menuOpen && (
        <div className="md:hidden absolute top-full right-0 w-48 bg-white shadow-lg border border-gray-200 rounded-md py-2 flex flex-col space-y-2">
          <button onClick={() => handleClick("Profile")} className="px-4 py-2 text-left hover:bg-gray-100">Profile</button>
          <button onClick={() => handleClick("Search")} className="px-4 py-2 text-left hover:bg-gray-100">Search</button>
          <button onClick={() => handleClick("Cart")} className="px-4 py-2 text-left hover:bg-gray-100">Shop</button>
          <button onClick={() => handleClick("Settings")} className="px-4 py-2 text-left hover:bg-gray-100">Settings</button>
        </div>
      )}
    </header>
  );
}
