import licenceMain from '../images/licence.jpg';
import licenceAlt from '../images/licence2.png';
import internshipDoc from '../images/internship.jpg';
import internshipDocAlt from '../images/internship1.jpg';
import msmeCert from '../images/msme.png';
import chickenProduct from '../images/chicken.jpg';

export interface LicenceHighlight {
  title: string;
  description: string;
}

export const shasChickenLicence = {
  startupName: 'Shas Chicken',
  tagline: 'Smart freshness detection for safer poultry',
  summary:
    'Food-tech startup built around the award-winning Smart Chicken Freshness Detection System — an IoT-enabled solution that classifies chicken freshness before and after cooking using embedded sensors and machine learning.',
  grant:
    'Secured ₹10 Lakhs GENESIS Program Grant and Hackathon Best Project award; validated as production-viable by industry judges.',
  highlights: [
    {
      title: 'GENESIS Grant Winner',
      description: '₹10 Lakhs funding for IoT poultry freshness innovation with 92% detection accuracy across 200+ samples.',
    },
    {
      title: 'Embedded + ML Pipeline',
      description: 'ATmega sensor fusion with Python classification — 35% fewer false positives vs baseline methods.',
    },
    {
      title: 'MSME & Compliance',
      description: 'Registered startup with formal licensing and documentation for commercial food-safety technology deployment.',
    },
  ] as LicenceHighlight[],
  images: [
    { src: licenceMain, caption: 'Business licence & registration' },
    { src: licenceAlt, caption: 'Startup compliance documentation' },
    { src: msmeCert, caption: 'MSME registration certificate' },
    { src: internshipDoc, caption: 'Project & venture documentation' },
    { src: internshipDocAlt, caption: 'Implementation & field validation records' },
    { src: chickenProduct, caption: 'Shas Chicken — smart freshness system' },
  ],
};
