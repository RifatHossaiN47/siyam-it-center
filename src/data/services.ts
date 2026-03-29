export interface Service {
  id: string;
  nameKey: string;
  icon: string;
}

export const services: Service[] = [
  { id: 'visa', nameKey: 'service.visa', icon: 'FaPassport' },
  { id: 'hotel', nameKey: 'service.hotel', icon: 'FaHotel' },
  { id: 'police', nameKey: 'service.police', icon: 'FaShieldAlt' },
  { id: 'nid', nameKey: 'service.nid', icon: 'FaIdCard' },
  { id: 'job', nameKey: 'service.job', icon: 'FaBriefcase' },
  { id: 'studio', nameKey: 'service.studio', icon: 'FaCamera' },
  { id: 'scanning', nameKey: 'service.scanning', icon: 'FaFileImage' },
  { id: 'photocopy', nameKey: 'service.photocopy', icon: 'FaCopy' },
  { id: 'etin', nameKey: 'service.etin', icon: 'FaFileInvoice' },
  { id: 'trade', nameKey: 'service.trade', icon: 'FaCertificate' },
  { id: 'plastic', nameKey: 'service.plastic', icon: 'FaCreditCard' },
  { id: 'term', nameKey: 'service.term', icon: 'FaFileAlt' },
  { id: 'ticket', nameKey: 'service.ticket', icon: 'FaPlane' },
  { id: 'passport', nameKey: 'service.passport', icon: 'FaBook' },
  { id: 'bmit', nameKey: 'service.bmit', icon: 'FaLaptopCode' },
  { id: 'birth', nameKey: 'service.birth', icon: 'FaBaby' },
  { id: 'license', nameKey: 'service.license', icon: 'FaCar' },
  { id: 'photo', nameKey: 'service.photo', icon: 'FaImage' },
  { id: 'email', nameKey: 'service.email', icon: 'FaEnvelope' },
  { id: 'printing', nameKey: 'service.printing', icon: 'FaPrint' },
  { id: 'land', nameKey: 'service.land', icon: 'FaLandmark' },
  { id: 'gd', nameKey: 'service.gd', icon: 'FaFileContract' },
  { id: 'ribbon', nameKey: 'service.ribbon', icon: 'FaAward' },
];