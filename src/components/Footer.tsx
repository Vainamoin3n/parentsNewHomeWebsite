
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coastal-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Kerjanot</h3>
            <p className="mb-2">St-Pierre Quiberon, Morbihan, France</p>
            <p className="mb-4">© {currentYear} Kerjanot. {t('footer.rights')}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-coastal-300 transition-colors">{t('navbar.home')}</Link></li>
              <li><Link to="/gallery" className="hover:text-coastal-300 transition-colors">{t('navbar.gallery')}</Link></li>
              <li><Link to="/amenities" className="hover:text-coastal-300 transition-colors">{t('navbar.amenities')}</Link></li>
              <li><Link to="/booking" className="hover:text-coastal-300 transition-colors">{t('navbar.booking')}</Link></li>
              <li><Link to="/location" className="hover:text-coastal-300 transition-colors">{t('navbar.location')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                <span>penty.kerjanot.56@gmail.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                <span>02 97 83 08 81 / 06 30 68 07 90</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span>St-Pierre Quiberon, Morbihan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
