import { useState } from "react";
import { globalClients, domesticClients } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };
const JP_TITLE = { fontFamily: "'Cormorant Garamond', serif" };

// 로고별 비율에 따른 크기 조정 맵
// ratio > 5 (극단적 가로): maxHeight를 높여서 더 크게 표시
// ratio ~1 (정사각형): maxWidth를 제한해서 너무 크지 않게
const LOGO_SIZE_MAP: Record<string, { maxWidth?: string; maxHeight?: string }> = {
  'r.e.m. beauty':       { maxWidth: '90%',  maxHeight: '90%' },  // 1:1 정사각형 → 크게
  'KVD Vegan Beauty':    { maxWidth: '60%',  maxHeight: '60%' },  // 아이콘형
  'Too Faced':           { maxWidth: '70%',  maxHeight: '55%' },  // 4.2:1 가로
  'Physicians Formula':  { maxWidth: '70%',  maxHeight: '55%' },  // 3.4:1 가로
  'Smashbox':            { maxWidth: '75%',  maxHeight: '45%' },  // 4.5:1 가로
  'Guerlain':            { maxWidth: '90%',  maxHeight: '38%' },  // 7.9:1 극가로
  'AMORE PACIFIC':       { maxWidth: '90%',  maxHeight: '30%' },  // 10:1 극가로
  'CLIO':                { maxWidth: '90%',  maxHeight: '25%' },  // 11:1 극가로
  'NATURE REPUBLIC':     { maxWidth: '90%',  maxHeight: '22%' },  // 12:1 극가로
};

function ClientLogo({ client }: { client: { name: string; image: string; wide: boolean } }) {
  const [imgError, setImgError] = useState(false);
  const sizeOverride = LOGO_SIZE_MAP[client.name] ?? {};

  return (
    <div
      className="border border-[#2c2c2c]/10 group hover:bg-[#ede8df] transition-colors duration-300 flex items-center justify-center"
      style={{ height: '100px', padding: '10px 14px' }}
    >
      {!imgError ? (
        <img
          src={client.image}
          alt={client.name}
          style={{
            display: 'block',
            maxWidth: sizeOverride.maxWidth ?? '90%',
            maxHeight: sizeOverride.maxHeight ?? '80%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            filter: 'brightness(0) contrast(1.4)',
          }}
          className="group-hover:opacity-75 transition-opacity duration-300"
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

function ClientGrid({ clients }: { clients: { name: string; image: string; wide: boolean }[] }) {
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
    <section id="clients" className="bg-[#f5f0e8] min-h-screen flex flex-col justify-center py-20 px-8 md:px-14 lg:px-20" style={{ scrollMarginTop: "64px" }}>
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-[#2c2c2c]/35"></div>
          <span className="text-sm tracking-[0.28em] uppercase font-light text-[#6b6055]" style={JP_BODY}>
            取引実績
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="font-serif text-4xl md:text-5xl font-light leading-[1.3] text-[#2c2c2c]"
            style={JP_TITLE}
          >
            ブランドとともに、<br />
            価値をかたちに。
          </h2>
          <p className="text-[#4a4035] text-lg font-light max-w-sm leading-[1.9]" style={JP_BODY}>
            グローバルブランドから国内大手まで、<br />
            各国のブランドと協業し、<br />
            プレミアム領域の製品開発を担っています。
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
