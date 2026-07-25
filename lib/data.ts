import {
  PenTool,
  Layers,
  Globe,
  Code2,
  Cloud,
  AppWindow,
  Workflow,
  Blocks,
  Sparkles,
  Compass,
  Search,
  ClipboardList,
  Palette,
  Boxes,
  Hammer,
  Rocket,
  Gauge,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "FM Designs",
  tagline: "A studio for digital products worth trusting.",
  description:
    "FM Designs is a product and software studio. We partner with ambitious founders and organizations to design and engineer digital products, platforms, and brands built to last.",
  url: "https://fmdesigns.co.za",
  email: "hello.fmdesigns@gmail.com",
  phone: "+27 67 146 4628",
  whatsapp: "27671464628",
  location: "South Africa",
};

export const hero = {
  eyebrow: "Product & software studio",
  headline: "We build digital products worth trusting.",
  subhead:
    "FM Designs partners with ambitious founders and organizations to design, engineer, and ship software that feels inevitable — from first sketch to production.",
};

export const manifesto = [
  "We don't build websites.",
  "We build the products that carry",
  "a company's reputation.",
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    icon: PenTool,
    title: "Product Design",
    description:
      "We shape the product before a single line of code is written — flows, structure, and the decisions that make software feel obvious to use.",
    image: "/images/services/product-design.webp",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "Interfaces built on real usability thinking, not decoration. Every screen, state, and interaction earns its place.",
    image: "/images/services/product-design.webp",
  },
  {
    icon: Globe,
    title: "Website Design",
    description:
      "Marketing sites and brand homes that load fast, read clearly, and hold up next to any competitor in the room.",
    image: "/images/services/brand-strategy.webp",
  },
  {
    icon: Compass,
    title: "Branding & Digital Strategy",
    description:
      "Identity, positioning, and a digital roadmap that ties every design decision back to a business outcome.",
    image: "/images/services/brand-strategy.webp",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end engineering across frontend, backend, and infrastructure — built to scale well past launch day.",
    image: "/images/services/software-engineering.webp",
  },
  {
    icon: AppWindow,
    title: "Web Applications",
    description:
      "Complex, data-heavy interfaces — dashboards, internal tools, portals — engineered for the people who use them all day.",
    image: "/images/services/software-engineering.webp",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description:
      "Multi-tenant platforms, billing, permissions, and the unglamorous plumbing that makes a subscription product work.",
    image: "/images/services/ai-solutions.webp",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Solutions",
    description:
      "Practical AI features — search, automation, generation — integrated where they measurably improve the product.",
    image: "/images/services/ai-solutions.webp",
  },
  {
    icon: Workflow,
    title: "Business Systems",
    description:
      "Custom internal tools and integrations that replace spreadsheets and manual process with something that scales.",
    image: "/images/services/business-systems.webp",
  },
  {
    icon: Blocks,
    title: "WordPress Solutions",
    description:
      "Enterprise-grade WordPress builds — custom themes, headless setups, and performance that doesn't feel like WordPress.",
    image: "/images/services/business-systems.webp",
  },
];

export type Project = {
  id: number;
  slug: string;
  title: string;
  client: string;
  summary: string;
  overview: string;
  processNote: string;
  outcomes: { label: string; value: string }[];
  image: string;
  cover?: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: "WordPress" | "Full Stack" | "Frontend";
  color: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "sgs",
    title: "SGS",
    client: "Corporate & Professional Services",
    summary:
      "A corporate website that strengthens the company's digital presence, showcasing its services, expertise, and brand through a clean, responsive interface.",
    overview:
      "SGS needed a digital presence that matched the calibre of its consulting work. We rebuilt the site from the ground up on a modern React and TypeScript foundation, restructuring the content around what prospective clients actually search for rather than an internal org chart, and designing a component system the internal team could extend without touching code.",
    processNote:
      "A four-week engagement: a content and IA audit, a componentised design system in Figma, then a Vite-powered build shipped in weekly increments.",
    outcomes: [
      { label: "Pages rebuilt", value: "12" },
      { label: "Lighthouse performance", value: "97" },
      { label: "Build time", value: "4 weeks" },
    ],
    image: "/sgs.png",
    cover: "/sgs.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://mmg-group-website.vercel.app/",
    githubUrl: "",
    category: "Frontend",
    color: "#c2571c",
    featured: true,
  },
  {
    id: 2,
    slug: "limp-automotive",
    title: "LIMP Automotive",
    client: "Automotive Services",
    summary:
      "A modern automotive website showcasing vehicle services, maintenance solutions, and company expertise, with a responsive design and enquiry flow.",
    overview:
      "A regional automotive service centre needed a booking-first web presence that made its service catalogue easy to browse from a phone in a parking lot. We designed a service-led information architecture and a single-screen enquiry flow that routes directly to the front desk.",
    processNote:
      "Built solo end-to-end: discovery call, service catalogue mapping, then a two-week React build with an enquiry form as the primary conversion path.",
    outcomes: [
      { label: "Service pages", value: "8" },
      { label: "Enquiry flow", value: "1 screen" },
      { label: "Mobile-first build", value: "100%" },
    ],
    image: "/Limp.png",
    cover: "/Limp.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://limp-automotive-service-centre.vercel.app/",
    githubUrl: "",
    category: "Frontend",
    color: "#8c5a3c",
    featured: true,
  },
  {
    id: 3,
    slug: "coastal-beach-resort",
    title: "Coastal Beach Resort",
    client: "Hospitality",
    summary:
      "A full-stack resort platform showcasing accommodations, bookings, dining, and leisure experiences with an elegant, seamless interface.",
    overview:
      "Coastal Beach Resort needed more than a brochure site — it needed a working reservations backbone. We built a full MERN-stack platform: a public-facing experience for browsing rooms and amenities, backed by an Express/MongoDB API handling enquiries, availability, and content the resort team manages themselves.",
    processNote:
      "Delivered in two phases — a Node/Express/MongoDB API first, then a React front end designed around real guest photography and a distraction-free booking path.",
    outcomes: [
      { label: "Full-stack build", value: "MERN" },
      { label: "Room & amenity pages", value: "15+" },
      { label: "Self-managed content", value: "Yes" },
    ],
    image: "/cbr.png",
    cover: "/cbr.png",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://www.coastalbeach.co.za/",
    githubUrl: "https://github.com/erisndev/Coastal-Beach-Resort",
    category: "Full Stack",
    color: "#4b6b63",
    featured: true,
  },
  {
    id: 4,
    slug: "amantungwa",
    title: "Amantungwa",
    client: "Non-Profit / Community Organization",
    summary:
      "A professional WordPress website highlighting the organization's mission, services, and community impact with an easy-to-manage layout.",
    overview:
      "A community organization needed a site its own staff could update without developer support. We built a custom WordPress theme with a structured editor experience, so mission updates, programme pages, and impact stories can be published without ever touching code.",
    processNote:
      "Custom theme built on core WordPress APIs — no page-builder bloat — with an editorial workflow the internal team was trained on at handover.",
    outcomes: [
      { label: "Self-editable pages", value: "100%" },
      { label: "Custom theme", value: "From scratch" },
      { label: "Training sessions", value: "2" },
    ],
    image: "/aman.png",
    cover: "/aman.png",
    technologies: ["WordPress", "PHP", "MySQL", "CSS"],
    liveUrl: "https://amantungwa.co.za/",
    githubUrl: "",
    category: "WordPress",
    color: "#a66b3d",
    featured: true,
  },
  {
    id: 5,
    slug: "joes-plumbing",
    title: "Joe's Plumbing",
    client: "Local Trade Services",
    summary:
      "A service website with clear listings, contact information, and a clean design built to build trust and drive customer enquiries.",
    overview:
      "A trades business competing against listings-site noise needed a site that felt more credible than a Facebook page. We kept the build small and fast on purpose: one clear service list, transparent contact paths, and nothing to slow a phone call down.",
    processNote:
      "A one-week sprint: a single-page structure, service list, and a call-first layout designed around mobile search intent.",
    outcomes: [
      { label: "Build time", value: "1 week" },
      { label: "Load time (4G)", value: "< 1.5s" },
      { label: "Primary CTA", value: "Direct call" },
    ],
    image: "/joe.png",
    technologies: ["React", "CSS", "JavaScript", "Vercel"],
    liveUrl: "https://joe-s-plumbing.vercel.app/",
    githubUrl: "",
    category: "Frontend",
    color: "#c2571c",
  },
  {
    id: 6,
    slug: "knm-bursary-system",
    title: "KNM Bursary System",
    client: "Education / Public Sector",
    summary:
      "A bursary management platform featuring student applications, profile management, and a responsive administrator dashboard.",
    overview:
      "A bursary programme was running its applications through email and spreadsheets. We built a full application-management system: student-facing forms with document upload, and an internal dashboard for reviewing, filtering, and tracking applicants through the pipeline.",
    processNote:
      "A business-systems build — requirements gathered directly from the administrative team, then a MERN-stack application shipped and iterated against real application cycles.",
    outcomes: [
      { label: "Manual process replaced", value: "Spreadsheets" },
      { label: "Admin dashboard", value: "Custom-built" },
      { label: "Application pipeline", value: "End-to-end" },
    ],
    image: "/knm.png",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://kn-m-bursary-management-system.vercel.app/",
    githubUrl: "https://github.com/erisndev/KnM-Bursary-Management-System",
    category: "Full Stack",
    color: "#4b6b63",
  },
  {
    id: 7,
    slug: "cvlens",
    title: "CVLens",
    client: "AI-Powered Product",
    summary:
      "A full-stack AI-powered CV analyzer that helps users evaluate and improve their resumes with intelligent feedback and a modern interface.",
    overview:
      "CVLens is a product build from a blank page: an AI-assisted resume analyzer that parses an uploaded CV, scores it against role-specific criteria, and returns structured, actionable feedback. The interesting engineering problem was making an LLM's output feel deterministic and trustworthy in the UI, not a wall of generated text.",
    processNote:
      "Designed and built as a product, not a client brief — component architecture, state management, and the AI feedback pipeline were all built in-house.",
    outcomes: [
      { label: "AI feedback pipeline", value: "Custom-built" },
      { label: "State management", value: "Zustand" },
      { label: "Client-side parsing", value: "Puter.js" },
    ],
    image: "/cvlens.png",
    cover: "/cvlens.png",
    technologies: ["React", "Tailwind CSS", "Zustand", "Puter.js"],
    liveUrl: "https://cvlens-ai-cv-analyzer.vercel.app/",
    githubUrl: "https://github.com/FerdinandMorena/ai-cv-analyzer",
    category: "Full Stack",
    color: "#c2571c",
    featured: true,
  },
  {
    id: 8,
    slug: "silulo-lms",
    title: "Silulo LMS",
    client: "Education",
    summary:
      "A learning management system providing course creation, student enrollment, and progress tracking for an educational institution.",
    overview:
      "An educational institution needed a proper LMS without the overhead of building one from scratch. We implemented and customized a Tutor LMS deployment on WordPress — course structures, enrollment flows, and progress tracking — configured around how the institution actually runs its programmes.",
    processNote:
      "Configuration-led delivery: information architecture and course-flow mapping first, then a themed Tutor LMS build with custom enrollment logic.",
    outcomes: [
      { label: "Course & enrollment flows", value: "Custom-configured" },
      { label: "Progress tracking", value: "Built-in" },
      { label: "Platform", value: "WordPress + Tutor LMS" },
    ],
    image: "/silulo.png",
    cover: "/images/projects/silulo-lms-cover.webp",
    technologies: ["WordPress", "Tutor LMS", "PHP", "MySQL", "CSS"],
    liveUrl: "https://silulocollege.erisngraduate.com/",
    githubUrl: "",
    category: "WordPress",
    color: "#8c5a3c",
  },
  {
    id: 9,
    slug: "portfolio-website",
    title: "Portfolio Website",
    client: "Personal Brand",
    summary:
      "A personal portfolio and case-study site for a full-stack engineer and product designer, built to show process and craft rather than a flat list of links.",
    overview:
      "The brief was self-directed: build a portfolio that reads like a small product studio's site rather than a résumé with a hero image. We designed an editorial, dark-toned layout structured around About, Skills, Work, and Experience, with a single case-study flow per project so each piece of work gets room to explain its own decisions.",
    processNote:
      "Designed and built solo, end-to-end — visual system through deployment — as a living case study that gets updated alongside new work rather than shipped once and left alone.",
    outcomes: [
      { label: "Framework", value: "Next.js" },
      { label: "Design system", value: "Custom-built" },
      { label: "Deployment", value: "Vercel" },
    ],
    image: "/portfolio.png",
    cover: "/portfolio.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ferdinandmorena-portfolio.vercel.app/",
    githubUrl: "",
    category: "Frontend",
    color: "#8c5a3c",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "We learn the business, the audience, and what the product actually needs to achieve before anything is designed.",
    icon: Compass,
    image: "/images/process/01-discover.webp",
  },
  {
    title: "Research",
    description:
      "Competitors, users, and technical constraints get mapped so decisions are made on evidence, not assumption.",
    icon: Search,
    image: "/images/process/02-research.webp",
  },
  {
    title: "Strategy",
    description:
      "Scope, architecture, and success metrics are agreed on in writing before a single screen is designed.",
    icon: ClipboardList,
    image: "/images/process/03-strategy.webp",
  },
  {
    title: "Design",
    description:
      "Wireframes become high-fidelity, production-ready screens — reviewed with you at every stage, not just at the end.",
    icon: Palette,
    image: "/images/process/04-design.webp",
  },
  {
    title: "Prototype",
    description:
      "Key flows are proven interactively before engineering begins, so the riskiest assumptions are tested early.",
    icon: Boxes,
    image: "/images/process/05-prototype.webp",
  },
  {
    title: "Develop",
    description:
      "Clean, modular code built sprint by sprint, with progress visible and demoable the whole way through.",
    icon: Hammer,
    image: "/images/process/06-develop.webp",
  },
  {
    title: "Launch",
    description:
      "The product ships to production with monitoring, analytics, and a rollback plan already in place.",
    icon: Rocket,
    image: "/images/process/07-launch.webp",
  },
  {
    title: "Optimize",
    description:
      "Post-launch, we watch real usage and performance data and keep refining — the relationship doesn't end at launch day.",
    icon: Gauge,
    image: "/images/process/08-optimize.webp",
  },
];

export const whyChooseUs = [
  {
    title: "Product thinking first",
    description:
      "Every decision is grounded in how the product will actually be used, not how it looks in a mockup.",
  },
  {
    title: "Full-stack capability",
    description:
      "One team across design, engineering, and infrastructure — no handoffs lost in translation.",
  },
  {
    title: "Transparent process",
    description:
      "Fixed check-ins and visible progress from the first sprint, never a black box until launch day.",
  },
  {
    title: "Built to scale",
    description:
      "Architecture decisions are made for the product's second year, not just its first release.",
  },
  {
    title: "Long-term partnership",
    description:
      "Support and iteration continue after launch — we stay close to what we ship.",
  },
];

export const stats = [
  { value: 20, suffix: "+", label: "Projects shipped" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 4, suffix: "+", label: "Years in practice" },
  { value: 24, suffix: "/7", label: "Support window" },
];

export const testimonials = [
  {
    name: "Thandiwe M.",
    role: "Founder, Ngunikazi Concepts",
    quote:
      "The team rebuilt our site around what our students actually needed to find, and applications went up within the first month.",
    rating: 5,
  },
  {
    name: "Sipho R.",
    role: "Owner, local retail business",
    quote:
      "Finally a website that loads fast and looks like it belongs to a real, established business.",
    rating: 5,
  },
  {
    name: "Amanda K.",
    role: "Operations Lead",
    quote:
      "Communication was clear from the first call to launch day. No surprises, no scope creep.",
    rating: 5,
  },
  {
    name: "David N.",
    role: "Small business owner",
    quote:
      "Every change request was handled quickly and the finished product feels genuinely premium.",
    rating: 5,
  },
];

export const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "WordPress",
  "Tailwind CSS",
  "GSAP",
  "REST & GraphQL APIs",
  "Figma",
  "Docker",
  "Git",
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = {
  quick: [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};
