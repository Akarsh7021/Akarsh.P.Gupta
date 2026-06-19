import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./media/ImageWithFallback";
import { useNavigate } from "react-router";

import planetsBeyondImage1 from "../../assets/f07a41f90e0b8d15ed0f25d36656452cffcb95a6.png";
import planetsBeyondImage2 from "../../assets/fa61859b79db9d4a2b19b15dcb45e430f937e63e.png";
import libraryImage1 from "../../assets/f56ac74cfab072250be943cf62dd4a8768d6a005.png";
import libraryImage2 from "../../assets/0be647f49016c24df355bc7f4d57e9e95e571254.png";
import cloudMigrationImage1 from "../../assets/9fd0fd230a1bfef14c94d628becb3c70d481a462.png";
import cloudMigrationImage2 from "../../assets/e991afe70d6a1d9e9cc298a694b9bbf8794beadc.png";
import databaseSystemsHover from "../../assets/ef84ba11850e26131022bb74e12231f6610731fe.png";
import employeeTrackingCard from "@/imports/Screenshot_2026-06-17_at_5.29.25_PM.png";
import employeeTrackingHover from "@/imports/Screenshot_2026-06-17_at_4.20.35_PM.png";
import saginCard from "@/imports/Screenshot_2026-05-21_at_5.10.46_PM.png";
import saginHover from "@/imports/Screenshot_2026-05-21_at_5.13.21_PM.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  hookDescription: string;
  image: string;
  hoverImage?: string;
  technologies: string[];
  status: "completed" | "in-development";
  category: "personal" | "coursework";
  githubUrl?: string;
  liveUrl?: string;
  detailsUrl?: string;
}

// ── Projects Data ─────────────────────────────────────────────────────────────
// Featured order: Library (1st) → SAGIN (2nd). Both must be "completed".
// Remaining completed + in-dev appear in "Other Projects".

const projects: Project[] = [
  // ── FEATURED ─────────────────────────────────────────────────────────────
  {
    id: "1",
    title: "Library Management System",
    description: "A comprehensive web-based system integrating front-end, back-end, and database design. Features include book catalog, user management, check-in/check-out system, and search functionality. Built as part of System Development coursework.",
    hookDescription: "Built a full-stack library system from the ground up — books, users, checkouts, and a live database, all wired together.",
    image: libraryImage1,
    hoverImage: libraryImage2,
    technologies: ["HTML", "CSS", "JavaScript", "PostgreSQL", "PgAdmin"],
    status: "completed",
    category: "coursework",
    githubUrl: "https://github.com/Akarsh7021/Library-Management-System-Springboot",
    detailsUrl: "/projects/library-management"
  },
  {
    id: "8",
    title: "SiteLedger: Business Operations Management System",
    description: "A secure local business management system built for NH Hygiene Services Ltd. Centralises employees, payroll, customers, job sites, invoicing, and analytics in one full-stack Spring Boot application backed by SQLite.",
    hookDescription: "Replaced a real business's spreadsheets with a full operations platform — payroll, invoicing, job sites, and a live profit dashboard.",
    image: employeeTrackingCard,
    hoverImage: employeeTrackingHover,
    technologies: ["Java", "Spring Boot", "Thymeleaf", "SQLite", "Spring Security"],
    status: "completed",
    category: "personal",
    githubUrl: "https://github.com/Akarsh7021",
    detailsUrl: "/projects/employee-tracking"
  },
  // ── OTHER COMPLETED ───────────────────────────────────────────────────────
  {
    id: "5",
    title: "Cloud File Server Migration to Microsoft 365 & SharePoint Online",
    description: "Demonstrates the migration of traditional on-premises file server environment to secure cloud-based infrastructure using Microsoft 365 and SharePoint Online.",
    hookDescription: "Moved an entire organisation off local file servers to Microsoft 365 — identity system, permissions, and security tested end-to-end.",
    image: cloudMigrationImage1,
    hoverImage: cloudMigrationImage2,
    technologies: ["Microsoft 365", "SharePoint Online", "Cloud Administration", "RBAC", "Identity Management"],
    status: "completed",
    category: "personal",
    detailsUrl: "/projects/cloud-migration"
  },
  {
    id: "2",
    title: "Planets Beyond (Web Development)",
    description: "Created a responsive multi-page website in a 4-member group project, achieving a B+ grade. Focused on modern web design principles, responsive layouts, and cross-browser compatibility.",
    hookDescription: "A B+ group project that brought the solar system to life on the web with smooth responsive layouts and cross-browser polish.",
    image: planetsBeyondImage1,
    hoverImage: planetsBeyondImage2,
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    status: "completed",
    category: "coursework",
    githubUrl: "https://github.com/Akarsh7021/Akarsh7021.github.io-PlanetsBeyond",
    detailsUrl: "/projects/planets-beyond"
  },
  {
    id: "7",
    title: "AI-Empowered Space-Air-Ground Integrated Networks (SAGIN)",
    description: "Group research project for INFO 3180 - Wireless Networks course with a 5-member team. Developed a conference-style research paper in AAAI 2026 format exploring AI integration across satellite, aerial, and ground network layers for next-generation wireless infrastructure.",
    hookDescription: "A 5-member team research paper on using AI to unify satellites, drones, and ground towers into one seamless wireless network.",
    image: saginCard,
    hoverImage: saginHover,
    technologies: ["AI/ML", "Wireless Networks", "Research Paper", "AAAI Format", "Markdown"],
    status: "completed",
    category: "coursework",
    githubUrl: "https://github.com/Akarsh7021/Research-Article-on-SAGIN",
    detailsUrl: "/projects/sagin"
  },
  {
    id: "3",
    title: "Database Systems Project — Business Scenario",
    description: "Developed a relational database for a business scenario with a team of 3, earning an A+ grade. Implemented complex queries, stored procedures, and database optimization techniques.",
    hookDescription: "An A+ team database project — real business logic, optimised queries, and stored procedures that actually run fast.",
    image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMGRlc2lnbiUyMHNlcnZlcnxlbnwxfHx8fDE3NzIwNTM4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: databaseSystemsHover,
    technologies: ["SQL", "Database Design", "ERD", "MySQL"],
    status: "completed",
    category: "coursework",
    detailsUrl: "/projects/database-systems"
  },
  {
    id: "4",
    title: "System Analysis & Design Project",
    description: "Led a 4-member team to design workflow models and documentation, earning an A+ grade. Focused on system analysis, user requirements gathering, process modeling, and comprehensive technical documentation.",
    hookDescription: "Led a 4-person team to document and model a complete software system — every process mapped, every requirement captured. Earned A+.",
    image: "https://images.unsplash.com/photo-1730578725695-714b52eed8f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBhbmFseXNpcyUyMGRlc2lnbiUyMHdvcmtmbG93fGVufDF8fHx8MTc3MjA1NDY5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1767871495063-82d150582a23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwZG9jdW1lbnRhdGlvbiUyMHRlYW18ZW58MXx8fHwxNzcyMDU0Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["System Analysis", "Documentation", "UML Diagrams", "Team Leadership"],
    status: "completed",
    category: "coursework",
  },

  // ── IN DEVELOPMENT ────────────────────────────────────────────────────────
  {
    id: "6",
    title: "Backup & Disaster Recovery",
    description: "Designing and implementing a robust backup and disaster recovery solution for enterprise environments. Focus on data protection, recovery time objectives (RTO), and business continuity planning.",
    hookDescription: "Designing enterprise-grade data protection — because when systems fail, how fast you recover is everything.",
    image: "https://images.unsplash.com/photo-1641648544039-969a5d6d5a02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlY292ZXJ5JTIwc3lzdGVtfGVufDF8fHx8MTc3MjA1MzkwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    hoverImage: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMGRlc2lnbiUyMHNlcnZlcnxlbnwxfHx8fDE3NzIwNTM4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["Backup Solutions", "Disaster Recovery", "Data Protection", "RTO/RPO"],
    status: "in-development",
    category: "personal",
  }
];

// ── Badge Components ──────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: Project['category'] }) {
  return (
    <span
      className="px-2 py-0.5 rounded text-white"
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.68rem',
        fontWeight: '500',
        backgroundColor: category === 'personal' ? '#2563EB' : '#D97706',
        whiteSpace: 'nowrap'
      }}
    >
      {category === 'personal' ? 'Personal' : 'Coursework'}
    </span>
  );
}

function WIBBadge() {
  return (
    <span
      className="px-2 py-0.5 rounded text-white"
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.68rem',
        fontWeight: '700',
        backgroundColor: '#EA580C',
        whiteSpace: 'nowrap',
        letterSpacing: '0.04em'
      }}
    >
      WIB
    </span>
  );
}

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-5 mb-10">
      <div style={{ flex: 1, height: '1px', backgroundColor: '#d0d0d0' }} />
      <h2
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#111111',
          whiteSpace: 'nowrap'
        }}
      >
        {title}
      </h2>
      <div style={{ flex: 1, height: '1px', backgroundColor: '#d0d0d0' }} />
    </div>
  );
}

function TechList({ technologies }: { technologies: string[] }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.78rem',
        fontWeight: '300',
        color: '#888888',
        letterSpacing: '0.02em'
      }}
    >
      {technologies.join('  ·  ')}
    </p>
  );
}

// ── Featured Card ─────────────────────────────────────────────────────────────
// Fixed-height card so the image always fills flush with no gaps.

const FEATURED_HEIGHT = 320;

function FeaturedCard({ project, reverse }: { project: Project; reverse?: boolean }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const imgSrc = hovered && project.hoverImage ? project.hoverImage : project.image;

  return (
    <div
      className="flex rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e8e8e8',
        flexDirection: reverse ? 'row-reverse' : 'row',
        cursor: project.detailsUrl ? 'pointer' : 'default',
        height: `${FEATURED_HEIGHT}px`
      }}
      onClick={() => project.detailsUrl && navigate(project.detailsUrl)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image — fills full height, no gaps */}
      <div className="relative flex-shrink-0" style={{ width: '44%', height: '100%' }}>
        <ImageWithFallback
          src={imgSrc}
          alt={project.title}
          className="w-full h-full transition-all duration-500"
          style={{ objectFit: 'cover', display: 'block' }}
        />
        {/* Badges at bottom-right of image */}
        <div className="absolute bottom-3 right-3 flex flex-col gap-1 items-end">
          {project.status === 'in-development' && <WIBBadge />}
          <CategoryBadge category={project.category} />
        </div>
      </div>

      {/* Content — vertically centred */}
      <div
        className="flex flex-col justify-center p-8 overflow-hidden"
        style={{ flex: 1 }}
      >
        <h3
          className="mb-3"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#111111',
            lineHeight: '1.3'
          }}
        >
          {project.title}
        </h3>
        <div style={{ height: '1px', backgroundColor: '#eeeeee', marginBottom: '12px' }} />
        <p
          className="mb-4"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            fontWeight: '300',
            color: '#555555',
            lineHeight: '1.7',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {project.description}
        </p>
        <TechList technologies={project.technologies} />
        <div className="flex items-center gap-3 mt-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.stopPropagation(); if (project.githubUrl === '#') e.preventDefault(); }}
              style={{ color: project.githubUrl === '#' ? '#cccccc' : '#444444' }}
              className="hover:opacity-60 transition-opacity"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ color: '#444444' }}
              className="hover:opacity-60 transition-opacity"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.detailsUrl && (
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: '300', color: '#aaaaaa' }}>
              View Details →
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Compact Card ──────────────────────────────────────────────────────────────
// 200px tall, 180px image, wider container gives ~380px+ for text.

const COMPACT_HEIGHT = 200;
const COMPACT_IMG_WIDTH = 180;

function CompactCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  const imgSrc = hovered && project.hoverImage ? project.hoverImage : project.image;

  return (
    <div
      className="flex rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e8e8e8',
        cursor: project.detailsUrl ? 'pointer' : 'default',
        height: `${COMPACT_HEIGHT}px`
      }}
      onClick={() => project.detailsUrl && navigate(project.detailsUrl)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail — fixed width, full card height, object-cover */}
      <div className="relative flex-shrink-0" style={{ width: `${COMPACT_IMG_WIDTH}px`, height: '100%' }}>
        <ImageWithFallback
          src={imgSrc}
          alt={project.title}
          className="w-full h-full transition-all duration-500"
          style={{ objectFit: 'cover', display: 'block' }}
        />
        {/* Badges at bottom-right of image */}
        <div className="absolute bottom-2 right-2 flex flex-col gap-1 items-end">
          {project.status === 'in-development' && <WIBBadge />}
          <CategoryBadge category={project.category} />
        </div>
      </div>

      {/* Content — left-padded, vertically centred */}
      <div
        className="flex flex-col justify-center overflow-hidden"
        style={{ flex: 1, minWidth: 0, padding: '16px 20px' }}
      >
        <h3
          className="mb-2"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1rem',
            fontWeight: '700',
            color: '#111111',
            lineHeight: '1.35',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {project.title}
        </h3>

        {/* Hook — short punchy line to draw the reader in */}
        <p
          className="mb-3"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            fontWeight: '300',
            color: '#555555',
            lineHeight: '1.6',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {project.hookDescription}
        </p>

        <div style={{ height: '1px', backgroundColor: '#eeeeee', marginBottom: '10px' }} />

        <TechList technologies={project.technologies.slice(0, 3)} />

        <div className="flex items-center gap-3 mt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.stopPropagation(); if (project.githubUrl === '#') e.preventDefault(); }}
              style={{ color: project.githubUrl === '#' ? '#cccccc' : '#666666' }}
              className="hover:opacity-60 transition-opacity"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ color: '#666666' }}
              className="hover:opacity-60 transition-opacity"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.detailsUrl && (
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: '300', color: '#aaaaaa' }}>
              View Details →
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Projects Component ───────────────────────────────────────────────────

export function Projects({ variant = 'home' }: { variant?: 'home' | 'projects-page' }) {
  const isProjectsPage = variant === 'projects-page';

  const completed = projects.filter(p => p.status === 'completed');
  const inDev = projects.filter(p => p.status === 'in-development');

  // Featured: first 2 items in the array (Library + SiteLedger)
  const featured = projects.slice(0, 2);

  // Other completed: everything after the first 2
  const otherCompleted = isProjectsPage ? completed.slice(2) : completed.slice(2, 5);
  // In-dev: all on projects page, first 2 on home
  const otherInDev = isProjectsPage ? inDev : inDev.slice(0, 2);
  const other = [...otherCompleted, ...otherInDev];

  return (
    <section className="py-20 px-8" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-6xl mx-auto">

        {/* Featured Projects */}
        <SectionDivider title="Featured Projects" />
        <div className="flex flex-col gap-6 mb-16">
          {featured.map((project, index) => (
            <FeaturedCard key={project.id} project={project} reverse={index % 2 === 1} />
          ))}
        </div>

        {/* Other Projects */}
        <SectionDivider title="Other Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {other.map((project) => (
            <CompactCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
