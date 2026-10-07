import BackgroundImage from "../../assets/images/wcm.png";

function WhyChooseUs() {
  const benefits = [
    {
      id: 1,
      title: "✨ Curated Trips",
      para: "Handpicked trips for memorable journeys.",
    },
    {
      id: 2,
      title: "🗓️ Easy Planning",
      para: "Plan your trip easily, all in one place.",
    },
    {
      id: 3,
      title: "💰 Travel Made Simple",
      para: "Clear packages that fit your plans and budget.",
    },
    {
      id: 4,
      title: "🌍 Explore More",
      para: "Discover exciting destinations and experiences.",
    },
  ];

  return (
    <section
      className="relative flex min-h-[30rem] items-center justify-center bg-cover bg-center px-4 py-12"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative flex w-full max-w-5xl flex-col items-center">
        {/* Title & Subtitle */}
        <div className="mb-12 max-w-2xl space-y-3 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Why Choose Us?
          </h2>

          <p className="text-base text-gray-200 md:text-lg">
            Travel made simple, memorable, and stress-free.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="rounded-md border border-gray-300/60 bg-black/20 px-6 py-5 backdrop-blur-sm transition hover:bg-black/30"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>

              <p className="mt-2 text-base text-gray-200">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
