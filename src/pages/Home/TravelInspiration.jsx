import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Compass,
  MapPin,
  Star,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react";

const destinations = [
  {
    id: 1,
    title: "Spiti Valley",
    subtitle: "Cold desert valleys & ancient monasteries",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
    location: "Himachal Pradesh, India",
    rating: 4.9,
    description:
      "Discover dramatic mountain landscapes, turquoise rivers, remote villages, and centuries-old monasteries.",
  },

  {
    id: 2,
    title: "Meghalaya",
    subtitle: "Living root bridges & misty forests",
    image:
      "https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=1000&q=80",
    location: "Northeast India",
    rating: 4.9,
    description:
      "Walk through mist-covered forests, living root bridges, hidden waterfalls, and peaceful mountain villages.",
  },

  {
    id: 3,
    title: "Laitlum Canyon",
    subtitle: "Silent cliffs above the clouds",
    image:
      "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=1000&q=80",
    location: "Meghalaya, India",
    rating: 4.8,
    description:
      "Escape the crowds and experience dramatic green cliffs overlooking deep valleys and distant villages.",
  },

  {
    id: 4,
    title: "Ziro Valley",
    subtitle: "Rice fields & Apatani villages",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
    location: "Arunachal Pradesh, India",
    rating: 4.9,
    description:
      "Explore peaceful rice fields, pine forests, and the unique culture of the Apatani people.",
  },

  {
    id: 5,
    title: "Tawang",
    subtitle: "Monasteries above the clouds",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Tawang%20Monastery%2C%20Arunachal%20Pradesh.jpg",
    location: "Arunachal Pradesh, India",
    rating: 4.9,
    description:
      "Discover ancient monasteries, snow-covered mountains, high-altitude lakes, and remote Himalayan landscapes.",
  },

  {
    id: 6,
    title: "Mawlynnong",
    subtitle: "A quiet village in the Khasi hills",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
    location: "Meghalaya, India",
    rating: 4.8,
    description:
      "Experience a peaceful Khasi village surrounded by lush greenery, bamboo bridges, and rolling hills.",
  },

  {
    id: 7,
    title: "Majuli",
    subtitle: "Island life on the Brahmaputra",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
    location: "Assam, India",
    rating: 4.8,
    description:
      "Discover India's river island culture, traditional villages, monasteries, and beautiful rural landscapes.",
  },

  {
    id: 3,
    title: "Langza",
    subtitle: "A village beneath the Milky Way",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Milkyway_with_Buddha_Statue_from_Langza_%2848314645486%29.jpg",
    location: "Spiti Valley, Himachal Pradesh, India",
    rating: 4.9,
    description:
      "A remote Himalayan village famous for its giant Buddha statue, dramatic landscapes, and breathtaking night skies.",
  },

  {
    id: 7,
    title: "Mussoorie",
    subtitle: "The hills come alive after dark",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Mussoorie_at_night.jpg",
    location: "Uttarakhand, India",
    rating: 4.8,
    description:
      "Experience glowing hillside views, winding mountain roads, and the peaceful charm of Mussoorie after sunset.",
  },

  {
    id: 8,
    title: "Hanle",
    subtitle: "India's gateway to the cosmos",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/IAO-Hanle-high_energy_gamma-ray_telescope-AtNight.jpg",
    location: "Ladakh, India",
    rating: 5.0,
    description:
      "Discover one of India's most extraordinary stargazing destinations, home to the Indian Astronomical Observatory and spectacular dark skies.",
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === destinations.length - 1 ? 0 : prev + 1,
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Auto-play
  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const getCardStyle = (index) => {
    const total = destinations.length;

    // Calculate relative distance from current index
    let diff = (index - currentIndex + total) % total;

    if (diff > total / 2) {
      diff -= total;
    }

    // Center card
    if (diff === 0) {
      return {
        transform: "translateX(0px) scale(1)",
        zIndex: 30,
        opacity: 1,
        filter: "brightness(1)",
        pointerEvents: "auto",
      };
    }

    // Left card
    else if (diff === -1 || diff === total - 1) {
      return {
        transform: "translateX(-115%) scale(0.85)",
        zIndex: 20,
        opacity: 0.85,
        filter: "brightness(0.9)",
        pointerEvents: "auto",
      };
    }

    // Right card
    else if (diff === 1 || diff === -(total - 1)) {
      return {
        transform: "translateX(115%) scale(0.85)",
        zIndex: 20,
        opacity: 0.85,
        filter: "brightness(0.9)",
        pointerEvents: "auto",
      };
    }

    // Far left
    else if (diff <= -2) {
      return {
        transform: "translateX(-220%) scale(0.7)",
        zIndex: 10,
        opacity: 0.4,
        filter: "brightness(0.7)",
        pointerEvents: "none",
      };
    }

    // Far right
    else {
      return {
        transform: "translateX(220%) scale(0.7)",
        zIndex: 10,
        opacity: 0.4,
        filter: "brightness(0.7)",
        pointerEvents: "none",
      };
    }
  };

  return (
    <div className="h-[80vh] bg-gray-300 text-slate-900 flex flex-col justify-between font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Main Hero & Slider Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 max-w-7xl mx-auto w-full">
        {/* Title & Subtitle */}
        <div className="text-center mb-12 space-y-3 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Travel Inspiration
          </h1>

          <p className="text-base md:text-lg text-slate-600 font-normal">
            Discover places that spark your next adventure.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl h-[420px] md:h-[480px] flex items-center justify-center overflow-hidden my-4">
          {/* Cards Track */}
          <div className="relative w-full max-w-sm md:max-w-md h-full flex items-center justify-center">
            {destinations.map((item, index) => {
              const style = getCardStyle(index);
              const isCenter = index === currentIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  style={style}
                  className={`absolute w-[280px] md:w-[360px] h-[380px] md:h-[440px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-700 ease-out group ${
                    isCenter
                      ? "ring-4 ring-white/80 ring-offset-2 ring-offset-indigo-500/20"
                      : ""
                  }`}
                >
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/10" />

                  {/* Top Badge */}
                  <div className="absolute top-6 inset-x-0 flex justify-center">
                    <div className="px-6 py-2 rounded-xl backdrop-blur-md bg-white/15 border border-white/40 shadow-lg text-white font-semibold text-lg md:text-xl tracking-wide">
                      {item.title}
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div
                    className={`absolute bottom-0 inset-x-0 p-6 text-white transition-all duration-500 ${
                      isCenter
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-indigo-200 text-xs font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5" />

                      <span>{item.location}</span>

                      <span className="ml-auto flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />

                        <span className="text-white font-bold">
                          {item.rating}
                        </span>
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-slate-200 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Navigation Dots */}
          <div className="flex items-center gap-2 px-2">
            {destinations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? "w-6 h-2 bg-gray-800"
                    : "w-2 h-2 bg-slate-400 hover:bg-slate-800"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Autoplay Button */}
          <button
            onClick={() => setIsAutoPlaying((prev) => !prev)}
            className={`h-12 px-4 rounded-xl border shadow-md flex items-center gap-2 transition-all active:scale-95 ${
              isAutoPlaying
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
            }`}
            aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}

            <span className="text-sm font-medium">
              {isAutoPlaying ? "Pause" : "Autoplay"}
            </span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <div></div>
    </div>
  );
}
