import internshipMain from '../images/internship.jpg';
import internshipAlt from '../images/internship1.jpg';
import rangeImg from '../images/range.png';
import msmeImg from '../images/msme.png';

export interface InternshipEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  techStack: string;
  highlights: string[];
  image: string;
}

export const internshipGallery = [internshipMain, internshipAlt, rangeImg, msmeImg];

export const internships: InternshipEntry[] = [
  {
    id: 'pantech',
    role: 'Python Full Stack Development Intern',
    company: 'PanTech eLearning Pvt. Ltd.',
    period: '2024',
    techStack: 'Python, HTML, CSS, JavaScript, REST APIs, React, Node.js, MySQL',
    highlights: [
      'Completed a Python Full Stack Development internship at PanTech eLearning Pvt. Ltd., gaining hands-on experience in frontend, backend, and web application development.',
      'Developed and deployed 3 responsive web applications.',
      'Integrated backend REST APIs and reduced average page load time by 25%.',
      'Delivered a capstone e-commerce module as the final project.',
    ],
    image: msmeImg,
  },
  {
    id: 'rtech',
    role: 'Embedded Systems Intern',
    company: 'R-Tech Pvt. Ltd., Tambaram',
    period: '2023',
    techStack: '8051, ATmega, Embedded C, Oscilloscope, Logic Analyser',
    highlights: [
      'Programmed and tested 8051 and ATmega-based modules for industrial sensor interfacing.',
      'Debugged hardware faults using oscilloscope and logic analyser.',
      'Reduced board fault rate by 20%.',
    ],
    image: internshipAlt,
  },
  {
    id: 'rane',
    role: 'R&D Intern',
    company: 'Rane Power Steering Systems Pvt. Ltd.',
    period: '2022',
    techStack: 'ECU Testing, Documentation, Quality Analysis',
    highlights: [
      'Tested and documented power steering ECU behaviour under simulated load.',
      'Compiled structured reports for component qualification decisions.',
    ],
    image: rangeImg,
  },
];
