import React from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed
        w-[calc(100%-2rem)]
        sm:w-full
        z-20
        max-w-[720px]
        mx-auto
        rounded-[14px]
        border
        border-[var(--white-10)]
        bg-[var(--bg-glass)]
        backdrop-blur-xl
        px-[10px]
        py-[9px]
        text-[var(--text-primary)]
        mt-3
      "
    >
      {/* Main Row */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="font-archivo text-[20px] font-normal">N7</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 font-chivo text-[12px] font-light">
            <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--white-70)] transition-colors">
              <span>SOLUTIONS</span>
              <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[var(--white-70)] transition-colors">
              <span>RESOURCES</span>
              <ChevronDown size={14} />
            </div>
            <div className="cursor-pointer hover:text-[var(--white-70)] transition-colors">
              ABOUT US
            </div>
          </div>

          <button
            className="
              border border-[var(--text-primary)] rounded-[6px]
              px-4 py-2 text-[12px] font-chivo
              transition-all duration-300
              hover:bg-white hover:text-black
            "
          >
            REQUEST DEMO
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[var(--text-primary)] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 pt-4 pb-2 px-2 border-t border-[var(--white-10)] mt-3">
          <div className="flex items-center gap-1 font-chivo text-[12px] cursor-pointer hover:text-[var(--white-70)] transition-colors">
            <span>SOLUTIONS</span>
            <ChevronDown size={14} />
          </div>
          <div className="flex items-center gap-1 font-chivo text-[12px] cursor-pointer hover:text-[var(--white-70)] transition-colors">
            <span>RESOURCES</span>
            <ChevronDown size={14} />
          </div>
          <div className="font-chivo text-[12px] cursor-pointer hover:text-[var(--white-70)] transition-colors">
            ABOUT US
          </div>
          <button
            className="
              w-full border border-[var(--text-primary)] rounded-[6px]
              px-4 py-2 text-[12px] font-chivo
              transition-all duration-300
              hover:bg-white hover:text-black
            "
          >
            REQUEST DEMO
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;