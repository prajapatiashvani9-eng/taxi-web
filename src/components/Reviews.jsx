import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  MessageSquareQuote,
} from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Local Customer",
    review:
      "The ride was comfortable and the driver was professional. Pickup was smooth and the overall experience was convenient.",
    initials: "RS",
  },
  {
    name: "Priya Mehta",
    role: "Outstation Customer",
    review:
      "We used the cab for an outstation trip and had a comfortable journey. The vehicle was clean and the service was easy to coordinate.",
    initials: "PM",
  },
  {
    name: "Amit Patel",
    role: "Airport Transfer",
    review:
      "The airport transfer was well coordinated and convenient. Communication was easy throughout the journey.",
    initials: "AP",
  },
];

function Reviews() {
  return (
    <section
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
          -left-40
          top-10
          h-80
          w-80
          rounded-full
          bg-amber-100/70
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-10
          h-80
          w-80
          rounded-full
          bg-blue-100/50
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div
          className="
            flex
            flex-col
            justify-between
            gap-6
            lg:flex-row
            lg:items-end
          "
        >
          <div className="max-w-2xl">

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
              <MessageSquareQuote size={14} />
              Customer Reviews
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
              What Our Customers
              <span className="text-amber-500">
                {" "}
                Say
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-slate-600
                sm:text-lg
              "
            >
              We aim to make every journey comfortable,
              convenient and stress-free.
            </p>
          </div>

          {/* Rating Box */}
          <div
            className="
              flex
              w-fit
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-5
              py-4
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
              <Star size={21} fill="currentColor" />
            </div>

            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    className="text-amber-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-1 text-xs font-semibold text-slate-500">
                Customer Experience
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          className="
            mt-14
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
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
              {/* Quote Icon */}
              <div
                className="
                  absolute
                  right-6
                  top-6
                  text-slate-100
                  transition
                  duration-500
                  group-hover:scale-110
                  group-hover:text-amber-100
                "
              >
                <Quote size={50} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="relative flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="text-amber-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p
                className="
                  relative
                  mt-6
                  min-h-[120px]
                  text-sm
                  leading-7
                  text-slate-600
                "
              >
                “{review.review}”
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-100" />

              {/* Customer */}
              <div className="flex items-center gap-3">

                {/* Initials */}
                <div
                  className="
                    grid
                    h-12
                    w-12
                    shrink-0
                    place-items-center
                    rounded-full
                    bg-slate-950
                    text-sm
                    font-black
                    text-amber-400
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                >
                  {review.initials}
                </div>

                <div>
                  <h3 className="text-sm font-black text-slate-900">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-slate-400">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Bottom Line */}
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
          ))}
        </div>

        {/* Navigation / CTA */}
        <div
          className="
            mt-10
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
            sm:px-9
          "
        >
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-amber-400">
              Your Journey Matters
            </p>

            <h3 className="mt-2 text-xl font-black text-white">
              Have a travel requirement?
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Talk to us about your next ride.
            </p>
          </div>

          <div className="flex items-center gap-3">

            {/* Previous */}
            <button
              type="button"
              aria-label="Previous reviews"
              className="
                grid
                h-11
                w-11
                place-items-center
                rounded-xl
                border
                border-white/10
                bg-white/5
                text-white
                transition-all
                duration-300
                hover:-translate-x-1
                hover:border-amber-400/30
                hover:bg-white/10
              "
            >
              <ArrowLeft size={18} />
            </button>

            {/* Next */}
            <button
              type="button"
              aria-label="Next reviews"
              className="
                grid
                h-11
                w-11
                place-items-center
                rounded-xl
                bg-amber-400
                text-slate-950
                transition-all
                duration-300
                hover:translate-x-1
                hover:bg-amber-300
              "
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Reviews;