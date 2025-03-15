
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface ImageItem {
  src: string;
  alt: string;
  caption: string;
  category: string;
}

const ImageGallery: React.FC = () => {
  const { t } = useLanguage();

  const images: ImageItem[] = [
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      alt: 'Exterior view of the house',
      caption: t('gallery.caption1'),
      category: t('gallery.exterior'),
    },
    {
      src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04',
      alt: 'Living room with comfortable seating',
      caption: t('gallery.caption2'),
      category: t('gallery.living_room'),
    },
    {
      src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      alt: 'Fully equipped kitchen',
      caption: t('gallery.caption3'),
      category: t('gallery.kitchen'),
    },
    {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      alt: 'Beautiful bedroom view',
      caption: t('gallery.caption4'),
      category: t('gallery.bedroom'),
    },
    {
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      alt: 'Surrounding nature landscape',
      caption: t('gallery.caption5'),
      category: t('gallery.surroundings'),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div key={index} className="group relative h-64 overflow-hidden rounded-lg">
          <img
            src={image.src}
            alt={image.alt}
            className="gallery-image transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
            <span className="text-xs font-semibold uppercase tracking-wider">{image.category}</span>
            <p className="mt-1">{image.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
