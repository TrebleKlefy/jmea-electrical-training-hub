export interface Article {
  title: string;
  excerpt: string;
  url: string;
  category: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    title: "Understanding JPS Voltage Standards: 110V vs 220V in Jamaica",
    excerpt: "Learn the differences between voltage standards in Jamaica and how to work safely with both systems.",
    url: "/articles/jps-voltage-standards",
    category: "Standards",
    readTime: "8 min read"
  },
  {
    title: "Electrical Safety in Hurricane Season: Jamaican Guidelines",
    excerpt: "Essential safety protocols for electrical work during Jamaica's hurricane season and extreme weather conditions.",
    url: "/articles/hurricane-electrical-safety",
    category: "Safety",
    readTime: "12 min read"
  },
  {
    title: "Solar Energy Systems in Jamaica: Grid-Tied Solutions",
    excerpt: "Comprehensive guide to installing grid-tied solar systems in Jamaica, including JPS interconnection requirements.",
    url: "/articles/solar-grid-tied-jamaica",
    category: "Solar",
    readTime: "15 min read"
  },
  {
    title: "Jamaican Electrical Code Updates 2024",
    excerpt: "Latest updates to Jamaica's electrical code and what electricians need to know for compliance.",
    url: "/articles/jamaican-code-updates-2024",
    category: "Code Updates",
    readTime: "10 min read"
  },
  {
    title: "Wiring Standards for Jamaican Residential Buildings",
    excerpt: "Complete guide to residential electrical wiring standards and best practices in Jamaica.",
    url: "/articles/residential-wiring-standards",
    category: "Residential",
    readTime: "14 min read"
  },
  {
    title: "Commercial Electrical Installation in Jamaica",
    excerpt: "Professional insights on commercial electrical installations, permits, and JPS requirements.",
    url: "/articles/commercial-electrical-installation",
    category: "Commercial",
    readTime: "18 min read"
  }
];