import { Link } from "react-router-dom";

function NavLinks({ onLinkClick, mobile = false }) {
  const links = [
    { text: "Home", href: "/" },
    { text: "Destinations", href: "/destinations" },
    { text: "Packages", href: "/packages" },
    { text: "Trip Planner", href: "/trip-planner" },
  ];

  return (
    <div className={mobile ? "flex gap-4" : "flex items-center gap-6"}>
      {links.map((link) => {
        return (
          <Link
            key={link.text}
            to={link.href}
            onClick={onLinkClick}
            className={
              mobile
                ? "text-gray-800 transition-colors duration-300 hover:text-gray-500"
                : "text-white transition-colors duration-300 hover:text-gray-400"
            }
          >
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;
