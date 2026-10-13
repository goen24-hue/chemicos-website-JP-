export const expertiseItems = [
  {
    num: "01",
    title: "精密な塗布性",
    desc: "ペン先の構造とインク設計により、\n狙ったラインを安定して描ける設計",
  },
  {
    num: "02",
    title: "揺るがぬ発色",
    desc: "季節や肌状態に左右されにくい、\n一貫した色表現を実現する処方設計",
  },
  {
    num: "03",
    title: "心地よい使用感",
    desc: "塗布からオフまで、肌への負担と\n感触のバランスを考慮した設計",
  },
  {
    num: "04",
    title: "再現性のある製造",
    desc: "ロット間の品質差を抑えるための\n工程設計と品質管理体制",
  },
];

export const expansionItems = [
  { name: "マスカラ", desc: "ボリューム・カール・セパレートを両立させる設計" },
  { name: "眉", desc: "描きやすさと自然な仕上がりを両立させる設計" },
  { name: "リップ", desc: "発色・質感・持続性をコントロールする処方設計" },
];

export const improvementColumns = [
  {
    title: "品質への向き合い",
    items: ["厳格なテスト体制", "ロット毎の一貫性確認", "安全性と安定性への責任"],
  },
  {
    title: "ものづくりの基盤",
    items: ["再現可能な処方設計", "量産時にも変わらない品質", "コストと品質の最適バランス"],
  },
  {
    title: "パートナーとしての姿勢",
    items: ["技術的な提案と伴走支援", "プロトタイプの迅速な具現化", "市場変化への柔軟な対応"],
  },
];

export const processSteps = [
  {
    num: "01",
    title: "初回相談",
    duration: "1〜2営業日",
    desc: "製品コンセプト、ターゲット、ご予算をヒアリング。\n技術的な実現可能性を初期評価します。",
  },
  {
    num: "02",
    title: "処方提案・サンプル作成",
    duration: "1〜2週間",
    desc: "ご要望に基づき処方を設計。\n複数のサンプルをご提供し、\nフィードバックをもとに調整します。",
  },
  {
    num: "03",
    title: "安定性・安全性テスト",
    duration: "4〜13週間",
    desc: "温度・湿度・光照射など各種条件下での\n安定性試験を実施。",
  },
  {
    num: "04",
    title: "量産・品質管理",
    duration: "ロットにより異なる",
    desc: "承認後、量産ラインへ移行。\nロットごとに品質検査を実施し、\n一貫した品質をお届けします。",
  },
  {
    num: "05",
    title: "納品・アフターサポート",
    duration: "継続的",
    desc: "納品後も処方の改善提案や\n市場フィードバックへの対応など、\n長期的なパートナーとして伴走します。",
  },
];

export const specsData = [
  {
    category: "最小発注数量（MOQ）",
    icon: "ri-stack-line",
    items: [
      { label: "アイライナー", value: "10,000本〜" },
      { label: "マスカラ", value: "10,000本〜" },
      { label: "リップ製品", value: "10,000本〜" },
    ],
  },
  {
    category: "標準リードタイム",
    icon: "ri-time-line",
    items: [
      { label: "初回サンプル", value: "1〜2週間" },
      { label: "安定性テスト", value: "4〜13週間" },
      { label: "量産（初回）", value: "8〜12週間" },
    ],
  },
  {
    category: "取得認証・対応規格",
    icon: "ri-award-line",
    items: [
      { label: "ISO 22716", value: "GMP認証取得" },
      { label: "ISO 9001", value: "品質マネジメントシステム認証取得" },
      { label: "クルエルティフリー", value: "対応可能" },
      { label: "ヴィーガン処方", value: "対応可能" },
    ],
  },
  {
    category: "対応サービス",
    icon: "ri-settings-3-line",
    items: [
      { label: "OEM", value: "ブランド仕様で製造" },
      { label: "ODM", value: "処方・設計から対応" },
      { label: "パッケージング", value: "調達サポート可" },
      { label: "規制対応", value: "各国申請サポート" },
    ],
  },
];

export const faqItems = [
  {
    q: "初めての依頼でも対応してもらえますか？",
    a: "はい、対応可能です。スタートアップブランドや、初めて製品開発を行うお客様からのご相談も多数承っています。\n初回相談は無料で、コンセプト段階からご提案いたします。",
  },
  {
    q: "サンプル費用はかかりますか？",
    a: "内容や処方に応じて費用は異なりますが、量産契約に進んだ場合は、費用を調整することも可能です。\n詳細は個別にご案内いたします。",
  },
  {
    q: "既存の処方を改良することはできますか？",
    a: "はい、対応可能です。現在の処方情報をご共有いただければ、改良点のご提案から対応いたします。",
  },
  {
    q: "納品後に品質問題が発生した場合はどうなりますか？",
    a: "全ロットの品質記録を管理しており、問題発生時には迅速に原因を特定します。\n製造起因の不具合については、再製造または返金にて対応いたします。",
  },
];


export const portfolioCategories = [
  {
    id: "eyeliner",
    name: "アイライナー",
    sub: "Eyeliner",
    desc: "ペン先の精度にこだわった、滲まず長持ちするアイライナー。\nリキッド・ペンシルタイプに対応。",
    specs: ["リキッドペンタイプ / リキッドターンタイプ / オートマチックペンシルタイプ", "耐水性・耐皮脂処方", "MOQ 10,000本〜"],
    image: "https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/e7e1bd83fec3208a370690329acee357.png",
  },
  {
    id: "mascara",
    name: "マスカラ",
    sub: "Mascara",
    desc: "ボリューム・ロング・カールの三軸を自在に設計。\nブラシ形状から処方までカスタマイズ。",
    specs: ["マスカラ", "マルチプルーフテクノロジー済み処方", "MOQ 10,000本〜"],
    image: "https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/65aaa63702f3e847d4ab48bd4309ea55.png",
  },
  {
    id: "brow",
    name: "アイブロウ",
    sub: "Eyebrow",
    desc: "自然な仕上がりと長時間の定着を両立。\nリキッド・ペンシル・ブロウカラタイプに対応。",
    specs: ["リキッドペンタイプ / ブロウカラタイプ / オートマチックペンシルタイプ", "汗・皮脂に強い処方", "MOQ 10,000本〜"],
    image: "https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/e8d7419f622c83342090b73548d2edc2.png",
  },
  {
    id: "lip",
    name: "リップ",
    sub: "Lip",
    desc: "発色・保湿・持続力を三位一体で実現。\nリップティント・グロス・スティックタイプに対応。",
    specs: ["リップラッカー / リップティント / リップグロス / リップスティック", "高発色・保湿・長持ち処方", "MOQ 10,000本〜"],
    image: "https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/7dfd94a25e97371007bc31b2b462b9da.png",
  },
];

export const companyStats = [
  { num: "2002", label: "設立年", sub: "20年以上の実績" },
  { num: "150+", label: "取引ブランド数", sub: "国内外累計" },
  { num: "30+", label: "対応国・地域", sub: "グローバル展開" },
  { num: "ISO 22716", label: "GMP認証", sub: "品質保証の証明" },
];

export const globalClients = [
  {
    name: "KVD Vegan Beauty",
    image: "https://public.readdy.ai/ai/img_res/a8534265-0001-43a3-95a9-211a6ed798bc.png",
    wide: false,
  },
  {
    name: "Fenty Beauty",
    image: "https://public.readdy.ai/ai/img_res/0ddb1d84-b7df-4aea-8722-bbceb456d818.png",
    wide: true,
  },
  {
    name: "Dior Beauty",
    image: "https://public.readdy.ai/ai/img_res/a37c350b-0683-42b6-842d-03977c8c0ae0.png",
    wide: true,
  },
  {
    name: "Stila",
    image: "https://public.readdy.ai/ai/img_res/5bdc35d5-7ae4-4697-8ef4-112a9dea594a.png",
    wide: true,
  },
  {
    name: "Too Faced",
    image: "https://public.readdy.ai/ai/img_res/f0ab3d4c-8d12-4cb4-85a3-bdf8f5f91c32.png",
    wide: true,
  },
  {
    name: "ColourPop",
    image: "https://public.readdy.ai/ai/img_res/dd3eb7b1-68e3-428a-b27b-ffc6b1416f05.png",
    wide: true,
  },
  {
    name: "SEPHORA",
    image: "https://public.readdy.ai/ai/img_res/f8039413-a479-4c68-9bd9-731c06d1cc6e.png",
    wide: true,
  },
  {
    name: "LORAC",
    image: "https://public.readdy.ai/ai/img_res/c205b427-7ae0-4a12-884a-13d2966625f6.png",
    wide: true,
  },
  {
    name: "Smashbox",
    image: "https://public.readdy.ai/ai/img_res/b6463046-f418-410e-8d74-e0c71f4ab08d.png",
    wide: true,
  },
  {
    name: "HOURGLASS",
    image: "https://public.readdy.ai/ai/img_res/6518ff02-b67d-4342-82f9-e3b018f11cb1.png",
    wide: true,
  },
  {
    name: "ARTDECO",
    image: "https://public.readdy.ai/ai/img_res/8120b642-d6e5-47eb-8ca9-e7ebbf7eaff5.png",
    wide: true,
  },
  {
    name: "Urban Decay",
    image: "https://public.readdy.ai/ai/img_res/de9930a2-4ad9-4a94-8164-346358675ed8.png",
    wide: true,
  },
  {
    name: "Physicians Formula",
    image: "https://images.squarespace-cdn.com/content/v1/5702b156f699bbaade5f6c2d/1586357789074-DEB2IWW1ZYS251A3KCKM/Physicians_Formula_Logo-01.png",
    wide: true,
  },
  {
    name: "r.e.m. beauty",
    image: "https://www.ulta.com/innovation/rem-beauty/imagesdream/logo.png",
    wide: true,
  },
  {
    name: "Jeffree Star Cosmetics",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Jeffree_Star_Cosmetics_Logo.png",
    wide: true,
  },
  {
    name: "Guerlain",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Guerlain_logo_%282015%E2%80%932022%29.svg/1280px-Guerlain_logo_%282015%E2%80%932022%29.svg.png",
    wide: true,
  },
];

const LOGO_SIZE_MAP: Record<string, { maxWidth?: string; maxHeight?: string }> = {
  // Domestic / Large corporate
  'ESPOIR':              { maxWidth: '42%', maxHeight: '48%' },
  'HEART PERCENT':       { maxWidth: '70%', maxHeight: '45%' },
  'UNLEASHIA':           { maxWidth: '62%', maxHeight: '58%' },
  'MERZY':               { maxWidth: '70%', maxHeight: '45%' },
};

export const domesticClients = [
  {
    name: "ETUDE",
    image: "https://public.readdy.ai/ai/img_res/7ca47fde-4d47-491d-9dd8-f1a3e6ab79cc.png",
    wide: false,
  },
  {
    name: "CLIO",
    image: "https://product-image.kurly.com/product/brand/4e2703d6-a528-4664-882e-04b6daede1b4.png",
    wide: false,
  },
  {
    name: "PERIPERA",
    image: "https://1000logos.net/wp-content/uploads/2023/11/PeriPera-Logo.png",
    wide: false,
  },
  {
    name: "ESPOIR",
    image: "https://www.planeton.kr/planeton/resources/images/work/espoir/work_logo.png",
    wide: false,
  },
  {
    name: "HEART PERCENT",
    image: "https://m.heartpercent.co.kr/web/img/logo_p.png",
    wide: false,
  },
  {
    name: "LILYBYRED",
    image: "https://lilybyred.co.kr/web/upload/NNEditor/20220616/dce45e83e8b4ee5d6260ff502db4bc68.png",
    wide: true,
  },
  {
    name: "UNLEASHIA",
    image: "https://unleashiacosmetics.com/web/upload/category/editor/2021/11/02/24de4a1e629d7502a66f266f480e3493.png",
    wide: false,
  },
  {
    name: "ODDTYPE",
    image: "https://theoddtype.com/wp-content/uploads/2025/10/logo.png",
    wide: true,
  },
  {
    name: "GIVERNY",
    image: "https://cdn-pro-web-250-115.cdn-nhncommerce.com/bnh20202_godomall_com/data/skin/front/kaimen_bnh_1028/img/banner/slider_446814572/6f714615ef85ebc82cee5c678dda8df6_12156.png",
    wide: true,
  },
  {
    name: "MERZY",
    image: "https://m.merzy.co.kr/web_img/MERZY_BI_180717.png",
    wide: false,
  },
  {
    name: "INNISFREE",
    image: "https://public.readdy.ai/ai/img_res/6158b6ac-5932-4e15-a6e9-45d6377f259b.png",
    wide: true,
  },
  {
    name: "MISSHA",
    image: "https://public.readdy.ai/ai/img_res/36bb0243-4ae9-490d-88f4-7357a5950b53.png",
    wide: true,
  },
  {
    name: "THE FACE SHOP",
    image: "https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/66d3a217b14e03bb7aca816a0a65f195.png",
    wide: true,
  },
  {
    name: "VIDIVICI",
    image: "https://img.ssgdfs.com/upload/C00001/dspl/banner/batch/614301/614301_black.png",
    wide: true,
  },
  {
    name: "COSNORI",
    image: "https://cosnori.cafe24.com/test/logo_mobile.png",
    wide: true,
  },
  {
    name: "TOO COOL FOR SCHOOL",
    image: "https://toocoolforschool.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/3643a35b6a2fbe017d7bc955e4fee45c.png",
    wide: true,
  },
  {
    name: "TIP TOE",
    image: "https://tiptoe.kr/web/upload/category/logo/v2_0315bc921e22f871181730ab1aca6ffd_nwXrnK2D75_top.jpg",
    wide: true,
  },
  {
    name: "KEYBO",
    image: "https://keybocosmetic.com/web/upload/appfiles/AIFBrluHGdhkEsW6ewuLoA/0a70cd121a490061faf880b3b73a485c.png",
    wide: true,
  },
  {
    name: "TOOQ",
    image: "https://tooq.co.kr/web/upload/category/editor/2026/01/19/3b608324e69c3e83efbbe2929191404a.png",
    wide: true,
  },
  {
    name: "WAKEMAKE",
    image: "https://shoplineimg.com/603781ec4bf8b2001b5d7e64/6965b4b650a13d000c04d48c/1200x.png?",
    wide: true,
  },
];

export const contactInfo = {
  address: "경기도 안양시 동안구 관양동 1번지 (우편번호 14056)",
  addressJp: "韓国 京畿道安養市万安区徳川路48番ギル48 〒14088\n경기도 안양시 만안구 덕천로48번길 48 우)14088",
  phone: "+82-31-428-1609",
  email: "info@chemicos.net",
  hours: "月〜金 09:00〜18:00 KST",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.332!2d126.9527!3d37.3942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzM5LjEiTiAxMjbCsDU3JzEwLjAiRQ!5e0!3m2!1sko!2skr!4v1234567890",
};

export const footerLinks = {
  企業: ["概要", "歴史", "クライアント"],
  製品: ["アイメイク", "カラーコスメティック", "認証"],
  お問い合わせ: ["+82-31-428-1609", "info@chemicos.net"],
};
