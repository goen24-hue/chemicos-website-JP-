import { useState, useEffect, useMemo } from "react";
import { contactInfo } from "@/mocks/chemicos";
import { trpc } from "@/lib/trpc";

/** 봇 방지용 간단한 수학 문제 생성 */
function generateMathChallenge() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  return { a, b, answer: a + b };
}

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };
const JP_TITLE = { fontFamily: "'Cormorant Garamond', serif" };

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  captcha?: string;
};

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
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ── 봇 방지 ──────────────────────────────────────────
  // 수학 퀴즈: 컴포넌트 마운트 시 1회 생성
  const challenge = useMemo(() => generateMathChallenge(), []);
  const [captchaInput, setCaptchaInput] = useState("");
  // 허니팟: 봇만 채우는 숨겨진 필드
  const [honeypot, setHoneypot] = useState("");
  // ─────────────────────────────────────────────────────

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setIsSubmitting(false);
      setSubmitted(true);
    },
    onError: () => {
      setIsSubmitting(false);
      setSubmitError("送信に失敗しました。時間をおいて再度お試しください。");
    },
  });

  // 성공 메시지 등장 애니메이션 트리거
  useEffect(() => {
    if (submitted) {
      const t = setTimeout(() => setShowSuccess(true), 50);
      return () => clearTimeout(t);
    }
  }, [submitted]);

  const validate = (values: typeof form): FormErrors => {
    const errs: FormErrors = {};
    if (!values.name.trim()) errs.name = "お名前を入力してください";
    if (!values.email.trim()) {
      errs.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = "正しいメールアドレスを入力してください";
    }
    if (!values.message.trim()) errs.message = "ご相談内容を入力してください";
    // 수학 퀴즈 검증
    if (parseInt(captchaInput, 10) !== challenge.answer) {
      errs.captcha = "答えが正しくありません";
    }
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "message") {
      if (value.length > 500) return;
      setCharCount(value.length);
    }
    const updated = { ...form, [name]: value };
    setForm(updated);
    // リアルタイム検証（一度触れたフィールドのみ）
    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 全フィールドをtouched扱いにして検証
    setTouched({ name: true, email: true, message: true, captcha: true });

    // 허니팟 필드가 채워져 있으면 봇으로 판단하고 조용히 차단
    if (honeypot) {
      setIsSubmitting(false);
      setSubmitted(true); // 봇에게는 성공처럼 보이게
      return;
    }
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitError(null);
    setIsSubmitting(true);
    contactMutation.mutate({
      company: form.company || undefined,
      name: form.name,
      email: form.email,
      product: form.product || undefined,
      message: form.message,
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#f5f0e8] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20"
      style={{ scrollMarginTop: "64px" }}
    >
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-[#2c2c2c]/35"></div>
          <span
            className="text-sm tracking-[0.28em] uppercase font-light text-[#6b6055]"
            style={JP_BODY}
          >
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

        {/* Right: Form / Success */}
        <div>
          {submitted ? (
            /* ── 成功メッセージ（フェードイン＋スライドアップ） ── */
            <div
              className="flex flex-col items-center justify-center h-full py-20 text-center"
              style={{
                opacity: showSuccess ? 1 : 0,
                transform: showSuccess ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              {/* チェックサークル */}
              <div
                className="relative w-20 h-20 mb-10"
                style={{
                  opacity: showSuccess ? 1 : 0,
                  transform: showSuccess ? "scale(1)" : "scale(0.6)",
                  transition: "opacity 0.5s ease 0.2s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.2s",
                }}
              >
                <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
                  <circle
                    cx="40" cy="40" r="38"
                    stroke="#c8b99a"
                    strokeWidth="1.5"
                    strokeDasharray="239"
                    strokeDashoffset={showSuccess ? 0 : 239}
                    style={{ transition: "stroke-dashoffset 0.8s ease 0.3s" }}
                  />
                  <polyline
                    points="24,42 35,53 56,30"
                    stroke="#c8b99a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="50"
                    strokeDashoffset={showSuccess ? 0 : 50}
                    style={{ transition: "stroke-dashoffset 0.5s ease 0.9s" }}
                  />
                </svg>
              </div>

              <p
                className="font-serif text-3xl text-[#2c2c2c] font-light mb-5"
                style={{
                  ...JP_TITLE,
                  opacity: showSuccess ? 1 : 0,
                  transform: showSuccess ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
                }}
              >
                ありがとうございます
              </p>

              <p
                className="text-[#6b6055] text-base font-light leading-[2.1]"
                style={{
                  ...JP_BODY,
                  opacity: showSuccess ? 1 : 0,
                  transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s",
                }}
              >
                お問い合わせを受け付けました。<br />
                2営業日以内にご連絡いたします。
              </p>

              {/* 区切り線 */}
              <div
                className="w-12 h-px bg-[#c8b99a]/50 my-8"
                style={{
                  opacity: showSuccess ? 1 : 0,
                  transition: "opacity 0.6s ease 0.9s",
                }}
              />

              <p
                className="text-xs tracking-[0.25em] uppercase text-[#8a7e6e] font-light"
                style={{
                  ...JP_BODY,
                  opacity: showSuccess ? 1 : 0,
                  transition: "opacity 0.6s ease 1.1s",
                }}
              >
                {contactInfo.email}
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
                noValidate
                className="space-y-8"
              >
                {/* 会社名 / お名前 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* 会社名（任意） */}
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
                      onBlur={handleBlur}
                      className="w-full bg-transparent border-b border-[#2c2c2c]/25 pb-2 text-base text-[#2c2c2c] font-light outline-none hover:border-[#c8b99a] focus:border-[#2c2c2c] transition-colors duration-200 placeholder-[#8a7e6e]/50"
                      style={JP_BODY}
                      placeholder="株式会社〇〇"
                    />
                  </div>

                  {/* お名前（必須） */}
                  <div>
                    <label
                      className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                      style={JP_BODY}
                    >
                      お名前 <span className="text-[#c8b99a]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-transparent border-b pb-2 text-base text-[#2c2c2c] font-light outline-none transition-colors duration-200 placeholder-[#8a7e6e]/50 ${
                        errors.name && touched.name
                          ? "border-red-400 hover:border-red-400 focus:border-red-400"
                          : "border-[#2c2c2c]/25 hover:border-[#c8b99a] focus:border-[#2c2c2c]"
                      }`}
                      style={JP_BODY}
                      placeholder="山田 太郎"
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-400 text-xs mt-1.5 font-light" style={JP_BODY}>
                        {errors.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* メールアドレス（必須） */}
                <div>
                  <label
                    className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                    style={JP_BODY}
                  >
                    メールアドレス <span className="text-[#c8b99a]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-transparent border-b pb-2 text-base text-[#2c2c2c] font-light outline-none transition-colors duration-200 placeholder-[#8a7e6e]/50 ${
                      errors.email && touched.email
                        ? "border-red-400 hover:border-red-400 focus:border-red-400"
                        : "border-[#2c2c2c]/25 hover:border-[#c8b99a] focus:border-[#2c2c2c]"
                    }`}
                    style={JP_BODY}
                    placeholder="your@email.com"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-400 text-xs mt-1.5 font-light" style={JP_BODY}>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* 製品カテゴリ（任意） */}
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
                    className="w-full bg-transparent border-b border-[#2c2c2c]/25 pb-2 text-base text-[#2c2c2c] font-light outline-none hover:border-[#c8b99a] focus:border-[#2c2c2c] transition-colors duration-200 cursor-pointer appearance-none"
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

                {/* ご相談内容（必須） */}
                <div>
                  <label
                    className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                    style={JP_BODY}
                  >
                    ご相談内容 <span className="text-[#c8b99a]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    className={`w-full bg-transparent border-b pb-2 text-base text-[#2c2c2c] font-light outline-none transition-colors duration-200 resize-none placeholder-[#8a7e6e]/50 ${
                      errors.message && touched.message
                        ? "border-red-400 hover:border-red-400 focus:border-red-400"
                        : "border-[#2c2c2c]/25 hover:border-[#c8b99a] focus:border-[#2c2c2c]"
                    }`}
                    style={JP_BODY}
                    placeholder="製品のコンセプト、数量、スケジュールなど、お気軽にご記入ください"
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message && touched.message ? (
                      <p className="text-red-400 text-xs font-light" style={JP_BODY}>
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <p
                      className={`text-sm font-light ${charCount >= 500 ? "text-red-400" : "text-[#8a7e6e]/60"}`}
                      style={JP_BODY}
                    >
                      {charCount}/500
                    </p>
                  </div>
                </div>

                {/* 必須項目の注記 */}
                <p className="text-xs text-[#8a7e6e]/70 font-light -mt-2" style={JP_BODY}>
                  <span className="text-[#c8b99a]">*</span> は必須入力項目です
                </p>

                {/* ── 봇 방지 영역 ── */}
                {/* 허니팟: CSS로 완전히 숨김 (봇만 채움) */}
                <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* 수학 퀴즈 */}
                <div className="border border-[#2c2c2c]/12 p-5 bg-[#ede8df]/40">
                  <div className="flex items-center gap-3 mb-3">
                    <i className="ri-shield-check-line text-[#c8b99a] text-base"></i>
                    <span className="text-xs tracking-[0.2em] uppercase text-[#6b6055] font-light" style={JP_BODY}>
                      ボット確認
                    </span>
                  </div>
                  <div className="flex items-center gap-4 flex-wrap">
                    <p className="text-[#2c2c2c] text-base font-light" style={JP_BODY}>
                      {challenge.a} + {challenge.b} = ?
                    </p>
                    <div className="flex flex-col gap-1">
                      <input
                        type="number"
                        inputMode="numeric"
                        value={captchaInput}
                        onChange={(e) => {
                          setCaptchaInput(e.target.value);
                          if (touched.captcha) {
                            const newErrors = { ...errors };
                            if (parseInt(e.target.value, 10) === challenge.answer) {
                              delete newErrors.captcha;
                            } else {
                              newErrors.captcha = "答えが正しくありません";
                            }
                            setErrors(newErrors);
                          }
                        }}
                        onBlur={() => setTouched((prev) => ({ ...prev, captcha: true }))}
                        placeholder="答えを入力"
                        className={`w-32 bg-transparent border-b pb-1.5 text-base text-[#2c2c2c] font-light outline-none transition-colors duration-200 placeholder-[#8a7e6e]/50 ${
                          errors.captcha && touched.captcha
                            ? "border-red-400 hover:border-red-400 focus:border-red-400"
                            : captchaInput && parseInt(captchaInput, 10) === challenge.answer
                            ? "border-[#c8b99a] focus:border-[#c8b99a]"
                            : "border-[#2c2c2c]/25 hover:border-[#c8b99a] focus:border-[#2c2c2c]"
                        }`}
                        style={JP_BODY}
                      />
                      {errors.captcha && touched.captcha && (
                        <p className="text-red-400 text-xs font-light" style={JP_BODY}>
                          {errors.captcha}
                        </p>
                      )}
                    </div>
                    {captchaInput && parseInt(captchaInput, 10) === challenge.answer && (
                      <span className="text-[#c8b99a] text-sm" style={{ transition: "opacity 0.3s" }}>
                        <i className="ri-check-line"></i>
                      </span>
                    )}
                  </div>
                </div>

                {/* 送信ボタン */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-sm tracking-[0.2em] uppercase border border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-[#f5f0e8] hover:tracking-[0.3em] hover:shadow-[0_4px_20px_rgba(44,44,44,0.15)] active:scale-[0.99] transition-all duration-300 font-light cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  style={JP_BODY}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="inline-block w-4 h-4 border border-current border-t-transparent rounded-full"
                        style={{ animation: "spin 0.8s linear infinite" }}
                      />
                      送信中...
                    </>
                  ) : (
                    <>
                      送信する
                      <i className="ri-arrow-right-line text-sm"></i>
                    </>
                  )}
                </button>

                {/* 送信エラーメッセージ */}
                {submitError && (
                  <p className="text-red-400 text-sm font-light text-center mt-2" style={JP_BODY}>
                    {submitError}
                  </p>
                )}
              </form>

              <style>{`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
