import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";

const navLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Fleet",
    link: "#fleet",
  },
  {
    name: "Routes",
    link: "#routes",
  },
  {
    name: "Tariff",
    link: "#tariff",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">

      <nav className="mx-auto mt-3 max-w-7xl px-4">

        <div
          className="
            rounded-2xl
            border border-white/10
            bg-slate-950/90
            px-4 py-3
            shadow-2xl
            backdrop-blur-xl
          "
        >

          {/* =========================
              DESKTOP NAVBAR
          ========================= */}

          <div className="flex items-center justify-between">

            {/* LOGO */}

            <a
              href="#home"
              className="group flex items-center gap-3"
            >

              <div
                className="
                  grid h-10 w-10
                  place-items-center
                  rounded-xl
                  bg-amber-400
                  text-xl font-black
                  text-slate-950
                  transition duration-300
                  group-hover:rotate-6
                  group-hover:scale-105
                "
              >
                S
              </div>

              <div>
                <p className="text-lg font-black tracking-tight text-white">
                  SwiftRide
                </p>

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-300">
                  Call Taxi
                </p>
              </div>

            </a>

            {/* DESKTOP MENU */}

            <div className="hidden items-center gap-7 md:flex">

              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="
                    relative
                    text-sm font-semibold
                    text-slate-300
                    transition duration-300
                    hover:text-amber-300
                  "
                >
                  {item.name}

                  {/* Small hover line */}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-0.5
                      w-0
                      bg-amber-400
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              ))}

              {/* CALL BUTTON */}

              <a
                href="tel:+919999999999"
                className="
                  flex items-center gap-2
                  rounded-xl
                  bg-amber-400
                  px-4 py-2.5
                  text-sm font-extrabold
                  text-slate-950

                  transition duration-300
                  hover:-translate-y-1
                  hover:bg-amber-300
                  hover:shadow-lg
                  hover:shadow-amber-400/20
                "
              >
                <Phone size={16} />

                Call Now
              </a>

            </div>

            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                rounded-lg
                p-2
                text-white
                transition
                hover:bg-white/10
                md:hidden
              "
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

          {/* =========================
              MOBILE MENU
          ========================= */}

          {isOpen && (
            <div
              className="
                mt-4
                grid gap-2
                border-t border-white/10
                pt-4
                md:hidden

                animate-[fadeIn_300ms_ease-out]
              "
            >

              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="
                    rounded-xl
                    px-3 py-3
                    font-semibold
                    text-slate-200

                    transition duration-300

                    hover:bg-white/10
                    hover:pl-5
                    hover:text-amber-300
                  "
                >
                  {item.name}
                </a>
              ))}

              {/* WHATSAPP */}

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-2
                  flex items-center
                  justify-center gap-2
                  rounded-xl
                  bg-emerald-500
                  py-3
                  font-bold
                  text-white

                  transition duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-400
                  hover:shadow-lg
                "
              >
                <MessageCircle size={18} />

                WhatsApp Us
              </a>

            </div>
          )}

        </div>

      </nav>

    </header>
  );
}

export default Navbar;