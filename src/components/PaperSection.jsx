import ButtonRequestDemo from "./libs/ButtonRequestDemo";

const PaperlessSection = () => {
  return (
    <section className="relative bg-[var(--bg-primary)]  text-[var(--text-primary)] overflow-hidden">

      <h1
        className="
          absolute inset-0
          hidden sm:flex
          justify-center items-center
          text-[160px] md:text-[320px]
          font-archivo
          opacity-[0.03]
          pointer-events-none select-none
          leading-none
        "
      >
        CB7
      </h1>

      {/* Card */}
      <div
        className="
          relative z-10
         
          px-6 sm:px-10 md:px-12
          py-10 md:py-16
          bg-[var(--gradient-paper)]
          border border-[var(--blue-primary-10)]
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-8 md:gap-6
          text-center md:text-left
        "
      >
        {/* Left - Text */}
        <div className="max-w-full md:max-w-[450px]">
          <h1 className="font-archivo text-3xl sm:text-4xl md:text-5xl leading-tight">
            Take the full advantage of
            going paper-less now.
          </h1>

          <p className="mt-4 md:mt-6 text-sm text-[var(--text-primary-60)] leading-6">
            CB7 helps your financial institution improve
            the client experience, automate and optimize
            procedures, simplify banking operations.
          </p>
        </div>

        
        <div className="w-full h-px md:w-px md:h-[160px] bg-[var(--text-primary-10)]" />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
          <button
            className="
              border border-[var(--text-primary)]
              rounded-[10px]
              px-8 md:px-10
              py-3
              text-xs font-chivo
              hover:bg-[var(--white-10)]
              transition-colors duration-300
              w-full sm:w-auto
            "
          >
            CONTACT US
          </button>

          <ButtonRequestDemo />
        </div>
      </div>
    </section>
  );
};

export default PaperlessSection;