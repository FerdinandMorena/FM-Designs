import {
  Globe,
  LayoutTemplate,
  Briefcase,
  ShoppingCart,
  RefreshCw,
  Search,
  MapPin,
  Palette,
  Wrench,
  Server,
  Link2,
  UserSquare2,
  Compass,
  ClipboardList,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "FM Designs",
  tagline: "We Build Websites That Grow Businesses.",
  description:
    "FM Designs is a web development studio building modern, high-converting websites for businesses that want to look as good online as they do in person.",
  url: "https://fmdesigns.co.za",
  email: "hello@fmdesigns.co.za",
  phone: "+27 60 000 0000",
  whatsapp: "27600000000",
  location: "Polokwane, Limpopo, South Africa",
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom-built, fast-loading websites engineered from scratch around what your business actually sells.",
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    description:
      "Professional sites that make a small business feel established, trustworthy, and easy to book or call.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description:
      "Single-purpose, conversion-focused pages built to turn ad traffic into leads without the distractions.",
  },
  {
    icon: UserSquare2,
    title: "Portfolio Websites",
    description:
      "Clean, image-first sites that let creative and professional work speak for itself.",
  },
  {
    icon: Server,
    title: "Corporate Websites",
    description:
      "Multi-department, multi-page sites built for organisations that need structure as much as style.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Stores",
    description:
      "Storefronts with real checkout flows, inventory logic, and product pages that are built to sell.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "A full rebuild of an outdated site — same business, modern engine, better numbers.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Technical and on-page SEO baked in from the first commit, not bolted on afterwards.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Setup",
    description:
      "Get found on Google Maps and local search with a profile that's fully verified and optimised.",
  },
  {
    icon: Palette,
    title: "Logo Design",
    description:
      "A mark that holds up on a favicon, a business card, and a billboard.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Colour, type, and voice defined once so every touchpoint feels like the same business.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Ongoing updates, backups, and monitoring so the site keeps running while you run the business.",
  },
  {
    icon: Server,
    title: "Hosting Assistance",
    description:
      "Reliable hosting set up and managed correctly the first time, no guesswork.",
  },
  {
    icon: Link2,
    title: "Domain Setup",
    description:
      "Domain registration, DNS, and email routing configured and explained in plain language.",
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: "WordPress" | "Full Stack" | "Frontend";
  color: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "SGS",
    description:
      "A professional corporate website developed to strengthen the company's digital presence, showcasing its services, expertise, and brand through a clean, responsive, and modern interface.",
    image: "/sgs.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://mmg-group-website.vercel.app/",
    githubUrl: "",
    category: "Frontend",
    color: "#3b82f6",
  },
  {
    id: 2,
    title: "LIMP Automotive",
    description:
      "A modern automotive website built to showcase vehicle services, maintenance solutions, and company expertise. Features a responsive design, service catalogue, enquiry forms, and a professional user experience.",
    image: "/Limp.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://limp-automotive-service-centre.vercel.app/",
    githubUrl: "",
    category: "Frontend",
    color: "#ef4444",
  },
  {
    id: 3,
    title: "Coastal Beach Resort",
    description:
      "A modern and responsive resort platform showcasing accommodations, bookings, dining, and leisure experiences with an elegant interface and seamless user experience.",
    image: "/cbr.png",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://www.coastalbeach.co.za/",
    githubUrl: "https://github.com/erisndev/Coastal-Beach-Resort",
    category: "Full Stack",
    color: "#06b6d4",
  },
  {
    id: 4,
    title: "Amantungwa",
    description:
      "A professional WordPress website for Amantungwa, featuring an elegant design that highlights the organization's mission, services, and community impact. Built with a user-friendly layout, responsive design, and easy content management.",
    image: "/aman.png",
    technologies: ["WordPress", "PHP", "MySQL", "CSS"],
    liveUrl: "https://amantungwa.co.za/",
    githubUrl: "",
    category: "WordPress",
    color: "#f97316",
  },
  {
    id: 5,
    title: "Joe's Plumbing",
    description:
      "A professional service website for a plumbing business, featuring service listings, contact information, and a clean design that builds trust and drives customer inquiries.",
    image: "/joe.png",
    technologies: ["React", "CSS", "JavaScript", "Vercel"],
    liveUrl: "https://joe-s-plumbing.vercel.app/",
    githubUrl: "",
    category: "Frontend",
    color: "#fbbf24",
  },
  {
    id: 6,
    title: "KNM Bursary System",
    description:
      "A bursary management system featuring student applications, profile management, and a responsive dashboard interface for administrators.",
    image: "/knm.png",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS"],
    liveUrl: "https://kn-m-bursary-management-system.vercel.app/",
    githubUrl: "https://github.com/erisndev/KnM-Bursary-Management-System",
    category: "Full Stack",
    color: "#34d399",
  },
  {
    id: 7,
    title: "CVLens AI CV Analyzer",
    description:
      "A full-stack AI-powered CV analyzer that helps users evaluate and improve their resumes with intelligent feedback, modern UI, and seamless user experience.",
    image: "/cvlens.png",
    technologies: ["React", "Tailwind CSS", "Zustand", "Puter.js"],
    liveUrl: "https://cvlens-ai-cv-analyzer.vercel.app/",
    githubUrl: "https://github.com/FerdinandMorena/ai-cv-analyzer",
    category: "Full Stack",
    color: "#06b6d4",
  },

  {
    id: 8,
    title: "Silulo LMS",
    description:
      "A learning management system providing course creation, student enrollment, and progress tracking features for an educational institution.",
    image: "/silulo.png",
    technologies: ["WordPress", "Tutor LMS", "PHP", "MySQL", "CSS"],
    liveUrl: "https://silulocollege.erisngraduate.com/",
    githubUrl: "",
    category: "WordPress",
    color: "#8b5cf6",
  },
];

export const processSteps: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Discovery",
    description:
      "We learn the business, the audience, and what the site actually needs to achieve.",
    icon: Compass,
  },
  {
    title: "Research",
    description:
      "Competitors, market position, and technical constraints get mapped before any design starts.",
    icon: Search,
  },
  {
    title: "Planning",
    description:
      "Sitemap, content structure, and a project timeline are agreed on in writing.",
    icon: ClipboardList,
  },
  {
    title: "UI/UX Design",
    description:
      "Wireframes become high-fidelity screens, reviewed with you before development begins.",
    icon: PenTool,
  },
  {
    title: "Development",
    description:
      "Clean, modular code built sprint by sprint, with progress visible the whole way through.",
    icon: Code2,
  },
  {
    title: "Testing",
    description:
      "Cross-browser, cross-device, and performance testing before anything ships.",
    icon: FlaskConical,
  },
  {
    title: "Deployment",
    description:
      "The site goes live on production hosting with monitoring switched on.",
    icon: Rocket,
  },
  {
    title: "Support",
    description:
      "Post-launch updates and fixes so the site keeps working as the business grows.",
    icon: LifeBuoy,
  },
];

export const whyChooseUs = [
  {
    title: "Fast Delivery",
    description: "Clear sprints and deadlines that are actually kept.",
  },
  {
    title: "Responsive Design",
    description: "Every screen size tested, not just assumed.",
  },
  {
    title: "SEO Optimized",
    description: "Built to be found, not just built to look good.",
  },
  {
    title: "Modern UI",
    description: "Interfaces that feel current, not templated.",
  },
  {
    title: "Secure Websites",
    description: "Sensible defaults for forms, data, and hosting.",
  },
  {
    title: "Lightning Fast",
    description: "Performance budgets enforced from the first commit.",
  },
  {
    title: "Affordable Solutions",
    description: "Honest pricing with no inflated retainer surprises.",
  },
  {
    title: "Reliable Support",
    description: "A real person to call when something needs fixing.",
  },
  {
    title: "Conversion Focused",
    description: "Every page designed around a specific next action.",
  },
  {
    title: "Quality Code",
    description: "Readable, documented, and built to be handed over cleanly.",
  },
];

export const stats = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

export type PricingTier = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter Website",
    price: "From R2,500",
    description:
      "A focused single or multi-page site to get a business online properly.",
    features: [
      "Up to 5 pages",
      "Mobile responsive build",
      "Contact form",
      "Basic on-page SEO",
      "2 rounds of revisions",
    ],
    cta: "Get Started",
  },
  {
    name: "Business Website",
    price: "Request a Quote",
    description:
      "A larger site for a business that needs more pages, more structure, and more polish.",
    features: [
      "Custom page count",
      "Animation & micro-interactions",
      "CMS for easy content updates",
      "Advanced SEO setup",
      "Priority support window",
    ],
    cta: "Request a Quote",
    highlighted: true,
  },
  {
    name: "E-commerce Website",
    price: "Custom Quote",
    description:
      "A full storefront built around your catalogue, payments, and fulfilment process.",
    features: [
      "Product & inventory setup",
      "Secure checkout integration",
      "Order & customer management",
      "Performance-tuned at scale",
    ],
    cta: "Get a Custom Quote",
  },
  {
    name: "Enterprise",
    price: "Let's Talk",
    description:
      "Multi-department platforms, integrations, and ongoing dedicated engineering.",
    features: [
      "Dedicated project lead",
      "Custom integrations & APIs",
      "SLA-backed support",
      "Scalable architecture review",
    ],
    cta: "Let's Talk",
  },
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
      "Every change request was handled quickly and the animations make the site feel premium.",
    rating: 5,
  },
];

export const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "WordPress",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "REST APIs",
  "Git",
  "GitHub",
  "Figma",
  "Docker",
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = {
  quick: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
};
