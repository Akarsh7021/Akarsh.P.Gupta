import { Github, Linkedin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section
      className="py-20 px-6"
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section divider title */}
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
            Contact
          </h2>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#d0d0d0' }} />
        </div>

        <div className="text-center">
          <p
            className="mb-8 max-w-lg mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              fontWeight: '300',
              color: '#555555',
              lineHeight: '1.8'
            }}
          >
            I am currently seeking employment, and I would appreciate it if you
            could contact me with any available job opportunities.
          </p>

          {/* Contact Information */}
          <div className="mb-10 space-y-4">
            {/* Phone */}
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" style={{ color: '#555555' }} />
              <a
                href="tel:7786807021"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: '400',
                  fontSize: '1rem',
                  color: '#111111'
                }}
                className="hover:opacity-60 transition-opacity"
              >
                778-680-7021
              </a>
            </div>

            {/* Emails */}
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" style={{ color: '#555555' }} />
              <div className="flex flex-wrap items-center justify-center gap-2">
                <a
                  href="mailto:akarsh.gupta@student.kpu.ca"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: '400',
                    fontSize: '1rem',
                    color: '#111111'
                  }}
                  className="hover:opacity-60 transition-opacity"
                >
                  akarsh.gupta@student.kpu.ca
                </a>
                <span style={{ color: '#cccccc' }}>•</span>
                <a
                  href="mailto:akarshgupta7021@gmail.com"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: '400',
                    fontSize: '1rem',
                    color: '#111111'
                  }}
                  className="hover:opacity-60 transition-opacity"
                >
                  akarshgupta7021@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-5 mb-5">
            <a
              href="https://github.com/Akarsh7021"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#555555' }}
              className="transition-colors hover:opacity-60"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/akarshgupta7021"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#555555' }}
              className="transition-colors hover:opacity-60"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: '300',
              color: '#aaaaaa'
            }}
          >
            Akarsh.P.Gupta · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
