import { useState, useEffect } from "react";

const navLinks = [
  { label: "New & Notable", href: "/" },
  { label: "Skin Care", href: "/" },
  { label: "Hand & Body", href: "/" },
  { label: "Fragrance", href: "/" },
  { label: "Home", href: "/" },
  { label: "Library", href: "/" },
  { label: "Experiences", href: "/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#f5f0e8] shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className={`font-serif text-xl tracking-[0.25em] uppercase font-light transition-colors duration-300 ${
            scrolled ? "text-[#2c2c2c]" : "text-[#f5f0e8]"
          }`}
        >
          Aesop
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs tracking-widest uppercase font-light transition-colors duration-300 hover:opacity-60 whitespace-nowrap ${
                scrolled ? "text-[#2c2c2c]" : "text-[#f5f0e8]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button
            className={`w-5 h-5 flex items-center justify-center transition-colors duration-300 cursor-pointer ${
              scrolled ? "text-[#2c2c2c]" : "text-[#f5f0e8]"
            }`}
            aria-label="Search"
          >
            <i className="ri-search-line text-base"></i>
          </button>
          <button
            className={`w-5 h-5 flex items-center justify-center transition-colors duration-300 cursor-pointer ${
              scrolled ? "text-[#2c2c2c]" : "text-[#f5f0e8]"
            }`}
            aria-label="Cart"
          >
            <i className="ri-shopping-bag-line text-base"></i>
          </button>
          <button
            className={`hidden md:flex text-xs tracking-widest uppercase font-light border px-4 py-1.5 transition-all duration-300 cursor-pointer whitespace-nowrap ${
              scrolled
                ? "border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-[#f5f0e8]"
                : "border-[#f5f0e8] text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#2c2c2c]"
            }`}
          >
            Sign in
          </button>
          {/* Hamburger */}
          <button
            className={`lg:hidden w-5 h-5 flex items-center justify-center cursor-pointer ${
              scrolled ? "text-[#2c2c2c]" : "text-[#f5f0e8]"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <i className={`text-base ${menuOpen ? "ri-close-line" : "ri-menu-line"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#f5f0e8] border-t border-[#e0d9ce] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-widest uppercase font-light text-[#2c2c2c] hover:opacity-60 transition-opacity"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
