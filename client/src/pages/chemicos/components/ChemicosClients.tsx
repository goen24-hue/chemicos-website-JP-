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
};

const LOGO_STYLE_MAP: Record<string, LogoStyle> = {
  // Global
  "r.e.m. beauty": { maxWidth: "58%", maxHeight: "46%" },
  "KVD Vegan Beauty": { maxWidth: "52%", maxHeight: "52%" },
  "Too Faced": { maxWidth: "58%", maxHeight: "46%" },
  "Physicians Formula": { maxWidth: "58%", maxHeight: "46%" },
  "Smashbox": { maxWidth: "58%", maxHeight: "42%" },
  "Guerlain": { maxWidth: "64%", maxHeight: "36%" },

  // Domestic - major
  "AMORE PACIFIC": { maxWidth: "64%", maxHeight: "42%" },
  "ETUDE": { maxWidth: "58%", maxHeight: "46%", scale: 1.2 },
  "CLIO": { maxWidth: "42%", maxHeight: "38%" },
  "peripera": { maxWidth: "42%", maxHeight: "38%", scale: 1.15 },

  // Domestic - bold logos
  "espoir": { maxWidth: "38%", maxHeight: "42%", opacity: 0.86 },
  "Heart Percent": { maxWidth: "58%", maxHeight: "42%", opacity: 0.78 },
  "lilybyred": { maxWidth: "40%", maxHeight: "40%", opacity: 0.9 },
  "unleashia": { maxWidth: "52%", maxHeight: "50%", opacity: 0.78 },

  // Domestic - middle row
  "GIVERNY": { maxWidth: "46%", maxHeight: "38%", opacity: 0.82 },
  "MERZY": { maxWidth: "42%", maxHeight: "48%", opacity: 0.72 },
  "MERRY": { maxWidth: "42%", maxHeight: "48%", opacity: 0.72 },
  "MERRYMOND": { maxWidth: "42%", maxHeight: "48%", opacity: 0.72 },
  "INNISFREE": { maxWidth: "54%", maxHeight: "42%", scale: 1.45 },

  // Domestic - small-looking logos
  "MISSHA": { maxWidth: "56%", maxHeight: "40%", scale: 1.45, opacity: 0.9 },
  "THE FACE SHOP": { maxWidth: "58%", maxHeight: "46%", scale: 1.35 },
  "VIDIVICI": { maxWidth: "56%", maxHeight: "38%", scale: 1.45 },
  "COSNORI": { maxWidth: "48%", maxHeight: "38%", scale: 1.45 },

  // Domestic - lower row
  "too cool for school": { maxWidth: "24%", maxHeight: "68%" },
  "tip toe": { maxWidth: "38%", maxHeight: "62%", opacity: 0.82 },
  "keybo": { maxWidth: "30%", maxHeight: "45%" },
  "tooq": { maxWidth: "40%", maxHeight: "62%", opacity: 0.88 },

  // Heart icon brand - 실제 name 값에 맞춰 하나만 남겨도 됨
  "Heart": { maxWidth: "18%", maxHeight: "42%", opacity: 0.72 },
  "heart": { maxWidth: "18%", maxHeight: "42%", opacity: 0.72 },
};

function ClientLogo({
  client,
}: {
  client: { name: string; image: string; wide: boolean };
}) {
  const [imgError, setImgError] = useState(false);
  const logoStyle = LOGO_STYLE_MAP[client.name] ?? {};

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
            maxWidth: logoStyle.maxWidth ?? "56%",
            maxHeight: logoStyle.maxHeight ?? "46%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            filter: logoStyle.filter ?? "brightness(0) contrast(1.08)",
            opacity: logoStyle.opacity ?? 0.92,
            transform: `scale(${logoStyle.scale ?? 1})`,
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