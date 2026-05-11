import { useState } from "react";

const footerLinks = {
  "Orders and support": ["FAQ", "Shipping", "Returns", "Track order", "Contact us"],
  About: ["Our story", "Sustainability", "Careers", "Press", "Stockists"],
  Sustainability: [
    "All sustainability at Aesop",
    "Responsible sourcing",
    "Packaging",
    "Community",
    "Cruelty-free",
  ],
};

const socialLinks = [
  { icon: "ri-instagram-line", label: "Instagram" },
  { icon: "ri-twitter-x-line", label: "Twitter" },
  { icon: "ri-facebook-line", label: "Facebook" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    const formData = new URLSearchParams();
    formData.append("email", email);
    try {
      await fetch("https://readdy.ai/api/form/d7g7q3qispognpoj2ou0", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
      setSubmitted(true);
      setEmail("");
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <footer className="w-full bg-[#1e1b15]">
      {/* Complementary Samples Banner */}
      <div className="w-full border-b border-[#3a3528] px-6 md:px-10 lg:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 flex items-center justify-center text-[#8a7e6e]">
            <i className="ri-gift-line text-sm"></i>
          </div>
          <span className="text-xs text-[#8a7e6e] font-light tracking-wide">Complimentary samples</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 flex items-center justify-center text-[#8a7e6e]">
            <i className="ri-truck-line text-sm"></i>
          </div>
          <span className="text-xs text-[#8a7e6e] font-light tracking-wide">Complimentary standard shipping</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 flex items-center justify-center text-[#8a7e6e]">
            <i className="ri-gift-2-line text-sm"></i>
          </div>
          <span className="text-xs text-[#8a7e6e] font-light tracking-wide">Complimentary gift wrapping</span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-6 md:px-10 lg:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Newsletter */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-[#f5f0e8] mb-4 font-light">
            Subscribe to our communiqué
          </p>
          {submitted ? (
            <p className="text-xs text-[#8a7e6e] font-light">Thank you for subscribing.</p>
          ) : (
            <form
              data-readdy-form
              onSubmit={handleSubmit}
              className="flex items-center border-b border-[#3a3528] pb-2"
            >
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 bg-transparent text-xs text-[#f5f0e8] placeholder-[#5a5040] font-light outline-none"
                required
              />
              <button
                type="submit"
                className="w-5 h-5 flex items-center justify-center text-[#8a7e6e] hover:text-[#f5f0e8] transition-colors cursor-pointer"
              >
                <i className="ri-arrow-right-line text-sm"></i>
              </button>
            </form>
          )}
          <p className="text-xs text-[#5a5040] font-light mt-3 leading-relaxed">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>

        {/* Footer Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="text-xs tracking-[0.3em] uppercase text-[#f5f0e8] mb-4 font-light">
              {title}
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-[#8a7e6e] font-light hover:text-[#d4c9b0] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social + Legal */}
      <div className="px-6 md:px-10 lg:px-16 pb-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#3a3528] pt-8">
        <div className="flex items-center gap-5">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="w-5 h-5 flex items-center justify-center text-[#8a7e6e] hover:text-[#d4c9b0] transition-colors"
            >
              <i className={`${s.icon} text-base`}></i>
            </a>
          ))}
        </div>
        <p className="text-xs text-[#5a5040] font-light">
          &copy; {new Date().getFullYear()} Aesop. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-xs text-[#5a5040] font-light hover:text-[#8a7e6e] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-[#5a5040] font-light hover:text-[#8a7e6e] transition-colors">
            Terms of Use
          </a>
        </div>
      </div>

      {/* Brand Wordmark */}
      <div className="w-full overflow-hidden px-6 md:px-10 pb-6">
        <p
          className="font-serif text-[#3a3528] select-none leading-none tracking-tight"
          style={{ fontSize: "clamp(60px, 12vw, 180px)" }}
        >
          Aesop
        </p>
      </div>
    </footer>
  );
}
