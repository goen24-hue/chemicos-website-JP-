import { useState } from "react";
import { globalClients, domesticClients } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif KR', serif" };
const JP_TITLE = { fontFamily: "'Cormorant Garamond', serif" };

type LogoStyle = {
  maxWidth?: string;
  maxHeight?: string;
  opacity?: number;
  scale?: number;
  filter?: string;
  mixBlendMode?: "normal" | "multiply";
  clipPath?: string;
};

/**
 * 해외 고객사 로고용
 * 기존 상태를 최대한 유지하는 맵
 */
const GLOBAL_LOGO_SIZE_MAP: Record<string, { maxWidth?: string; maxHeight?: string }> = {
  "r.e.m. beauty": { maxWidth: "75%", maxHeight: "40%" },
  "KVD Vegan Beauty": { maxWidth: "60%", maxHeight: "60%" },
  "Too Faced": { maxWidth: "70%", maxHeight: "55%" },
  "Physicians Formula": { maxWidth: "70%", maxHeight: "55%" },
  "Smashbox": { maxWidth: "75%", maxHeight: "45%" },
  "Guerlain": { maxWidth: "90%", maxHeight: "38%" },
};

/**
 * 국내 고객사 로고용
 * 국내 로고만 별도 조정
 */
const DOMESTIC_LOGO_STYLE_MAP: Record<string, LogoStyle> = {
  // 상단 주요 브랜드
  "AMORE PACIFIC": { maxWidth: "64%", maxHeight: "42%" },
  "ETUDE": { maxWidth: "62%", maxHeight: "48%", scale: 1.35 },
  "CLIO": { maxWidth: "46%", maxHeight: "40%" },
  "PERIPERA": { maxWidth: "56%", maxHeight: "46%", scale: 1.75, opacity: 0.92 },

  // 굵고 강한 로고
  "espoir": { maxWidth: "42%", maxHeight: "44%", opacity: 0.86, scale: 1.12 },
  "Heart Percent": { maxWidth: "62%", maxHeight: "44%", opacity: 0.78 },
  "lilybyred": { maxWidth: "44%", maxHeight: "42%", opacity: 0.9 },
  "unleashia": { maxWidth: "50%", maxHeight: "48%", opacity: 0.78, scale: 0.88 },

  // 중간 라인
  "GIVERNY": { maxWidth: "50%", maxHeight: "40%", opacity: 0.82 },
  "MERZY": { maxWidth: "46%", maxHeight: "52%", opacity: 0.72, scale: 1.08 },
  "MERRY": { maxWidth: "46%", maxHeight: "52%", opacity: 0.72, scale: 1.08 },
  "INNISFREE": { maxWidth: "58%", maxHeight: "44%", scale: 1.95 },

  // 너무 작게 보이는 로고들 — 확 키움
  "MISSHA": { maxWidth: "64%", maxHeight: "46%", scale: 1.85, opacity: 0.92 },
  "THE FACE SHOP": { maxWidth: "66%", maxHeight: "52%", scale: 1.65 },
  "VIDIVICI": { maxWidth: "64%", maxHeight: "44%", scale: 1.85 },
  "COSNORI": { maxWidth: "58%", maxHeight: "44%", scale: 1.75 },

  // 여기부터 크기 조정 대상
  "PERIPERA": { maxWidth: "72%", maxHeight: "56%", scale: 1.9, opacity: 0.92 },
  "INNISFREE": { maxWidth: "72%", maxHeight: "54%", scale: 2.1 },
  "KEYBO": { maxWidth: "42%", maxHeight: "52%", scale: 1.25 },
  "TOOQ": { maxWidth: "46%", maxHeight: "60%", scale: 1.12, opacity: 0.88 },
  "ODDTYPE": {
  maxWidth: "100%",
  maxHeight: "100%",
  scale: 3.0,
  filter: "none",
  mixBlendMode: "multiply",
  opacity: 0.9,

  "WAKEMAKE": {
  maxWidth: "100",
  maxHeight: "100%",
  scale: 0.2,
  clipPath: "inset(36% 4% 36% 4%)",
  filter: "none",
  mixBlendMode: "multiply",
  opacity: 0.92,
},
},
};

function ClientLogo({
  client,
  type,
}: {
  client: { name: string; image: string; wide: boolean };
  type: "global" | "domestic";
}) {
  const [imgError, setImgError] = useState(false);

  const normalizedName = client.name.trim().toLowerCase();
  const isWakemake = normalizedName.includes("wakemake");

  const globalSize = GLOBAL_LOGO_SIZE_MAP[client.name] ?? {};
  const domesticStyle =
    DOMESTIC_LOGO_STYLE_MAP[normalizedName] ??
    DOMESTIC_LOGO_STYLE_MAP[client.name] ??
    {};

  const isGlobal = type === "global";

  return (
    <div
      className="border border-[#2c2c2c]/10 group hover:bg-[#ede8df] transition-colors duration-300 flex items-center justify-center overflow-hidden"
      style={{ height: "100px", padding: "10px 14px" }}
    >
      {!imgError ? (
        <img
          src={client.image}
          alt={client.name}
          style={{
  display: "block",

  // WAKEMAKE만 width로 직접 조정
  width: !isGlobal && isWakemake ? "60%" : "auto",
  height: "auto",

  // WAKEMAKE만 max 제한 해제
  maxWidth: !isGlobal && isWakemake
    ? "none"
    : isGlobal
      ? globalSize.maxWidth ?? "90%"
      : domesticStyle.maxWidth ?? "56%",

  maxHeight: !isGlobal && isWakemake
    ? "none"
    : isGlobal
      ? globalSize.maxHeight ?? "80%"
      : domesticStyle.maxHeight ?? "46%",

  objectFit: "contain",

  clipPath: isGlobal ? "none" : domesticStyle.clipPath ?? "none",

  filter: isGlobal
    ? "brightness(0) contrast(1.4)"
    : domesticStyle.filter ?? "brightness(0) contrast(1.08)",

  opacity: isGlobal ? 1 : domesticStyle.opacity ?? 0.92,

  mixBlendMode: isGlobal
    ? "normal"
    : domesticStyle.mixBlendMode ?? "normal",

  // 여기 중요: WAKEMAKE만 scale 고정, 나머지는 기존 scale 유지
  transform: isGlobal
    ? "scale(1)"
    : isWakemake
      ? "scale(1)"
      : `scale(${domesticStyle.scale ?? 1})`,

  transformOrigin: "center",
}}
          className="transition-opacity duration-300"
          onError={() => setImgError(true)}
        />
      ) : (
        <span
          className="text-[#2c2c2c] text-sm font-semibold tracking-[0.08em] text-center leading-tight uppercase"
          style={JP_BODY}
        >
          {client.name}
        </span>
      )}
    </div>
  );
}

function ClientGrid({
  clients,
  type,
}: {
  clients: { name: string; image: string; wide: boolean }[];
  type: "global" | "domestic";
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0">
      {clients.map((client) => (
        <ClientLogo key={client.name} client={client} type={type} />
      ))}
    </div>
  );
}

export default function ChemicosClients() {
  return (
    <section
      id="clients"
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
            거래 실적
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#2c2c2c]"
            style={JP_TITLE}
          >
            브랜드와 함께,
            <br />
            가치를 제품으로 구현합니다.
          </h2>

          <p
            className="text-[#4a4035] text-lg font-light max-w-sm leading-[1.9]"
            style={JP_BODY}
          >
            글로벌 브랜드부터 국내 주요 브랜드까지,
            <br />
            각국의 브랜드와 협업하며,
            <br />
            프리미엄 영역의 제품 개발을 수행해 왔습니다.
          </p>
        </div>
      </div>

      {/* Global Partners */}
      <div className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span
            className="text-sm tracking-[0.25em] uppercase font-light text-[#8a7e6e]"
            style={JP_BODY}
          >
            Global Partners
          </span>
          <div className="flex-1 h-px bg-[#2c2c2c]/10"></div>
        </div>

        <ClientGrid clients={globalClients} type="global" />
      </div>

      {/* Domestic Partners */}
      <div className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span
            className="text-sm tracking-[0.25em] uppercase font-light text-[#8a7e6e]"
            style={JP_BODY}
          >
            Domestic Partners
          </span>
          <div className="flex-1 h-px bg-[#2c2c2c]/10"></div>
        </div>

        <ClientGrid clients={domesticClients} type="domestic" />
      </div>
    </section>
  );
}