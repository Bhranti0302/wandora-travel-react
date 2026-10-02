import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import WishlistIcon from "../../assets/icons/wishlist.svg";
import UserIcon from "../../assets/icons/user.svg";
import chevronDownIcon from "../../assets/icons/chevron-down.svg";

function NavActions() {
  const location = useLocation();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  function handleUserMenuToggle() {
    setIsUserMenuOpen(!isUserMenuOpen);
  }

  const isWishlistActive = location.pathname === "/wishlist";

  return (
    <div className="relative grid grid-cols-2 rounded-full border border-gray-700 p-2">
      {/* Sliding background */}
      <div
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-gray-700 transition-transform duration-300 ease-in-out ${
          isWishlistActive ? "translate-x-2" : "translate-x-full"
        }`}
      />

      {/* Wishlist */}
      <Link
        to="/wishlist"
        className="relative z-10 rounded-full px-3 py-1 text-center"
      >
        <img src={WishlistIcon} alt="Wishlist" className="mx-auto h-5 w-5" />
      </Link>

      {/* User */}
      <button
        type="button"
        onClick={handleUserMenuToggle}
        className="relative flex items-center justify-center gap-1
        z-10 rounded-full px-3 py-1 text-center"
      >
        <img src={UserIcon} alt="User" className="mx-auto h-5 w-5" />
        <img src={chevronDownIcon} alt="Chevron Down" className=" h-2 w-2" />
      </button>

      {/* User Dropdown */}
      {isUserMenuOpen && (
        <div className="absolute right-0 top-full z-50 mt-3 w-40 rounded-lg bg-white p-2 shadow-lg">
          <Link
            to="/login"
            onClick={() => setIsUserMenuOpen(false)}
            className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            to="/signup"
            onClick={() => setIsUserMenuOpen(false)}
            className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavActions;
