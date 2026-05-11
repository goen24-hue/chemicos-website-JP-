import { useState } from "react";

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };

export default function ChemicosCTA() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "message") {
      if (value.length > 500) return;
      setCharCount(value.length);
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.message.length > 500) return;
    const body = new URLSearchParams();
    body.append("name", form.name);
    body.append("email", form.email);
    body.append("message", form.message);
    try {
      await fetch("https://readdy.ai/api/form/d7g7t22gm6d735ptokvg", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
    } catch {
      // silent
    }
    setSubmitted(true);
  };

  return (
    <>
      <div className="w-full h-px bg-[#2c2c2c]/10"></div>
      <section className="relative min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20 overflow-hidden">
        {/* 배경 영상 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.75)" }}
        >
          <source src="/manus-storage/cta-nature-bg_11e5a4ac.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative max-w-2xl mx-auto text-center">
          <div className="w-full h-px bg-[#f5f0e8]/20 mb-20"></div>

          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.3] text-[#f5f0e8] mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            長く、深く、<br />共に歩むパートナーへ
          </h2>

          <p className="text-[#f5f0e8]/80 leading-[2.0] text-lg mb-14 max-w-xl mx-auto font-light" style={JP_BODY}>
            私たちは、ブランドとともに積み重ねていく価値を大切にしています。<br />
            その価値を、確かなものづくりで支えていきます。<br />
            ぜひご相談ください。
          </p>

          <button
            onClick={() => setOpen(true)}
            className="btn-chemicos inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase border border-[#f5f0e8]/70 px-8 py-3.5 text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#2c2c2c] font-light cursor-pointer whitespace-nowrap"
            style={JP_BODY}
          >
            お問い合わせ
            <i className="ri-arrow-right-line text-sm"></i>
          </button>

          <div className="w-full h-px bg-[#f5f0e8]/20 mt-20"></div>
        </div>
      </section>

      {/* Contact Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          ></div>
          <div className="relative bg-[#f5f0e8] w-full max-w-lg p-10 z-10">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 w-6 h-6 flex items-center justify-center text-[#2c2c2c]/50 hover:text-[#2c2c2c] cursor-pointer"
            >
              <i className="ri-close-line text-lg"></i>
            </button>

            {submitted ? (
              <div className="text-center py-10">
                <p className="font-serif text-2xl text-[#2c2c2c] font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  ありがとうございます
                </p>
                <p className="text-[#6b6055] text-base font-light" style={JP_BODY}>
                  お問い合わせを受け付けました。<br />近日中にご連絡いたします。
                </p>
              </div>
            ) : (
              <>
                <p className="text-sm tracking-[0.28em] uppercase text-[#6b6055] mb-2 font-light" style={JP_BODY}>
                  Contact
                </p>
                <h3
                  className="font-serif text-2xl text-[#2c2c2c] font-light mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  お問い合わせ
                </h3>
                <form
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light" style={JP_BODY}>
                      お名前
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#2c2c2c]/25 pb-2 text-base text-[#2c2c2c] font-light outline-none focus:border-[#2c2c2c] transition-colors placeholder-[#8a7e6e]/50"
                      style={JP_BODY}
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light" style={JP_BODY}>
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#2c2c2c]/25 pb-2 text-base text-[#2c2c2c] font-light outline-none focus:border-[#2c2c2c] transition-colors placeholder-[#8a7e6e]/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light" style={JP_BODY}>
                      メッセージ
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-[#2c2c2c]/25 pb-2 text-base text-[#2c2c2c] font-light outline-none focus:border-[#2c2c2c] transition-colors resize-none placeholder-[#8a7e6e]/50"
                      style={JP_BODY}
                      placeholder="ご相談内容をご記入ください"
                    />
                    <p className={`text-right text-sm mt-1 font-light ${charCount >= 500 ? "text-red-400" : "text-[#8a7e6e]/60"}`} style={JP_BODY}>
                      {charCount}/500
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 text-sm tracking-[0.2em] uppercase border border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-[#f5f0e8] transition-all duration-300 font-light cursor-pointer whitespace-nowrap"
                    style={JP_BODY}
                  >
                    送信する
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
