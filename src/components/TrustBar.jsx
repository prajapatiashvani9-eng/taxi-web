import {
  Users,
  MapPinned,
  CarFront,
  Clock3,
} from "lucide-react";

const trustData = [
  {
    icon: Users,
    value: "500+",
    label: "Happy Customers",
  },
  {
    icon: CarFront,
    value: "50+",
    label: "Cars Available",
  },
  {
    icon: MapPinned,
    value: "25+",
    label: "Routes Covered",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Customer Support",
  },
];

function TrustBar() {
  return (
    <section className="relative z-10 -mt-4 px-5">
      <div
        className="
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          shadow-[0_20px_60px_rgba(15,23,42,0.10)]
        "
      >
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {trustData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-4
                  px-5
                  py-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-slate-50

                  ${
                    index !== trustData.length - 1
                      ? "border-b border-slate-200 lg:border-b-0 lg:border-r"
                      : ""
                  }

                  ${
                    index === 0 || index === 2
                      ? "border-r"
                      : ""
                  }

                  lg:border-r
                `}
              >
                {/* Icon */}
                <div
                  className="
                    grid
                    h-12
                    w-12
                    shrink-0
                    place-items-center
                    rounded-2xl
                    bg-amber-100
                    text-amber-600
                    transition-all
                    duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                    group-hover:bg-amber-400
                    group-hover:text-slate-950
                  "
                >
                  <Icon size={22} />
                </div>

                {/* Text */}
                <div>
                  <p
                    className="
                      text-2xl
                      font-black
                      tracking-tight
                      text-slate-900
                      transition
                      duration-300
                      group-hover:text-amber-600
                    "
                  >
                    {item.value}
                  </p>

                  <p className="text-xs font-semibold text-slate-500">
                    {item.label}
                  </p>
                </div>

                {/* Hover Line */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-0.5
                    w-0
                    -translate-x-1/2
                    bg-amber-400
                    transition-all
                    duration-500
                    group-hover:w-2/3
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;