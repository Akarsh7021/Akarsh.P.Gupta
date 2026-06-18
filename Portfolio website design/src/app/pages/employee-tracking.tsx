import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Code,
  LayoutDashboard,
  Users,
  Clock,
  Building2,
  FileText,
  ShieldCheck,
  Github,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import dashboardImg from "@/imports/Screenshot_2026-06-17_at_4.20.35_PM.png";
import employeesImg from "@/imports/Screenshot_2026-06-17_at_4.21.44_PM.png";
import workHoursImg from "@/imports/Screenshot_2026-06-17_at_4.22.23_PM.png";
import workHoursModalImg from "@/imports/Screenshot_2026-06-17_at_4.23.34_PM.png";
import customersImg from "@/imports/Screenshot_2026-06-17_at_4.24.22_PM.png";
import invoiceImg from "@/imports/Screenshot_2026-06-17_at_4.29.13_PM.png";

const SL_GREEN = "#a4809b";
const SL_GREEN_LIGHT = "#a4809b";

export default function EmployeeTrackingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    { url: dashboardImg,       caption: "Business Dashboard — Revenue, payroll costs, profit trend, and open jobs at a glance" },
    { url: employeesImg,       caption: "Employee Management — Employee directory with positions, wages, and active status" },
    { url: workHoursImg,       caption: "Work Hours — Time tracking entries with payment status per employee" },
    { url: workHoursModalImg,  caption: "Payroll Modal — Record payment by e-transfer or cash with one click" },
    { url: customersImg,       caption: "Customer Management — Work sites, quotations, GST, and job status" },
    { url: invoiceImg,         caption: "Invoice Generation — Customer invoices with itemised particulars and GST" },
  ];

  const handlePrevious = () =>
    setCurrentImageIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentImageIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f5f5f5" }}>

      {/* ── Hero ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "3rem",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  color: "#111111",
                }}
              >
                SiteLedger: Business Operations Management System
              </h1>
              <p
                className="text-lg mb-4"
                style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#555555" }}
              >
                A secure local business management system designed to replace spreadsheets and simplify daily operations for small businesses.
              </p>
              <p
                className="text-lg mb-8"
                style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#777777" }}
              >
                Built end-to-end for NH Hygiene Services Ltd., it centralises employees, payroll, customers, job sites, invoicing, and analytics in one full-stack Spring Boot application.
              </p>

              <a
                href="https://github.com/Akarsh7021"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  fontSize: "1.125rem",
                  backgroundColor: SL_GREEN,
                  color: "#ffffff",
                }}
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>

            {/* Project Highlights card */}
            <div
              className="rounded-2xl p-8 shadow-lg border-2"
              style={{ backgroundColor: "#f9f9f9", borderColor: SL_GREEN_LIGHT }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8" style={{ color: SL_GREEN }} />
                <h3
                  style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: "700", color: "#111111" }}
                >
                  Project Highlights
                </h3>
              </div>
              <div className="space-y-4" style={{ fontFamily: "var(--font-body)", fontWeight: "300", color: "#555555" }}>
                <div className="flex items-center gap-3">
                  <LayoutDashboard className="w-5 h-5 flex-shrink-0" style={{ color: SL_GREEN_LIGHT }} />
                  <span>Business Dashboard with live profit & payroll analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 flex-shrink-0" style={{ color: SL_GREEN_LIGHT }} />
                  <span>Employee management — wages, positions, and status</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0" style={{ color: SL_GREEN_LIGHT }} />
                  <span>Work hours & payroll with unpaid/partial/paid tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 flex-shrink-0" style={{ color: SL_GREEN_LIGHT }} />
                  <span>Customer & job site management with quotations and GST</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 flex-shrink-0" style={{ color: SL_GREEN_LIGHT }} />
                  <span>Invoice generation and revenue / service-mix reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0" style={{ color: SL_GREEN_LIGHT }} />
                  <span>BCrypt login and private SQLite local storage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 flex-shrink-0" style={{ color: SL_GREEN_LIGHT }} />
                  <span>Java · Spring Boot · Thymeleaf · SQLite · Spring Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image Carousel ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="mb-12 text-center"
            style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "700", color: "#111111" }}
          >
            Project Screenshots
          </h2>

          <div className="relative">
            <div
              className="rounded-2xl shadow-xl overflow-hidden"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e8e8e8" }}
            >
              <div className="relative">
                <ImageWithFallback
                  src={projectImages[currentImageIndex].url}
                  alt={projectImages[currentImageIndex].caption}
                  className="w-full h-[32rem] object-contain"
                  style={{ backgroundColor: "#f9f9f9" }}
                />

                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: "#111111", color: "#ffffff" }}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: "#111111", color: "#ffffff" }}
                  aria-label="Next image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>

                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full"
                  style={{ backgroundColor: "#111111" }}
                >
                  <p style={{ fontFamily: "var(--font-body)", fontWeight: "500", color: "#ffffff" }}>
                    {currentImageIndex + 1} / {projectImages.length}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4" style={{ backgroundColor: "#f9f9f9", borderTop: "1px solid #e8e8e8" }}>
                <p
                  className="text-center text-lg"
                  style={{ fontFamily: "var(--font-body)", fontWeight: "400", color: "#555555" }}
                >
                  {projectImages[currentImageIndex].caption}
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-6">
              {projectImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className="h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === currentImageIndex ? SL_GREEN : "#cccccc",
                    width: index === currentImageIndex ? "2rem" : "0.75rem",
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Overview ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="mb-8 text-center"
            style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "700", color: "#111111" }}
          >
            Project Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8" style={{ backgroundColor: "#f9f9f9", border: "1px solid #e8e8e8" }}>
              <h3
                className="mb-4"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: "600", color: "#111111" }}
              >
                Project Objectives
              </h3>
              <ul className="space-y-3" style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#555555" }}>
                {[
                  "Replace manual spreadsheets with a structured, secure local application",
                  "Centralise payroll calculation and unpaid payment tracking",
                  "Manage customer relationships, job sites, quotations, and GST billing",
                  "Generate professional customer invoices from within the system",
                  "Provide a live business dashboard with revenue and profit analytics",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1" style={{ color: "#333333" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8" style={{ backgroundColor: "#f9f9f9", border: "1px solid #e8e8e8" }}>
              <h3
                className="mb-4"
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: "600", color: "#111111" }}
              >
                Key Features
              </h3>
              <ul className="space-y-3" style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#555555" }}>
                {[
                  "Dashboard with quoted revenue, payroll cost, estimated profit, and open job count",
                  "Employee directory with hourly wages, positions, and active/inactive status",
                  "Work hours log with automatic pay calculation and unpaid/partial/paid status",
                  "Customer and job site records with service type, quote, GST, and job progress",
                  "Invoice builder that exports PDF-ready invoices with itemised line items",
                  "Secure BCrypt-hashed login and private SQLite data stored entirely locally",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1" style={{ color: SL_GREEN }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technologies Used ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="mb-8"
            style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "700", color: "#111111" }}
          >
            Technologies Used
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Java", "Spring Boot", "Thymeleaf", "SQLite", "Spring Security", "BCrypt", "IntelliJ IDEA", "Git"].map(
              (tech) => (
                <div
                  key={tech}
                  className="rounded-xl p-6 border transition-all duration-300"
                  style={{ backgroundColor: "#ffffff", borderColor: "#e8e8e8" }}
                >
                  <p
                    className="text-lg"
                    style={{ fontFamily: "var(--font-body)", fontWeight: "500", color: "#333333" }}
                  >
                    {tech}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Project Outcome ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="mb-6"
            style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: "700", color: "#111111" }}
          >
            Project Outcome
          </h2>
          <p
            className="mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", fontSize: "1.125rem", color: "#555555" }}
          >
            The completed system provides one reliable place to manage daily operations — replacing scattered spreadsheets with a structured, secure, and easy-to-use local application used by a real business client.
          </p>
          <p
            className="mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", fontSize: "1.125rem", color: "#555555" }}
          >
            Payroll calculations that previously required manual spreadsheet work are now automatic. Outstanding payments are tracked in real time, and the dashboard gives management an immediate overview of revenue, costs, and profit without opening a single file.
          </p>
          <p
            style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", fontSize: "1.125rem", color: "#555555" }}
          >
            Building SiteLedger deepened my understanding of full-stack Spring Boot architecture, relational database design with SQLite, server-side rendering with Thymeleaf, and delivering production software for a real-world client with evolving requirements.
          </p>
        </div>
      </section>

      {/* ── Development Disclosure ── */}
      <section className="py-12 px-6" style={{ borderTop: "1px solid #e8e8e8", backgroundColor: "#f5f5f5" }}>
        <div className="max-w-4xl mx-auto">
          <h3
            className="mb-4"
            style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: "700", color: "#111111" }}
          >
            Development Disclosure
          </h3>
          <p
            className="mb-3"
            style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#555555" }}
          >
            <strong style={{ color: "#333333" }}>AI tools were used</strong> during the development of this project to assist with code generation, debugging, and implementation. All system design decisions, requirements, and testing were directed and verified by me.
          </p>
          <p
            style={{ fontFamily: "var(--font-body)", fontWeight: "300", lineHeight: "1.8", color: "#555555" }}
          >
            <em>Note: AI tools were also used for formatting and organising this portfolio presentation page to showcase the project professionally.</em>
          </p>
        </div>
      </section>
    </div>
  );
}
