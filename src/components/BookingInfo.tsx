
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CalendarDays, Euro, Users, Dog, Mail, Phone } from 'lucide-react';

const BookingInfo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <div className="amenity-card">
        <h3 className="text-xl font-playfair font-semibold mb-4 text-coastal-800">
          {t('booking.details')}
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CalendarDays className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('booking.dates')}</span>
          </li>
          <li className="flex items-start">
            <Euro className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('booking.price')}</span>
          </li>
          <li className="flex items-start">
            <Users className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('booking.capacity')}</span>
          </li>
          <li className="flex items-start">
            <Dog className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('booking.pets')}</span>
          </li>
        </ul>
      </div>

      <div className="amenity-card">
        <h3 className="text-xl font-playfair font-semibold mb-4 text-coastal-800">
          {t('booking.alt_booking')}
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Mail className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('booking.email_contact')}</span>
          </li>
          <li className="flex items-start">
            <Phone className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('booking.phone')}</span>
          </li>
          <li className="flex items-start">
            <Phone className="h-5 w-5 mr-3 text-coastal-600 mt-0.5" />
            <span>{t('booking.mobile')}</span>
          </li>
        </ul>
      </div>

      <div className="amenity-card">
        <h3 className="text-xl font-playfair font-semibold mb-4 text-coastal-800">
          {t('booking.faq_title')}
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-coastal-700">{t('booking.faq1_q')}</h4>
            <p className="mt-1 text-gray-600">{t('booking.faq1_a')}</p>
          </div>
          <div>
            <h4 className="font-medium text-coastal-700">{t('booking.faq2_q')}</h4>
            <p className="mt-1 text-gray-600">{t('booking.faq2_a')}</p>
          </div>
          <div>
            <h4 className="font-medium text-coastal-700">{t('booking.faq3_q')}</h4>
            <p className="mt-1 text-gray-600">{t('booking.faq3_a')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
