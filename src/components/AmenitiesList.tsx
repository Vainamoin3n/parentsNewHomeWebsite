
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Bed, Tv, Utensils, Bath, Bike, Car, MapPin } from 'lucide-react';

const AmenitiesList: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Ground Floor */}
      <div className="amenity-card">
        <h3 className="text-xl font-playfair font-semibold mb-4 text-coastal-800 flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-coastal-600" />
          {t('amenities.ground_floor')}
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Utensils className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('amenities.kitchen')}</span>
          </li>
          <li className="flex items-start">
            <Tv className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('amenities.living_area')}</span>
          </li>
          <li className="flex items-start">
            <Bed className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('amenities.bedroom1')}</span>
          </li>
          <li className="flex items-start">
            <Bath className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('amenities.bathroom1')}</span>
          </li>
        </ul>
      </div>

      {/* First Floor */}
      <div className="amenity-card">
        <h3 className="text-xl font-playfair font-semibold mb-4 text-coastal-800 flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-coastal-600" />
          {t('amenities.first_floor')}
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Bed className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('amenities.bedroom2')}</span>
          </li>
          <li className="flex items-start">
            <Tv className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('amenities.lounge')}</span>
          </li>
          <li className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('amenities.toilet')}</span>
          </li>
        </ul>
      </div>

      {/* Additional */}
      <div className="amenity-card">
        <h3 className="text-xl font-playfair font-semibold mb-4 text-coastal-800 flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-coastal-600" />
          {t('amenities.additional')}
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <MapPin className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('amenities.terrace')}</span>
          </li>
          <li className="flex items-start">
            <Car className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('amenities.parking')}</span>
          </li>
          <li className="flex items-start">
            <Bike className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('amenities.kayak')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AmenitiesList;
