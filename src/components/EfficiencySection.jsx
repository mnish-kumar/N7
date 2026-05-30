import { Check } from "lucide-react";
import BankingDashboard from "../assets/bkDash.png";
import PaperlessSection from "./PaperSection";

const features = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

const EfficiencySection = () => {
  return (
    <section className="mt-20 md:mt-32 relative overflow-hidden text-[var(--text-primary)]">

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">

        {/* Left - Image */}
        <div className="relative w-full md:w-1/2">

          {/* Glow */}
          <div
            className="
              absolute inset-0
              bg-[image:var(--gradient-primary-soft)]
              blur-[80px] md:blur-[120px]
              opacity-20
              scale-90
            "
          />

          {/* Image */}
          <img
            className="
              relative z-10
              w-full
              rounded-[16px] md:rounded-[20px]
              border border-[var(--blue-primary-30)]
              shadow-2xl
            "
            src={BankingDashboard}
            alt="Banking Dashboard"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-10">

          {/* Heading */}
          <div className="flex flex-col gap-4 md:gap-5">
            <h1 className="font-archivo text-3xl sm:text-4xl md:text-5xl leading-tight">
              Run a more efficient, flexible,
              and digitally connected core
              banking system
            </h1>

            <p className="font-archivo text-base md:text-lg">
              What you will get:
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5 md:gap-y-6">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 text-[var(--text-primary-80)]"
              >
                {/* Icon */}
                <div
                  className="
                    min-w-5 min-h-5
                    rounded-full bg-[var(--blue-accent)]
                    flex items-center justify-center
                    mt-1 shrink-0
                  "
                >
                  <Check size={12} />
                </div>

                {/* Text */}
                <p className="leading-7 text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-20 mt-20">
        <PaperlessSection />
      </div>
    </section>
  );
};

export default EfficiencySection;