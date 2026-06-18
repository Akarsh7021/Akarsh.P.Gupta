import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, Award, Code, Palette, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import planetsBeyondHomepage from "figma:asset/7e3d9072622be1cc0ef502e29c6674a6d44f46c3.png";
import homeSolarSystem from "figma:asset/15c76d6b64ab72d7806cee2f6fff313c52951bab.png";
import beyondKuiperBelt from "figma:asset/a6e01919f28b8cc4445aca406dec7c59f8701ef8.png";
import aboutPage from "figma:asset/b03209dc637b9a1c0ffe4ff5f0c314e50c5abf1f.png";
import contactPage from "figma:asset/c8c35f2a4351f60fa750baf88efe3d81317273a7.png";
import quizPage from "figma:asset/cf44dafd85c8bfab4dcdb16cf69b59c73eea781c.png";
import figmaFramework from "figma:asset/c0aa9bc586ab8e05f6697a88ee061ed4cd35deac.png";

const PLANET_PURPLE = "#8B5CF6";
const PLANET_PURPLE_LIGHT = "#A78BFA";

export default function PlanetsBeyondPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images - replace these with your actual screenshots
  const projectImages = [
    {
      url: planetsBeyondHomepage,
      caption: "Homepage - Planets Beyond"
    },
    {
      url: homeSolarSystem,
      caption: "Home Solar System"
    },
    {
      url: beyondKuiperBelt,
      caption: "Beyond Kuiper Belt"
    },
    {
      url: aboutPage,
      caption: "About Page"
    },
    {
      url: contactPage,
      caption: "Contact Page"
    },
    {
      url: quizPage,
      caption: "Quiz Page"
    },
    {
      url: figmaFramework,
      caption: "Figma Framework - Complete Site Overview"
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
      <section style={{ backgroundColor: '#ffffff' }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                style={{
                  fontFamily: 'Advent Pro, sans-serif',
                  fontSize: '3rem',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  color: '#111111'
                }}
                className="mb-6"
              >
                Planets Beyond
              </h1>
              <p
                style={{
                  fontFamily: 'Advent Pro, sans-serif',
                  fontWeight: '300',
                  lineHeight: '1.8',
                  color: '#333333'
                }}
                className="text-lg mb-4"
              >
                A responsive multi-page website showcasing our solar system and planets beyond.
                Created as a collaborative 4-member group project for Web Development coursework.
              </p>
              <p
                style={{
                  fontFamily: 'Advent Pro, sans-serif',
                  fontWeight: '300',
                  lineHeight: '1.8',
                  color: '#333333'
                }}
                className="text-lg mb-8"
              >
                This project demonstrates modern web design principles, responsive layouts,
                cross-browser compatibility, and interactive user experiences.
              </p>

              {/* View Website Button */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://akarsh7021.github.io/Akarsh7021.github.io-PlanetsBeyond/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Advent Pro, sans-serif',
                    fontWeight: '600',
                    fontSize: '1.125rem',
                    backgroundColor: PLANET_PURPLE,
                    color: '#ffffff'
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Website
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Akarsh7021/Akarsh7021.github.io-PlanetsBeyond"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'Advent Pro, sans-serif',
                    fontWeight: '600',
                    fontSize: '1.125rem',
                    backgroundColor: '#111111',
                    color: '#ffffff'
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg hover:opacity-80 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Project Stats Card */}
            <div style={{ backgroundColor: '#f9f9f9', borderColor: PLANET_PURPLE_LIGHT }} className="border-2 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8" style={{ color: PLANET_PURPLE }} />
                <h3
                  style={{
                    fontFamily: 'Advent Pro, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#111111'
                  }}
                  className=""
                >
                  Project Highlights
                </h3>
              </div>
              <div className="space-y-4" style={{ fontFamily: 'Advent Pro, sans-serif', fontWeight: '300', color: '#333333' }}>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 flex-shrink-0" style={{ color: PLANET_PURPLE }} />
                  <span>4-Member Collaborative Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 flex-shrink-0" style={{ color: PLANET_PURPLE }} />
                  <span>Grade Achieved: B+</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 flex-shrink-0" style={{ color: PLANET_PURPLE }} />
                  <span>HTML, CSS, JavaScript, Figma</span>
                </div>
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 flex-shrink-0" style={{ color: PLANET_PURPLE }} />
                  <span>Responsive Design Principles</span>
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
            style={{
              fontFamily: 'Advent Pro, sans-serif',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
            className="mb-12 text-center"
          >
            Project Screenshots
          </h2>

          {/* Carousel Container */}
          <div className="relative">
            {/* Main Image Display */}
            <div style={{ backgroundColor: '#f9f9f9', borderColor: '#e8e8e8' }} className="rounded-2xl shadow-2xl overflow-hidden border-2">
              <div className="relative">
                <ImageWithFallback
                  src={projectImages[currentImageIndex].url}
                  alt={projectImages[currentImageIndex].caption}
                  className="w-full h-[32rem] object-contain"
                  style={{ backgroundColor: '#ffffff' }}
                />

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevious}
                  style={{ backgroundColor: '#f5f5f5', borderColor: '#e8e8e8', color: '#333333' }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 hover:opacity-80 backdrop-blur-sm p-3 rounded-full transition-all duration-300 border"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={handleNext}
                  style={{ backgroundColor: '#f5f5f5', borderColor: '#e8e8e8', color: '#333333' }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-80 backdrop-blur-sm p-3 rounded-full transition-all duration-300 border"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                {/* Image Counter */}
                <div style={{ backgroundColor: '#f5f5f5', borderColor: '#e8e8e8' }} className="absolute bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-sm px-4 py-2 rounded-full border">
                  <p
                    style={{ fontFamily: 'Advent Pro, sans-serif', fontWeight: '500', color: '#333333' }}
                    className=""
                  >
                    {currentImageIndex + 1} / {projectImages.length}
                  </p>
                </div>
              </div>

              {/* Image Caption */}
              <div style={{ backgroundColor: '#ffffff' }} className="px-6 py-4">
                <p
                  style={{ fontFamily: 'Advent Pro, sans-serif', fontWeight: '400', color: '#333333' }}
                  className="text-center text-lg"
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
                  style={{
                    backgroundColor: index === currentImageIndex ? PLANET_PURPLE : '#cccccc'
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:opacity-80 ${
                    index === currentImageIndex ? 'w-8' : ''
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section style={{ backgroundColor: '#f5f5f5' }} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            style={{
              fontFamily: 'Advent Pro, sans-serif',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
            className="mb-8 text-center"
          >
            Project Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Objectives Card */}
            <div style={{ backgroundColor: '#ffffff', borderColor: '#e8e8e8' }} className="rounded-2xl p-8 border">
              <h3
                style={{
                  fontFamily: 'Advent Pro, sans-serif',
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: '#111111'
                }}
                className="mb-4"
              >
                Project Objectives
              </h3>
              <ul className="space-y-3" style={{ fontFamily: 'Advent Pro, sans-serif', fontWeight: '300', lineHeight: '1.8', color: '#333333' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#555555' }} className="mt-1">•</span>
                  <span>Design and develop a multi-page responsive website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#555555' }} className="mt-1">•</span>
                  <span>Implement modern web design principles and best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#555555' }} className="mt-1">•</span>
                  <span>Ensure cross-browser compatibility and accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#555555' }} className="mt-1">•</span>
                  <span>Create engaging interactive user experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#555555' }} className="mt-1">•</span>
                  <span>Collaborate effectively as a development team</span>
                </li>
              </ul>
            </div>

            {/* Features Card */}
            <div style={{ backgroundColor: '#ffffff', borderColor: '#e8e8e8' }} className="rounded-2xl p-8 border">
              <h3
                style={{
                  fontFamily: 'Advent Pro, sans-serif',
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: '#111111'
                }}
                className="mb-4"
              >
                Key Features
              </h3>
              <ul className="space-y-3" style={{ fontFamily: 'Advent Pro, sans-serif', fontWeight: '300', lineHeight: '1.8', color: '#333333' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#555555' }} className="mt-1">✓</span>
                  <span>Responsive layout adapting to all device sizes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#555555' }} className="mt-1">✓</span>
                  <span>Interactive navigation with smooth transitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#555555' }} className="mt-1">✓</span>
                  <span>Rich multimedia content and imagery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#555555' }} className="mt-1">✓</span>
                  <span>Clean, modern user interface design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#555555' }} className="mt-1">✓</span>
                  <span>Optimized performance and loading times</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            style={{
              fontFamily: 'Advent Pro, sans-serif',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
            className="mb-8"
          >
            Technologies Used
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "HTML5" },
              { name: "CSS" },
              { name: "JavaScript" },
              { name: "Figma" }
            ].map((tech) => (
              <div
                key={tech.name}
                style={{ backgroundColor: '#f9f9f9', borderColor: '#e8e8e8' }}
                className="rounded-xl p-6 border hover:border-gray-400 transition-all duration-300"
              >
                <p
                  style={{ fontFamily: 'Advent Pro, sans-serif', fontWeight: '500', color: '#333333' }}
                  className="text-lg"
                >
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Collaboration */}
      <section style={{ backgroundColor: '#f5f5f5' }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <Users className="w-12 h-12 flex-shrink-0 mt-2" style={{ color: PLANET_PURPLE }} />
            <div>
              <h2
                style={{
                  fontFamily: 'Advent Pro, sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#111111'
                }}
                className="mb-4"
              >
                Team Collaboration
              </h2>
              <p
                style={{
                  fontFamily: 'Advent Pro, sans-serif',
                  fontWeight: '300',
                  lineHeight: '1.8',
                  fontSize: '1.125rem',
                  color: '#333333'
                }}
                className="mb-4"
              >
                This project was developed collaboratively by a team of 4 members, demonstrating
                effective teamwork, task distribution, and coordinated development efforts.
              </p>
              <p
                style={{
                  fontFamily: 'Advent Pro, sans-serif',
                  fontWeight: '300',
                  lineHeight: '1.8',
                  fontSize: '1.125rem',
                  color: '#333333'
                }}
                className="mb-6"
              >
                We utilized version control, regular team meetings, and agile development practices
                to ensure smooth collaboration and timely project delivery.
              </p>

              {/* Team Members */}
              <div className="mt-8">
                <h3
                  style={{
                    fontFamily: 'Advent Pro, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#111111'
                  }}
                  className="mb-4"
                >
                  Team Members
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Reid Colton */}
                  <div style={{ backgroundColor: '#ffffff', borderColor: '#e8e8e8' }} className="border rounded-lg p-4">
                    <p
                      style={{
                        fontFamily: 'Advent Pro, sans-serif',
                        fontWeight: '500',
                        fontSize: '1.125rem',
                        color: '#111111'
                      }}
                      className="mb-2"
                    >
                      Reid Colton
                    </p>
                    <p
                      style={{
                        fontFamily: 'Advent Pro, sans-serif',
                        fontWeight: '300',
                        color: '#777777'
                      }}
                      className=""
                    >
                      No GitHub ID
                    </p>
                  </div>

                  {/* Rostyslav Onikiienko */}
                  <div style={{ backgroundColor: '#ffffff', borderColor: '#e8e8e8' }} className="border rounded-lg p-4">
                    <p
                      style={{
                        fontFamily: 'Advent Pro, sans-serif',
                        fontWeight: '500',
                        fontSize: '1.125rem',
                        color: '#111111'
                      }}
                      className="mb-2"
                    >
                      Rostyslav Onikiienko
                    </p>
                    <p
                      style={{
                        fontFamily: 'Advent Pro, sans-serif',
                        fontWeight: '300',
                        color: '#777777'
                      }}
                      className=""
                    >
                      No GitHub ID
                    </p>
                  </div>

                  {/* Rajveer */}
                  <div style={{ backgroundColor: '#ffffff', borderColor: '#e8e8e8' }} className="border rounded-lg p-4">
                    <p
                      style={{
                        fontFamily: 'Advent Pro, sans-serif',
                        fontWeight: '500',
                        fontSize: '1.125rem',
                        color: '#111111'
                      }}
                      className="mb-2"
                    >
                      Rajveer
                    </p>
                    <p
                      style={{
                        fontFamily: 'Advent Pro, sans-serif',
                        fontWeight: '300',
                        color: '#777777'
                      }}
                      className=""
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
      <section style={{ backgroundColor: '#ffffff' }} className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            style={{
              fontFamily: 'Advent Pro, sans-serif',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
            className="mb-6"
          >
            Project Outcome
          </h2>
          <p
            style={{
              fontFamily: 'Advent Pro, sans-serif',
              fontWeight: '300',
              lineHeight: '1.8',
              fontSize: '1.125rem',
              color: '#333333'
            }}
            className="mb-4"
          >
            The Planets Beyond website successfully achieved a B+ grade, demonstrating our team's
            ability to create a professional, responsive web application.
          </p>
          <p
            style={{
              fontFamily: 'Advent Pro, sans-serif',
              fontWeight: '300',
              lineHeight: '1.8',
              fontSize: '1.125rem',
              color: '#333333'
            }}
            className="mb-4"
          >
            The project showcased our understanding of modern web development principles,
            responsive design implementation, and collaborative software development practices.
          </p>
          <p
            style={{
              fontFamily: 'Advent Pro, sans-serif',
              fontWeight: '300',
              lineHeight: '1.8',
              fontSize: '1.125rem',
              color: '#333333'
            }}
            className=""
          >
            This experience enhanced our skills in front-end development, team collaboration,
            and project management in a real-world academic setting.
          </p>
        </div>
      </section>

      {/* Development Disclosure */}
      <section style={{ borderTopColor: '#e8e8e8' }} className="py-12 px-6 border-t">
        <div className="max-w-4xl mx-auto">
          <h3
            style={{
              fontFamily: 'Advent Pro, sans-serif',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
            className="mb-4"
          >
            Development Disclosure
          </h3>
          <p
            style={{
              fontFamily: 'Advent Pro, sans-serif',
              fontWeight: '300',
              lineHeight: '1.8',
              color: '#555555'
            }}
            className="mb-3"
          >
            <strong style={{ color: '#333333' }} className="">No AI tools were used</strong> during the development of this project.
            All web development, design, implementation, and testing were performed entirely by the project team members.
          </p>
          <p
            style={{
              fontFamily: 'Advent Pro, sans-serif',
              fontWeight: '300',
              lineHeight: '1.8',
              color: '#555555'
            }}
            className="mb-3"
          >
            This was a coursework project completed in 2024, demonstrating authentic team collaboration,
            problem-solving skills, and hands-on web development expertise without AI assistance.
          </p>
          <p
            style={{
              fontFamily: 'Advent Pro, sans-serif',
              fontWeight: '300',
              lineHeight: '1.8',
              color: '#555555'
            }}
            className=""
          >
            <em>Note: AI tools were used only for formatting and organizing this portfolio presentation page
            to showcase the project professionally.</em>
          </p>
        </div>
      </section>
    </div>
  );
}