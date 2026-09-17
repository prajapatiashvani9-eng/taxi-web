import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", link: "#home" },
  { name: "Services", link: "#services" },
  { name: "Fleet", link: "#fleet" },
  { name: "Routes", link: "#routes" },
  { name: "Tariff", link: "#tariff" },
  { name: "Contact", link: "#contact" },
];

const services = [
  "Airport Transfers",
  "Local Taxi",
  "Outstation Trips",
  "One Way Trips",
  "Round Trips",
  "Corporate Travel",
];

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          pb-12
          pt-16
        "
      >
        <div
          className="
            grid
            gap-12
            sm:grid-cols-2
            lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]
          "
        >

          {/* Company */}
          <div>

            <a
              href="#home"
              className="
                group
                inline-flex
                items-center
                gap-3
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
                  text-xl
                  font-black
                  text-slate-950
                  transition-all
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-105
                "
              >
                S
              </div>

              <div>
                <p className="text-lg font-black">
                  SwiftRide
                </p>

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-amber-300
                  "
                >
                  Call Taxi
                </p>
              </div>
            </a>

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-slate-400
              "
            >
              Reliable taxi services for local travel,
              airport transfers and outstation journeys.
              Comfortable rides with easy customer support.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
            
              <a
                href="#"
                aria-label="Facebook"
                className="
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-xs
                  font-black
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-amber-400/30
                  hover:bg-amber-400
                  hover:text-slate-950
                "
              >
                FB
              </a>
            
              <a
                href="#"
                aria-label="Instagram"
                className="
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-xs
                  font-black
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-amber-400/30
                  hover:bg-amber-400
                  hover:text-slate-950
                "
              >
                IG
              </a>
            
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  text-xs
                  font-black
                  text-slate-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-amber-400/30
                  hover:bg-amber-400
                  hover:text-slate-950
                "
              >
                IN
              </a>
            
            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-widest
                text-white
              "
            >
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              {quickLinks.map((item) => (
                <li key={item.name}>

                  <a
                    href={item.link}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-slate-400
                      transition-colors
                      duration-300
                      hover:text-amber-300
                    "
                  >
                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-slate-600
                        transition-all
                        duration-300
                        group-hover:w-3
                        group-hover:bg-amber-400
                      "
                    />

                    {item.name}
                  </a>

                </li>
              ))}

            </ul>
          </div>

          {/* Services */}
          <div>

            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-widest
                text-white
              "
            >
              Our Services
            </h3>

            <ul className="mt-5 space-y-3">

              {services.map((service) => (
                <li
                  key={service}
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-400
                  "
                >
                  <span className="h-1 w-1 rounded-full bg-amber-400" />
                  {service}
                </li>
              ))}

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-widest
                text-white
              "
            >
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              {/* Phone */}
              <a
                href="tel:+919999999999"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-slate-400
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <Phone
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-amber-400
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span>
                  +91 99999 99999
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@swiftridecabs.in"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-slate-400
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                <Mail
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-amber-400
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span className="break-all">
                  hello@swiftridecabs.in
                </span>
              </a>

              {/* Location */}
              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-slate-400
                "
              >
                <MapPin
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-amber-400
                  "
                />

                <span>
                  Mumbai, Maharashtra, India
                </span>
              </div>

            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-emerald-500
                px-5
                py-3
                text-sm
                font-extrabold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-emerald-400
                hover:shadow-lg
                hover:shadow-emerald-500/20
              "
            >
              <MessageCircle size={17} />
              WhatsApp Us
              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div
          className="
            mt-14
            h-px
            bg-white/10
          "
        />

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-4
            pt-7
            text-xs
            text-slate-500
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p>
            © {new Date().getFullYear()} SwiftRide Cabs.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <a
              href="#"
              className="
                transition-colors
                duration-300
                hover:text-amber-300
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                transition-colors
                duration-300
                hover:text-amber-300
              "
            >
              Terms & Conditions
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-amber-400" />

    </footer>
  );
}

export default Footer;