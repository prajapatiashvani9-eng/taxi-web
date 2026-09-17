import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
  Navigation,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 99999 99999",
    link: "tel:+919999999999",
    action: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with our team",
    link: "https://wa.me/919999999999",
    action: "Message Us",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@swiftridecabs.in",
    link: "mailto:hello@swiftridecabs.in",
    action: "Send Email",
  },
];

function Contact() {
  return (
    <section
      id="contact"
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
          bottom-0
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">

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
            Contact Us
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
            Ready for Your
            <span className="text-amber-400">
              {" "}
              Next Ride?
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-400
              sm:text-lg
            "
          >
            Call or message us with your pickup location,
            destination and travel requirements. Our team
            will help you with the available options.
          </p>
        </div>

        {/* Main Grid */}
        <div
          className="
            mt-12
            grid
            gap-6
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >

          {/* LEFT - Contact Information */}
          <div className="space-y-4">

            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.link}
                  target={
                    item.title === "WhatsApp"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.title === "WhatsApp"
                      ? "noreferrer"
                      : undefined
                  }
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-5
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-amber-400/30
                    hover:bg-white/[0.07]
                  "
                >
                  <div className="flex items-center gap-4">

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
                        transition-all
                        duration-500
                        group-hover:rotate-6
                        group-hover:scale-110
                      "
                    >
                      <Icon size={21} />
                    </div>

                    <div>
                      <p
                        className="
                          text-xs
                          font-bold
                          uppercase
                          tracking-wider
                          text-slate-500
                        "
                      >
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-bold
                          text-white
                          sm:text-base
                        "
                      >
                        {item.value}
                      </p>
                    </div>

                  </div>

                  <div
                    className="
                      grid
                      h-9
                      w-9
                      place-items-center
                      rounded-full
                      bg-white/5
                      text-slate-400
                      transition-all
                      duration-300
                      group-hover:bg-amber-400
                      group-hover:text-slate-950
                    "
                  >
                    <ArrowUpRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover:rotate-6
                      "
                    />
                  </div>
                </a>
              );
            })}

            {/* Working Hours */}
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
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
                    bg-white/10
                    text-amber-400
                  "
                >
                  <Clock3 size={21} />
                </div>

                <div>
                  <p className="text-sm font-black text-white">
                    Customer Support
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Available for travel enquiries and
                    route assistance.
                  </p>

                  <p className="mt-3 text-xs font-bold text-amber-300">
                    24/7 Support
                  </p>
                </div>

              </div>
            </div>

            {/* Service Location */}
            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-6
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
                    bg-white/10
                    text-amber-400
                  "
                >
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="text-sm font-black text-white">
                    Service Area
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Mumbai, Navi Mumbai, Thane and selected
                    outstation destinations.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT - Map */}
          <div
            className="
              relative
              min-h-[480px]
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-slate-900
              shadow-2xl
            "
          >
            {/* Google Maps Embed */}
            <iframe
              title="SwiftRide Cabs Location"
              src="https://www.google.com/maps?q=Mumbai,India&output=embed"
              className="
                absolute
                inset-0
                h-full
                w-full
                border-0
                grayscale
                transition
                duration-700
                hover:grayscale-0
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-slate-950/50
                via-transparent
                to-transparent
              "
            />

            {/* Location Card */}
            <div
              className="
                absolute
                bottom-5
                left-5
                right-5
                rounded-2xl
                border
                border-white/10
                bg-slate-950/90
                p-5
                shadow-2xl
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-3">

                <div
                  className="
                    grid
                    h-11
                    w-11
                    shrink-0
                    place-items-center
                    rounded-xl
                    bg-amber-400
                    text-slate-950
                  "
                >
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm font-black text-white">
                    SwiftRide Cabs
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Mumbai, Maharashtra, India
                  </p>
                </div>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Mumbai,India"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-4
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-white/10
                  px-4
                  py-3
                  text-xs
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-amber-400
                  hover:text-slate-950
                "
              >
                <Navigation size={15} />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="
            mt-8
            overflow-hidden
            rounded-[2rem]
            bg-amber-400
            p-7
            sm:p-9
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-slate-700
                "
              >
                Need a Cab?
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-black
                  tracking-tight
                  text-slate-950
                  sm:text-3xl
                "
              >
                Your destination is just a call away.
              </h3>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              <a
                href="tel:+919999999999"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-slate-950
                  px-6
                  py-3.5
                  text-sm
                  font-extrabold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-slate-800
                "
              >
                <Phone size={17} />
                Call Now
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-slate-950/10
                  bg-white/50
                  px-6
                  py-3.5
                  text-sm
                  font-extrabold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                "
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;