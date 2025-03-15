import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Trees } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-image h-[70vh] relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-playfair">
            {t('home.welcome')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/gallery">
              <Button size="lg" className="bg-coastal-600 hover:bg-coastal-700">
                {t('home.view_gallery')}
              </Button>
            </Link>
            <Link to="/amenities">
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white">
                {t('home.view_amenities')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6 text-coastal-800">
              {t('home.features_title')}
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              {t('home.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="amenity-card transition-transform hover:-translate-y-2">
                <div className="text-coastal-600 mb-4">
                  <MapPin className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  {t('home.feature1_title')}
                </h3>
                <p className="text-gray-600">
                  {t('home.feature1_desc')}
                </p>
              </div>
              
              <div className="amenity-card transition-transform hover:-translate-y-2">
                <div className="text-coastal-600 mb-4">
                  <Bed className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  {t('home.feature2_title')}
                </h3>
                <p className="text-gray-600">
                  {t('home.feature2_desc')}
                </p>
              </div>
              
              <div className="amenity-card transition-transform hover:-translate-y-2">
                <div className="text-coastal-600 mb-4">
                  <Trees className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  {t('home.feature3_title')}
                </h3>
                <p className="text-gray-600">
                  {t('home.feature3_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
