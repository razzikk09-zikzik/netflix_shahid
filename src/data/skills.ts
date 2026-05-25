export interface SkillItem {
  name: string;
  description: string;
  iconKey: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export const technicalSkills: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', description: 'General-purpose & ML scripting', iconKey: 'SiPython' },
      { name: 'JavaScript', description: 'Web & full-stack development', iconKey: 'SiJavascript' },
      { name: 'HTML', description: 'Semantic web structure', iconKey: 'SiHtml5' },
      { name: 'CSS', description: 'Styling & responsive layout', iconKey: 'SiCss3' },
      { name: 'Embedded C', description: 'Low-level MCU programming', iconKey: 'FaMicrochip' },
      { name: 'MicroPython', description: 'Python for microcontrollers', iconKey: 'SiMicropython' },
      { name: 'Verilog HDL', description: 'Hardware description language', iconKey: 'FaMicrochip' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'NumPy', description: 'Numerical computing', iconKey: 'SiNumpy' },
      { name: 'Pandas', description: 'Data analysis & manipulation', iconKey: 'SiPandas' },
      { name: 'Scikit-learn', description: 'Machine learning algorithms', iconKey: 'SiScikitlearn' },
      { name: 'TensorFlow', description: 'Deep learning fundamentals', iconKey: 'SiTensorflow' },
      { name: 'OpenCV', description: 'Computer vision processing', iconKey: 'SiOpencv' },
      { name: 'MediaPipe', description: 'ML perception pipelines', iconKey: 'FaEye' },
      { name: 'CustomTkinter', description: 'Modern Python desktop UIs', iconKey: 'SiPython' },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'Full-Stack', description: 'End-to-end web applications', iconKey: 'FaLayerGroup' },
      { name: 'Responsive Design', description: 'Mobile-first UI layouts', iconKey: 'FaMobileAlt' },
      { name: 'REST APIs', description: 'Scalable backend interfaces', iconKey: 'FaServer' },
    ],
  },
  {
    category: 'Embedded & IoT',
    skills: [
      { name: 'ATmega / 8051', description: 'Microcontroller platforms', iconKey: 'FaMicrochip' },
      { name: 'Real-Time Systems', description: 'Time-critical embedded logic', iconKey: 'FaClock' },
      { name: 'Sensor Integration', description: 'Hardware data acquisition', iconKey: 'FaSatelliteDish' },
    ],
  },
  {
    category: 'Tools & Platforms',
    skills: [
      { name: 'Git', description: 'Version control & collaboration', iconKey: 'SiGit' },
      { name: 'Jupyter', description: 'Interactive notebooks', iconKey: 'SiJupyter' },
      { name: 'MATLAB Simulink', description: 'Model-based system design', iconKey: 'FaChartLine' },
      { name: 'AWS', description: 'Cloud fundamentals', iconKey: 'FaAws' },
    ],
  },
];
