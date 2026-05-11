import { useState } from "react";
import { globalClients, domesticClients } from "@/mocks/chemicos";

const JP_BODY = { fontFamily: "'Noto Serif JP', serif" };
const JP_TITLE = { fontFamily: "'Cormorant Garamond', serif" };

function ClientLogo({ client }: { client: { name: string; image: string; wide: boolean } }) {
  const [imgError, setImgError] = useState(false);

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
            width: '100%',
            height: '100%',
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
