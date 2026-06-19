import { CheckCircle, AlertTriangle, Cloud, Shield, Database, Users } from "lucide-react";
import { ImageWithFallback } from "../components/media/ImageWithFallback";
import { serverManagerImage, ntfsPermissionsImage, sharepointActiveSitesImage, financeSiteImage, financeGroupMembershipImage, accessDeniedImage, financeDocumentLibraryImage, advancedSharingImage } from "../../assets/images";

const CLOUD_BLUE = "#1E40AF";
const CLOUD_BLUE_LIGHT = "#3B82F6";

export default function CloudMigrationPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#ffffff' }} className="py-20 px-6">
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
                Cloud File Server Migration to Microsoft 365 & SharePoint Online
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
                This project demonstrates the migration of a traditional on-premises file server environment to a secure cloud-based infrastructure using Microsoft 365 and SharePoint Online.
              </p>
              <p
                className="text-lg"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: '300',
                  lineHeight: '1.8',
                  color: '#555555'
                }}
              >
                The objective was to design a structured identity system, implement department-level access control, and securely migrate organizational data while enforcing strict role-based access policies.
              </p>
            </div>

            {/* Cloud Architecture Card */}
            <div style={{ backgroundColor: '#f9f9f9', borderColor: CLOUD_BLUE_LIGHT }} className="border-2 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Cloud className="w-8 h-8" style={{ color: CLOUD_BLUE }} />
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
                  <Users className="w-5 h-5 flex-shrink-0" style={{ color: CLOUD_BLUE }} />
                  <span>Identity & User Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 flex-shrink-0" style={{ color: CLOUD_BLUE }} />
                  <span>Role-Based Access Control</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 flex-shrink-0" style={{ color: CLOUD_BLUE }} />
                  <span>Secure Data Migration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: CLOUD_BLUE }} />
                  <span>Security Validation Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* On-Prem Infrastructure (Before Migration) */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="mb-12 text-center"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
          >
            On-Prem Infrastructure (Before Migration)
          </h2>

          {/*  Windows Server Configuration */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3
                  className="mb-4 flex items-center gap-2"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#111111'
                  }}
                >
                  <span className="text-2xl"></span> Windows Server Configuration
                </h3>
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
                  The initial environment consisted of a Windows Server-based file server hosting department-specific shared folders.
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: '300',
                    lineHeight: '1.8',
                    fontSize: '1.125rem',
                    color: '#555555'
                  }}
                >
                  NTFS permissions were configured to restrict access based on departmental roles.
                </p>
              </div>

              {/* Image Card */}
              <div style={{ backgroundColor: '#ffffff', borderColor: CLOUD_BLUE_LIGHT }} className="rounded-2xl shadow-lg overflow-hidden border-2">
                <div style={{ backgroundColor: '#f9f9f9' }} className="px-6 py-4">
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#111111'
                    }}
                  >
                    On-Prem File Server Structure
                  </h4>
                </div>
                <div className="p-6">
                  <ImageWithFallback
                    src={serverManagerImage}
                    alt="Windows Server File Structure"
                    className="rounded-lg h-[28rem] w-full object-contain bg-gray-900/50"
                  />
                  <p
                    className="mt-4 text-sm text-center"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.6', color: '#777777' }}
                  >
                    Windows Server Manager - Active Directory Users and Computers with department folders
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  NTFS Permission Configuration */}
          <div className="max-w-4xl mx-auto text-center">
            <h3
              className="mb-4 flex items-center justify-center gap-2"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2rem',
                fontWeight: '700',
                color: '#111111'
              }}
            >
              <span className="text-2xl"></span> NTFS Permission Configuration
            </h3>
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
              Folder-level NTFS permissions were configured to enforce department-level access control.
            </p>
            <p
              className="mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: '300',
                lineHeight: '1.8',
                fontSize: '1.125rem',
                color: '#555555'
              }}
            >
              Finance users were granted access exclusively to the Finance directory, while other departments were restricted.
            </p>

            {/* Single Centered Image Card */}
            <div style={{ backgroundColor: '#ffffff', borderColor: CLOUD_BLUE_LIGHT }} className="rounded-2xl shadow-lg overflow-hidden border-2">
              <div style={{ backgroundColor: '#f9f9f9' }} className="px-6 py-4">
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#111111'
                  }}
                >
                  NTFS Permission Enforcement
                </h4>
              </div>
              <div className="p-6">
                <ImageWithFallback
                  src={advancedSharingImage}
                  alt="Windows Advanced Sharing Configuration"
                  className="rounded-lg h-[28rem] w-full object-contain bg-white"
                />
                <p
                  className="mt-4 text-sm text-center"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.6', color: '#777777' }}
                >
                  CorpData folder Advanced Sharing configuration showing Network File and Folder Sharing with permissions settings for department access control
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity & User Architecture */}
      <section className="py-16 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                Identity & User Architecture
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
                A structured identity system was designed within Microsoft 365 Admin Center.
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
                Separate user accounts were created for general employees and department-specific roles (Finance, Sales, IT, Management).
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: '300',
                  lineHeight: '1.8',
                  fontSize: '1.125rem',
                  color: '#555555'
                }}
              >
                Microsoft 365 Business licenses were assigned to enable SharePoint and cloud collaboration services.
              </p>
            </div>

            {/* Image Card */}
            <div style={{ backgroundColor: '#ffffff', borderColor: CLOUD_BLUE_LIGHT }} className="rounded-2xl shadow-lg overflow-hidden border-2">
              <div style={{ backgroundColor: '#f9f9f9' }} className="px-6 py-4">
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#111111'
                  }}
                >
                  User & License Configuration
                </h3>
              </div>
              <div className="p-6">
                <ImageWithFallback
                  src={ntfsPermissionsImage}
                  alt="Microsoft 365 Admin Center"
                  className="rounded-lg h-[28rem] w-full object-contain bg-gray-900/50"
                />
                <p
                  className="mt-4 text-sm text-center"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.6', color: '#777777' }}
                >
                  On-premises server configuration with Finance group permissions before cloud migration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SharePoint Site Architecture */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
          >
            SharePoint Site Architecture
          </h2>
          <p
            className="mb-4 max-w-3xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              fontSize: '1.125rem',
              color: '#555555'
            }}
          >
            Department-specific SharePoint Team Sites were created and connected to Microsoft 365 Groups to ensure structured collaboration and permission management.
          </p>
          <p
            className="mb-12 max-w-3xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              fontSize: '1.125rem',
              color: '#555555'
            }}
          >
            Each department operates within its own secure environment.
          </p>

          {/* Large Image Card */}
          <div style={{ backgroundColor: '#ffffff', borderColor: CLOUD_BLUE_LIGHT }} className="rounded-2xl shadow-lg overflow-hidden border-2">
            <div style={{ backgroundColor: '#f9f9f9' }} className="px-6 py-4">
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#111111'
                }}
              >
                Department Site Structure
              </h3>
            </div>
            <div className="p-6">
              <ImageWithFallback
                src={sharepointActiveSitesImage}
                alt="SharePoint Active Sites"
                className="rounded-lg h-[30rem] w-full object-contain bg-gray-900/50"
              />
              <p
                className="mt-4"
                style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.6', color: '#777777' }}
              >
                SharePoint Admin Center showing active department sites: Finance, HR, Public, Sales, and All Company communication site
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Department Configuration */}
      <section className="py-16 px-6" style={{ backgroundColor: '#ffffff' }}>
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
            Finance Department Configuration
          </h2>
          <p
            className="mb-4 max-w-3xl mx-auto text-center"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              fontSize: '1.125rem',
              color: '#555555'
            }}
          >
            The Finance site was configured with restricted access permissions.
          </p>
          <p
            className="mb-4 max-w-3xl mx-auto text-center"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              fontSize: '1.125rem',
              color: '#555555'
            }}
          >
            Default broad access groups were removed to enforce strict role-based access control (RBAC).
          </p>
          <p
            className="mb-12 max-w-3xl mx-auto text-center"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              fontSize: '1.125rem',
              color: '#555555'
            }}
          >
            Only Finance group members were granted access to the site and its document libraries.
          </p>

          {/* Two Cards Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div style={{ backgroundColor: '#ffffff', borderColor: CLOUD_BLUE_LIGHT }} className="rounded-2xl shadow-lg overflow-hidden border-2">
              <div style={{ backgroundColor: '#f9f9f9' }} className="px-6 py-4">
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#111111'
                  }}
                >
                  Finance Site Interface
                </h3>
              </div>
              <div className="p-6">
                <ImageWithFallback
                  src={financeSiteImage}
                  alt="Finance Site Homepage"
                  className="rounded-lg h-[24rem] w-full object-contain bg-gray-900/50"
                />
                <p
                  className="mt-4 text-sm text-center"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.6', color: '#777777' }}
                >
                  Finance SharePoint site homepage with Documents, News, Activity sections and Quick links
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ backgroundColor: '#ffffff', borderColor: CLOUD_BLUE_LIGHT }} className="rounded-2xl shadow-lg overflow-hidden border-2">
              <div style={{ backgroundColor: '#f9f9f9' }} className="px-6 py-4">
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#111111'
                  }}
                >
                  Permission Configuration
                </h3>
              </div>
              <div className="p-6">
                <ImageWithFallback
                  src={financeGroupMembershipImage}
                  alt="Finance Group Membership Configuration"
                  className="rounded-lg h-[24rem] w-full object-contain bg-white"
                />
                <p
                  className="mt-4 text-sm text-center"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.6', color: '#777777' }}
                >
                  Finance Microsoft 365 Group membership showing Akarsh Gupta and Finance users with restricted access
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Validation - Highlighted Section */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="mb-4 text-center"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#111111'
            }}
          >
            Security Validation & Access Isolation
          </h2>
          <p
            className="mb-4 max-w-3xl mx-auto text-center"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              fontSize: '1.125rem',
              color: '#555555'
            }}
          >
            Cross-department access testing was performed to validate security segmentation.
          </p>
          <p
            className="mb-4 max-w-3xl mx-auto text-center"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              fontSize: '1.125rem',
              color: '#555555'
            }}
          >
            Users outside the Finance group attempted to access the Finance site and were correctly denied access.
          </p>
          <p
            className="mb-12 max-w-3xl mx-auto text-center"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              fontSize: '1.125rem',
              color: '#555555'
            }}
          >
            This confirmed proper implementation of access isolation and department-level security boundaries.
          </p>

          {/* Centered Image Card */}
          <div className="max-w-3xl mx-auto rounded-2xl shadow-lg overflow-hidden border-2" style={{ backgroundColor: '#ffffff', borderColor: CLOUD_BLUE_LIGHT }}>
            <div style={{ backgroundColor: '#f9f9f9' }} className="px-6 py-4">
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#111111'
                }}
              >
                Access Denied Validation Test
              </h3>
            </div>
            <div className="p-6">
              <ImageWithFallback
                src={accessDeniedImage}
                alt="Sales Site Access Denied - 404 File Not Found"
                className="rounded-lg h-[26rem] w-full object-contain bg-white"
              />
              <p
                className="mt-4 font-semibold text-center"
                style={{ fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: '1.125rem', color: '#333333' }}
              >
                ✓ Finance user attempting to access Sales site receives 404 FILE NOT FOUND error, confirming access isolation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Migration Execution */}
      <section className="py-16 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Card Left */}
            <div style={{ backgroundColor: '#ffffff', borderColor: CLOUD_BLUE_LIGHT }} className="rounded-2xl shadow-lg overflow-hidden border-2">
              <div style={{ backgroundColor: '#f9f9f9' }} className="px-6 py-4">
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#111111'
                  }}
                >
                  Finance Document Library
                </h3>
              </div>
              <div className="p-6">
                <ImageWithFallback
                  src={financeDocumentLibraryImage}
                  alt="Finance Document Upload from Local Drive"
                  className="rounded-lg h-[28rem] w-full object-contain bg-white"
                />
                <p
                  className="mt-4 text-sm text-center"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: '300', lineHeight: '1.6', color: '#777777' }}
                >
                  File upload dialog showing Document-Finance and Tax Return files being migrated from local Finance Drive (F:) to SharePoint
                </p>
              </div>
            </div>

            {/* Text Right */}
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
                Data Migration Execution
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
                Department files were uploaded into their respective SharePoint document libraries.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: '300',
                  lineHeight: '1.8',
                  fontSize: '1.125rem',
                  color: '#555555'
                }}
              >
                File access and upload functionality were validated using department-specific accounts to ensure operational readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <AlertTriangle className="w-12 h-12 flex-shrink-0 mt-2" style={{ color: CLOUD_BLUE }} />
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
                Challenges & Solutions
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
                During deployment, site membership synchronization delays were encountered.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: '300',
                  lineHeight: '1.8',
                  fontSize: '1.125rem',
                  color: '#555555'
                }}
              >
                This was resolved by verifying license provisioning and managing access through Microsoft 365 Group membership instead of direct site-level assignments. This approach ensured stable and scalable permission management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Outcome */}
      <section className="py-16 px-6 border-t-2" style={{ backgroundColor: '#ffffff', borderColor: '#e8e8e8' }}>
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
            The organization successfully transitioned from a traditional file-share infrastructure to a secure cloud-based SharePoint Online environment.
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
            Department-level separation was enforced, data was migrated securely, and role-based access control was validated through structured testing.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              fontSize: '1.125rem',
              color: '#555555'
            }}
          >
            The project demonstrates practical cloud administration, identity management, and enterprise security implementation.
          </p>
        </div>
      </section>

      {/* AI Assistance Disclosure */}
      <section className="py-12 px-6 border-t" style={{ backgroundColor: '#f5f5f5', borderColor: '#e8e8e8' }}>
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
            AI-Assisted Development
          </h3>
          <p
            className="mb-3"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              color: '#777777'
            }}
          >
            Portions of the planning structure, documentation refinement, and project presentation formatting were developed with the assistance of AI tools.
          </p>
          <p
            className="mb-3"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              color: '#777777'
            }}
          >
            AI was used to help organize the technical workflow, refine documentation language, and structure the portfolio case study professionally.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: '300',
              lineHeight: '1.8',
              color: '#777777'
            }}
          >
            All technical configuration, testing, and implementation tasks were performed independently.
          </p>
        </div>
      </section>
    </div>
  );
}
