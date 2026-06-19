import { useState } from "react";
import { ChevronLeft, ChevronRight, Database, Code, Presentation, Users, Award, FileText, BookOpen, Target } from "lucide-react";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import erdDiagram from "../../assets/c55bc7f2053901e1d426bc4ec2eea257ffbd0342.png";
import erdRelationships from "../../assets/562d04b236332ea598679355d198cdbd74c7c4b8.png";
import erDiagramComplete from "../../assets/2a561c1a81805b00332783a3d60f18d095c686f9.png";
import relationshipSchema from "../../assets/6235d18b064bb1d1fa9fa19ebfb0b2b3cf3dfd6f.png";
import ddlQueries from "../../assets/4a5a1886c80c6c25aee99605e0d58ace3b2ce07e.png";

export default function DatabaseSystemsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images - project screenshots (you'll need to provide these)
  const projectImages = [
    {
      url: erdDiagram,
      caption: "Entity Relationship Diagram - Attributes"
    },
    {
      url: erdRelationships,
      caption: "Entity Relationship Diagram - Relationships & Cardinality"
    },
    {
      url: erDiagramComplete,
      caption: "Complete ER Diagram - Library Management System"
    },
    {
      url: relationshipSchema,
      caption: "Relationship Schema - Entities with Primary & Foreign Keys"
    },
    {
      url: ddlQueries,
      caption: "DDL Queries - CREATE TABLE Statements with Constraints"
    }
  ];

  // Ensure currentImageIndex is within bounds
  const safeIndex = Math.min(currentImageIndex, projectImages.length - 1);
  const currentImage = projectImages[safeIndex];

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0f0f0' }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '3rem',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  color: '#111111'
                }}
              >
                Database Systems Project - Business Scenario
              </h1>
              <p
                className="text-lg mb-4"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: '300',
                  lineHeight: '1.8',
                  color: '#555555'
                }}
              >
                A comprehensive database design project focusing on real-world business scenarios and database
                management principles. Built as part of Database Systems coursework at Kwantlen Polytechnic University
                during Summer 2025.
              </p>
              <p
                className="text-lg mb-8"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: '300',
                  lineHeight: '1.8',
                  color: '#555555'
                }}
              >
                This project served as the foundational groundwork for the Library Management System, demonstrating 
                database design, normalization, and SQL query development skills through detailed documentation and 
                PowerPoint presentations.
              </p>
            </div>
            
            {/* Project Stats Card */}
            <div className="rounded-2xl p-8 shadow-2xl" style={{ backgroundColor: '#ffffff', border: '2px solid #e8e8e8' }}>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8" style={{ color: '#888888' }} />
                <h3
                  className=""
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#111111'
                  }}
                >
                  Project Highlights
                </h3>
              </div>
              <div className="space-y-4" style={{ fontFamily: 'var(--font-body)', fontWeight: '300', color: '#555555' }}>
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 flex-shrink-0" style={{ color: '#888888' }} />
                  <span>Database Design & Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 flex-shrink-0" style={{ color: '#888888' }} />
                  <span>SQL & Database Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <Presentation className="w-5 h-5 flex-shrink-0" style={{ color: '#888888' }} />
                  <span>PowerPoint Presentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 flex-shrink-0" style={{ color: '#888888' }} />
                  <span>Team Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="mb-12 text-center"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
          >
            Project Documentation
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Image Display */}
            <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ backgroundColor: '#ffffff', border: '2px solid #e8e8e8' }}>
              <div className="relative">
                <ImageWithFallback
                  src={currentImage.url}
                  alt={currentImage.caption}
                  className="w-full h-[32rem] object-contain"
                  style={{ backgroundColor: '#f5f5f5' }}
                />

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8', color: '#111111' }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8', color: '#111111' }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-sm px-4 py-2 rounded-full" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
                  <p
                    className=""
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '500', color: '#111111' }}
                  >
                    {currentImageIndex + 1} / {projectImages.length}
                  </p>
                </div>
              </div>

              {/* Image Caption */}
              <div className="px-6 py-4" style={{ backgroundColor: '#f9f9f9' }}>
                <p
                  className="text-center text-lg"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: '400', color: '#333333' }}
                >
                  {currentImage.caption}
                </p>
              </div>
            </div>

            {/* Thumbnail Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === currentImageIndex ? '#888888' : '#cccccc',
                    width: index === currentImageIndex ? '2rem' : '0.75rem'
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="mb-8 text-center"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
          >
            Project Overview
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Objectives Card */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: '#111111'
                }}
              >
                Project Objectives
              </h3>
              <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.8', color: '#555555' }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#111111' }}>•</span>
                  <span>Analyze real-world business requirements and translate them into database schemas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#111111' }}>•</span>
                  <span>Design normalized database structures following industry best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#111111' }}>•</span>
                  <span>Create Entity Relationship Diagrams (ERD) and data flow diagrams</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#111111' }}>•</span>
                  <span>Develop complex SQL queries for data manipulation and retrieval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#111111' }}>•</span>
                  <span>Present technical concepts to stakeholders through comprehensive documentation</span>
                </li>
              </ul>
            </div>

            {/* Deliverables Card */}
            <div className="rounded-2xl p-8" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: '#111111'
                }}
              >
                Key Deliverables
              </h3>
              <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.8', color: '#555555' }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#111111' }}>✓</span>
                  <span>Comprehensive business scenario analysis and requirements documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#111111' }}>✓</span>
                  <span>Detailed Entity Relationship Diagrams with cardinality specifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#111111' }}>✓</span>
                  <span>Normalized database schema (1NF, 2NF, 3NF) with complete documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#111111' }}>✓</span>
                  <span>SQL scripts for table creation, data insertion, and query operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#111111' }}>✓</span>
                  <span>Professional PowerPoint presentation showcasing project methodology</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes & Skills */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="mb-8 text-center"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
          >
            Technical Skills & Concepts
          </h2>
          
          <div className="grid gap-6">
            {/* Database Design */}
            <div className="rounded-xl p-6" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
              <div className="flex items-start gap-4">
                <Database className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#888888' }} />
                <div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: '600', fontSize: '1.25rem', color: '#111111' }}
                  >
                    Database Design & Normalization
                  </h3>
                  <p
                    className=""
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.8', color: '#555555' }}
                  >
                    Applied database normalization principles (1NF, 2NF, 3NF) to eliminate data redundancy and ensure data integrity.
                    Created Entity Relationship Diagrams to visualize table structures, relationships, and cardinalities. Designed
                    primary and foreign key constraints to maintain referential integrity across related tables. This foundational
                    work laid the groundwork for implementing the Library Management System database architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* SQL Development */}
            <div className="rounded-xl p-6" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
              <div className="flex items-start gap-4">
                <Code className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#888888' }} />
                <div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: '600', fontSize: '1.25rem', color: '#111111' }}
                  >
                    SQL Query Development
                  </h3>
                  <p
                    className=""
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.8', color: '#555555' }}
                  >
                    Developed complex SQL queries including SELECT statements with JOINs, aggregate functions, GROUP BY clauses,
                    and subqueries. Created DDL (Data Definition Language) scripts for table creation with appropriate data types
                    and constraints. Implemented DML (Data Manipulation Language) operations for inserting, updating, and deleting
                    records. Wrote queries to retrieve specific business intelligence and generate reports based on scenario requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Analysis */}
            <div className="rounded-xl p-6" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#888888' }} />
                <div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: '600', fontSize: '1.25rem', color: '#111111' }}
                  >
                    Business Scenario Analysis
                  </h3>
                  <p
                    className=""
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.8', color: '#555555' }}
                  >
                    Analyzed realistic business scenarios to identify data requirements, entities, attributes, and relationships.
                    Translated business rules into database constraints and validation logic. Documented functional and non-functional
                    requirements to ensure the database design met all business needs. This analytical approach provided valuable
                    insights that informed the development of the Library Management System.
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation Skills */}
            <div className="rounded-xl p-6" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
              <div className="flex items-start gap-4">
                <Presentation className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#888888' }} />
                <div>
                  <h3
                    className="mb-2"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: '600', fontSize: '1.25rem', color: '#111111' }}
                  >
                    Technical Documentation & Presentation
                  </h3>
                  <p
                    className=""
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.8', color: '#555555' }}
                  >
                    Created comprehensive PowerPoint presentations to communicate complex database concepts to both technical and
                    non-technical audiences. Developed clear visual representations of database schemas, workflows, and data flows.
                    Documented design decisions, assumptions, and constraints to provide transparency throughout the project lifecycle.
                    Presented findings and recommendations to team members and instructors, demonstrating effective technical communication skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <Users className="w-12 h-12 flex-shrink-0 mt-2" style={{ color: '#888888' }} />
            <div>
              <h2
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#111111'
                }}
              >
                Team Collaboration
              </h2>
              <p
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: '300',
                  lineHeight: '1.8',
                  fontSize: '1.125rem',
                  color: '#555555'
                }}
              >
                This Database Systems Project was developed collaboratively by a team of 3 members,
                demonstrating effective teamwork, task distribution, and coordinated development efforts
                throughout the project lifecycle.
              </p>
              
              {/* Team Members */}
              <div className="mt-8">
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#111111'
                  }}
                >
                  Team Members
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Harjyn Bhatti */}
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
                    <p
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: '500',
                        fontSize: '1.125rem',
                        color: '#111111'
                      }}
                    >
                      Harjyn Bhatti
                    </p>
                    <p
                      className=""
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: '300',
                        color: '#999999'
                      }}
                    >
                      No GitHub ID
                    </p>
                  </div>

                  {/* Shaylan Kumar */}
                  <div className="rounded-lg p-4" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
                    <p
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: '500',
                        fontSize: '1.125rem',
                        color: '#111111'
                      }}
                    >
                      Shaylan Kumar
                    </p>
                    <p
                      className=""
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: '300',
                        color: '#999999'
                      }}
                    >
                      No GitHub ID
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connection to Library Management System */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl p-8 shadow-2xl" style={{ backgroundColor: '#ffffff', border: '2px solid #e8e8e8' }}>
            <div className="flex items-start gap-6">
              <BookOpen className="w-12 h-12 flex-shrink-0 mt-2" style={{ color: '#888888' }} />
              <div>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#111111'
                  }}
                >
                  Foundation for Library Management System
                </h2>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: '300',
                    lineHeight: '1.8',
                    fontSize: '1.125rem',
                    color: '#555555'
                  }}
                >
                  This Database Systems Project served as the conceptual and technical foundation for the Library Management
                  System developed later in the academic program. The database design principles, normalization techniques,
                  and SQL query patterns learned through this project were directly applied to create a robust, scalable
                  database architecture for the Library Management System.
                </p>
                <p
                  className=""
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: '300',
                    lineHeight: '1.8',
                    fontSize: '1.125rem',
                    color: '#555555'
                  }}
                >
                  While this project provided a strong theoretical foundation and initial design framework, the final Library
                  Management System implementation included refinements and enhancements based on evolving requirements and
                  additional technical insights gained during development. The iterative design process demonstrated the
                  importance of flexibility and continuous improvement in software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
          >
            Project Impact
          </h2>
          <p
            className="text-lg"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              color: '#555555'
            }}
          >
            The Database Systems Project successfully demonstrated comprehensive database design capabilities,
            analytical thinking, and the ability to translate business requirements into technical solutions.
            This foundational work not only strengthened core database management skills but also provided
            invaluable experience in team collaboration, technical documentation, and presentation that
            continues to benefit subsequent projects and professional development.
          </p>
        </div>
      </section>
    </div>
  );
}
