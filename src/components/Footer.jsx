import PaperlessSection from "./PaperSection";
import { ArrowUpRight, Link, MapPin, X } from "lucide-react";

const solutions = [
  "Core Banking CB7",
  "Digital Banking N7",
  "Open Banking",
  "Loan Origination System",
  "Loan Management System",
  "Digital Transformation",
];

const company = [
  "About Us",
  "Solutions",
  "Contact",
  "Company",
  "Careers",
  "Insights",
  "Core Team",
  "Brand Center",
];

const socials = [
  { label: "LinkedIn", icon: Link, href: "#" },
  { label: "X", icon: X, href: "#" },
];

const locations = [
  {
    city: "London",
    address:
      "Linktia Infosystems Ltd - CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
  },
  {
    city: "Dubai",
    address:
      "Linktia Infosystems Ltd - CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates.",
  },
  {
    city: "London",
    address:
      "Linktia Infosystems Ltd - CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India.",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-10">
      <div className="mb-20">
        <PaperlessSection />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-15">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* N7 */}
          <div className="w-full lg:w-[30%]">
            <h1
              className="
                text-[120px] sm:text-[160px] lg:text-[220px]
                font-bold
                leading-none
                bg-[var(--gradient-brand-vertical)]
                bg-clip-text
                text-transparent
              "
            >
              N7
            </h1>
          </div>

          {/* Right */}
          <div className="flex-1">
            {/* Locations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {locations.map((location) => (
                <div key={`${location.city}-${location.address}`} className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-chivo text-[var(--text-primary-80)]">
                    <MapPin size={14} className="text-[var(--blue-primary)]" />
                    <span>{location.city}</span>
                  </div>
                  <p className="text-xs leading-6 text-[var(--text-primary-60)]">
                    {location.address}
                  </p>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div>
                <h3 className="text-sm font-archivo mb-4">Solutions</h3>
                <ul className="space-y-2">
                  {solutions.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-xs text-[var(--text-primary-70)] hover:text-[var(--blue-primary)] transition-colors"
                      >
                        <span>{item}</span>
                        <ArrowUpRight size={14} className="text-[var(--blue-primary)]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-archivo mb-4">N7 Banking</h3>
                <ul className="space-y-2">
                  {company.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-xs text-[var(--text-primary-70)] hover:text-[var(--blue-primary)] transition-colors"
                      >
                        <span>{item}</span>
                        <ArrowUpRight size={14} className="text-[var(--blue-primary)]" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-archivo mb-4">Our Socials</h3>
                <ul className="space-y-2">
                  {socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          className="flex items-center justify-between text-xs text-[var(--text-primary-70)] hover:text-[var(--blue-primary)] transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <Icon size={14} className="text-[var(--blue-primary)]" />
                            {social.label}
                          </span>
                          <ArrowUpRight size={14} className="text-[var(--blue-primary)]" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--white-10)] pt-6">
          <p className="text-[10px] sm:text-xs text-[var(--text-primary-40)] leading-5">
            Copyright © 2022 by Linktia Infosystems Limited — (CB7 and N7 as Commercial Brand) —
            (Registered under the Companies Act 2006 in England and Wales | Number of incorporation 13100992)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
