import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Agent (Seasonal, Part Time)",
      company: "Geek Squad, Best Buy",
      location: "Surrey, BC",
      period: "Oct 2025 - Dec 2025",
      description: "Provided technical support and troubleshooting services for customers, diagnosing hardware and software issues while ensuring high customer satisfaction.",
      achievements: [
        "Assisted customers with hardware and software diagnostics, resolving 95%+ of device issues independently",
        "Supported installation and setup of computers, peripherals, improving setup efficiency by 30%",
        "Collaborated with senior technicians to maintain service quality and ensure client satisfaction",
        "Contributed to reduced equipment tracking and no time completion of repair requests"
      ],
      technologies: ["Windows", "macOS", "Hardware Diagnostics", "Customer Service", "Technical Support"]
    },
    {
      title: "Team Member",
      company: "Tim Hortons",
      location: "Surrey, BC",
      period: "Present",
      description: "Delivered exceptional customer service in a fast-paced environment while training new team members and maintaining operational excellence. Developed strong communication and problem-solving skills through high-volume service delivery and team collaboration.",
      achievements: [
        "Trained and mentored 6+ new employees, improving service consistency and efficiency",
        "Helped achieve Top 10 Best Head Office Performance and 100% operational standards compliance",
        "Prepared orders quickly to maintain peak hours service flow",
        "Enhanced customer satisfaction through prompt issue resolution and teamwork during high-volume hours"
      ],
      technologies: ["Leadership", "Team Collaboration", "Customer Service", "Time Management", "Training & Mentoring"]
    }
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
            Experience
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
            My professional journey and contributions to various workplaces and environments.
          </p>
        </div>

        <SectionDivider title="Work History" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-xl p-8"
              style={{ backgroundColor: '#ffffff', border: '1px solid #e8e8e8' }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3
                    className="mb-1"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '700', color: '#111111' }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: '400', color: '#444444' }}
                  >
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 mt-4 md:mt-0 md:items-end">
                  <div className="flex items-center gap-1.5" style={{ color: '#888888' }}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: '300' }}>
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5" style={{ color: '#888888' }}>
                    <MapPin className="w-3.5 h-3.5" />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', fontWeight: '300' }}>
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: '#eeeeee', marginBottom: '16px' }} />

              <p
                className="mb-4"
                style={{ fontFamily: 'var(--font-body)', lineHeight: '1.7', fontWeight: '300', color: '#555555' }}
              >
                {exp.description}
              </p>

              <div className="mb-5">
                <h4
                  className="mb-2 flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: '700', color: '#333333' }}
                >
                  <Briefcase className="w-4 h-4" style={{ color: '#888888' }} />
                  Key Achievements
                </h4>
                <ul className="space-y-1.5 ml-6">
                  {exp.achievements.map((a, i) => (
                    <li
                      key={i}
                      style={{ fontFamily: 'var(--font-body)', fontWeight: '300', color: '#555555', fontSize: '0.875rem' }}
                    >
                      · {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.78rem',
                      fontWeight: '300',
                      backgroundColor: '#f0f0f0',
                      color: '#555555',
                      border: '1px solid #e0e0e0'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
