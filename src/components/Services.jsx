import {
  Plane,
  MapPin,
  Route,
  RefreshCw,
  Users,
  CarTaxiFront,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Comfortable and timely airport pickup and drop services for a stress-free journey.",
  },
  {
    icon: MapPin,
    title: "Local Taxi",
    description:
      "Convenient city rides for shopping, office visits, meetings and everyday travel.",
  },
  {
    icon: Route,
    title: "Outstation Trips",
    description:
      "Travel comfortably to nearby cities and destinations with reliable outstation cabs.",
  },
  {
    icon: RefreshCw,
    title: "One Way & Round Trip",
    description:
      "Choose a flexible one-way or round-trip taxi option according to your travel plan.",
  },
  {
    icon: Users,
    title: "Corporate Travel",
    description:
      "Professional transportation solutions for employees, meetings and business travel.",
  },
  {
    icon: CarTaxiFront,
    title: "Customized Rides",
    description:
      "Plan your journey your way with flexible routes, timings and vehicle options.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-slate-50
        px-5
        py-24
        sm:py-28
      "
    >
      {/* Background Decoration */}
      <div
        className="
          absolute
          -right-40
          top-20
          h-80
          w-80
          rounded-full
          bg-amber-100
          blur-3xl
          opacity-60
        "
      />

      <div
        className="
          absolute
          -left-40
          bottom-20
          h-80
          w-80
          rounded-full
          bg-blue-100
          blur-3xl
          opacity-50
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <span
            className="
              inline-flex
              rounded-full
              bg-amber-100
              px-4
              py-2
              text-xs
              font-extrabold
              uppercase
              tracking-[0.2em]
              text-amber-700
            "
          >
            Our Services
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
            Travel Made
            <span className="text-amber-500"> Simple</span>
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-slate-600
              sm:text-lg
            "
          >
            From quick city rides to long-distance journeys,
            we provide comfortable taxi services designed around
            your travel needs.
          </p>
        </div>

        {/* Service Cards */}
        <div
          className="
            mt-14
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-amber-200
                  hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
                "
              >
                {/* Animated Background Circle */}
                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-36
                    w-36
                    rounded-full
                    bg-amber-100
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:scale-150
                    group-hover:opacity-100
                  "
                />

                {/* Card Number */}
                <span
                  className="
                    absolute
                    right-6
                    top-6
                    text-xs
                    font-black
                    text-slate-200
                    transition
                    duration-300
                    group-hover:text-amber-200
                  "
                >
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="
                    relative
                    grid
                    h-14
                    w-14
                    place-items-center
                    rounded-2xl
                    bg-slate-950
                    text-amber-400
                    transition-all
                    duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                    group-hover:bg-amber-400
                    group-hover:text-slate-950
                  "
                >
                  <Icon size={25} />
                </div>

                {/* Content */}
                <div className="relative mt-6">

                  <h3
                    className="
                      text-xl
                      font-black
                      text-slate-900
                      transition-colors
                      duration-300
                      group-hover:text-amber-600
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-500
                    "
                  >
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-slate-900
                    "
                  >
                    <span>Learn More</span>

                    <ArrowUpRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-amber-500
                      "
                    />
                  </div>
                </div>

                {/* Bottom Hover Line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-amber-400
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-3xl
            bg-slate-950
            px-7
            py-7
            sm:flex-row
            sm:px-10
          "
        >
          <div>
            <h3 className="text-xl font-black text-white">
              Need a ride for your next journey?
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Call us and discuss your travel requirements.
            </p>
          </div>

          <a
            href="tel:+919999999999"
            className="
              inline-flex
              shrink-0
              items-center
              gap-2
              rounded-xl
              bg-amber-400
              px-5
              py-3
              text-sm
              font-extrabold
              text-slate-950
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-amber-300
              hover:shadow-lg
              hover:shadow-amber-400/20
            "
          >
            Call Now
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;