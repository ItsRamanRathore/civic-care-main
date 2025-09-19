import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const ModernHeader = ({ currentUser, notificationCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationLinks = [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'Reports', path: '/public-reports-listing', icon: 'FileText' },
    { name: 'How It Works', path: '/faq', icon: 'HelpCircle' },
    { name: 'Impact', path: '/#impact', icon: 'TrendingUp' },
    { name: 'Analytics', path: '/analytics-dashboard', icon: 'BarChart3' },
    { name: 'Support', path: '/faq', icon: 'MessageCircle' }
  ];

  const isActiveLink = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
              <Icon name="Shield" size={20} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Civic Care
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Civic Reporting Platform
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                  isActiveLink(link.path)
                    ? isScrolled
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-white bg-white/20'
                    : isScrolled
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon name={link.icon} size={16} />
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-3">
                {notificationCount > 0 && (
                  <div className="relative">
                    <Icon name="Bell" size={20} className={isScrolled ? 'text-gray-700' : 'text-white'} />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notificationCount}
                    </span>
                  </div>
                )}
                <div className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                  {currentUser.name}
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`transition-all duration-300 hover:scale-105 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    size="sm"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActiveLink(link.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon name={link.icon} size={18} />
                  <span>{link.name}</span>
                </Link>
              ))}
              
              <div className="border-t border-gray-200 pt-4 space-y-3">
                {currentUser ? (
                  <div className="px-4 py-2 text-gray-700 font-medium">
                    Welcome, {currentUser.name}
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full justify-center">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full justify-center bg-red-600 hover:bg-red-700">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default ModernHeader;