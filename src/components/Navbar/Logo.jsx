import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/Logo.png";

function Logo() {
  return (
    <Link to="/" className="flex h-20 w-20 items-center justify-center">
      <img
        src={LogoImage}
        alt="Wandora logo"
        className="h-full w-full object-contain"
      />
    </Link>
  );
}

export default Logo;
