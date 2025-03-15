
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LocationInfo from '@/components/LocationInfo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Location: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-center text-coastal-800">
          {t('location.title')}
        </h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Discover the beautiful surroundings and activities to enjoy during your stay.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <LocationInfo />
          
          <div className="mt-12 text-center">
            <Link to="/">
              <Button className="bg-coastal-600 hover:bg-coastal-700">
                <Home className="mr-2 h-4 w-4" />
                {t('location.return_home')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
