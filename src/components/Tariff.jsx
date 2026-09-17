import {
  CarFront,
  Check,
  Phone,
  ArrowRight,
  Star,
} from "lucide-react";

const tariffs = [
  {
    type: "Local",
    title: "City Ride",
    description: "For convenient local travel within the city.",
    price: "₹12",
    unit: "/ km",
    features: [
      "Clean & comfortable cab",
      "Professional driver",
      "Local city travel",
      "Flexible pickup points",
    ],
  },
  {
    type: "Outstation",
    title: "One Way",
    description: "Ideal for travelling to another city.",
    price: "₹14",
    unit: "/ km",
    features: [
      "One-way travel",
      "Door-to-door pickup",
      "Comfortable journey",
      "Multiple vehicle options",
    ],
    popular: true,
  },
  {
    type: "Outstation",
    title: "Round Trip",
    description: "A convenient option for return journeys.",
    price: "₹13",
    unit: "/ km",
    features: [
      "Round-trip travel",
      "Flexible return timing",
      "Long-distance comfort",
      "Custom travel plans",
    ],
  },
];

function Tariff() {
  return (
    <section
      id="tariff"
      className="
        relative
        overflow-hidden
        bg-slate-50
        px-5
        py-24
        sm:py-28
      "
    >
      {/* Background Decorations */}
      <div
        className="
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-amber-100
          blur-3xl
          opacity-70
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-blue-100
          blur-3xl
          opacity-50
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <span
            className="
              inline-flex
              items-center
              gap-2
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
            <CarFront size={14} />
            Tariff & Packages
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
            Simple & Transparent
            <span className="text-amber-500"> Pricing</span>
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
            Choose a travel option that suits your journey.
            Contact us for the latest fare based on your
            route, vehicle and travel requirements.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          className="
            mt-14
            grid
            gap-6
            lg:grid-cols-3
            lg:items-stretch
          "
        >
          {tariffs.map((tariff) => (
            <div
              key={tariff.title}
              className={`
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-[2rem]
                border
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]

                ${
                  tariff.popular
                    ? "border-amber-400 shadow-[0_15px_50px_rgba(251,191,36,0.15)]"
                    : "border-slate-200"
                }
              `}
            >
              {/* Popular Badge */}
              {tariff.popular && (
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    bg-amber-400
                    px-3
                    py-1.5
                    text-[10px]
                    font-black
                    uppercase
                    tracking-wider
                    text-slate-950
                  "
                >
                  <Star size={12} fill="currentColor" />
                  Popular
                </div>
              )}

              {/* Top Icon */}
              <div
                className="
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
                "
              >
                <CarFront size={25} />
              </div>

              {/* Type */}
              <p
                className="
                  mt-7
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.2em]
                  text-amber-600
                "
              >
                {tariff.type}
              </p>

              {/* Title */}
              <h3
                className="
                  mt-2
                  text-2xl
                  font-black
                  text-slate-900
                "
              >
                {tariff.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-3
                  min-h-[48px]
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                {tariff.description}
              </p>

              {/* Price */}
              <div className="mt-7 flex items-end gap-1">
                <span
                  className="
                    text-4xl
                    font-black
                    tracking-tight
                    text-slate-950
                  "
                >
                  {tariff.price}
                </span>

                <span
                  className="
                    mb-1
                    text-sm
                    font-semibold
                    text-slate-500
                  "
                >
                  {tariff.unit}
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-slate-200" />

              {/* Features */}
              <div className="space-y-4">
                {tariff.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      text-slate-600
                    "
                  >
                    <span
                      className="
                        grid
                        h-5
                        w-5
                        shrink-0
                        place-items-center
                        rounded-full
                        bg-amber-100
                        text-amber-600
                      "
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>

                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="tel:+919999999999"
                className={`
                  mt-auto
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  px-5
                  py-3.5
                  pt-3.5
                  text-sm
                  font-extrabold
                  transition-all
                  duration-300

                  ${
                    tariff.popular
                      ? "bg-amber-400 text-slate-950 hover:bg-amber-300"
                      : "bg-slate-950 text-white hover:bg-amber-400 hover:text-slate-950"
                  }
                `}
              >
                <Phone size={17} />
                Call to Enquire

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div
          className="
            mx-auto
            mt-10
            max-w-3xl
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-5
            py-4
            text-center
          "
        >
          <p className="text-xs leading-5 text-slate-500 sm:text-sm">
            <span className="font-bold text-slate-700">
              Note:
            </span>{" "}
            Fares shown above are for demonstration purposes.
            Final pricing may vary based on route, vehicle,
            tolls, parking, night charges and other applicable
            travel conditions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Tariff;