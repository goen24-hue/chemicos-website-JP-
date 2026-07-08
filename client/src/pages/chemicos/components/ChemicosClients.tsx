import { useState } from "react";
import { globalClients, domesticClients } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif KR', serif" };
const JP_TITLE = { fontFamily: "'Cormorant Garamond', serif" };

// 로고별 크기 조정
const LOGO_SIZE_MAP: Record<string, { maxWidth?: string; maxHeight?: string }> = {
  // Global
  "r.e.m. beauty": { maxWidth: "75%", maxHeight: "40%" },
  "KVD Vegan Beauty": { maxWidth: "60%", maxHeight: "60%" },
  "Too Faced": { maxWidth: "70%", maxHeight: "55%" },
  "Physicians Formula": { maxWidth: "70%", maxHeight: "55%" },
  "Smashbox": { maxWidth: "75%", maxHeight: "45%" },
  "Guerlain": { maxWidth: "90%", maxHeight: "38%" },

  // Domestic
  "AMORE PACIFIC": { maxWidth: "62%", maxHeight: "34%" },
  "ETUDE": { maxWidth: "45%", maxHeight: "36%" },
  "CLIO": { maxWidth: "36%", maxHeight: "30%" },
  "INNISFREE": { maxWidth: "42%", maxHeight: "28%" },
  "MISSHA": { maxWidth: "38%", maxHeight: "28%" },
  "THE FACE SHOP": { maxWidth: "46%", maxHeight: "34%" },
  "NATURE REPUBLIC": { maxWidth: "90%", maxHeight: "22%" },

  // 추가 국내 브랜드
  "espoir": { maxWidth: "42%", maxHeight: "48%" },
  "Heart Percent": { maxWidth: "70%", maxHeight: "45%" },
  "lilybyred": { maxWidth: "42%", maxHeight: "42%" },
  "unleashia": { maxWidth: "62%", maxHeight: "58%" },
  "GIVERNY": { maxWidth: "48%", maxHeight: "38%" },
  "MERZY": { maxWidth: "46%", maxHeight: "55%" },
  "MERRY": { maxWidth: "46%", maxHeight: "55%" },
  "MERRYMOND": { maxWidth: "46%", maxHeight: "55%" },
  "Seulmit": { maxWidth: "42%", maxHeight: "36%" },
  "VIDIVICI": { maxWidth: "42%", maxHeight: "28%" },
  "COSNORI": { maxWidth: "34%", maxHeight: "30%" },
  "too cool for school": { maxWidth: "20%", maxHeight: "58%" },
  "tip toe": { maxWidth: "36%", maxHeight: "60%" },
  "keybo": { maxWidth: "28%", maxHeight: "42%" },
  "tfIT": { maxWidth: "34%", maxHeight: "48%" },
  "Tfit": { maxWidth: "34%", maxHeight: "48%" },
};

// 로고별 시각 농도 조정
// 기본 로고는 선명하게 두고, 너무 진한 로고만 opacity를 낮춤
const LOGO_VISUAL_MAP: Record<string, { opacity?: number; filter?: string }> = {
  "Heart Percent": { opacity: 0.76 },
  "unleashia": { opacity: 0.78 },
  "MERZY": { opacity: 0.74 },
  "MERRY": { opacity: 0.74 },
  "MERRYMOND": { opacity: 0.74 },
  "GIVERNY": { opacity: 0.82 },
  "lilybyred": { opacity: 0.86 },
  "espoir": { opacity: 0.88 },
};

function ClientLogo({
  client,
}: {
  client: { name: string; image: string; wide: boolean };
}) {
  const [imgError, setImgError] = useState(false);
  const sizeOverride = LOGO_SIZE_MAP[client.name] ?? {};
  const visualOverride = LOGO_VISUAL_MAP[client.name] ?? {};

  return (
    <div
      className="border border-[#2c2c2c]/10 group hover:bg-[#ede8df] transition-colors duration-300 flex items-center justify-center"
      style={{ height: "100px", padding: "10px 14px" }}
    >
      {!imgError ? (
        <img
          src={client.image}
          alt={client.name}
          style={{
            display: "block",
            maxWidth: sizeOverride.maxWidth ?? "90%",
            maxHeight: sizeOverride.maxHeight ?? "80%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            filter: visualOverride.filter ?? "brightness(0) contrast(1.15)",
            opacity: visualOverride.opacity ?? 1,
          }}
          className="transition-transform duration-300 group-hover:scale-[0.98]"
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
}: {
  clients: { name: string; image: string; wide: boolean }[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0">
      {clients.map((client) => (
        <ClientLogo key={client.name} client={client} />
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

        <ClientGrid clients={globalClients} />
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

        <ClientGrid clients={domesticClients} />
      </div>
    </section>
  );
}