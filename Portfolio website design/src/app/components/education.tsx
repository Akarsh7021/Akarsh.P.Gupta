import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Kwantlen Polytechnic University",
      period: "Sept 2023 - Present",
      description: "Focused on software development, data structures, algorithms, web technologies, database management systems, and networking. Hands-on experience in building IT solutions and troubleshooting.",
      achievements: [
        "Completed 4+ major projects including Library Management System",
        "Proficient in LAN/WAN setup and network troubleshooting",
        "Strong foundation in web development, database design, Networking & IT Support",
        "Earned Dean's Honour Roll in Summer 2025 & Fall 2025"
      ]
    }
  ];

  const courses = [
    { name: "Data Structures & Algorithms", grade: "A+" },
    { name: "Web Development", grade: "B+" },
    { name: "Database Systems", grade: "A+" },
    { name: "Program Structure & Design II", grade: "A" },
    { name: "Computer Networks", grade: "A" },
    { name: "Server Operating Systems", grade: "A" },
    { name: "System Development Project", grade: "A" },
    { name: "IT Support & Troubleshooting", grade: "A" }
  ];

  const certifications = [
    { title: "Microsoft IT Support Specialist Professional", issuer: "Coursera", date: "Feb 2026" },
    { title: "CCNA: Introduction to Networks", issuer: "CISCO Networking Academy", date: "May – Jul 2024" },
    { title: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "CISCO Networking Academy", date: "Sep – Dec 2024" },
    { title: "ACL Multiplied Network Associate", issuer: "Aviatrix", date: "Nov 2025" }
  ];

  const SectionDivider = ({ title }: { title: string }) => (
    <div className="flex items-center gap-5 mb-10">
      <div style={{ flex: 1, height: '1px', backgroundColor: '#d0d0d0' }} />
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: '700', color: '#111111', whiteSpace: 'nowrap' }}>
        {title}
      </h2>
      <div style={{ flex: 1, height: '1px', backgroundColor: '#d0d0d0' }} />
    </div>
  );

  return (
    <section
      className="min-h-[calc(100vh-5rem)] py-20 px-6"
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              fontWeight: '700',
              color: '#111111'
            }}
          >
            Education
          </h1>
          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: '1.8',
              fontWeight: '300',
              color: '#666666'
            }}
          >
            My academic journey and achievements in Information Technology.
          </p>
        </div>

        {/* Academic Background */}
        <div className="mb-16">
          <SectionDivider title="Academic Background" />
          {education.map((edu, index) => (
            <div
              key={index}
              className="rounded-xl p-8"
              style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}
            >
              <h3
                className="mb-1"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '700', color: '#111111' }}
              >
                {edu.degree}
              </h3>
              <p
                className="mb-1"
                style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: '400', color: '#444444' }}
              >
                {edu.institution}
              </p>
              <p
                className="mb-5"
                style={{ fontFamily: 'var(--font-body)', fontWeight: '300', color: '#888888', fontSize: '0.9rem' }}
              >
                {edu.period}
              </p>
              <div style={{ height: '1px', backgroundColor: '#eeeeee', marginBottom: '20px' }} />
              <p
                className="mb-6"
                style={{ fontFamily: 'var(--font-body)', lineHeight: '1.7', fontWeight: '300', color: '#555555' }}
              >
                {edu.description}
              </p>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#888888' }} />
                <div>
                  <h4
                    className="mb-3"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: '700', color: '#333333' }}
                  >
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((a, i) => (
                      <li key={i} style={{ fontFamily: 'var(--font-body)', fontWeight: '300', color: '#555555', fontSize: '0.9rem' }}>
                        · {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Coursework */}
        <div className="mb-16">
          <SectionDivider title="Relevant Coursework" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="p-4 rounded-lg relative"
                style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8', minHeight: '80px', display: 'flex', flexDirection: 'column' }}
              >
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: '300', color: '#444444', fontSize: '0.875rem', marginBottom: 'auto', paddingBottom: '8px' }}>
                  {course.name}
                </p>
                <span
                  className="inline-block px-2 py-0.5 rounded text-sm"
                  style={{ backgroundColor: '#111111', color: '#ffffff', fontFamily: 'var(--font-body)', fontWeight: '400', fontSize: '0.75rem', width: 'fit-content' }}
                >
                  {course.grade}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <SectionDivider title="Certifications" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-xl"
                style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}
              >
                <h4
                  className="mb-2"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: '700', color: '#111111' }}
                >
                  {cert.title}
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: '300', color: '#555555', fontSize: '0.875rem' }}>
                  {cert.issuer}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: '300', color: '#999999', marginTop: '4px' }}>
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
