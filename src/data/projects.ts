// ============= CASAS FIXAS - RESIDENCIAL =============
const loftTriplex = "/images/project-loft-triplex.jpg";
const loftTriplexFixed = "/images/loft-triplex-fixed.png";
const loftTriplexFront = "/images/loft-triplex-front.png";
const studioDuplo = "/images/project-studio-duplo.jpg";
const studioSingle = "/images/project-studio-single.jpg";
const sensus = "/images/project-sensus.jpg";
const blueprint = "/images/blueprint-floorplan.jpg";
const sakuraLoftComplex = "/images/sakura-loft-complex.png";
const sakuraResidencial = "/images/sakura-residencial.png";
const casaBrancaPraia1 = "/images/casa-branca-praia-1.png";
const casaBrancaPraia2 = "/images/casa-branca-praia-2.png";

// ============= CASAS FLUTUANTES =============
const floatingHouseTriplex = "/images/floating-house-triplex.jpg";
const floatingPoolDeck = "/images/floating-pool-deck.jpg";
const floatingDomeEvent = "/images/floating-dome-event.jpg";
const domosFlutuantes = "/images/domos-flutuantes.png";

// ============= CASAS MÓVEIS =============
const mobileHouseFuturistic = "/images/mobile-house-futuristic.png";
const mobileHouseBlueprint = "/images/mobile-house-blueprint.png";
const nomadFortressLand = "/images/nomad-fortress-land.jpg";

// ============= COMERCIAL / INDUSTRIAL =============
const domeBambooInterior = "/images/dome-bamboo-interior.png";
const domeGreenhouseInterior = "/images/dome-greenhouse-interior.png";
const domosPraia = "/images/domos-praia.png";
const domeEstruturaTecnica = "/images/dome-estrutura-tecnica.png";

export type ProjectCategory = 
  | "todos" 
  | "residencial" 
  | "flutuantes" 
  | "moveis" 
  | "comercial" 
  | "industrial";

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  gallery: string[];
  features: string[];
  description: string;
  specs?: {
    area?: string;
    rooms?: string;
    floors?: string;
    pool?: string;
  };
  link?: string;
}

export const categories = [
  { id: "todos" as const, label: "Todos" },
  { id: "residencial" as const, label: "Casas Fixas" },
  { id: "flutuantes" as const, label: "Flutuantes" },
  { id: "moveis" as const, label: "Móveis" },
  { id: "comercial" as const, label: "Comercial" },
  { id: "industrial" as const, label: "Industrial" },
];

export const projects: Project[] = [
  // ========================================
  // CASAS FIXAS - RESIDENCIAL
  // ========================================
  {
    id: "01",
    slug: "zenite-loft-triplex",
    title: "Zenite Loft Triplex",
    subtitle: "4 Suítes • 1200m² • 4 Piscinas",
    category: "residencial",
    categoryLabel: "Residencial Prime",
    location: "Brasil",
    year: "2025",
    image: loftTriplex,
    gallery: [loftTriplex, loftTriplexFixed, loftTriplexFront, blueprint],
    features: ["Soldagem Naval", "Vidro Triplo", "Automação Total", "4 Vagas"],
    description: "Residência de alto padrão com arquitetura contemporânea, integrando tecnologia de ponta com materiais nobres. Design modular com 4 suítes amplas e áreas de lazer completas.",
    specs: {
      area: "1200m²",
      rooms: "4 Suítes",
      floors: "3 Andares",
      pool: "4 Piscinas"
    },
    link: "https://dicardosoaz.wixsite.com/zenite-loft-triplex",
  },
  {
    id: "02",
    slug: "zenite-studio-duplo",
    title: "Zenite Studio Duplo",
    subtitle: "2 Suítes SPA • 3 Piscinas • 2 Saunas",
    category: "residencial",
    categoryLabel: "Residencial Wellness",
    location: "Brasil",
    year: "2025",
    image: studioDuplo,
    gallery: [studioDuplo, blueprint],
    features: ["Banheiro Sensus", "Ozônio & Hidrogênio", "Aço Carbono", "2 Banheiras"],
    description: "Projeto focado em bem-estar com integração total de spa, saunas e áreas de relaxamento. Automação inteligente para controle de ambiente e purificação de ar.",
    specs: {
      area: "800m²",
      rooms: "2 Suítes SPA",
      floors: "2 Andares",
      pool: "3 Piscinas"
    },
    link: "https://dicardosoaz.wixsite.com/zenite-studio-duplo",
  },
  {
    id: "03",
    slug: "zenite-studio-single",
    title: "Zenite Studio Single",
    subtitle: "Casa Inteligente Modular",
    category: "residencial",
    categoryLabel: "Smart Home",
    location: "Brasil",
    year: "2025",
    image: studioSingle,
    gallery: [studioSingle, blueprint],
    features: ["Controle EZ", "Modular 90 Dias", "Aço Carbono", "IoT Integrado"],
    description: "Solução modular inteligente com montagem em 90 dias. Estrutura em aço carbono com acabamentos premium e automação completa via IoT.",
    specs: {
      area: "400m²",
      rooms: "1 Suíte Master",
      floors: "1 Andar",
      pool: "1 Piscina"
    },
    link: "https://dicardosoaz.wixsite.com/zenite-studio-single",
  },
  {
    id: "04",
    slug: "casa-branca-oceanview",
    title: "Casa Branca Oceanview",
    subtitle: "Minimalismo à Beira-Mar",
    category: "residencial",
    categoryLabel: "Casa de Praia",
    location: "Litoral Premium",
    year: "2025",
    image: casaBrancaPraia1,
    gallery: [casaBrancaPraia1, casaBrancaPraia2, blueprint],
    features: ["Vista 360°", "Escada Externa", "Cimento Branco", "Pé-Direito Alto"],
    description: "Arquitetura minimalista com estrutura em cimento branco, integrando-se perfeitamente ao ambiente costeiro. Design limpo com grandes vãos de vidro.",
    specs: {
      area: "600m²",
      rooms: "3 Suítes",
      floors: "2 Andares",
      pool: "Piscina Infinita"
    },
  },
  {
    id: "05",
    slug: "sakura-loft-complex",
    title: "Sakura Loft Complex",
    subtitle: "Condomínio Integrado Premium",
    category: "residencial",
    categoryLabel: "Complexo Residencial",
    location: "Brasil",
    year: "2025",
    image: sakuraLoftComplex,
    gallery: [sakuraLoftComplex, loftTriplexFixed, loftTriplexFront, blueprint],
    features: ["Cerejeiras Japonesas", "Lago Central", "6 Unidades", "Área Verde"],
    description: "Complexo residencial integrado com unidades Loft Triplex ao redor de um lago central. Paisagismo com cerejeiras japonesas e infraestrutura compartilhada de lazer.",
    specs: {
      area: "15.000m²",
      rooms: "6 Unidades",
      floors: "3 Andares cada",
      pool: "Lago + Piscinas"
    },
  },
  {
    id: "06",
    slug: "sakura-aura-vila",
    title: "Sakura Aura Vila Santé",
    subtitle: "Cobertura • Duplex • Triplex",
    category: "residencial",
    categoryLabel: "Empreendimento",
    location: "Longwood, California",
    year: "2026",
    image: sakuraResidencial,
    gallery: [sakuraResidencial, blueprint],
    features: ["Cobertura 5.5M", "Duplex 5.5M", "Triplex 5.5M", "Automação IA"],
    description: "Empreendimento de luxo com opções de cobertura, duplex e triplex. Arquitetura orgânica com brises de madeira e vegetação integrada à fachada.",
    specs: {
      area: "300m² a 600m²",
      rooms: "3 a 6 Suítes",
      floors: "1 a 3 Andares",
      pool: "Piscinas Privativas"
    },
  },
  {
    id: "07",
    slug: "zenite-sensus",
    title: "Zenite Sensus",
    subtitle: "Banheiro Tecnológico Premium",
    category: "residencial",
    categoryLabel: "Design Interior",
    location: "São Paulo, SP",
    year: "2025",
    image: sensus,
    gallery: [sensus, blueprint],
    features: ["LED Mirror", "Auto-Sanitizante", "Perfumado", "Aço Carbono"],
    description: "Banheiro tecnológico com espelhos LED inteligentes, sistema auto-sanitizante e aromatização automatizada.",
    specs: {
      area: "25m²",
      rooms: "Banheiro Premium",
      floors: "-",
      pool: "Banheira Spa"
    },
    link: "https://dicardosoaz.wixsite.com/dca-arctecturus",
  },

  // ========================================
  // CASAS FLUTUANTES
  // ========================================
  {
    id: "08",
    slug: "aqua-triplex-floating",
    title: "Aqua Triplex Floating",
    subtitle: "Casa Flutuante de Luxo",
    category: "flutuantes",
    categoryLabel: "Floating Home",
    location: "Lago Privativo",
    year: "2025",
    image: floatingHouseTriplex,
    gallery: [floatingHouseTriplex, floatingPoolDeck, blueprint],
    features: ["3 Andares", "Deck 360°", "Painéis Solares", "Ancoragem Smart"],
    description: "Residência flutuante triplex com vista panorâmica. Estrutura autossuficiente com captação solar e sistema de ancoragem inteligente.",
    specs: {
      area: "450m²",
      rooms: "4 Suítes",
      floors: "3 Andares",
      pool: "Deck com Piscina"
    },
  },
  {
    id: "09",
    slug: "floating-pool-deck",
    title: "Floating Pool Deck",
    subtitle: "Plataforma de Lazer Flutuante",
    category: "flutuantes",
    categoryLabel: "Leisure Platform",
    location: "Lago Privativo",
    year: "2025",
    image: floatingPoolDeck,
    gallery: [floatingPoolDeck, floatingHouseTriplex],
    features: ["Piscina Central", "Lounge Bar", "Deck Madeira", "Iluminação LED"],
    description: "Plataforma flutuante exclusiva para lazer com piscina central integrada ao lago. Perfeita para entretenimento e relaxamento.",
    specs: {
      area: "300m²",
      rooms: "Área de Lounge",
      floors: "1 Nível",
      pool: "Piscina Infinita"
    },
  },
  {
    id: "10",
    slug: "domos-aquaticos",
    title: "Domos Aquáticos Resort",
    subtitle: "Complexo Flutuante Geodésico",
    category: "flutuantes",
    categoryLabel: "Resort Flutuante",
    location: "Ilha Tropical",
    year: "2026",
    image: domosFlutuantes,
    gallery: [domosFlutuantes, domosPraia, domeEstruturaTecnica],
    features: ["5 Domos", "Passarela Deck", "Autossustentável", "Vista 360°"],
    description: "Complexo de domos geodésicos flutuantes conectados por passarelas de madeira. Estrutura em concreto com geometria icosaédrica para máxima resistência.",
    specs: {
      area: "1200m²",
      rooms: "10 Suítes",
      floors: "2 Níveis cada",
      pool: "Acesso ao Mar"
    },
  },


  // ========================================
  // CASAS MÓVEIS
  // ========================================
  {
    id: "11",
    slug: "nomad-fortress",
    title: "Nomad Fortress",
    subtitle: "Mansão Off-Road Autossustentável",
    category: "moveis",
    categoryLabel: "Design Terrestre",
    location: "Expedições",
    year: "2026",
    image: nomadFortressLand,
    gallery: [nomadFortressLand, mobileHouseBlueprint],
    features: ["Blindagem Leve", "Painéis Solares", "Tração 8x8", "Purificador Água"],
    description: "Uma obra-prima da engenharia móvel. Autossustentabilidade total com tração integral e conforto de hotel 5 estrelas em qualquer lugar do mundo.",
    specs: {
      area: "120m²",
      rooms: "2 Suítes",
      floors: "1 Nível",
      pool: "Jacuzzi Retrátil"
    },
  },
  {
    id: "12",
    slug: "mobile-house-futuristic",
    title: "Zenite Mobile Suite",
    subtitle: "Residência Aeroespacial Acoplável",
    category: "moveis",
    categoryLabel: "Smart Mobile",
    location: "Nômade",
    year: "2025",
    image: mobileHouseFuturistic,
    gallery: [mobileHouseFuturistic, mobileHouseBlueprint],
    features: ["Fibra de Carbono", "Asas Retráteis", "Vidro Inteligente", "IoT Satélite"],
    description: "Suíte móvel futurista construída com ligas aeroespaciais leves e fibra de carbono. Ideal para acoplamento dinâmico e relocação global sem impacto ecológico.",
    specs: {
      area: "80m²",
      rooms: "1 Suíte SPA",
      floors: "1 Nível",
      pool: "-"
    },
  },


  // ========================================
  // COMERCIAL - ESPAÇOS E EVENTOS
  // ========================================
  {
    id: "13",
    slug: "floating-dome-event",
    title: "Floating Dome Event",
    subtitle: "Espaço de Eventos Flutuante",
    category: "comercial",
    categoryLabel: "Event Space",
    location: "Lago Privativo",
    year: "2025",
    image: floatingDomeEvent,
    gallery: [floatingDomeEvent, floatingPoolDeck],
    features: ["Cúpula Geodésica", "Palco Profissional", "Bar Completo", "Iluminação Cênica"],
    description: "Espaço flutuante para eventos com cúpula geodésica transparente. Ideal para festas, shows e eventos corporativos exclusivos.",
    specs: {
      area: "500m²",
      rooms: "Capacidade 200 pessoas",
      floors: "1 Nível",
      pool: "Entorno Aquático"
    },
  },
  {
    id: "14",
    slug: "dome-greenhouse-spa",
    title: "Dome Greenhouse SPA",
    subtitle: "Espaço de Bem-Estar Geodésico",
    category: "comercial",
    categoryLabel: "Wellness Center",
    location: "Resort Premium",
    year: "2026",
    image: domeGreenhouseInterior,
    gallery: [domeGreenhouseInterior, domeBambooInterior, domeEstruturaTecnica],
    features: ["Estrutura Bambu", "Jardim Interno", "Iluminação Natural", "Spa Integrado"],
    description: "Domo geodésico de grandes dimensões com interior ajardinado. Estruturas piramidais em bambu para cultivo vertical e áreas de relaxamento.",
    specs: {
      area: "800m²",
      rooms: "Múltiplos Ambientes",
      floors: "1 Nível Alto",
      pool: "Piscina Natural"
    },
  },
  {
    id: "15",
    slug: "dome-bamboo-pavilion",
    title: "Dome Bamboo Pavilion",
    subtitle: "Pavilhão de Exposições",
    category: "comercial",
    categoryLabel: "Exhibition Space",
    location: "Centro de Convenções",
    year: "2026",
    image: domeBambooInterior,
    gallery: [domeBambooInterior, domeGreenhouseInterior, domeEstruturaTecnica],
    features: ["Treliça Geodésica", "Cultivo Vertical", "Mobiliário Orgânico", "Circulação Natural"],
    description: "Pavilhão de exposições sob cúpula geodésica com estruturas de bambu para displays. Ideal para feiras, galerias e eventos culturais sustentáveis.",
    specs: {
      area: "1500m²",
      rooms: "Área Aberta",
      floors: "1 Nível",
      pool: "-"
    },
  },
  {
    id: "16",
    slug: "domos-beach-resort",
    title: "Domos Beach Resort",
    subtitle: "Complexo de Cabanas Geodésicas",
    category: "comercial",
    categoryLabel: "Beach Resort",
    location: "Litoral Tropical",
    year: "2026",
    image: domosPraia,
    gallery: [domosPraia, domosFlutuantes, domeEstruturaTecnica],
    features: ["7 Unidades", "Concreto Armado", "Resistente Maresia", "Vista Mar"],
    description: "Complexo de cabanas geodésicas na praia, construídas em concreto estrutural resistente ao ambiente marinho. Cada unidade oferece vista panorâmica do oceano.",
    specs: {
      area: "1000m²",
      rooms: "7 Cabanas",
      floors: "1 Nível cada",
      pool: "Acesso à Praia"
    },
  },

  // ========================================
  // INDUSTRIAL - ESTRUTURAS TÉCNICAS
  // ========================================
  {
    id: "17",
    slug: "dome-structure-module",
    title: "Dome Structure Module",
    subtitle: "Módulo Estrutural 3m Icosaédrico",
    category: "industrial",
    categoryLabel: "Structural Engineering",
    location: "Fabricação Modular",
    year: "2025",
    image: domeEstruturaTecnica,
    gallery: [domeEstruturaTecnica, domosPraia, domosFlutuantes],
    features: ["3m x 3m x 3m", "Geometria Icosaédrica", "Concreto UHPC", "Montagem Rápida"],
    description: "Módulo estrutural geodésico padrão de 3 metros. Base para construção de domos residenciais, comerciais e industriais. Fabricação em concreto de ultra-alta performance.",
    specs: {
      area: "Módulo 3m",
      rooms: "Base Estrutural",
      floors: "Escalável",
      pool: "-"
    },
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  if (category === "todos") return projects;
  return projects.filter(project => project.category === category);
};
