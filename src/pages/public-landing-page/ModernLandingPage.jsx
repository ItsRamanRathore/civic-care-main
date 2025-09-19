import React from 'react';
import { Helmet } from 'react-helmet';
import ModernHeader from '../../components/ui/ModernHeader';
import ModernHeroSection from './components/ModernHeroSection';
import ModernStatsSection from './components/ModernStatsSection';
import RecentReportsSection from './components/RecentReportsSection';
import ModernTestimonialsSection from './components/ModernTestimonialsSection';
import TrustSignalsSection from './components/TrustSignalsSection';
import ComplaintTrackingSection from './components/ComplaintTrackingSection';
import ModernFooter from '../../components/ui/ModernFooter';

const ModernLandingPage = () => {
  // Mock current user data - in real app this would come from auth context
  const currentUser = null; // Set to null for public landing page
  const notificationCount = 0;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Civic Care - Your Voice for a Better Community | Modern Civic Reporting Platform</title>
        <meta name="description" content="Report civic issues instantly with photo evidence and GPS tracking. Track progress in real-time and help build safer neighborhoods with our modern, professional platform." />
        <meta name="keywords" content="civic reporting, community issues, pothole reporting, streetlight repair, garbage collection, municipal services, citizen engagement, smart cities, digital india" />
        <meta property="og:title" content="Civic Care - Your Voice for a Better Community" />
        <meta property="og:description" content="Modern civic reporting platform with real-time tracking, photo evidence, and GPS location. Join 50,000+ citizens building better communities." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/civic-care-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Civic Care - Modern Civic Reporting Platform" />
        <meta name="twitter:description" content="Report civic issues instantly with photo evidence and GPS tracking. Track progress in real-time." />
        
        {/* Additional SEO and performance meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="canonical" href="https://civiccare.gov.in" />
        
        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Modern Header */}
      <ModernHeader
        currentUser={currentUser}
        notificationCount={notificationCount}
      />

      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <ModernHeroSection />

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-red-600"></div>
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, fast, and effective. Report issues in just a few clicks and track their resolution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              {[
                {
                  step: '01',
                  icon: 'Camera',
                  title: 'Report Issue',
                  description: 'Take a photo, add location, and describe the civic issue you want to report.',
                  color: 'from-red-500 to-red-600'
                },
                {
                  step: '02',
                  icon: 'Send',
                  title: 'Submit & Track',
                  description: 'Submit your report and receive a unique tracking ID for real-time updates.',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  step: '03',
                  icon: 'CheckCircle',
                  title: 'Get Resolution',
                  description: 'Authorities review and resolve your issue. Get notified at every step.',
                  color: 'from-green-500 to-green-600'
                }
              ].map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2`}>
                      <Icon name={step.icon} size={32} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg font-bold text-gray-900 text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complaint Tracking Section - Preserve existing functionality */}
        <ComplaintTrackingSection />

        {/* Recent Reports Section - Preserve existing functionality */}
        <RecentReportsSection />

        {/* Community Impact Section with Animated Counters */}
        <ModernStatsSection />

        {/* Testimonials Section with Carousel */}
        <ModernTestimonialsSection />

        {/* Trust & Certification Section - Preserve existing functionality */}
        <TrustSignalsSection />

        {/* Data Security Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-red-500/10 rounded-full blur-2xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Your Data is Safe & Secure
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  We follow strict data protection protocols and comply with all Indian data privacy regulations. 
                  Your personal information is encrypted and never shared with unauthorized parties.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { icon: 'Lock', text: 'End-to-end encryption' },
                    { icon: 'Shield', text: 'GDPR & IT Act compliant' },
                    { icon: 'Eye', text: 'Complete transparency' },
                    { icon: 'UserCheck', text: 'User data control' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                        <Icon name={feature.icon} size={20} className="text-green-400" />
                      </div>
                      <span className="text-blue-100 group-hover:text-white transition-colors duration-300">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 hover:bg-white/20 transition-all duration-500 transform hover:scale-105">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Icon name="ShieldCheck" size={64} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Verified Secure</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Regular security audits and penetration testing ensure your data remains protected at all times.
                  </p>
                  
                  <div className="mt-6 flex justify-center space-x-4">
                    <div className="bg-white/10 rounded-lg px-4 py-2">
                      <div className="text-sm font-medium">256-bit</div>
                      <div className="text-xs text-blue-200">Encryption</div>
                    </div>
                    <div className="bg-white/10 rounded-lg px-4 py-2">
                      <div className="text-sm font-medium">ISO 27001</div>
                      <div className="text-xs text-blue-200">Certified</div>
                    </div>
                    <div className="bg-white/10 rounded-lg px-4 py-2">
                      <div className="text-sm font-medium">99.9%</div>
                      <div className="text-xs text-blue-200">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <ModernFooter />
    </div>
  );
};

export default ModernLandingPage;