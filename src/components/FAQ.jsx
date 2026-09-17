import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Phone,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    question: "How can I book a taxi?",
    answer:
      "You can contact us directly by phone or WhatsApp. Share your pickup location, destination, travel date and preferred vehicle, and our team will assist you.",
  },
  {
    question: "Do you provide airport pickup and drop?",
    answer:
      "Yes, airport pickup and drop services can be arranged based on your travel requirements and vehicle availability.",
  },
  {
    question: "Do you provide outstation taxi services?",
    answer:
      "Yes, we provide one-way and round-trip taxi services for selected outstation routes. Contact us to check your destination and fare.",
  },
  {
    question: "What types of cars are available?",
    answer:
      "Vehicle options may include sedans, SUVs and premium cars depending on the route, passenger count and availability.",
  },
  {
    question: "How is the taxi fare calculated?",
    answer:
      "The fare depends on factors such as route, vehicle type, distance, trip type and applicable tolls or parking charges. Contact us for the current fare.",
  },
  {
    question: "Can I request a customized travel plan?",
    answer:
      "Yes. You can discuss your route, travel dates, vehicle preference and other requirements with our team before confirming the trip.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        px-5
        py-24
        sm:py-28
      "
    >
      {/* Background Decoration */}
      <div
        className="
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-amber-100
          blur-3xl
          opacity-60
        "
      />

      <div
        className="
          absolute
          -left-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-blue-100
          blur-3xl
          opacity-50
        "
      />

      <div className="relative mx-auto max-w-6xl">

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
            <HelpCircle size={14} />
            FAQ
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
            Frequently Asked
            <span className="text-amber-500">
              {" "}
              Questions
            </span>
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
            Find quick answers to some common questions
            about our taxi services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-14 max-w-4xl space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-white
                  transition-all
                  duration-500

                  ${
                    isOpen
                      ? "border-amber-300 shadow-lg shadow-amber-100/50"
                      : "border-slate-200 hover:border-amber-200 hover:shadow-md"
                  }
                `}
              >
                {/* Question Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-5
                    py-5
                    text-left
                    sm:px-6
                    sm:py-6
                  "
                >
                  <div className="flex items-center gap-4">

                    {/* Number */}
                    <span
                      className={`
                        grid
                        h-9
                        w-9
                        shrink-0
                        place-items-center
                        rounded-xl
                        text-xs
                        font-black
                        transition-all
                        duration-300

                        ${
                          isOpen
                            ? "bg-amber-400 text-slate-950"
                            : "bg-slate-100 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-700"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`
                        text-sm
                        font-bold
                        sm:text-base

                        ${
                          isOpen
                            ? "text-slate-950"
                            : "text-slate-700"
                        }
                      `}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <span
                    className={`
                      grid
                      h-9
                      w-9
                      shrink-0
                      place-items-center
                      rounded-full
                      transition-all
                      duration-500

                      ${
                        isOpen
                          ? "rotate-180 bg-slate-950 text-amber-400"
                          : "bg-slate-100 text-slate-600 group-hover:bg-amber-100"
                      }
                    `}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        border-t
                        border-slate-100
                        px-5
                        pb-6
                        pt-4
                        pl-[4.5rem]
                        sm:px-6
                        sm:pl-[4.75rem]
                      "
                    >
                      <p
                        className="
                          text-sm
                          leading-7
                          text-slate-500
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div
          className="
            mx-auto
            mt-12
            max-w-4xl
            overflow-hidden
            rounded-3xl
            bg-slate-950
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
              <p
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-widest
                  text-amber-400
                "
              >
                Still have questions?
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-black
                  text-white
                  sm:text-2xl
                "
              >
                Talk to our team.
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                We are happy to help you plan your journey.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              {/* Call */}
              <a
                href="tel:+919999999999"
                className="
                  inline-flex
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
                "
              >
                <Phone size={17} />
                Call Us
              </a>

              {/* WhatsApp */}
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
                  border-white/10
                  bg-white/5
                  px-5
                  py-3
                  text-sm
                  font-extrabold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-emerald-500
                  hover:text-white
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

export default FAQ;