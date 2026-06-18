import { useState } from "react";
import { ChevronLeft, ChevronRight, Database, Code, Layout, Search, Users, Award, ExternalLink, Key, UserCircle, Shield, Github } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { libraryHomepageImage, libraryCatalogImage, libraryHoldSystemImage, libraryAdminImage, libraryReportsImage, libraryBackendImage } from "../../assets/images";

const LMS_BLUE = "#3B82F6";
const LMS_BLUE_LIGHT = "#60A5FA";

export default function LibraryManagementPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images - project screenshots
  const projectImages = [
    {
      url: libraryHomepageImage,
      caption: "Homepage - Library Management System"
    },
    {
      url: libraryCatalogImage,
      caption: "Book Catalog - Browse Collection"
    },
    {
      url: libraryHoldSystemImage,
      caption: "Check-out System - Place Hold"
    },
    {
      url: libraryAdminImage,
      caption: "Admin Interface"
    },
    {
      url: libraryReportsImage,
      caption: "Library Reports Dashboard - Admin Only"
    },
    {
      url: libraryBackendImage,
      caption: "Backend Development & Database Integration"
    }
  ];

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      {/* Hero Section */}
      <section className="py-20 px-6" style={{ backgroundColor: '#ffffff' }}>
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
                Library Management System
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
                A comprehensive web-based system integrating front-end, back-end, and database design.
                Built as part of System Development coursework at Conestoga College.
              </p>
              <p
                className="text-lg mb-8"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: '300',
                  lineHeight: '1.8',
                  color: '#777777'
                }}
              >
                This full-stack application features a book catalog, user management, check-in/check-out
                system, and advanced search functionality, demonstrating end-to-end software development skills.
              </p>

              {/* View Project Button */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://library-management-system-ec64.onrender.com/AccountLogin.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: '600',
                    fontSize: '1.125rem',
                    backgroundColor: LMS_BLUE,
                    color: '#ffffff'
                  }}
                >
                  View Website
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Akarsh7021/Library-Management-System-Springboot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-80"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: '600',
                    fontSize: '1.125rem',
                    backgroundColor: '#111111',
                    color: '#ffffff'
                  }}
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Project Stats Card */}
            <div className="rounded-2xl p-8 shadow-lg border-2" style={{ backgroundColor: '#f9f9f9', borderColor: LMS_BLUE_LIGHT }}>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8" style={{ color: LMS_BLUE }} />
                <h3
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
                  <Database className="w-5 h-5 flex-shrink-0" style={{ color: LMS_BLUE_LIGHT }} />
                  <span>Full-Stack Development Project</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 flex-shrink-0" style={{ color: LMS_BLUE_LIGHT }} />
                  <span>HTML, CSS, JavaScript, PostgreSQL</span>
                </div>
                <div className="flex items-center gap-3">
                  <Layout className="w-5 h-5 flex-shrink-0" style={{ color: LMS_BLUE_LIGHT }} />
                  <span>Responsive Design & UX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 flex-shrink-0" style={{ color: LMS_BLUE_LIGHT }} />
                  <span>Advanced Search Features</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f5f5f5' }}>
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
            Project Screenshots
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Image Display */}
            <div className="rounded-2xl shadow-xl overflow-hidden" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
              <div className="relative">
                <ImageWithFallback
                  src={projectImages[currentImageIndex].url}
                  alt={projectImages[currentImageIndex].caption}
                  className="w-full h-[32rem] object-contain"
                  style={{ backgroundColor: '#f9f9f9' }}
                />

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: '#111111', color: '#ffffff' }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: '#111111', color: '#ffffff' }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full" style={{ backgroundColor: '#111111' }}>
                  <p
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '500', color: '#ffffff' }}
                  >
                    {currentImageIndex + 1} / {projectImages.length}
                  </p>
                </div>
              </div>

              {/* Image Caption */}
              <div className="px-6 py-4" style={{ backgroundColor: '#f9f9f9', borderTop: '1px solid #e8e8e8' }}>
                <p
                  className="text-center text-lg"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: '400', color: '#555555' }}
                >
                  {projectImages[currentImageIndex].caption}
                </p>
              </div>
            </div>

            {/* Thumbnail Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300`}
                  style={{
                    backgroundColor: index === currentImageIndex ? '#111111' : '#cccccc',
                    width: index === currentImageIndex ? '2rem' : '0.75rem'
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Try It Yourself - Demo Credentials Section */}
      <section className="py-16 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Key className="w-10 h-10" style={{ color: LMS_BLUE }} />
              <h2
                className=""
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#111111'
                }}
              >
                Try It Yourself
              </h2>
            </div>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: '300',
                lineHeight: '1.8',
                fontSize: '1.125rem',
                color: '#555555'
              }}
            >
              Experience the full functionality of the Library Management System with demo credentials.
              Explore both admin and user perspectives to see the complete feature set.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Admin Access Card */}
            <div className="rounded-2xl p-8 shadow-2xl transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#f9f9f9', border: '2px solid #e8e8e8' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
                  <Shield className="w-8 h-8" style={{ color: LMS_BLUE }} />
                </div>
                <div>
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      color: '#111111'
                    }}
                  >
                    Admin Access
                  </h3>
                  <p
                    className=""
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '300', color: '#555555' }}
                  >
                    Full system control
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg p-4" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
                  <p
                    className="mb-2 text-sm"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '400', color: '#777777' }}
                  >
                    Email
                  </p>
                  <code
                    className="text-lg block select-all"
                    style={{ fontFamily: 'Courier New, monospace', fontWeight: '500', color: '#111111' }}
                  >
                    admin@library.com
                  </code>
                </div>

                <div className="rounded-lg p-4" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
                  <p
                    className="mb-2 text-sm"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '400', color: '#777777' }}
                  >
                    Password
                  </p>
                  <code
                    className="text-lg block select-all"
                    style={{ fontFamily: 'Courier New, monospace', fontWeight: '500', color: '#111111' }}
                  >
                    John@123
                  </code>
                </div>
              </div>

              <div className="mt-6 pt-6" style={{ borderTop: '1px solid #e8e8e8' }}>
                <p
                  className="text-sm"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.6', color: '#555555' }}
                >
                  <strong className="" style={{ color: '#333333' }}>Features:</strong> Inventory management, user administration,
                  visual reports & analytics, book returns/checkouts, payment processing
                </p>
              </div>
            </div>

            {/* User Access Card */}
            <div className="rounded-2xl p-8 shadow-2xl transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#f9f9f9', border: '2px solid #e8e8e8' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
                  <UserCircle className="w-8 h-8" style={{ color: LMS_BLUE }} />
                </div>
                <div>
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      color: '#111111'
                    }}
                  >
                    User Access
                  </h3>
                  <p
                    className=""
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '300', color: '#555555' }}
                  >
                    Standard library member
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-lg p-4" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
                  <p
                    className="mb-2 text-sm"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '400', color: '#777777' }}
                  >
                    Email
                  </p>
                  <code
                    className="text-lg block select-all"
                    style={{ fontFamily: 'Courier New, monospace', fontWeight: '500', color: '#111111' }}
                  >
                    User@library.com
                  </code>
                </div>

                <div className="rounded-lg p-4" style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}>
                  <p
                    className="mb-2 text-sm"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '400', color: '#777777' }}
                  >
                    Password
                  </p>
                  <code
                    className="text-lg block select-all"
                    style={{ fontFamily: 'Courier New, monospace', fontWeight: '500', color: '#111111' }}
                  >
                    Adam@123
                  </code>
                </div>
              </div>

              <div className="mt-6 pt-6" style={{ borderTop: '1px solid #e8e8e8' }}>
                <p
                  className="text-sm"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.6', color: '#555555' }}
                >
                  <strong className="" style={{ color: '#333333' }}>Features:</strong> Browse book catalog, search & filter,
                  place/cancel holds, view borrowing history, manage personal account
                </p>
              </div>
            </div>
          </div>

          {/* Quick Tip */}
          <div className="mt-8 rounded-xl p-6" style={{ backgroundColor: '#f9f9f9', border: '1px solid #e8e8e8' }}>
            <p
              className="text-center"
              style={{ fontFamily: 'var(--font-body)', fontWeight: '300', fontSize: '1rem', lineHeight: '1.6', color: '#555555' }}
            >
              💡 <strong className="" style={{ fontWeight: '500', color: '#333333' }}>Pro Tip:</strong> Login as Admin first to explore the complete dashboard with
              reports, analytics, and management tools, then switch to User access to experience the library member perspective.
            </p>
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
                  <span className="mt-1" style={{ color: '#333333' }}>•</span>
                  <span>Design and implement a full-stack web application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#333333' }}>•</span>
                  <span>Integrate front-end, back-end, and database components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#333333' }}>•</span>
                  <span>Implement CRUD operations for library resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#333333' }}>•</span>
                  <span>Create an intuitive user interface for library operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#333333' }}>•</span>
                  <span>Develop secure user authentication and authorization</span>
                </li>
              </ul>
            </div>

            {/* Features Card */}
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
                Key Features
              </h3>
              <ul className="space-y-3" style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.8', color: '#555555' }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#333333' }}>✓</span>
                  <span>Comprehensive book catalog with detailed information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#333333' }}>✓</span>
                  <span>User management system with role-based access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#333333' }}>✓</span>
                  <span>Book check-in/check-out tracking system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#333333' }}>✓</span>
                  <span>Advanced search and filter functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1" style={{ color: '#333333' }}>✓</span>
                  <span>Responsive design for all devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="mb-8"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
          >
            Technologies Used
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "HTML5" },
              { name: "CSS" },
              { name: "JavaScript" },
              { name: "PostgreSQL" },
              { name: "Neon" },
              { name: "Render" },
              { name: "PgAdmin" },
              { name: "Git" }
            ].map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl p-6 border transition-all duration-300"
                style={{ backgroundColor: '#f9f9f9', borderColor: '#e8e8e8' }}
              >
                <p
                  className="text-lg"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: '500', color: '#333333' }}
                >
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Collaboration */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <Users className="w-12 h-12 flex-shrink-0 mt-2" style={{ color: LMS_BLUE }} />
            <div>
              <h2
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#111111'
                }}
              >
                Team Collaboration
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
                This Library Management System was developed collaboratively by a team of 5 members,
                demonstrating effective teamwork, task distribution, and coordinated development efforts
                throughout the project lifecycle.
              </p>
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
                After successfully completing the coursework project, I took the initiative to rebuild and redeploy
                the entire system independently. This involved refactoring the codebase, optimizing database queries,
                migrating to cloud infrastructure (Neon for PostgreSQL hosting and Render for web deployment), and
                implementing additional features. This solo reconstruction deepened my understanding of full-stack
                architecture and demonstrated my ability to take ownership of complex systems from conception to production deployment.
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
                  {/* James Sinclair */}
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
                      James Sinclair
                    </p>
                    <a
                      href="https://github.com/ProfessorSniff"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 flex items-center gap-1"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: '300',
                        color: '#777777'
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      github.com/ProfessorSniff
                    </a>
                  </div>

                  {/* Chang Chloe */}
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
                      Chang Chloe
                    </p>
                    <a
                      href="https://github.com/ChangChloe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200 flex items-center gap-1"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: '300',
                        color: '#777777'
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      github.com/ChangChloe
                    </a>
                  </div>

                  {/* Ishu Ratti */}
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
                      Ishu Ratti
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

                  {/* Sarthak */}
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
                      Sarthak
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

      {/* Project Outcome */}
      <section className="py-16 px-6" style={{ backgroundColor: '#ffffff' }}>
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
            Project Outcome
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
            The Library Management System successfully demonstrated comprehensive full-stack development capabilities,
            effectively integrating front-end technologies with a robust PostgreSQL database backend.
          </p>
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
            This project showcased proficiency in database design, server-side logic, client-side interactivity,
            and the ability to deliver a complete, functional web application that meets real-world library management needs.
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
            The experience gained from this project strengthened my understanding of system development lifecycle,
            database management, and creating user-centered web applications.
          </p>
        </div>
      </section>

      {/* Development Disclosure */}
      <section className="py-12 px-6" style={{ borderTop: '1px solid #e8e8e8', backgroundColor: '#f5f5f5' }}>
        <div className="max-w-4xl mx-auto">
          <h3
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
          >
            Development Disclosure
          </h3>
          <p
            className="mb-3"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              color: '#555555'
            }}
          >
            <strong className="" style={{ color: '#333333' }}>No AI tools were used</strong> during the development of this project.
            All system design, database architecture, coding, and testing were performed entirely by team members of the project.
          </p>
          <p
            className="mb-3"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              color: '#555555'
            }}
          >
            This was a coursework project completed in 2025 for System Development course, demonstrating authentic
            problem-solving skills, software engineering principles, and hands-on development expertise without AI assistance.
          </p>
          <p
            className=""
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              color: '#555555'
            }}
          >
            <em>Note: AI tools were used only for formatting and organizing this portfolio presentation page
            to showcase the project professionally.</em>
          </p>
        </div>
      </section>
    </div>
  );
}