export const languages = {
  es: 'es',
  en: 'en',
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const routes = {
  es: {
    home: '/',
    menu: '/menu/',
    reserve: '/reservar/',
    about: '/sobre-nosotros/',
    legal: '/legal/',
    privacy: '/privacidad/',
    cookies: '/cookies/',
  },
  en: {
    home: '/',
    menu: '/menu/',
    reserve: '/reserve/',
    about: '/about/',
    legal: '/legal/',
    privacy: '/privacy/',
    cookies: '/cookies/',
  },
};

export const ui = {
  es: {
    'site.title': 'Zoco Restaurante - Nuevo concepto de cocina árabe',
    'site.description':
      'Comida tradicional árabe con experiencia culinaria para una experiencia gastronómica inigualable.',
    'hero.title': 'Nuevo concepto de cocina árabe',
    'hero.btnLeft': 'Reservar mesa',
    'hero.btnRight': 'Ver carta',
    'hero.reviews': 'Más de 1200 reseñas',
    'navMain.home': 'Inicio',
    'navMain.menu': 'Menú',
    'navMain.about': 'Acerca de',
    'navLegal.legal': 'Legal',
    'navLegal.privacy': 'Privacidad',
    'navLegal.cookies': 'Cookies',
    'home.title': 'Bienvenido a Zoco Restaurant',
    'home.subtitle': 'Tu sitio web está listo para comenzar.',
    'footer.address':
      'Avenida San Francisco, 6. Centro Comercial Pasarela, Local 37-40, Los Cristianos.',
    'footer.schedule.title': 'Horario de apertura',
    'footer.schedule.hours': 'Lunes - Domingo',
    'footer.cta': '¡Esperamos su visita!',
  },
  en: {
    'site.title': 'Zoco Restaurant - New concept of Arabic cuisine',
    'site.description':
      'Traditional Arabic cuisine with a culinary experience for an unparalleled gastronomic experience.',
    'hero.title': 'New concept of Arabic cuisine',
    'hero.btnLeft': 'Book a table',
    'hero.btnRight': 'View menu',
    'hero.reviews': 'Over 1200 reviews',
    'navMain.home': 'Home',
    'navMain.menu': 'Menu',
    'navMain.about': 'About',
    'navLegal.legal': 'Legal',
    'navLegal.privacy': 'Privacy',
    'navLegal.cookies': 'Cookies',
    'home.title': 'Welcome to Zoco Restaurant',
    'home.subtitle': 'Your website is ready to go.',
    'footer.address':
      'Avenida San Francisco, 6. Centro Comercial Pasarela, Local 37-40, Los Cristianos.',
    'footer.schedule.title': 'Opening Hours',
    'footer.schedule.hours': 'Monday - Sunday',
    'footer.cta': 'We look forward to your visit!',
  },
} as const;
