import { Link } from "react-router-dom";
import BannerImage from "../../assets/images/Banner-image.png";

function BannerSection() {
  return (
    <div
      className="relative grid h-[80vh] w-full grid-cols-1 bg-cover bg-center md:grid-cols-[65%_35%] lg:grid-cols-2"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center p-16 text-center text-white md:items-start md:text-left lg:p-[5rem]">
        <h1 className="mb-4 text-4xl font-bold tracking-wide md:text-5xl lg:mb-8 lg:pr-12 lg:text-7xl">
          UNVEIL THE <span className="color-primary">EARTH'S SECRETS</span>
        </h1>

        <p className="mb-6 pr-0 text-[1.1rem] color-gray md:pr-8 lg:mb-8 lg:pr-16 lg:text-2xl">
          Curated expeditions to the world's most hidden wonders, discovering
          breathtaking destinations, rich cultures, and unforgettable
          experiences beyond the ordinary.
        </p>

        <Link
          to="/destinations"
          className="rounded bg-secondary px-6 py-2 text-xl font-semibold text-white transition-colors duration-300 hover:bg-[var(--color-primary)] lg:text-2xl"
        >
          Explore
        </Link>
      </div>

      {/* Right Section */}
      <div>{/* Right-side content will come here */}</div>
    </div>
  );
}

export default BannerSection;
