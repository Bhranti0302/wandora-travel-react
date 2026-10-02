import { useState } from "react";
import { useLocation } from "react-router-dom";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";

import MenuIcon from "../../assets/icons/menu.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if the current route is the home page
  const isHome = location.pathname === "/";

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isHome ? "bg-transparent" : "bg-gray-800"
      }`}
    >
      <div className="relative mx-auto flex items-center justify-between px-8 py-3">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <NavLinks />
        </div>

        {/* Actions */}
        <NavActions />

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={handleMenuToggle}
          className="rounded-md px-3 py-2 text-white md:hidden"
        >
          <img src={MenuIcon} alt="Menu" className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute right-0 top-[5.3rem] max-w-md rounded-lg border border-gray-300 bg-white p-4 shadow-lg md:hidden">
          <NavLinks onLinkClick={handleMenuClose} mobile />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
