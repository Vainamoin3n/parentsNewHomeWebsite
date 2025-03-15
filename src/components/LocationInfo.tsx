
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, TreeDeciduous, Utensils, Sun } from 'lucide-react';

const LocationInfo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <div className="amenity-card">
        <h3 className="text-xl font-playfair font-semibold mb-4 text-coastal-800 flex items-center">
          <TreeDeciduous className="h-5 w-5 mr-2 text-coastal-600" />
          {t('location.surroundings_title')}
        </h3>
        <p className="text-gray-700">
          {t('location.surroundings_desc')}
        </p>
      </div>

      <div className="amenity-card">
        <h3 className="text-xl font-playfair font-semibold mb-4 text-coastal-800 flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-coastal-600" />
          {t('location.attractions_title')}
        </h3>
        <p className="text-gray-700">
          {t('location.attractions_desc')}
        </p>
      </div>

      <div className="amenity-card">
        <h3 className="text-xl font-playfair font-semibold mb-4 text-coastal-800 flex items-center">
          <Utensils className="h-5 w-5 mr-2 text-coastal-600" />
          {t('location.dining_title')}
        </h3>
        <p className="text-gray-700">
          {t('location.dining_desc')}
        </p>
      </div>

      <div className="amenity-card">
        <h3 className="text-xl font-playfair font-semibold mb-4 text-coastal-800 flex items-center">
          <Sun className="h-5 w-5 mr-2 text-coastal-600" />
          {t('location.seasonal_title')}
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="font-medium mr-2">🌱</span>
            <span>{t('location.spring')}</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">☀️</span>
            <span>{t('location.summer')}</span>
          </li>
          <li className="flex items-start">
            <span className="font-medium mr-2">🍂</span>
            <span>{t('location.autumn')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationInfo;
