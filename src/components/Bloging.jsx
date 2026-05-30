const Bloging = () => {
  return (
    <div
      className="
                bg-[var(--bg-card)]
                rounded-[28px]
                p-8
                min-h-[20px]
                
                flex
                flex-col
                justify-between
            "
    >
      {/* Top Content */}
      <div>
        <p
          className="
                    text-[var(--blue-primary)]
                    text-[12px]
                    uppercase
                    tracking-[2px]
                    font-chivo
                    mb-8
                "
        >
          Getting Started
        </p>

        <h2
          className="
                    font-archivo
                    text-[30px]
                    leading-[1.05]
                    font-normal
                    mb-8
                "
        >
          How to transition
          <br />
          from a traditional to a
          <br />
          digital bank
        </h2>

        <div
          className="
                    flex
                    gap-6
                    text-[var(--blue-primary-80)]
                    text-[14px]
                "
        >
          <span>David Grohl</span>
          <span>17/08/24</span>
        </div>
      </div>

      {/* Button */}
      <button
        className="
                    rounded-2xl
                    py-3
                    border
                    border-[var(--white-30)]
                    mt-4
                    text-[var(--white-50)]
                    text-sm
                    font-chivo

                    hover:border-[var(--blue-primary)]
                    transition-all
                    "
      >
        READ MORE
      </button>
    </div>
  );
};

export default Bloging;
