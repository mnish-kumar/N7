import {
  ArrowRight,
  Blocks,
  CircleDashed,
  Orbit,
  Workflow,
  ShieldCheck,
} from "lucide-react";

const solutions = [
  {
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    icon: CircleDashed,
  },
  {
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation.",
    icon: Blocks,
  },
  {
    title: "Open Banking",
    description:
      "Our API banking helps you gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation.",
    icon: Orbit,
  },
  {
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science.",
    icon: Workflow,
  },
  {
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation.",
    icon: ShieldCheck,
  },
];

const SolutionCard = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row text-[#E9F4F9] w-full gap-10 md:gap-0">

      {/* Left */}
      <div className="flex flex-col gap-6 md:gap-10 w-full md:w-1/2 items-center md:items-start text-center md:text-left">
        <h1 className="font-archivo font-normal text-xl sm:text-2xl leading-8 -tracking-tighter">
          All of our solutions are <br className="hidden sm:block" />
          tailor-made to your needs
        </h1>

        <button
          className="
            border
            border-[#E9F4F9]
            rounded-[8px]
            text-xs
            font-chivo
            px-6
            py-3
            w-fit
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
          "
        >
          REQUEST DEMO
        </button>
      </div>

      {/* Right */}
      <div
        className="
          w-full md:w-1/2
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-x-14
          gap-y-10
          md:gap-y-16
        "
      >
        {solutions.map((solution) => {
          const Icon = solution.icon;

          return (
            <div
              key={solution.title}
              className="
                flex
                flex-col
                gap-4
                md:gap-5
                group
                cursor-pointer
                border-t
                border-[#E9F4F9]/10
                pt-6
                sm:border-none
                sm:pt-0
              "
            >
              {/* Icon */}
              <div
                className="
                  w-fit
                  text-[#E9F4F9]/70
                  group-hover:text-[#00B4FD]
                  transition-all
                  duration-300
                "
              >
                <Icon size={28} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 md:gap-4">
                <h2 className="font-archivo text-lg md:text-xl">
                  {solution.title}
                </h2>

                <p className="text-sm leading-6 text-[#E9F4F9]/60 font-archivo">
                  {solution.description}
                </p>

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#00B4FD]
                    text-xs
                    font-chivo
                    tracking-wide
                    hover:gap-3
                    transition-all
                    duration-300
                    w-fit
                  "
                >
                  LEARN MORE
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SolutionCard;