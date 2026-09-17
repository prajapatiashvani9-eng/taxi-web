import {
  ShieldCheck,
  Clock3,
  BadgeIndianRupee,
  Headphones,
  Sparkles,
  MapPinned,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    description:
      "Travel with confidence with professional drivers and a reliable taxi service.",
  },
  {
    icon: Clock3,
    title: "On-Time Pickup",
    description:
      "We value your time and aim to provide timely pickup and drop services.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Transparent Pricing",
    description:
      "Clear fare information with no unnecessary surprises in your travel plan.",
  },
  {
    icon: Headphones,
    title: "Easy Support",
    description:
      "Reach us easily by phone or WhatsApp for route and travel enquiries.",
  },
  {
    icon: Sparkles,
    title: "Clean & Comfortable",
    description:
      "Enjoy a comfortable journey in well-maintained vehicles.",
  },
  {
    icon: MapPinned,
    title: "Flexible Routes",
    description:
      "Choose local or outstation travel according to your destination.",
  },
];

function WhyChooseUs() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-950
        px-5
        py-24
        sm:py-28
      "
    >
      {/* Background Grid */}
      <div className="hero-grid absolute inset-0 opacity-30" />

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-amber-400/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
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
            <Sparkles size={14} />
            Why Choose Us
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
            More Than Just a
            <span className="text-amber-400">
              {" "}
              Taxi Ride
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              sm:text-lg
            "
          >
            We focus on making every journey comfortable,
            convenient and easy from pickup to drop-off.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          className="
            mt-14
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-amber-400/30
                  hover:bg-white/[0.07]
                "
              >
                {/* Card Glow */}
                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-36
                    w-36
                    rounded-full
                    bg-amber-400/10
                    opacity-0
                    blur-2xl
                    transition-all
                    duration-500
                    group-hover:scale-150
                    group-hover:opacity-100
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute
                    right-5
                    top-5
                    text-xs
                    font-black
                    text-white/10
                    transition
                    duration-300
                    group-hover:text-amber-400/30
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
                    bg-amber-400
                    text-slate-950
                    transition-all
                    duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                    group-hover:shadow-lg
                    group-hover:shadow-amber-400/20
                  "
                >
                  <Icon size={24} />
                </div>

                {/* Content */}
                <div className="relative mt-6">

                  <h3
                    className="
                      text-xl
                      font-black
                      text-white
                      transition
                      duration-300
                      group-hover:text-amber-300
                    "
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-400
                    "
                  >
                    {reason.description}
                  </p>

                  {/* Small Arrow */}
                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-bold
                      text-slate-500
                      transition
                      duration-300
                      group-hover:text-amber-300
                    "
                  >
                    <span>Travel with confidence</span>

                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>

                {/* Bottom Line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-0.5
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
            gap-6
            rounded-3xl
            border
            border-white/10
            bg-white/[0.04]
            p-7
            sm:p-9
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div className="flex items-start gap-4">
            <div
              className="
                grid
                h-12
                w-12
                shrink-0
                place-items-center
                rounded-2xl
                bg-amber-400
                text-slate-950
              "
            >
              <ShieldCheck size={23} />
            </div>

            <div>
              <h3 className="text-xl font-black text-white">
                Ready for a comfortable journey?
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Contact our team and discuss your travel
                requirements.
              </p>
            </div>
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
              px-6
              py-3.5
              text-sm
              font-extrabold
              text-slate-950
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-amber-300
              hover:shadow-xl
              hover:shadow-amber-400/20
            "
          >
            Contact Us
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;