export const expertiseItems = [
  {
    num: "01",
    title: "정밀한 도포감",
    desc: "팁 구조와 잉크 설계를 기반으로\n원하는 라인을 안정적으로 구현하는 설계",
  },
  {
    num: "02",
    title: "흔들림 없는 발색",
    desc: "계절과 피부 상태의 영향을 줄이고\n일관된 컬러 표현을 구현하는 처방 설계",
  },
  {
    num: "03",
    title: "편안한 사용감",
    desc: "도포부터 클렌징까지 피부 부담과\n사용감을 함께 고려한 설계",
  },
  {
    num: "04",
    title: "재현성 있는 제조",
    desc: "로트 간 품질 편차를 줄이기 위한\n공정 설계와 품질 관리 체계",
  },
];

export const expansionItems = [
  { name: "마스카라", desc: "속눈썹에 균일하게 도포되고 원하는 마무리감이 안정적으로 표현되도록 설계" },
  { name: "브로우", desc: "손쉽게 그려지고 자연스럽게 마무리되도록 발색과 고정감을 조절하는 설계" },
  { name: "립", desc: "컬러와 질감이 안정적으로 표현되도록 발색, 밀착감, 지속력을 조절하는 설계" },
];

export const improvementColumns = [
  {
    title: "품질을 대하는 방식",
    items: ["엄격한 테스트 체계", "로트별 일관성 확인", "안전성과 안정성에 대한 책임"],
  },
  {
    title: "제조 기반",
    items: ["재현 가능한 처방 설계", "양산에서도 유지되는 품질", "단가와 품질의 균형"],
  },
  {
    title: "파트너로서의 태도",
    items: ["기술 제안과 개발 동행", "프로토타입의 구체화", "시장 변화에 대한 유연한 대응"],
  },
];

export const processSteps = [
  {
    num: "01",
    title: "초기 상담",
    duration: "영업일 기준 1~2일",
    desc: "제품 컨셉, 타깃, 예산을 확인하고\n기술적 구현 가능성을 초기 검토합니다.",
  },
  {
    num: "02",
    title: "처방 제안·샘플 제작",
    duration: "1~2주",
    desc: "요청 조건에 맞춰 처방을 설계하고\n복수의 샘플을 제공한 뒤\n피드백을 반영해 조정합니다.",
  },
  {
    num: "03",
    title: "안정성·안전성 테스트",
    duration: "4~13주",
    desc: "온도·습도·광 노출 등 다양한 조건에서\n안정성 시험을 진행합니다.",
  },
  {
    num: "04",
    title: "양산·품질 관리",
    duration: "로트에 따라 상이",
    desc: "승인 후 양산 라인으로 전환하고\n로트별 품질 검사를 통해\n일관된 품질을 제공합니다.",
  },
  {
    num: "05",
    title: "납품·사후 지원",
    duration: "지속 관리",
    desc: "납품 이후에도 처방 개선 제안과\n시장 피드백 대응을 지원하며\n장기 파트너로 함께합니다.",
  },
];

export const specsData = [
  {
    category: "최소 주문 수량(MOQ)",
    icon: "ri-stack-line",
    items: [
      { label: "아이라이너", value: "10,000개~" },
      { label: "마스카라", value: "10,000개~" },
      { label: "립 제품", value: "10,000개~" },
    ],
  },
  {
    category: "표준 리드타임",
    icon: "ri-time-line",
    items: [
      { label: "초기 샘플", value: "1~2주" },
      { label: "안정성 테스트", value: "4~13주" },
      { label: "양산(초도)", value: "8~12주" },
    ],
  },
  {
    category: "인증·대응 규격",
    icon: "ri-award-line",
    items: [
      { label: "ISO 22716", value: "GMP 인증 취득" },
      { label: "ISO 9001", value: "품질경영시스템 인증 취득" },
      { label: "크루얼티 프리", value: "대응 가능" },
      { label: "비건 처방", value: "대응 가능" },
    ],
  },
  {
    category: "대응 서비스",
    icon: "ri-settings-3-line",
    items: [
      { label: "OEM", value: "브랜드 사양에 맞춘 제조" },
      { label: "ODM", value: "처방·설계 단계부터 대응" },
      { label: "패키징", value: "소싱 지원 가능" },
      { label: "규제 대응", value: "국가별 신청 지원" },
    ],
  },
];

export const faqItems = [
  {
    q: "처음 의뢰해도 상담할 수 있나요?",
    a: "네, 가능합니다. 스타트업 브랜드나 제품 개발이 처음인 고객사의 상담도 진행하고 있습니다.\n초기 상담은 무료이며, 컨셉 단계부터 제안드릴 수 있습니다.",
  },
  {
    q: "샘플 비용이 발생하나요?",
    a: "내용과 처방에 따라 비용은 달라질 수 있습니다. 양산 계약으로 이어지는 경우 비용 조정이 가능할 수 있습니다.\n자세한 내용은 개별 안내드립니다.",
  },
  {
    q: "기존 처방 개선도 가능한가요?",
    a: "네, 가능합니다. 현재 처방 정보를 공유해 주시면 개선 방향 제안부터 검토할 수 있습니다.",
  },
  {
    q: "납품 후 품질 이슈가 발생하면 어떻게 대응하나요?",
    a: "전 로트의 품질 기록을 관리하고 있으며, 이슈 발생 시 원인을 확인해 대응합니다.\n제조 기인 불량의 경우 재생산 또는 환불 기준에 따라 처리합니다.",
  },
];

export const portfolioCategories = [
  {
    id: "eyeliner",
    name: "아이라이너",
    sub: "Eyeliner",
    desc: "팁 정밀도와 지속력을 고려한 아이라이너.\n리퀴드·펜슬 타입 모두 대응 가능합니다.",
    specs: ["리퀴드 펜 타입 / 리퀴드 턴 타입 / 오토매틱 펜슬 타입", "워터프루프·세범프루프 처방", "MOQ 10,000개~"],
    image: "https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/e7e1bd83fec3208a370690329acee357.png",
  },
  {
    id: "mascara",
    name: "마스카라",
    sub: "Mascara",
    desc: "볼륨·롱래시·컬 고정을 목적에 맞게 설계합니다.\n브러시 형태부터 처방까지 커스터마이징 가능합니다.",
    specs: ["마스카라", "멀티프루프 기술 적용 처방", "MOQ 10,000개~"],
    image: "https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/65aaa63702f3e847d4ab48bd4309ea55.png",
  },
  {
    id: "brow",
    name: "아이브로우",
    sub: "Eyebrow",
    desc: "자연스러운 마무리와 장시간 고정을 함께 고려합니다.\n리퀴드·펜슬·브로우카라 타입에 대응합니다.",
    specs: ["리퀴드 펜 타입 / 브로우카라 타입 / 오토매틱 펜슬 타입", "땀·피지에 강한 처방", "MOQ 10,000개~"],
    image: "https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/e8d7419f622c83342090b73548d2edc2.png",
  },
  {
    id: "lip",
    name: "립",
    sub: "Lip",
    desc: "발색·보습감·지속력을 함께 고려한 립 제품 개발.\n립틴트·글로스·스틱 타입에 대응합니다.",
    specs: ["립 라커 / 립 틴트 / 립 글로스 / 립스틱", "고발색·보습감·롱웨어 처방", "MOQ 10,000개~"],
    image: "https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/7dfd94a25e97371007bc31b2b462b9da.png",
  },
];

export const companyStats = [
  { num: "2002", label: "설립연도", sub: "20년 이상의 경험" },
  { num: "150+", label: "거래 브랜드 수", sub: "국내외 누적" },
  { num: "30+", label: "대응 국가·지역", sub: "글로벌 전개" },
  { num: "ISO 22716", label: "GMP 인증", sub: "품질 보증 체계" },
];

export const globalClients = [
  { name: "KVD Vegan Beauty", image: "https://public.readdy.ai/ai/img_res/a8534265-0001-43a3-95a9-211a6ed798bc.png", wide: false },
  { name: "Fenty Beauty", image: "https://public.readdy.ai/ai/img_res/0ddb1d84-b7df-4aea-8722-bbceb456d818.png", wide: true },
  { name: "Dior Beauty", image: "https://public.readdy.ai/ai/img_res/a37c350b-0683-42b6-842d-03977c8c0ae0.png", wide: true },
  { name: "Stila", image: "https://public.readdy.ai/ai/img_res/5bdc35d5-7ae4-4697-8ef4-112a9dea594a.png", wide: true },
  { name: "Too Faced", image: "https://public.readdy.ai/ai/img_res/f0ab3d4c-8d12-4cb4-85a3-bdf8f5f91c32.png", wide: true },
  { name: "ColourPop", image: "https://public.readdy.ai/ai/img_res/dd3eb7b1-68e3-428a-b27b-ffc6b1416f05.png", wide: true },
  { name: "SEPHORA", image: "https://public.readdy.ai/ai/img_res/f8039413-a479-4c68-9bd9-731c06d1cc6e.png", wide: true },
  { name: "LORAC", image: "https://public.readdy.ai/ai/img_res/c205b427-7ae0-4a12-884a-13d2966625f6.png", wide: true },
  { name: "Smashbox", image: "https://public.readdy.ai/ai/img_res/b6463046-f418-410e-8d74-e0c71f4ab08d.png", wide: true },
  { name: "HOURGLASS", image: "https://public.readdy.ai/ai/img_res/6518ff02-b67d-4342-82f9-e3b018f11cb1.png", wide: true },
  { name: "ARTDECO", image: "https://public.readdy.ai/ai/img_res/8120b642-d6e5-47eb-8ca9-e7ebbf7eaff5.png", wide: true },
  { name: "Urban Decay", image: "https://public.readdy.ai/ai/img_res/de9930a2-4ad9-4a94-8164-346358675ed8.png", wide: true },
  { name: "Physicians Formula", image: "https://images.squarespace-cdn.com/content/v1/5702b156f699bbaade5f6c2d/1586357789074-DEB2IWW1ZYS251A3KCKM/Physicians_Formula_Logo-01.png", wide: true },
  { name: "r.e.m. beauty", image: "https://www.ulta.com/innovation/rem-beauty/imagesdream/logo.png", wide: true },
  { name: "Jeffree Star Cosmetics", image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Jeffree_Star_Cosmetics_Logo.png", wide: true },
  { name: "Guerlain", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Guerlain_logo_%282015%E2%80%932022%29.svg/1280px-Guerlain_logo_%282015%E2%80%932022%29.svg.png", wide: true },
];

const LOGO_SIZE_MAP: Record<string, { maxWidth?: string; maxHeight?: string }> = {
  // Domestic / Large corporate
  'ESPOIR':              { maxWidth: '42%', maxHeight: '48%' },
  'HEART PERCENT':       { maxWidth: '70%', maxHeight: '45%' },
  'UNLEASHIA':           { maxWidth: '62%', maxHeight: '58%' },
  'MERZY':               { maxWidth: '70%', maxHeight: '45%' },
};

export const domesticClients = [
  { name: "ETUDE", image: "https://public.readdy.ai/ai/img_res/7ca47fde-4d47-491d-9dd8-f1a3e6ab79cc.png", wide: false },
  { name: "CLIO", image: "https://product-image.kurly.com/product/brand/4e2703d6-a528-4664-882e-04b6daede1b4.png", wide: false },
  { name: "PERIPERA", image: "https://1000logos.net/wp-content/uploads/2023/11/PeriPera-Logo.png", wide: false },
  { name: "ESPOIR", image: "https://www.planeton.kr/planeton/resources/images/work/espoir/work_logo.png", wide: false },
  { name: "HEART PERCENT", image: "https://m.heartpercent.co.kr/web/img/logo_p.png", wide: false },
  { name: "LILYBYRED", image: "https://lilybyred.co.kr/web/upload/NNEditor/20220616/dce45e83e8b4ee5d6260ff502db4bc68.png", wide: true },
  { name: "UNLEASHIA", image: "https://unleashiacosmetics.com/web/upload/category/editor/2021/11/02/24de4a1e629d7502a66f266f480e3493.png", wide: false },
  { name: "ODDTYPE", image: "https://theoddtype.com/wp-content/uploads/2025/10/logo.png", wide: true },
  { name: "GIVERNY", image: "https://cdn-pro-web-250-115.cdn-nhncommerce.com/bnh20202_godomall_com/data/skin/front/kaimen_bnh_1028/img/banner/slider_446814572/6f714615ef85ebc82cee5c678dda8df6_12156.png", wide: true },
  { name: "MERZY", image: "https://m.merzy.co.kr/web_img/MERZY_BI_180717.png", wide: false },
  { name: "INNISFREE", image: "https://public.readdy.ai/ai/img_res/6158b6ac-5932-4e15-a6e9-45d6377f259b.png", wide: true },
  { name: "MISSHA", image: "https://public.readdy.ai/ai/img_res/36bb0243-4ae9-490d-88f4-7357a5950b53.png", wide: true },
  { name: "THE FACE SHOP", image: "https://static.readdy.ai/image/91482352f3970615f9df82ae24dd1865/66d3a217b14e03bb7aca816a0a65f195.png", wide: true },
  { name: "VIDIVICI", image: "https://img.ssgdfs.com/upload/C00001/dspl/banner/batch/614301/614301_black.png", wide: true },
  { name: "COSNORI", image: "https://cosnori.cafe24.com/test/logo_mobile.png", wide: true },
  { name: "TOO COOL FOR SCHOOL", image: "https://daoift3qrrnil.cloudfront.net/company_groups/images/000/003/473/original/hwbq93y6bf-2x600x600x0x0x0.png?1700450872", wide: true },
  { name: "TIP TOE", image: "https://tiptoe.kr/web/upload/category/logo/v2_0315bc921e22f871181730ab1aca6ffd_nwXrnK2D75_top.jpg", wide: true },
  { name: "KEYBO", image: "https://keybocosmetic.com/web/upload/appfiles/AIFBrluHGdhkEsW6ewuLoA/0a70cd121a490061faf880b3b73a485c.png", wide: true },
  { name: "TOOQ", image: "https://tooq.co.kr/web/upload/category/editor/2026/01/19/3b608324e69c3e83efbbe2929191404a.png", wide: true },
  { name: "MERRYMOND", image: "https://drive.google.com/file/d/1J3_dWnzI3Ap6vzC4nV1Y_My5tA-GXbsC/view?usp=sharing", wide: true },
];

export const contactInfo = {
  address: "경기도 안양시 만안구 덕천로48번길 48",
  addressJp: "경기도 안양시 만안구 덕천로48번길 48\n우편번호 14088",
  phone: "+82-31-428-1609",
  email: "info@chemicos.net",
  hours: "월~금 09:00~18:00 KST",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.332!2d126.9527!3d37.3942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzM5LjEiTiAxMjbCsDU3JzEwLjAiRQ!5e0!3m2!1sko!2skr!4v1234567890",
};

export const footerLinks = {
  회사: ["개요", "연혁", "고객사"],
  제품: ["아이메이크업", "색조 메이크업", "인증"],
  문의: ["+82-31-428-1609", "info@chemicos.net"],
};
