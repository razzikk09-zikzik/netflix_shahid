import { Certification } from '../types';
import nptelImg from '../images/nptelshahid.jpeg';
import arduinoImg from '../images/arduino.jpeg';
import deloitteImg from '../images/deloitte.jpeg';
import udemyImg from '../images/udemy.jpeg';
import matlabImg from '../images/matlab.jpeg';

export const certificationsData: Certification[] = [
  {
    title: 'NPTEL–SWAYAM Engineering Courses',
    issuer: 'NPTEL / SWAYAM',
    issuedDate: '',
    link: nptelImg,
    iconName: 'university',
  },
  {
    title: 'IIT Bombay Spoken Tutorial Certifications',
    issuer: 'IIT Bombay',
    issuedDate: '',
    link: arduinoImg,
    iconName: 'university',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Deloitte',
    issuedDate: '',
    link: deloitteImg,
    iconName: 'coursera',
  },
  {
    title: 'Basics & Fundamentals of Cloud Computing',
    issuer: 'Udemy',
    issuedDate: '',
    link: udemyImg,
    iconName: 'coursera',
  },
  {
    title: 'MATLAB Onramp training',
    issuer: 'MathWorks Training Services',
    issuedDate: '',
    link: matlabImg,
    iconName: 'university',
  },
];
