import { useState } from "react";
import { globalClients, domesticClients } from "@/mocks/chemicos";

const bodyFont = {
  fontFamily: "'Noto Serif JP', serif",
};

const titleFont = {
  fontFamily: "'Cormorant Garamond', serif",
};

/* ---------------------------------------------
   GLOBAL LOGO SIZE
--------------------------------------------- */

const GLOBAL_LOGO_SIZE: Record<
  string,
  {
    maxWidth?: string;
    maxHeight?: string;
  }
> = {
  "r.e.m. beauty": {
    maxWidth: "75%",
    maxHeight: "40%",
  },

  "KVD Vegan Beauty": {
    maxWidth: "60%",
    maxHeight: "60%",
  },

  "Too Faced": {
    maxWidth: "70%",
    maxHeight: "55%",
  },

  "Physicians Formula": {
    maxWidth: "70%",
    maxHeight: "55%",
  },

  Smashbox: {
    maxWidth: "75%",
    maxHeight: "45%",
  },

  Guerlain: {
    maxWidth: "90%",
    maxHeight: "38%",
  },
};

/* ---------------------------------------------
   DOMESTIC LOGO SIZE
--------------------------------------------- */

const DOMESTIC_LOGO_SIZE: Record<
  string,
  {
    maxWidth?: string;
    maxHeight?: string;
    scale?: number;
    opacity?: number;
    filter?: string;
    mixBlendMode?: React.CSSProperties["mixBlendMode"];
    clipPath?: string;
  }
> = {
  "AMORE PACIFIC": {
    maxWidth: "64%",
    maxHeight: "42%",
  },

  ETUDE: {
    maxWidth: "62%",
    maxHeight: "48%",
    scale: 1.35,
  },

  CLIO: {
    maxWidth: "46%",
    maxHeight: "40%",
  },

  espoir: {
    maxWidth: "42%",
    maxHeight: "44%",
    opacity: 0.86,
    scale: 1.12,
  },

  "Heart Percent": {
    maxWidth: "62%",
    maxHeight: "44%",
    opacity: 0.78,
  },

  lilybyred: {
    maxWidth: "44%",
    maxHeight: "42%",
    opacity: 0.9,
  },

  unleashia: {
    maxWidth: "50%",
    maxHeight: "48%",
    opacity: 0.78,
    scale: 0.88,
  },

  GIVERNY: {
    maxWidth: "50%",
    maxHeight: "40%",
    opacity: 0.82,
  },

  MERZY: {
    maxWidth: "46%",
    maxHeight: "52%",
    opacity: 0.72,
    scale: 1.08,
  },

  MERRY: {
    maxWidth: "46%",
    maxHeight: "52%",
    opacity: 0.72,
    scale: 1.08,
  },

  MISSHA: {
    maxWidth: "64%",
    maxHeight: "46%",
    scale: 1.85,
    opacity: 0.92,
  },

  "THE FACE SHOP": {
    maxWidth: "66%",
    maxHeight: "52%",
    scale: 1.65,
  },

  VIDIVICI: {
    maxWidth: "64%",
    maxHeight: "44%",
    scale: 1.85,
  },

  COSNORI: {
    maxWidth: "58%",
    maxHeight: "44%",
    scale: 1.75,
  },

  PERIPERA: {
    maxWidth: "72%",
    maxHeight: "56%",
    scale: 1.9,
    opacity: 0.92,
  },

  INNISFREE: {
    maxWidth: "72%",
    maxHeight: "54%",
    scale: 2.1,
  },

  KEYBO: {
    maxWidth: "42%",
    maxHeight: "52%",
    scale: 1.25,
  },

  TOOQ: {
    maxWidth: "46%",
    maxHeight: "60%",
    scale: 1.12,
    opacity: 0.88,
  },

  ODDTYPE: {
    maxWidth: "100%",
    maxHeight: "100%",
    scale: 1,
    filter: "none",
    mixBlendMode: "multiply",
    opacity: 0.9,
  },

  WAKEMAKE: {
    maxWidth: "100%",
    maxHeight: "100%",
    scale: 1,
    clipPath: "inset(28% 0% 28% 0%)",
    filter: "none",
    mixBlendMode: "multiply",
    opacity: 0.92,
  },
};

/* ---------------------------------------------
   CLIENT LOGO
--------------------------------------------- */

function ClientLogo({
  client,
  type,
}: {
  client: {
    name: string;
    image: string;
    wide?: boolean;
  };
  type: "global" | "domestic";
}) {
  const [imageError, setImageError] = useState(false);

  const name = client.name.trim();
  const lower = name.toLowerCase();
  const upper = name.toUpperCase();

  const noSpaceLower = lower.replace(/\s+/g, "");
  const noSpaceUpper = upper.replace(/\s+/g, "");

  const isWakemake = lower.includes("wakemake");
  const isOddtype = lower.includes("oddtype");

  const globalStyle = GLOBAL_LOGO_SIZE[client.name] ?? {};

  const domesticStyle =
    DOMESTIC_LOGO_SIZE[name] ??
    DOMESTIC_LOGO_SIZE[lower] ??
    DOMESTIC_LOGO_SIZE[upper] ??
    DOMESTIC_LOGO_SIZE[noSpaceLower] ??
    DOMESTIC_LOGO_SIZE[noSpaceUpper] ??
    {};

  const isGlobal = type === "global";

  return (
    <div
      className="
        border border-[#2c2c2c]/10
        group
        hover:bg-[#ede8df]
        transition-colors duration-300
        flex items-center justify-center
        overflow-hidden
      "
      style={{
        height: "100px",
        padding: "10px 14px",
      }}
    >
      {imageError ? (
        <span
          className="
            text-[#2c2c2c]
            text-sm
            font-semibold
            tracking-[0.08em]
            text-center
            leading-tight
            uppercase
          "
          style={bodyFont}
        >
          {client.name}
        </span>
      ) : (
        <img
          src={client.image}
          alt={client.name}
          className="transition-opacity duration-300"
          onError={() => setImageError(true)}
          style={{
            display: "block",

            width:
              !isGlobal && isWakemake
                ? "55%"
                : !isGlobal && isOddtype
                ? "50%"
                : "auto",

            height: "auto",

            maxWidth:
              !isGlobal && isWakemake
                ? "100%"
                : !isGlobal && isOddtype
                ? "none"
                : isGlobal
                ? globalStyle.maxWidth ?? "90%"
                : domesticStyle.maxWidth ?? "56%",

            maxHeight:
              !isGlobal && isWakemake
                ? "100%"
                : !isGlobal && isOddtype
                ? "none"
                : isGlobal
                ? globalStyle.maxHeight ?? "80%"
                : domesticStyle.maxHeight ?? "46%",

            objectFit: "contain",

            clipPath: isGlobal
              ? "none"
              : isWakemake
              ? "inset(18% 0% 0% 0%)"
              : isOddtype
              ? "none"
              : domesticStyle.clipPath ?? "none",

            filter: isGlobal
              ? "brightness(0) contrast(1.4)"
              : domesticStyle.filter ??
                "brightness(0) contrast(1.08)",

            opacity: isGlobal
              ? 1
              : domesticStyle.opacity ?? 0.92,

            mixBlendMode: isGlobal
              ? "normal"
              : domesticStyle.mixBlendMode ?? "normal",

            transform:
              isGlobal || isWakemake || isOddtype
                ? "scale(1)"
                : `scale(${domesticStyle.scale ?? 1})`,

            transformOrigin: "center",
          }}
        />
      )}
    </div>
  );
}

/* ---------------------------------------------
   CLIENT GRID
--------------------------------------------- */

function ClientGrid({
  clients,
  type,
}: {
  clients: {
    name: string;
    image: string;
    wide?: boolean;
  }[];
  type: "global" | "domestic";
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0">
      {clients.map((client) => (
        <ClientLogo
          key={client.name}
          client={client}
          type={type}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------
   MAIN SECTION
--------------------------------------------- */

export default function ChemicosClients() {
  return (
    <section
      id="clients"
      className="
        bg-[#f5f0e8]
        min-h-screen
        flex flex-col
        justify-center
        py-20
        px-8
        md:px-14
        lg:px-20
      "
      style={{
        scrollMarginTop: "64px",
      }}
    >
      {/* INTRO */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-[#2c2c2c]/35" />

          <span
            className="
              text-sm
              tracking-[0.28em]
              uppercase
              font-light
              text-[#6b6055]
            "
            style={bodyFont}
          >
            CLIENT EXPERIENCE
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2
            className="
              font-serif
              text-4xl
              md:text-5xl
              font-light
              leading-[1.3]
              text-[#2c2c2c]
            "
            style={titleFont}
          >
            Beauty brands,
            <br />
            brought to life together.
          </h2>

          <p
            className="
              text-[#4a4035]
              text-lg
              font-light
              max-w-sm
              leading-[1.9]
            "
            style={bodyFont}
          >
            韓国からグローバルブランドまで、
            <br />
            多様なパートナーとともに
            <br />
            製品開発を行ってきました。
          </p>
        </div>
      </div>

      {/* GLOBAL */}
      <div className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span
            className="
              text-sm
              tracking-[0.25em]
              uppercase
              font-light
              text-[#8a7e6e]
            "
            style={bodyFont}
          >
            Global Partners
          </span>

          <div className="flex-1 h-px bg-[#2c2c2c]/10" />
        </div>

        <ClientGrid
          clients={globalClients}
          type="global"
        />
      </div>

      {/* DOMESTIC */}
      <div className="mb-16">
        <div className="flex items-center gap-6 mb-8">
          <span
            className="
              text-sm
              tracking-[0.25em]
              uppercase
              font-light
              text-[#8a7e6e]
            "
            style={bodyFont}
          >
            Domestic Partners
          </span>

          <div className="flex-1 h-px bg-[#2c2c2c]/10" />
        </div>

        <ClientGrid
          clients={domesticClients}
          type="domestic"
        />
      </div>
    </section>
  );
}
