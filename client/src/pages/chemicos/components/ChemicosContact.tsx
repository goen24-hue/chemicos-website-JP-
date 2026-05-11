import { useState } from "react";
import { contactInfo } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };
const JP_TITLE = { fontFamily: "'Cormorant Garamond', serif" };

export default function ChemicosContact() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    product: "",
    message: "",
  });
  const [charCount, setCharCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
    Object.entries(form).forEach(([k, v]) => body.append(k, v));
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
    <section id="contact" className="bg-[#f5f0e8] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-[#2c2c2c]/35"></div>
          <span className="text-sm tracking-[0.28em] uppercase font-light text-[#6b6055]" style={JP_BODY}>
            アクセス・お問い合わせ
          </span>
        </div>
        <h2
          className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#2c2c2c]"
          style={JP_TITLE}
        >
          どこにありますか？<br />
          どう連絡しますか？
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Info + Map */}
        <div>
          {/* Contact details */}
          <div className="space-y-8 mb-14">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex items-center justify-center text-[#c8b99a] flex-shrink-0">
                <i className="ri-map-pin-line text-xl"></i>
              </div>
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-[#8a7e6e] mb-2 font-light" style={JP_BODY}>
                  所在地
                </p>
                <p className="text-[#2c2c2c] text-lg font-light leading-[1.9]" style={JP_BODY}>
                  {contactInfo.addressJp.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < contactInfo.addressJp.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex items-center justify-center text-[#c8b99a] flex-shrink-0">
                <i className="ri-phone-line text-xl"></i>
              </div>
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-[#8a7e6e] mb-2 font-light" style={JP_BODY}>
                  電話番号
                </p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-[#2c2c2c] text-lg font-light hover:text-[#c8b99a] transition-colors cursor-pointer"
                  style={JP_BODY}
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex items-center justify-center text-[#c8b99a] flex-shrink-0">
                <i className="ri-mail-line text-xl"></i>
              </div>
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-[#8a7e6e] mb-2 font-light" style={JP_BODY}>
                  メールアドレス
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-[#2c2c2c] text-lg font-light hover:text-[#c8b99a] transition-colors cursor-pointer"
                  style={JP_BODY}
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex items-center justify-center text-[#c8b99a] flex-shrink-0">
                <i className="ri-time-line text-xl"></i>
              </div>
              <div>
                <p className="text-sm tracking-[0.2em] uppercase text-[#8a7e6e] mb-2 font-light" style={JP_BODY}>
                  営業時間
                </p>
                <p className="text-[#2c2c2c] text-lg font-light" style={JP_BODY}>
                  {contactInfo.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <a
            href="https://maps.app.goo.gl/3wwfR4DtgTokxmkd9"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-72 bg-[#ede8df] overflow-hidden group cursor-pointer"
          >
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 text-[#2c2c2c] group-hover:text-[#c8b99a] transition-colors duration-300">
              <i className="ri-map-pin-line text-4xl"></i>
              <span className="text-sm tracking-[0.2em] uppercase font-light" style={JP_BODY}>
                Google Mapsで表示
              </span>
            </div>
          </a>
        </div>

        {/* Right: Form */}
        <div>
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full py-20 text-center">
              <div className="w-12 h-12 flex items-center justify-center text-[#c8b99a] mb-6">
                <i className="ri-check-line text-3xl"></i>
              </div>
              <p
                className="font-serif text-2xl text-[#2c2c2c] font-light mb-4"
                style={JP_TITLE}
              >
                ありがとうございます
              </p>
              <p className="text-[#6b6055] text-lg font-light leading-[1.9]" style={JP_BODY}>
                お問い合わせを受け付けました。<br />
                2営業日以内にご連絡いたします。
              </p>
            </div>
          ) : (
            <>
              <p
                className="font-serif text-2xl text-[#2c2c2c] font-light mb-10"
                style={JP_TITLE}
              >
                お問い合わせフォーム
              </p>
              <form
                data-readdy-form
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                      style={JP_BODY}
                    >
                      会社名
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#2c2c2c]/25 pb-2 text-base text-[#2c2c2c] font-light outline-none focus:border-[#2c2c2c] transition-colors placeholder-[#8a7e6e]/50"
                      style={JP_BODY}
                      placeholder="株式会社〇〇"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                      style={JP_BODY}
                    >
                      お名前 *
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
                </div>

                <div>
                  <label
                    className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                    style={JP_BODY}
                  >
                    メールアドレス *
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
                  <label
                    className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                    style={JP_BODY}
                  >
                    ご関心の製品カテゴリ
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#2c2c2c]/25 pb-2 text-base text-[#2c2c2c] font-light outline-none focus:border-[#2c2c2c] transition-colors cursor-pointer appearance-none"
                    style={JP_BODY}
                  >
                    <option value="">選択してください</option>
                    <option value="eyeliner">アイライナー</option>
                    <option value="mascara">マスカラ</option>
                    <option value="brow">アイブロウ</option>
                    <option value="lip">リップ</option>
                    <option value="other">その他・複数</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                    style={JP_BODY}
                  >
                    ご相談内容 *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-[#2c2c2c]/25 pb-2 text-base text-[#2c2c2c] font-light outline-none focus:border-[#2c2c2c] transition-colors resize-none placeholder-[#8a7e6e]/50"
                    style={JP_BODY}
                    placeholder="製品のコンセプト、数量、スケジュールなど、お気軽にご記入ください"
                  />
                  <p
                    className={`text-right text-sm mt-1 font-light ${charCount >= 500 ? "text-red-400" : "text-[#8a7e6e]/60"}`}
                    style={JP_BODY}
                  >
                    {charCount}/500
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm tracking-[0.2em] uppercase border border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-[#f5f0e8] transition-all duration-300 font-light cursor-pointer whitespace-nowrap"
                  style={JP_BODY}
                >
                  送信する
                  <i className="ri-arrow-right-line ml-3 text-sm"></i>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
