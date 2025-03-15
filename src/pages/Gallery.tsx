
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ImageGallery from '@/components/ImageGallery';

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-center text-coastal-800">
          {t('gallery.title')}
        </h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Explore our cozy house and its beautiful surroundings through our photo gallery.
        </p>
        
        <div className="mt-8">
          <ImageGallery />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
