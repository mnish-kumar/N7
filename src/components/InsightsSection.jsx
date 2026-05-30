import BlogingCard from "./Bloging";
import Vector from "../assets/Vector.png";

const InsightsSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 bg-[#000D12] px-4 py-10 sm:px-8 md:px-15 text-[#E9F4F9] w-full">
      {/* Left */}
      <div className="w-full md:w-[28%] flex flex-col gap-8 md:gap-20">
        <h1 className="text-4xl">
          Get yourself up-to-speed on all the things happening in fintech
        </h1>

        <button className="uppercase border rounded px-8 py-1 w-fit">
          Insights
        </button>
      </div>

      {/* Right */}
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
          <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row justify-between p-3 min-h-[310px] bg-[#02141B] rounded-2xl">
            {/* img */}
            <div
              className="
                w-full sm:w-[45%]
                bg-[#071B32]
                rounded-[20px]
                p-6

                grid
                grid-cols-2
                gap-8
                place-items-center
                "
            >
              <img src={Vector} alt="" className="w-24 h-24" />
              <img src={Vector} alt="" className="w-24 h-24" />
              <img src={Vector} alt="" className="w-24 h-24" />
              <img src={Vector} alt="" className="w-24 h-24" />
            </div>

            <BlogingCard />
          </div>

          {/* Second Row - Left */}
          <BlogingCard />

          {/* Second Row - Right */}
          <BlogingCard />
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
