import { useState, useEffect } from "react";
import { contactInfo } from "@/mocks/chemicos";
import { trpc } from "@/lib/trpc";

const JP_BODY = { fontFamily: "'Noto Serif KR', serif" };
const JP_TITLE = { fontFamily: "'Cormorant Garamond', serif" };

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
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

  const contactMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setIsSubmitting(false);
      setSubmitted(true);
    },
    onError: () => {
      setIsSubmitting(false);
      setSubmitError("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
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
    if (!values.name.trim()) errs.name = "이름을 입력해 주세요";
    if (!values.email.trim()) {
      errs.email = "이메일 주소를 입력해 주세요";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = "올바른 이메일 주소를 입력해 주세요";
    }
    if (!values.message.trim()) errs.message = "문의 내용을 입력해 주세요";
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
    // 실시간 검증(한 번 입력한 필드만)
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
    // 모든 필드를 touched로 처리하고 검증
    setTouched({ name: true, email: true, message: true });
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
            오시는 길·문의
          </span>
        </div>
        <h2
          className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#2c2c2c]"
          style={JP_TITLE}
        >
          어디에 있나요?<br />
          어떻게 문의하나요?
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
                  주소
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
                  전화번호
                </p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="link-chemicos text-[#2c2c2c] text-lg font-light hover:text-[#c8b99a] cursor-pointer"
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
                  이메일 주소
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="link-chemicos text-[#2c2c2c] text-lg font-light hover:text-[#c8b99a] cursor-pointer"
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
                  영업시간
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
                Google Maps에서 보기
              </span>
            </div>
          </a>
        </div>

        {/* Right: Form / Success */}
        <div>
          {submitted ? (
            /* ── 성공 메시지(페이드 인 + 슬라이드 업) ── */
            <div
              className="flex flex-col items-center justify-center h-full py-20 text-center"
              style={{
                opacity: showSuccess ? 1 : 0,
                transform: showSuccess ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              {/* 체크 서클 */}
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
                감사합니다
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
                문의가 접수되었습니다.<br />
                영업일 기준 2일 이내에 연락드리겠습니다.
              </p>

              {/* 구분선 */}
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
                문의 양식
              </p>
              <form
                data-readdy-form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-8"
              >
                {/* 회사명 / 이름 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* 회사명(선택) */}
                  <div>
                    <label
                      className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                      style={JP_BODY}
                    >
                      회사명
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full bg-transparent border-b border-[#2c2c2c]/25 pb-2 text-base text-[#2c2c2c] font-light outline-none hover:border-[#c8b99a] focus:border-[#2c2c2c] transition-colors duration-200 placeholder-[#8a7e6e]/50"
                      style={JP_BODY}
                      placeholder="회사명을 입력하세요"
                    />
                  </div>

                  {/* 이름(필수) */}
                  <div>
                    <label
                      className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                      style={JP_BODY}
                    >
                      이름 <span className="text-[#c8b99a]">*</span>
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
                      placeholder="홍길동"
                    />
                    {errors.name && touched.name && (
                      <p className="text-red-400 text-xs mt-1.5 font-light" style={JP_BODY}>
                        {errors.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* 이메일 주소(필수) */}
                <div>
                  <label
                    className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                    style={JP_BODY}
                  >
                    이메일 주소 <span className="text-[#c8b99a]">*</span>
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

                {/* 제품 카테고리(선택) */}
                <div>
                  <label
                    className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                    style={JP_BODY}
                  >
                    관심 제품 카테고리
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#2c2c2c]/25 pb-2 text-base text-[#2c2c2c] font-light outline-none hover:border-[#c8b99a] focus:border-[#2c2c2c] transition-colors duration-200 cursor-pointer appearance-none"
                    style={JP_BODY}
                  >
                    <option value="">선택해 주세요</option>
                    <option value="eyeliner">아이라이너</option>
                    <option value="mascara">마스카라</option>
                    <option value="brow">아이브로우</option>
                    <option value="lip">립</option>
                    <option value="other">기타·복수 선택</option>
                  </select>
                </div>

                {/* 문의 내용(필수) */}
                <div>
                  <label
                    className="block text-sm tracking-[0.2em] uppercase text-[#6b6055] mb-2 font-light"
                    style={JP_BODY}
                  >
                    문의 내용 <span className="text-[#c8b99a]">*</span>
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
                    placeholder="제품 컨셉, 수량, 일정 등 상담 내용을 편하게 입력해 주세요"
                  />
                  {/* 글자 수 카운터 영역 */}
                  <div className="mt-2 space-y-1.5">
                    {/* 진행 바 */}
                    <div className="w-full h-px bg-[#2c2c2c]/10 overflow-hidden">
                      <div
                        className="h-full transition-all duration-300"
                        style={{
                          width: `${Math.min((charCount / 500) * 100, 100)}%`,
                          backgroundColor:
                            charCount >= 500 ? "#ef4444"
                            : charCount >= 400 ? "#f59e0b"
                            : "#c8b99a",
                        }}
                      />
                    </div>

                    {/* 에러 메시지 + 카운터 */}
                    <div className="flex justify-between items-center">
                      {errors.message && touched.message ? (
                        <p className="text-red-400 text-xs font-light" style={JP_BODY}>
                          {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <div className="flex items-center gap-2 ml-auto">
                        {/* 남은 글자 수 */}
                        {charCount > 0 && (
                          <span
                            className="text-xs font-light transition-colors duration-200"
                            style={{
                              ...JP_BODY,
                              color:
                                charCount >= 500 ? "#ef4444"
                                : charCount >= 400 ? "#d97706"
                                : "#8a7e6e",
                            }}
                          >
                            {charCount >= 500
                              ? "입력 한도에 도달했습니다"
                              : `남은 글자 수 ${500 - charCount}자`}
                          </span>
                        )}
                        {/* 현재/최대 */}
                        <p
                          className="text-xs font-light"
                          style={{
                            ...JP_BODY,
                            color: charCount >= 500 ? "#ef4444" : charCount >= 400 ? "#d97706" : "#8a7e6e99",
                          }}
                        >
                          {charCount} / 500
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 필수 항목 안내 */}
                <p className="text-xs text-[#8a7e6e]/70 font-light -mt-2" style={JP_BODY}>
                  <span className="text-[#c8b99a]">*</span> 는 필수 입력 항목입니다
                </p>

                {/* 전송 버튼 */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${!isSubmitting ? 'btn-chemicos' : ''} w-full py-4 text-sm tracking-[0.2em] uppercase border font-light whitespace-nowrap flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? "border-[#c8b99a] bg-[#2c2c2c] text-[#f5f0e8] cursor-not-allowed"
                      : "border-[#2c2c2c] text-[#2c2c2c] hover:bg-[#2c2c2c] hover:text-[#f5f0e8] hover:tracking-[0.3em] cursor-pointer"
                  }`}
                  style={JP_BODY}
                >
                  {isSubmitting ? (
                    <>
                      {/* SVG 원형 진행 스피너 */}
                      <svg
                        width="18" height="18" viewBox="0 0 18 18"
                        fill="none"
                        style={{ flexShrink: 0, animation: "contact-spin 1s linear infinite" }}
                      >
                        <circle
                          cx="9" cy="9" r="7"
                          stroke="#c8b99a"
                          strokeWidth="1.5"
                          strokeOpacity="0.3"
                        />
                        <path
                          d="M9 2 A7 7 0 0 1 16 9"
                          stroke="#c8b99a"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span style={{ letterSpacing: "0.2em" }}>전송 중...</span>
                    </>
                  ) : (
                    <>
                      보내기
                      <i className="ri-arrow-right-line text-sm"></i>
                    </>
                  )}
                </button>

                {/* 전송 오류 메시지 */}
                {submitError && (
                  <p className="text-red-400 text-sm font-light text-center mt-2" style={JP_BODY}>
                    {submitError}
                  </p>
                )}
              </form>

              <style>{`
                @keyframes contact-spin {
                  from { transform: rotate(0deg); }
                  to   { transform: rotate(360deg); }
                }
              `}</style>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
