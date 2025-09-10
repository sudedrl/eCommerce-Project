// src/components/Header.jsx
import { useState } from 'react';
import Logo from '../assets/navbar-brand.png';
import { LucideMenu, LucideX } from 'lucide-react'; // Menü ikonları

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Brand Logo" className="h-14 w-auto" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</a>
          <a href="/product" className="text-gray-700 hover:text-gray-900 font-medium">Product</a>
          <a href="/pricing" className="text-gray-700 hover:text-gray-900 font-medium">Pricing</a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
            {menuOpen ? <LucideX size={28} /> : <LucideMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <a href="/product" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Product</a>
          <a href="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Pricing</a>
          <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
        </nav>
      )}
    </header>
  );
}
