
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AmenitiesList from '@/components/AmenitiesList';

const Amenities: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-center text-coastal-800">
          {t('amenities.title')}
        </h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Our house is equipped with everything you need for a comfortable and enjoyable stay.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <AmenitiesList />
        </div>
      </div>
    </div>
  );
};

export default Amenities;
