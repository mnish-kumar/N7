import mainImage from "../assets/main.jpg";
import Home from "../assets/Home.png";
import Home1 from "../assets/Home (1).png";
import { Shield, Globe, Layers3, Boxes, Hexagon, Orbit } from "lucide-react";

const companies = [
  { name: "SHELLS", icon: Shield },
  { name: "SmartFinder", icon: Globe },
  { name: "Zoomerr", icon: Orbit },
  { name: "ArtVenue", icon: Layers3 },
  { name: "konstratr", icon: Boxes },
  { name: "WAVESMARATHON", icon: Hexagon },
];

const Hero = () => {
  return (
    <div className="text-[var(--text-primary)] mt-24 md:mt-32 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
      
      {/* Left */}
      <div className="flex flex-col w-full md:w-auto">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl font-archivo leading-tight">
            The new foundation <br className="hidden sm:block" />
            of modern banking
          </h1>

          <p className="font-archivo text-xs text-[var(--text-primary-80)] max-w-[320px] mx-auto md:mx-0">
            We drive innovation and growth, provide seamless{" "}
            <br className="hidden md:block" />
            customer experience and operational excellence
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-10 items-center md:items-start">
          <button className="w-full sm:w-auto rounded-[10px] py-2 px-6 text-xs bg-[image:var(--gradient-primary)] hover:opacity-90 transition-opacity">
            REQUEST DEMO
          </button>
          <button className="w-full sm:w-auto rounded-[10px] py-2 px-6 border border-[var(--text-primary)] text-xs hover:bg-[var(--white-10)] transition-colors">
            CONTACT US
          </button>
        </div>

        {/* Trusted By */}
        <div className="mt-12 md:mt-20 flex flex-col gap-3 items-center md:items-start">
          <p className="text-[var(--text-primary-70)] text-sm font-archivo">Trusted By:</p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            {companies.map((company) => {
              const Icon = company.icon;
              return (
                <div
                  key={company.name}
                  className="
                    flex items-center gap-2
                    text-[var(--text-primary-40)]
                    hover:text-[var(--text-primary-70)]
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  <Icon size={16} />
                  <span className="font-chivo text-xs">{company.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right - Image Section */}
      <div className="relative flex items-center justify-center mb-0 md:mb-15 w-full md:w-auto mt-8 md:mt-0">
        {/* Glow */}
        <div
          className="
            absolute
            w-[280px] h-[280px]
            sm:w-[340px] sm:h-[340px]
            md:w-[400px] md:h-[400px]
            rounded-full
            blur-[100px]
            md:blur-[120px]
            opacity-50
            bg-[image:var(--gradient-primary-soft)]
          "
        />

        {/* Main Image */}
        <img
          className="
            relative
            md:right-7
            z-10
            w-[260px] h-[220px]
            sm:w-[310px] sm:h-[260px]
            md:w-[362px] md:h-[300px]
            rounded-2xl
            object-cover
          "
          src={mainImage}
          alt="Person using phone"
        />

        {/* Floating Card - Bottom Left */}
        <img
          className="
            absolute
            left-[-40px] bottom-[10px]
            sm:left-[-70px] sm:bottom-[15px]
            md:left-[-105px] md:bottom-[20px]
            z-20
            w-[130px]
            sm:w-[155px]
            md:w-[180px]
          "
          src={Home1}
          alt="Activity Card"
        />

        {/* Floating Card - Top Right */}
        <img
          className="
            absolute
            right-[-40px] top-[10px]
            sm:right-[-55px] sm:top-[15px]
            md:left-[230px] md:top-[20px] md:right-auto
            z-20
            w-[140px]
            sm:w-[165px]
            md:w-[190px]
          "
          src={Home}
          alt="Payment Card"
        />
      </div>
    </div>
  );
};

export default Hero;