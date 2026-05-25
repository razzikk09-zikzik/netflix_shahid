import { Certification } from '../types';
import img1 from '../images/licence.jpg';
import img2 from '../images/msme.png';
import img3 from '../images/licence2.png';
import img4 from '../images/internship.jpg';
import img5 from '../images/internship1.jpg';
import img6 from '../images/startups.png';

export const certificationsData: Certification[] = [
  {
    title: 'AWS Cloud Computing & Cloud Security Workshop',
    issuer: 'Amazon Web Services & Deloitte',
    issuedDate: '2024',
    link: img1,
    iconName: 'aws',
  },
  {
    title: 'Diploma in Artificial Intelligence (AI Major)',
    issuer: 'Professional Certification',
    issuedDate: '',
    link: img2,
    iconName: 'university',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Deloitte',
    issuedDate: '',
    link: img3,
    iconName: 'coursera',
  },
  {
    title: 'NPTEL–SWAYAM Engineering Courses',
    issuer: 'NPTEL / SWAYAM',
    issuedDate: '',
    link: img4,
    iconName: 'university',
  },
  {
    title: 'IIT Bombay Spoken Tutorial Certifications',
    issuer: 'IIT Bombay',
    issuedDate: '',
    link: img5,
    iconName: 'university',
  },
  {
    title: 'ChatGPT Prompt Engineering (Basic)',
    issuer: 'Online Certification',
    issuedDate: '',
    link: img6,
    iconName: 'coursera',
  },
];
