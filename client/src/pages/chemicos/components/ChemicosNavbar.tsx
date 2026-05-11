import { useState, useEffect, useRef } from "react";

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };
const JOST = { fontFamily: "'Jost', sans-serif" };

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    label: "Company",
    children: [
      { label: "Story", href: "#intro" },
      { label: "Heritage", href: "#heritage" },
      { label: "About Us", href: "#about" },
      { label: "Expertise", href: "#competence" },
      { label: "Expansion", href: "#expansion" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "Eyeliner", href: "#portfolio" },
      { label: "Mascara", href: "#portfolio" },
      { label: "Eyebrow", href: "#portfolio" },
      { label: "Lip", href: "#portfolio" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Process", href: "#process" },
      { label: "MOQ & Lead Time", href: "#specs" },
      { label: "Partnership", href: "#partnership" },
    ],
  },
  {
    label: "Clients",
    href: "#clients",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

function smoothScrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const offset = 64;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

function DropdownMenu({
  item,
  scrolled,
  onClose,
}: {
  item: NavItem;
  scrolled: boolean;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.children) {
    return (
      <a
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          if (item.href) smoothScrollTo(item.href);
          onClose();
        }}
        className={`text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300 hover:opacity-50 whitespace-nowrap cursor-pointer ${
          scrolled ? "text-[#2c2c2c]" : "text-[#f5f0e8]"
        }`}
        style={JOST}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        className={`flex items-center gap-1.5 text-sm tracking-[0.2em] uppercase font-light transition-colors duration-300 hover:opacity-50 whitespace-nowrap cursor-pointer ${
          scrolled ? "text-[#2c2c2c]" : "text-[#f5f0e8]"
        }`}
        style={JOST}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
      >
        {item.label}
        <i
          className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        ></i>
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-3 bg-[#f5f0e8] border border-[#e0d9ce] min-w-[180px] py-2 z-50"
          onMouseLeave={() => setOpen(false)}
        >
          {item.children.map((child) => (
            <a
              key={child.label + child.href}
              href={child.href}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(child.href);
                setOpen(false);
                onClose();
              }}
              className="block px-5 py-2.5 text-sm text-[#4a4035] hover:text-[#2c2c2c] hover:bg-[#ede8df] transition-colors duration-200 font-light tracking-[0.1em] whitespace-nowrap cursor-pointer"
              style={JP_BODY}
            >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ChemicosNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#f5f0e8] border-b border-[#e0d9ce]" : "bg-transparent"
      }`}
    >
      <div className="w-full px-8 md:px-14 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center flex-shrink-0"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663558366883/RwrPSixCXsPHjaa2u7osqn/chemicos-logo_a5d1b5b8.webp"
            alt="CHEMICOS"
            className={`h-5 w-auto transition-all duration-500 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <DropdownMenu
              key={item.label}
              item={item}
              scrolled={scrolled}
              onClose={() => setMenuOpen(false)}
            />
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#contact");
            }}
            className={`hidden md:block text-sm tracking-[0.15em] uppercase border px-5 py-2.5 font-light transition-all duration-300 cursor-pointer whitespace-nowrap ${
              scrolled
                ? "border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-[#f5f0e8]"
                : "border-[#f5f0e8]/60 text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#2c2c2c]"
            }`}
            style={JP_BODY}
          >
            お問い合わせ
          </a>
          <button
            className={`md:hidden w-5 h-5 flex items-center justify-center cursor-pointer ${
              scrolled ? "text-[#2c2c2c]" : "text-[#f5f0e8]"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <i
              className={`text-base ${menuOpen ? "ri-close-line" : "ri-menu-line"}`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f0e8] border-t border-[#e0d9ce] px-8 py-4 flex flex-col">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    className="w-full flex items-center justify-between py-3 text-sm tracking-[0.2em] uppercase font-light text-[#2c2c2c] cursor-pointer"
                    style={JOST}
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <i
                      className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                    ></i>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 pb-2 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label + child.href}
                          href={child.href}
                          onClick={(e) => {
                            e.preventDefault();
                            smoothScrollTo(child.href);
                            setMenuOpen(false);
                          }}
                          className="py-2 text-sm text-[#6b6055] hover:text-[#2c2c2c] transition-colors font-light tracking-[0.1em] cursor-pointer"
                          style={JP_BODY}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.href) smoothScrollTo(item.href);
                    setMenuOpen(false);
                  }}
                  className="block py-3 text-sm tracking-[0.2em] uppercase font-light text-[#2c2c2c] hover:opacity-50 transition-opacity cursor-pointer"
                  style={JOST}
                >
                  {item.label}
                </a>
              )}
              <div className="w-full h-px bg-[#2c2c2c]/8"></div>
            </div>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("#contact");
              setMenuOpen(false);
            }}
            className="mt-4 text-sm tracking-[0.15em] uppercase border border-[#2c2c2c] px-5 py-2.5 text-[#2c2c2c] font-light w-fit cursor-pointer whitespace-nowrap"
            style={JP_BODY}
          >
            お問い合わせ
          </a>
        </div>
      )}
    </header>
  );
}
