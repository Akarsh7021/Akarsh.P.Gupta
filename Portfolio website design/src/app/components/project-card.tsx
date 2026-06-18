import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { useNavigate } from "react-router";

/* ========================================
   PROJECT INTERFACE - Defines the structure of a project
   hoverImage: Optional second image shown on hover
   detailsUrl: Optional link to detailed project page
   category: Defines if project is "personal" or "coursework"
======================================== */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  hoverImage?: string; // Optional image shown on hover
  technologies: string[];
  status: "completed" | "in-development";
  category: "personal" | "coursework"; // Project category
  githubUrl?: string;
  liveUrl?: string;
  detailsUrl?: string; // Optional link to project detail page
}

interface ProjectCardProps {
  project: Project;
  variant?: 'home' | 'projects-page';
}

export function ProjectCard({ project, variant = 'home' }: ProjectCardProps) {
  const isProjectsPage = variant === 'projects-page';
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    if (project.detailsUrl) {
      navigate(project.detailsUrl);
    }
  };
  
  return (
    <div 
      className={`bg-[#0E2A47] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#8A6CFF]/20 ${
        project.detailsUrl ? 'cursor-pointer' : ''
      }`}
      onClick={handleCardClick}
    >
      {/* ========================================
          PROJECT IMAGE - Changes on hover if hoverImage exists
      ======================================== */}
      <div 
        className="relative h-56 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ImageWithFallback 
          src={isHovered && project.hoverImage ? project.hoverImage : project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-500"
        />
        {/* Badges Stacked (Top Right) */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {/* Category Badge */}
          <span 
            className={`px-3 py-1 rounded-full text-sm text-center ${
              project.category === 'personal' 
                ? 'bg-blue-500 text-white' 
                : 'bg-orange-500 text-white'
            }`}
            style={{ fontFamily: 'var(--font-body)', fontWeight: '300' }}
          >
            {project.category === 'personal' ? 'Personal' : 'Coursework'}
          </span>
          {/* Status Badge */}
          <span 
            className={`px-3 py-1 rounded-full text-sm text-center ${
              project.status === 'completed' 
                ? 'bg-green-500 text-white' 
                : 'bg-[#8A6CFF] text-white'
            }`}
            style={{ fontFamily: 'var(--font-body)', fontWeight: '300' }}
          >
            {project.status === 'completed' ? 'Completed' : 'In Development'}
          </span>
        </div>
        {/* View Details Overlay (only show if detailsUrl exists) */}
        {project.detailsUrl && isHovered && (
          <div className="absolute inset-0 bg-black/30 transition-all duration-300 flex items-center justify-center">
            <span
              className="px-4 py-2 rounded-lg font-semibold"
              style={{ fontFamily: 'var(--font-body)', fontWeight: '600', backgroundColor: '#ffffff', color: '#111111' }}
            >
              View Details →
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        {/* Project Title */}
        <h3 
          className="mb-3 text-[#8A6CFF]"
          style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '1.5rem',
            fontWeight: '700'
          }}
        >
          {project.title}
        </h3>
        
        {/* Project Description */}
        <p 
          className="mb-4 text-white"
          style={{ 
            fontFamily: 'var(--font-body)',
            lineHeight: '1.6',
            fontWeight: '300'
          }}
        >
          {project.description}
        </p>
        
        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-[#8A6CFF]/10 text-[#8A6CFF] rounded-full border border-[#8A6CFF]/30"
              style={{ 
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: '300'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Links */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 transition-colors ${
                project.githubUrl === "#" 
                  ? 'text-[#8A6CFF]/50 cursor-not-allowed' 
                  : 'text-[#8A6CFF] hover:text-white'
              }`}
              style={{ fontFamily: 'var(--font-body)', fontWeight: '300' }}
              onClick={(e) => {
                e.stopPropagation();
                if (project.githubUrl === "#") e.preventDefault();
              }}
            >
              <Github className="w-5 h-5" />
              <span>{project.githubUrl === "#" ? "No Code" : "Code"}</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8A6CFF] hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-body)', fontWeight: '300' }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}