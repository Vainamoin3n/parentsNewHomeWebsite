
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ContactForm from '@/components/ContactForm';
import BookingInfo from '@/components/BookingInfo';

const Booking: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-center text-coastal-800">
          {t('booking.title')}
        </h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          {t('booking.contact_message')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <ContactForm />
          </div>
          <div>
            <BookingInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
