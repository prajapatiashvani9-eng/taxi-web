import { Phone, MessageCircle } from "lucide-react";

function FloatingActions() {
  return (
    <div
      className="
        fixed
        bottom-5
        right-5
        z-40
        flex
        flex-col
        gap-3
      "
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          group
          relative
          grid
          h-14
          w-14
          place-items-center
          rounded-full
          bg-emerald-500
          text-white
          shadow-xl
          shadow-emerald-500/20
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
          hover:bg-emerald-400
          sm:h-16
          sm:w-16
        "
      >
        {/* Pulse */}
        <span
          className="
            absolute
            inset-0
            -z-10
            animate-ping
            rounded-full
            bg-emerald-400/40
          "
        />

        <MessageCircle
          size={24}
          className="
            transition-transform
            duration-300
            group-hover:rotate-6
            sm:h-7
            sm:w-7
          "
        />

        {/* Tooltip */}
        <span
          className="
            pointer-events-none
            absolute
            right-full
            mr-3
            hidden
            whitespace-nowrap
            rounded-lg
            bg-slate-950
            px-3
            py-2
            text-xs
            font-bold
            text-white
            opacity-0
            shadow-lg
            transition-all
            duration-300
            group-hover:opacity-100
            sm:block
          "
        >
          Chat on WhatsApp
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919999999999"
        aria-label="Call SwiftRide Cabs"
        className="
          group
          grid
          h-14
          w-14
          place-items-center
          rounded-full
          bg-amber-400
          text-slate-950
          shadow-xl
          shadow-amber-400/20
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-105
          hover:bg-amber-300
          sm:h-16
          sm:w-16
        "
      >
        <Phone
          size={24}
          className="
            transition-transform
            duration-300
            group-hover:rotate-12
            sm:h-7
            sm:w-7
          "
        />

        {/* Tooltip */}
        <span
          className="
            pointer-events-none
            absolute
            right-full
            mr-3
            hidden
            whitespace-nowrap
            rounded-lg
            bg-slate-950
            px-3
            py-2
            text-xs
            font-bold
            text-white
            opacity-0
            shadow-lg
            transition-all
            duration-300
            group-hover:opacity-100
            sm:block
          "
        >
          Call Now
        </span>
      </a>
    </div>
  );
}

export default FloatingActions;