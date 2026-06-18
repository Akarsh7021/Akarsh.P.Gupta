import { Link, useLocation } from "react-router";

export function Navigation() {
  const location = useLocation();

  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'All Projects', path: '/projects' }
  ];

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderBottom: '1px solid #e0e0e0' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
          >
            Akarsh.P.Gupta
          </div>

          <div className="flex gap-1">
            {tabs.map((tab) => (
              <Link
                key={tab.path}
                to={tab.path}
                className="px-6 py-2 rounded-lg transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: '300',
                  letterSpacing: '0.02em',
                  backgroundColor: location.pathname === tab.path ? '#111111' : 'transparent',
                  color: location.pathname === tab.path ? '#ffffff' : '#444444'
                }}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
