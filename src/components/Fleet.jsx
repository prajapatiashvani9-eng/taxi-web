import {
  Users,
  BriefcaseBusiness,
  ArrowUpRight,
  CarFront,
} from "lucide-react";

const fleet = [
  {
    name: "Sedan",
    description: "Comfortable rides for everyday city and outstation travel.",
    passengers: "4 Passengers",
    luggage: "2 Bags",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "SUV",
    description: "Spacious and comfortable travel for families and groups.",
    passengers: "6 Passengers",
    luggage: "3 Bags",
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Premium Cab",
    description: "A refined travel experience for business and special journeys.",
    passengers: "4 Passengers",
    luggage: "3 Bags",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
  },
];

function Fleet() {
  return (
    <section
      id="fleet"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-24
        sm:py-28
      "
    >
      {/* Background Decoration */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-amber-100/60
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div className="max-w-2xl">

            <span
              className="
                inline-flex
                rounded-full
                bg-slate-100
                px-4
                py-2
                text-xs
                font-extrabold
                uppercase
                tracking-[0.2em]
                text-slate-600
              "
            >
              Our Fleet
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-black
                tracking-tight
                text-slate-900
                sm:text-4xl
                lg:text-5xl
              "
            >
              Choose the Right
              <span className="text-amber-500"> Ride</span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-slate-600
              "
            >
              Travel comfortably with vehicle options suited
              for solo trips, families, groups and premium
              business travel.
            </p>
          </div>

          {/* Small Badge */}
          <div
            className="
              hidden
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-5
              py-4
              lg:flex
            "
          >
            <div
              className="
                grid
                h-11
                w-11
                place-items-center
                rounded-xl
                bg-amber-400
                text-slate-950
              "
            >
              <CarFront size={22} />
            </div>

            <div>
              <p className="text-sm font-black text-slate-900">
                Comfortable Fleet
              </p>

              <p className="text-xs text-slate-500">
                Clean • Reliable • Well Maintained
              </p>
            </div>
          </div>
        </div>

        {/* Fleet Cards */}
        <div
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-3
          "
        >
          {fleet.map((vehicle, index) => (
            <div
              key={vehicle.name}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                bg-slate-950
                shadow-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
            >
              {/* Image */}
              <div className="relative h-[280px] overflow-hidden">

                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Dark Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-slate-950
                    via-slate-950/20
                    to-transparent
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute
                    left-5
                    top-5
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    px-3
                    py-1.5
                    text-xs
                    font-black
                    text-white
                    backdrop-blur-md
                  "
                >
                  0{index + 1}
                </span>

                {/* Top Right Arrow */}
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-full
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover:rotate-45
                    group-hover:bg-amber-400
                    group-hover:text-slate-950
                  "
                >
                  <ArrowUpRight size={20} />
                </div>

                {/* Vehicle Name */}
                <div className="absolute bottom-5 left-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    Available
                  </p>

                  <h3 className="mt-1 text-3xl font-black text-white">
                    {vehicle.name}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">

                <p className="text-sm leading-6 text-slate-400">
                  {vehicle.description}
                </p>

                {/* Vehicle Details */}
                <div className="mt-6 grid grid-cols-2 gap-3">

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-3
                      py-3
                    "
                  >
                    <Users
                      size={17}
                      className="text-amber-400"
                    />

                    <span className="text-xs font-semibold text-slate-300">
                      {vehicle.passengers}
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-3
                      py-3
                    "
                  >
                    <BriefcaseBusiness
                      size={17}
                      className="text-amber-400"
                    />

                    <span className="text-xs font-semibold text-slate-300">
                      {vehicle.luggage}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/10
                    px-4
                    py-3
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    hover:border-amber-400
                    hover:bg-amber-400
                    hover:text-slate-950
                  "
                >
                  Enquire About This Cab

                  <ArrowUpRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div
          className="
            mt-10
            text-center
          "
        >
          <p className="text-sm text-slate-500">
            Vehicle availability may vary depending on the
            route and travel requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Fleet;