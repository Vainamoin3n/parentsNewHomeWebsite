
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  navbar: {
    home_fr: 'Accueil',
    home_en: 'Home',
    gallery_fr: 'Galerie',
    gallery_en: 'Gallery',
    amenities_fr: 'Équipements',
    amenities_en: 'Amenities',
    booking_fr: 'Réservation',
    booking_en: 'Booking',
    location_fr: 'Emplacement',
    location_en: 'Location',
  },
  home: {
    welcome_fr: 'Bienvenue à notre maison à St-Pierre Quiberon',
    welcome_en: 'Welcome to our home in St-Pierre Quiberon',
    subtitle_fr: 'Un refuge paisible au bord de la mer en Bretagne',
    subtitle_en: 'A peaceful seaside retreat in Brittany',
    description_fr: 'Notre maison familiale secondaire vous accueille dans un quartier calme, dans une impasse privée, à 250 mètres à pied des plages de KERMAHE, du port d\'ORANGE, du centre et des commerces (idéal pour passer des vacances au bord de la mer).',
    description_en: 'Our secondary family home welcomes you in a quiet neighborhood, in a private dead-end street, 250 meters on foot from the beaches of KERMAHE, the port of ORANGE, the center and shops (ideal for spending holidays by the sea).',
    view_gallery_fr: 'Voir la galerie',
    view_gallery_en: 'View gallery',
    view_amenities_fr: 'Voir les équipements',
    view_amenities_en: 'View amenities',
    features_title_fr: 'Caractéristiques',
    features_title_en: 'Features',
    feature1_title_fr: 'Emplacement idéal',
    feature1_title_en: 'Ideal location',
    feature1_desc_fr: 'À seulement 250 mètres à pied des plages et du centre-ville',
    feature1_desc_en: 'Just 250 meters on foot from beaches and town center',
    feature2_title_fr: 'Parfait pour les familles',
    feature2_title_en: 'Perfect for families',
    feature2_desc_fr: '2 chambres pouvant accueillir jusqu\'à 6 personnes',
    feature2_desc_en: '2 bedrooms accommodating up to 6 people',
    feature3_title_fr: 'Espace extérieur',
    feature3_title_en: 'Outdoor space',
    feature3_desc_fr: 'Terrasse et jardin clos avec cabanon',
    feature3_desc_en: 'Terrace and enclosed garden with shed',
  },
  gallery: {
    title_fr: 'Galerie',
    title_en: 'Gallery',
    exterior_fr: 'Extérieur',
    exterior_en: 'Exterior',
    living_room_fr: 'Salon',
    living_room_en: 'Living Room',
    kitchen_fr: 'Cuisine',
    kitchen_en: 'Kitchen',
    bedroom_fr: 'Chambre',
    bedroom_en: 'Bedroom',
    surroundings_fr: 'Environnement',
    surroundings_en: 'Surroundings',
    caption1_fr: 'Profitez d\'une tasse de café chaude sur la terrasse',
    caption1_en: 'Enjoy a warm cup of coffee on the terrace',
    caption2_fr: 'Détendez-vous dans notre salon confortable',
    caption2_en: 'Relax in our cozy living room',
    caption3_fr: 'Préparez de délicieux repas dans la cuisine équipée',
    caption3_en: 'Prepare delicious meals in the fully equipped kitchen',
    caption4_fr: 'Réveillez-vous avec une vue imprenable',
    caption4_en: 'Wake up to breathtaking views',
    caption5_fr: 'Explorez les magnifiques plages à proximité',
    caption5_en: 'Explore the beautiful nearby beaches',
  },
  amenities: {
    title_fr: 'Équipements et Détails',
    title_en: 'Amenities & Details',
    ground_floor_fr: 'Au rez de chaussée',
    ground_floor_en: 'Ground Floor',
    first_floor_fr: 'À l\'étage',
    first_floor_en: 'First Floor',
    additional_fr: 'De plus',
    additional_en: 'Additionally',
    kitchen_fr: 'Cuisine aménagée et équipée (LL, LV, four, micro onde ..)',
    kitchen_en: 'Fully equipped kitchen (washing machine, dishwasher, oven, microwave..)',
    living_area_fr: 'Coin détente (canapé + TV)',
    living_area_en: 'Relaxation area (sofa + TV)',
    bedroom1_fr: 'Chambre avec 1 lit double en 140x190',
    bedroom1_en: 'Bedroom with 1 double bed (140x190)',
    bathroom1_fr: 'Salle d\'eau et WC',
    bathroom1_en: 'Bathroom and toilet',
    bedroom2_fr: 'Chambre avec 2 lits de 90x190',
    bedroom2_en: 'Bedroom with 2 single beds (90x190)',
    lounge_fr: 'Salle de détente (canapé + TV + lecteur DVD)',
    lounge_en: 'Lounge area (sofa + TV + DVD player)',
    toilet_fr: 'WC',
    toilet_en: 'Toilet',
    terrace_fr: 'Terrasse et jardin clos avec cabanon (vélos H/F à disposition + 1 siège enfant)',
    terrace_en: 'Terrace and enclosed garden with shed (bikes available for men/women + 1 child seat)',
    parking_fr: 'Parking à proximité',
    parking_en: 'Nearby parking',
    kayak_fr: 'Possibilité de location d\'un kayak (2 places adulte et 1 place enfant)',
    kayak_en: 'Possibility to rent a kayak (2 adult seats and 1 child seat)',
  },
  booking: {
    title_fr: 'Réservation & Contact',
    title_en: 'Booking & Contact',
    details_fr: 'Détails de réservation',
    details_en: 'Booking Details',
    dates_fr: 'Dates: D\'avril à octobre',
    dates_en: 'Dates: From April to October',
    price_fr: 'Prix: Semaine de 400 à 850 €',
    price_en: 'Price: Week from 400 to 850 €',
    capacity_fr: 'Capacité d\'accueil: 2 chambres, 5/6 personnes',
    capacity_en: 'Capacity: 2 bedrooms, 5/6 people',
    pets_fr: 'Animaux: chiens de petite taille acceptés (- de 10 kgs)',
    pets_en: 'Pets: small dogs accepted (less than 10 kg)',
    contact_message_fr: 'Nous serions ravis de vous accueillir! Contactez-nous pour réserver votre séjour ou poser des questions.',
    contact_message_en: 'We\'d love to host you! Reach out to book your stay or ask any questions.',
    form_title_fr: 'Formulaire de contact',
    form_title_en: 'Contact Form',
    name_fr: 'Nom',
    name_en: 'Name',
    email_fr: 'Email',
    email_en: 'Email',
    dates_preferred_fr: 'Dates préférées',
    dates_preferred_en: 'Preferred dates',
    message_fr: 'Message',
    message_en: 'Message',
    submit_fr: 'Envoyer',
    submit_en: 'Submit',
    alt_booking_fr: 'Autres options de réservation',
    alt_booking_en: 'Alternative booking options',
    email_contact_fr: 'Email: penty.kerjanot.56@gmail.com',
    email_contact_en: 'Email: penty.kerjanot.56@gmail.com',
    phone_fr: 'Téléphone fixe: 02 97 83 08 81',
    phone_en: 'Landline: 02 97 83 08 81',
    mobile_fr: 'Téléphone mobile: 06 30 68 07 90',
    mobile_en: 'Mobile: 06 30 68 07 90',
    faq_title_fr: 'Questions fréquentes',
    faq_title_en: 'Frequently Asked Questions',
    faq1_q_fr: 'Quelles sont les heures d\'arrivée et de départ?',
    faq1_q_en: 'What are the check-in and check-out times?',
    faq1_a_fr: 'L\'arrivée est à partir de 15h et le départ est avant 11h.',
    faq1_a_en: 'Check-in is from 3 PM and check-out is before 11 AM.',
    faq2_q_fr: 'Y a-t-il un dépôt de garantie?',
    faq2_q_en: 'Is there a security deposit?',
    faq2_a_fr: 'Oui, un dépôt de garantie de 500 € est demandé à l\'arrivée et restitué au départ si aucun dommage n\'est constaté.',
    faq2_a_en: 'Yes, a security deposit of 500 € is required upon arrival and returned at departure if no damage is found.',
    faq3_q_fr: 'Le linge de maison est-il fourni?',
    faq3_q_en: 'Is household linen provided?',
    faq3_a_fr: 'Les draps et serviettes ne sont pas fournis. Veuillez apporter les vôtres ou nous contacter à l\'avance pour la location.',
    faq3_a_en: 'Sheets and towels are not provided. Please bring your own or contact us in advance for rental.',
  },
  location: {
    title_fr: 'Emplacement & Activités à proximité',
    title_en: 'Location & Nearby Activities',
    surroundings_title_fr: 'Environs naturels',
    surroundings_title_en: 'Natural Surroundings',
    surroundings_desc_fr: 'Découvrez la beauté naturelle de la péninsule de Quiberon, avec ses sentiers côtiers spectaculaires offrant des vues imprenables sur l\'océan. Explorez la Côte Sauvage, connue pour ses formations rocheuses dramatiques et ses plages cachées.',
    surroundings_desc_en: 'Discover the natural beauty of the Quiberon peninsula, with its spectacular coastal trails offering breathtaking views of the ocean. Explore the Wild Coast, known for its dramatic rock formations and hidden beaches.',
    attractions_title_fr: 'Attractions locales',
    attractions_title_en: 'Local Attractions',
    attractions_desc_fr: 'Visitez le charmant village de St-Pierre Quiberon avec son port pittoresque. Ne manquez pas d\'explorer la ville voisine de Quiberon et ses marchés locaux. Pour les amateurs d\'histoire, l\'alignement mégalithique de Carnac n\'est qu\'à une courte distance en voiture.',
    attractions_desc_en: 'Visit the charming village of St-Pierre Quiberon with its picturesque port. Don\'t miss exploring the nearby town of Quiberon and its local markets. For history enthusiasts, the megalithic alignment of Carnac is just a short drive away.',
    dining_title_fr: 'Restaurants et cafés',
    dining_title_en: 'Dining & Cafés',
    dining_desc_fr: 'Savourez la cuisine locale dans les nombreux restaurants de fruits de mer de la région. Le restaurant "Le Petit Port" offre des plats de fruits de mer frais avec une vue sur le port. Pour un café et une pâtisserie, essayez "La Boulangerie du Port" pour des viennoiseries fraîchement cuites.',
    dining_desc_en: 'Savor local cuisine at the many seafood restaurants in the area. Le Petit Port restaurant offers fresh seafood dishes with a view of the harbor. For coffee and pastry, try La Boulangerie du Port for freshly baked pastries.',
    seasonal_title_fr: 'Points forts saisonniers',
    seasonal_title_en: 'Seasonal Highlights',
    spring_fr: 'Printemps: Profitez des sentiers de randonnée fleuris et des températures douces pour explorer la côte.',
    spring_en: 'Spring: Enjoy flowering hiking trails and mild temperatures to explore the coast.',
    summer_fr: 'Été: Le moment idéal pour profiter des plages, de la baignade et des sports nautiques.',
    summer_en: 'Summer: The perfect time to enjoy beaches, swimming and water sports.',
    autumn_fr: 'Automne: Admirez les couleurs changeantes du paysage et profitez des plages paisibles.',
    autumn_en: 'Autumn: Admire the changing colors of the landscape and enjoy peaceful beaches.',
    return_home_fr: 'Retour à l\'accueil',
    return_home_en: 'Return Home',
  },
  footer: {
    rights_fr: 'Tous droits réservés',
    rights_en: 'All rights reserved',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const langKey = `${key}_${language}`;
    
    // Split the key by dots to access nested properties
    const keyParts = langKey.split('.');
    let translationObj = translations;
    
    // Handle nested keys (e.g., 'navbar.home')
    if (keyParts.length > 1) {
      const section = keyParts[0];
      const subKey = `${keyParts[1]}_${language}`;
      return translationObj[section]?.[subKey] || langKey;
    }
    
    // Handle flat keys
    for (const section in translationObj) {
      if (translationObj[section][langKey]) {
        return translationObj[section][langKey];
      }
    }
    
    return langKey;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
