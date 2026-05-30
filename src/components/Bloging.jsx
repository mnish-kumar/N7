const Bloging = () => {
  return (
    <div
      className="
                bg-[#02141B]
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
                    text-[#00B4FD]
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
                    text-[#00B4FD]/80
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
                    border-white/30
                    mt-4
                    text-white/50
                    text-sm
                    font-chivo

                    hover:border-[#00B4FD]
                    transition-all
                    "
      >
        READ MORE
      </button>
    </div>
  );
};

export default Bloging;
