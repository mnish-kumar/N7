import { ArrowRight, CheckCircle2 } from "lucide-react";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";
import PaperlessSection from "./PaperSection";
import ButtonRequestDemo from "./libs/ButtonRequestDemo";

const features = [
  {
    image: mobile1,
    title: "Fully compliant with regulatory requirement",
    description:
      "The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational risk protocols and procedures.",
    points: [
      "Pre-integrated Security System",
      "Fully Compliant With Regulatory Requirement",
      "Digitally Connected Core",
    ],
  },
  {
    image: mobile2,
    title: "No legacy IT systems",
    description:
      "Our Digital Banking solution and multichannel approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.",
    points: [
      "Adaptive & Intelligent API",
      "Ambient User Experience",
      "Cloud-native With Lower TCO",
    ],
  },
  {
    image: mobile3,
    title: "No traditional branches",
    description:
      "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimizing operational costs for a seamless branch-less experience.",
    points: [
      "Branchless & Paperless Banking",
      "Digital Transformation Capability",
      "Optimized, Adaptable and Scalable",
    ],
  },
];

const DigitalBankingSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[var(--bg-light)] text-[var(--text-dark)] overflow-hidden px-6 sm:px-10 md:px-16">
      <h1
        className="absolute top-0 left-0 right-0 hidden sm:flex justify-center
  text-[180px] md:text-[550px] font-archivo
  opacity-[0.15]
  select-none pointer-events-none leading-none
  [-webkit-text-stroke:2px_var(--blue-primary)]
  text-transparent"
      >
        N7
      </h1>

      <div className="relative w-full z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
        {/* Header */}
        <div className="flex flex-col w-full md:w-1/3 md:flex-row justify-between items-start mb-16 md:mb-24 gap-8">
          <div className="w-full md:max-w-[420px]">
            <h1 className="font-archivo text-3xl sm:text-4xl md:text-5xl leading-tight">
              Digital banking
              <br />
              out-of-the-box
            </h1>
            <p className="mt-4 md:mt-5 text-sm text-[var(--black-70)] max-w-[320px]">
              N7 helps your financial institution improve the client experience,
              automate and optimize procedures.
            </p>
            <div className="flex items-center gap-6 mt-6 md:mt-8">
              <ButtonRequestDemo />
              <button
                className="flex items-center gap-2 text-[var(--blue-accent)] text-xs font-chivo
                hover:gap-3 transition-all duration-300"
              >
                LEARN MORE
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col  gap-20 md:gap-32">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20
                ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Phone */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-[320px] sm:h-[400px] md:h-[450px] rounded-2xl object-contain drop-shadow-xl"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 max-w-full md:max-w-[380px]">
                <h2 className="font-archivo text-xl sm:text-2xl mb-4 md:mb-6">
                  {feature.title}
                </h2>
                <p className="text-sm text-[var(--black-60)] leading-6 mb-6 md:mb-8">
                  {feature.description}
                </p>
                <div className="flex flex-col gap-4 md:gap-5">
                  {feature.points.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="text-[var(--blue-accent)] mt-0.5 shrink-0"
                      />
                      <p className="text-sm text-[var(--black-75)] leading-6">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[var(--bg-primary)] rounded-2xl mt-20">
        <PaperlessSection />
      </div>
      
    </section>
  );
};

export default DigitalBankingSection;
