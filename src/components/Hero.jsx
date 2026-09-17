import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-950
        pt-28
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-amber-400/20
          blur-3xl
          animate-pulse
        "
      />

      <div
        className="
          absolute
          -right-32
          bottom-10
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-3xl
          animate-pulse
        "
      />

      {/* Grid Background */}
      <div className="hero-grid absolute inset-0 opacity-60" />

      <div
        className="
          relative
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-12
          px-5
          py-16
          lg:grid-cols-2
          lg:py-24
        "
      >
        {/* LEFT CONTENT */}
        <div className="animate-[fadeIn_800ms_ease-out]">

          {/* Small Badge */}
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-amber-300/20
              bg-white/5
              px-4 py-2
              text-sm
              font-semibold
              text-amber-300
              backdrop-blur-md
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-white/10
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Local & Outstation Trips
          </div>

          {/* Main Heading */}
          <h1
            className="
              max-w-3xl
              text-5xl
              font-black
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-6xl
              lg:text-7xl
            "
          >
            Your Ride.
            <br />

            <span className="text-gradient">
              Your Time.
            </span>

            <br />

            Your Journey.
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-xl
              text-base
              leading-7
              text-slate-300
              sm:text-lg
            "
          >
            Reliable call taxi service for city rides, airport
            transfers, outstation trips and customized travel
            across your preferred routes.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            {/* Call Button */}
            <a
              href="tel:+919999999999"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-amber-400
                px-6 py-4
                font-extrabold
                text-slate-950
                shadow-xl
                shadow-amber-400/10
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-amber-300
                hover:shadow-2xl
                hover:shadow-amber-400/20
              "
            >
              <Phone size={19} />

              Call Now

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-white/15
                bg-white/5
                px-6 py-4
                font-extrabold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-400/40
                hover:bg-emerald-500
                hover:text-white
              "
            >
              <MessageCircle size={20} />

              WhatsApp Us
            </a>
          </div>

          {/* Trust Points */}
          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-3
            "
          >
            <TrustItem
              icon={<ShieldCheck size={18} />}
              title="Trusted"
              text="Professional Service"
            />

            <TrustItem
              icon={<Clock3 size={18} />}
              title="On Time"
              text="Timely Pickup"
            />

            <TrustItem
              icon={<MapPin size={18} />}
              title="Easy Travel"
              text="Multiple Routes"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            relative
            flex
            min-h-[450px]
            items-center
            justify-center
            animate-[fadeIn_1000ms_ease-out]
            lg:min-h-[600px]
          "
        >
          {/* Main Glow */}
          <div
            className="
              absolute
              h-72
              w-72
              rounded-full
              bg-amber-400/20
              blur-3xl
            "
          />

          {/* Taxi Image Container */}
          <div
            className="
              relative
              w-full
              max-w-2xl
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/5
              p-3
              shadow-2xl
              backdrop-blur-sm
              transition
              duration-500
              hover:scale-[1.02]
            "
          >
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85"
              alt="Modern taxi car"
              className="
                h-[350px]
                w-full
                rounded-[1.5rem]
                object-cover
                sm:h-[430px]
                lg:h-[500px]
              "
            />

            {/* Image Overlay */}
            <div
              className="
                absolute
                inset-3
                rounded-[1.5rem]
                bg-gradient-to-t
                from-slate-950/70
                via-transparent
                to-transparent
              "
            />
          </div>

          {/* Floating Card - Top */}
          <div
            className="
              glass
              float-animation
              absolute
              -left-2
              top-8
              rounded-2xl
              px-4
              py-3
              shadow-2xl
              sm:left-0
              lg:-left-8
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-xl
                  bg-emerald-400/15
                  text-emerald-300
                "
              >
                <ShieldCheck size={20} />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Safe & Reliable
                </p>

                <p className="text-xs text-slate-400">
                  Professional Drivers
                </p>
              </div>
            </div>
          </div>

          {/* Floating Card - Bottom */}
          <div
            className="
              glass
              absolute
              -bottom-2
              -right-2
              rounded-2xl
              px-4
              py-3
              shadow-2xl
              sm:right-0
              lg:-right-8
            "
          >
            <div className="flex items-center gap-3">
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
                <Clock3 size={20} />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Quick Response
                </p>

                <p className="text-xs text-slate-400">
                  Easy Call Booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve / Fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-slate-50
          to-transparent
        "
      />
    </section>
  );
}


/* --------------------------------
   Small Reusable Component
--------------------------------- */

function TrustItem({ icon, title, text }) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-white/5
        p-3
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-white/10
      "
    >
      <div
        className="
          grid
          h-9
          w-9
          shrink-0
          place-items-center
          rounded-lg
          bg-amber-400/10
          text-amber-300
          transition
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      <div>
        <p className="text-sm font-bold text-white">
          {title}
        </p>

        <p className="text-xs text-slate-400">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Hero;