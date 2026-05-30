import { ArrowRight } from "lucide-react";
import CoreBankingImg from "../assets/corebnking.png";

const CoreBankingSection = () => {
  return (
    <section
      className="
        relative
        mt-20 md:mt-32
        overflow-hidden
        text-[var(--text-primary)]
      "
    >
      {/* Background CB7 Watermark - hidden on mobile (too large) */}
      <h1
        className="
          absolute
          inset-0
          hidden sm:flex
          items-center
          justify-center
          text-[160px] md:text-[320px]
          font-archivo
          opacity-[0.03]
          select-none
          pointer-events-none
          leading-none
        "
      >
        CB7
      </h1>

      {/* Main Content */}
      <div
        className="
          relative z-10
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-12 md:gap-4
        "
      >
        {/* Left */}
        <div
          className="
            flex flex-col gap-6 md:gap-8
            w-full md:w-[55%]
            max-w-[420px]
            items-center md:items-start
            text-center md:text-left
            mx-auto md:mx-0
          "
        >
          <h1 className="font-archivo text-3xl sm:text-4xl md:text-5xl leading-tight">
            A complete cloud-based{" "}
            <br className="hidden sm:block" />
            core banking.
          </h1>

          <p className="text-[var(--text-primary-60)] leading-7 text-sm md:text-base">
            Faster time to market with our cloud-based
            core banking services
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-5 items-center md:items-start">
            <button
              className="
                w-fit
                rounded-[10px]
                py-3 px-8
                text-xs
                font-chivo
                bg-[var(--gradient-primary)]
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-[0px_0px_25px_var(--blue-primary-45)]
              "
            >
              REQUEST DEMO
            </button>

            <button
              className="
                flex items-center gap-2
                text-[var(--blue-primary)]
                text-xs font-chivo
                transition-all duration-300
                hover:gap-3
                w-fit
              "
            >
              LEARN MORE
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Right */}
        <div
          className="
            relative
            w-full md:w-[45%]
            md:left-20
            flex items-center justify-center
          "
        >
          {/* Gradient Glow */}
          <div
            className="
              absolute inset-0
              bg-[var(--gradient-primary-soft)]
              blur-[80px] md:blur-[120px]
              opacity-30
              scale-90
            "
          />

          {/* Dashboard Image */}
          <img
            className="
              relative z-10
              w-full
              max-w-[340px] sm:max-w-[460px] md:max-w-[550px] md:w-[550px]
              rounded-[16px] md:rounded-[20px]
              border border-[var(--text-primary-10)]
              shadow-2xl
            "
            src={CoreBankingImg}
            alt="Core Banking"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreBankingSection;