import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="mb-6"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '4rem',
            lineHeight: '1.2',
            fontWeight: '700',
            color: '#111111'
          }}
        >
          Akarsh.P.Gupta
        </h1>

        <p
          className="mb-8"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            fontWeight: '300',
            color: '#555555'
          }}
        >
          Information Technology Student
        </p>

        <p
          className="mb-12 max-w-2xl mx-auto"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.125rem',
            lineHeight: '1.8',
            fontWeight: '300',
            color: '#777777'
          }}
        >
          Welcome to my portfolio. I'm a BTech student with hands-on experience in desktop support,
          troubleshooting, and user-focused technical assistance. Skilled in installing, configuring,
          and maintaining computer hardware and software to ensure efficient IT operations.
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Akarsh7021"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: '#555555' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#111111')}
            onMouseLeave={e => (e.currentTarget.style.color = '#555555')}
            aria-label="GitHub"
          >
            <Github className="w-8 h-8" />
          </a>

          <a
            href="https://www.linkedin.com/in/akarshgupta7021"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: '#555555' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#111111')}
            onMouseLeave={e => (e.currentTarget.style.color = '#555555')}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8" />
          </a>

          <a
            href="mailto:akarsh.gupta@student.kpu.ca"
            className="transition-colors"
            style={{ color: '#555555' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#111111')}
            onMouseLeave={e => (e.currentTarget.style.color = '#555555')}
            aria-label="Email"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
