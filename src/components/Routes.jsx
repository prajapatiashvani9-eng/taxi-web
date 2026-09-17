import {
  MapPin,
  ArrowRight,
  Navigation,
  Plane,
  Building2,
} from "lucide-react";

const routes = [
  {
    from: "Mumbai",
    to: "Pune",
    distance: "Popular Route",
    type: "Outstation",
  },
  {
    from: "Mumbai",
    to: "Nashik",
    distance: "Popular Route",
    type: "Outstation",
  },
  {
    from: "Mumbai",
    to: "Lonavala",
    distance: "Weekend Route",
    type: "Outstation",
  },
  {
    from: "Mumbai",
    to: "Shirdi",
    distance: "Long Distance",
    type: "Outstation",
  },
];

const serviceAreas = [
  "Mumbai",
  "Navi Mumbai",
  "Thane",
  "Panvel",
  "Kharghar",
  "Vashi",
  "Belapur",
  "Airoli",
  "Dombivli",
  "Kalyan",
  "Mira Road",
  "Bhandup",
];

function Routes() {
  return (
    <section
      id="routes"
      className="
        relative
        overflow-hidden
        bg-slate-950
        px-5
        py-24
        sm:py-28
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-amber-400/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-10
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-amber-400/20
              bg-amber-400/10
              px-4
              py-2
              text-xs
              font-extrabold
              uppercase
              tracking-[0.2em]
              text-amber-300
            "
          >
            <Navigation size={14} />
            Routes & Areas
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            We Take You
            <span className="text-amber-400"> Anywhere</span>
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-7
              text-slate-400
              sm:text-lg
            "
          >
            From local city rides to popular outstation
            destinations, travel comfortably on the routes
            that matter to you.
          </p>
        </div>

        {/* Popular Routes */}
        <div className="mt-14">

          <div className="mb-6 flex items-center gap-3">
            <div
              className="
                grid
                h-10
                w-10
                place-items-center
                rounded-xl
                bg-amber-400
                text-slate-950
              "
            >
              <Plane size={20} />
            </div>

            <div>
              <h3 className="text-xl font-black text-white">
                Popular Outstation Routes
              </h3>

              <p className="text-sm text-slate-500">
                Comfortable rides for your long journeys
              </p>
            </div>
          </div>

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {routes.map((route) => (
              <div
                key={`${route.from}-${route.to}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-5
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-amber-400/30
                  hover:bg-white/[0.07]
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    -right-10
                    -top-10
                    h-24
                    w-24
                    rounded-full
                    bg-amber-400/10
                    opacity-0
                    blur-2xl
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Route Type */}
                <span
                  className="
                    relative
                    inline-flex
                    rounded-full
                    bg-amber-400/10
                    px-3
                    py-1
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-wider
                    text-amber-300
                  "
                >
                  {route.type}
                </span>

                {/* Route */}
                <div className="relative mt-6">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        grid
                        h-9
                        w-9
                        shrink-0
                        place-items-center
                        rounded-full
                        bg-slate-800
                        text-amber-400
                        transition
                        duration-300
                        group-hover:scale-110
                      "
                    >
                      <MapPin size={17} />
                    </div>

                    <div className="h-px flex-1 border-t border-dashed border-slate-700" />

                    <div
                      className="
                        grid
                        h-9
                        w-9
                        shrink-0
                        place-items-center
                        rounded-full
                        bg-amber-400
                        text-slate-950
                        transition
                        duration-300
                        group-hover:scale-110
                      "
                    >
                      <Navigation size={16} />
                    </div>

                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="font-bold text-white">
                      {route.from}
                    </span>

                    <ArrowRight
                      size={16}
                      className="
                        text-slate-600
                        transition
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-amber-400
                      "
                    />

                    <span className="font-bold text-white">
                      {route.to}
                    </span>
                  </div>

                  <p className="mt-3 text-xs text-slate-500">
                    {route.distance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16">

          <div className="mb-6 flex items-center gap-3">
            <div
              className="
                grid
                h-10
                w-10
                place-items-center
                rounded-xl
                bg-white/10
                text-amber-400
              "
            >
              <Building2 size={20} />
            </div>

            <div>
              <h3 className="text-xl font-black text-white">
                Areas We Serve
              </h3>

              <p className="text-sm text-slate-500">
                Local taxi services across major areas
              </p>
            </div>
          </div>

          <div
            className="
              flex
              flex-wrap
              gap-3
            "
          >
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-slate-300
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-amber-400/30
                  hover:bg-amber-400
                  hover:text-slate-950
                "
              >
                <MapPin
                  size={15}
                  className="
                    text-amber-400
                    transition
                    duration-300
                    group-hover:text-slate-950
                  "
                />

                {area}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-14
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-gradient-to-r
            from-white/[0.06]
            to-white/[0.02]
            p-7
            sm:p-9
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
                Don't see your destination?
              </p>

              <h3 className="mt-2 text-2xl font-black text-white">
                Tell us where you want to go.
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Contact us to check availability for your
                preferred route.
              </p>
            </div>

            <a
              href="#contact"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
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
              Check Your Route
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Routes;