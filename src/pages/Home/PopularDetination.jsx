import destinations from "../../data/destination.json";

function PopularDestination() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 px-4 py-24">
      {/* Title & Subtitle */}
      <div className="mb-12 max-w-2xl space-y-3 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          Popular Destinations
        </h2>

        <p className="text-base text-gray-600 md:text-lg">
          Explore beautiful destinations around the world.
        </p>
      </div>

      {/* Destination Cards */}
      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-6xl pt-8">
        {destinations
          .filter((destination) => destination.rating > 4.5)
          .slice(0, 6)
          .map((destination) => (
            <div
              key={destination.id}
              className="group relative flex h-[420px] flex-col justify-end overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl"
            >
              {/* Background Image */}
              <img
                src={destination.images.main}
                alt={destination.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Floating Content Box */}
              <div className="relative m-3 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm">
                {/* Location */}
                <div className="mb-1 flex items-center gap-1 text-xs font-semibold text-rose-500">
                  <span>📍</span>
                  <span>{destination.location.name}</span>
                </div>

                {/* Destination Name */}
                <h4 className="mb-1 text-lg font-bold text-gray-900">
                  {destination.name}
                </h4>

                {/* Description */}
                <p className="mb-3 line-clamp-2 text-xs text-gray-600">
                  {destination.about}
                </p>

                {/* Rating + Price */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="text-xs font-medium text-gray-500">
                    ⭐ {destination.rating}
                  </span>

                  <span className="rounded-md bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                    {destination.travelInfo.approximateBudget.split(" - ")[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PopularDestination;
