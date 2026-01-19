// Dati centralizzati del sito - Società Taddei

export const SITE_INFO = {
  name: 'Società Taddei',
  legalName: 'Taddei Fratelli S.n.c.',
  tagline: 'Dal materiale alla costruzione. Senza compromessi.',
  description: 'Edilizia, Magazzino Materiali e Immobiliare in Alta Valle Camonica dal 1983. Costruzioni, ristrutturazioni, centro ferro certificato.',
  foundedYear: 1983,
  url: 'https://www.societataddei.it',
  logo: '/logo-taddei.webp',
}

export const CONTACT_INFO = {
  address: {
    street: 'Via Artigiani, 44',
    city: 'Corteno Golgi',
    province: 'BS',
    cap: '25040',
    country: 'Italia',
    full: 'Via Artigiani, 44 - 25040 Corteno Golgi (BS)',
    googleMapsUrl: 'https://maps.google.com/?q=Via+Artigiani+44+Corteno+Golgi+BS',
  },
  phone: {
    display: '0364 74313',
    href: 'tel:036474313',
  },
  email: {
    main: 'costruzioni@societataddei.it',
    costruzioni: 'costruzioni@societataddei.it',
    magazzino: 'magazzino@societataddei.it',
    immobiliare: 'immobiliare@societataddei.it',
  },
  hours: {
    weekdays: 'Lun - Ven: 8:00 - 12:00 / 14:00 - 18:00',
    saturday: 'Sab: 8:00 - 12:00',
    sunday: 'Dom: Chiuso',
  },
  contacts: [
    { department: 'Costruzioni', contact: 'Taddei Antonio', email: 'costruzioni@societataddei.it' },
    { department: 'Magazzino / Ferro', contact: 'Taddei Gianluca', email: 'magazzino@societataddei.it' },
    { department: 'Consulenze Tecniche', contact: 'Geom. Taddei Nicola', email: 'immobiliare@societataddei.it' },
  ],
}

export const SEO_DATA = {
  title: 'Società Taddei | Edilizia, Materiali e Immobiliare dal 1983',
  description: 'Dal materiale alla costruzione. Senza compromessi. Edilizia, magazzino materiali e immobiliare in Alta Valle Camonica.',
  keywords: 'edilizia, costruzioni, materiali edili, immobiliare, Valle Camonica, Corteno Golgi, ristrutturazioni, centro ferro',
  ogImage: '/og-image.jpg',
  twitterHandle: '@societataddei',
}

export const LEGAL_INFO = {
  vatNumber: '', // P.IVA da inserire
  fiscalCode: '', // Codice Fiscale da inserire
  rea: '', // REA da inserire
  pec: '', // PEC da inserire
  lastUpdated: new Date().toISOString().split('T')[0],
}

export const COOKIE_CONSENT_KEY = 'taddei-fratelli-snc-cookie-consent'

export const SERVICES = [
  { name: 'Costruzioni civili', href: '/costruzioni' },
  { name: 'Ristrutturazioni', href: '/costruzioni' },
  { name: 'Centro ferro certificato', href: '/magazzino' },
  { name: 'Vendita materiali edili', href: '/magazzino' },
  { name: 'Immobili residenziali', href: '/immobiliare' },
  { name: 'Consulenza tecnica', href: '/contatti' },
]

export const NAV_LINKS = [
  { name: 'Chi Siamo', href: '/chi-siamo' },
  { name: 'Costruzioni', href: '/costruzioni' },
  { name: 'Magazzino Materiali', href: '/magazzino' },
  { name: 'Immobiliare', href: '/immobiliare' },
  { name: 'Partner', href: '/partner' },
  { name: 'Contatti', href: '/contatti' },
]
