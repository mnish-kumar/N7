import { Asterisk } from "lucide-react";

const items = [
  { type: "brand", text: "N7" },
  { type: "text", text: "Say 👋" },
  { type: "text", text: "to the new way of banking" },
  { type: "brand", text: "CB7" },
  { type: "text", text: "Say 👋" },
  { type: "text", text: "to the new way of banking" },
];

const TickerItem = ({ item }) => (
  <>
    <Asterisk size={20} className="text-gray-500 shrink-0" />
    {item.type === "brand" ? (
      <span
        className="
          bg-[linear-gradient(106.53deg,_#00B4FD_-5.68%,_#003ACE_86.98%)]
          bg-clip-text text-transparent
          text-xl sm:text-2xl md:text-3xl
          font-archivo shrink-0
        "
      >
        {item.text}
      </span>
    ) : (
      <span className="text-xl sm:text-2xl md:text-3xl font-archivo shrink-0">
        {item.text}
      </span>
    )}
  </>
);

const TickerSection = () => {
  const tickerItems = [...items, ...items, ...items];

  return (
    <section className="bg-[#E9F4F9] border-y border-black/10 py-3 sm:py-4 overflow-hidden">
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .ticker-track {
          animation: ticker 18s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="ticker-track flex items-center gap-5 sm:gap-6 whitespace-nowrap w-max">
        {tickerItems.map((item, i) => (
          <TickerItem key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default TickerSection;