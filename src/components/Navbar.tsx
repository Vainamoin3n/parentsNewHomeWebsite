
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-coastal-600" />
            <span className="text-xl font-playfair font-semibold text-coastal-800">Kerjanot</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium hover:text-coastal-600 transition-colors ${
                isActive('/') ? 'text-coastal-600' : 'text-gray-700'
              }`}
            >
              {t('navbar.home')}
            </Link>
            <Link
              to="/gallery"
              className={`font-medium hover:text-coastal-600 transition-colors ${
                isActive('/gallery') ? 'text-coastal-600' : 'text-gray-700'
              }`}
            >
              {t('navbar.gallery')}
            </Link>
            <Link
              to="/amenities"
              className={`font-medium hover:text-coastal-600 transition-colors ${
                isActive('/amenities') ? 'text-coastal-600' : 'text-gray-700'
              }`}
            >
              {t('navbar.amenities')}
            </Link>
            <Link
              to="/booking"
              className={`font-medium hover:text-coastal-600 transition-colors ${
                isActive('/booking') ? 'text-coastal-600' : 'text-gray-700'
              }`}
            >
              {t('navbar.booking')}
            </Link>
            <Link
              to="/location"
              className={`font-medium hover:text-coastal-600 transition-colors ${
                isActive('/location') ? 'text-coastal-600' : 'text-gray-700'
              }`}
            >
              {t('navbar.location')}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="ml-4 p-2 text-gray-700 hover:text-coastal-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 bg-white animate-fade-in">
            <Link
              to="/"
              className={`block py-2 px-4 font-medium hover:bg-coastal-50 ${
                isActive('/') ? 'text-coastal-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.home')}
            </Link>
            <Link
              to="/gallery"
              className={`block py-2 px-4 font-medium hover:bg-coastal-50 ${
                isActive('/gallery') ? 'text-coastal-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.gallery')}
            </Link>
            <Link
              to="/amenities"
              className={`block py-2 px-4 font-medium hover:bg-coastal-50 ${
                isActive('/amenities') ? 'text-coastal-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.amenities')}
            </Link>
            <Link
              to="/booking"
              className={`block py-2 px-4 font-medium hover:bg-coastal-50 ${
                isActive('/booking') ? 'text-coastal-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.booking')}
            </Link>
            <Link
              to="/location"
              className={`block py-2 px-4 font-medium hover:bg-coastal-50 ${
                isActive('/location') ? 'text-coastal-600' : 'text-gray-700'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('navbar.location')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
