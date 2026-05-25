import React from 'react';
import './Projects.css';
import {
  FaPython,
  FaMicrochip,
  FaAws,
} from 'react-icons/fa';
import {
  SiOpencv,
  SiScikitlearn,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';
import { projectsData } from '../data/projects';

const techIcons: Record<string, JSX.Element> = {
  Python: <FaPython />,
  'Embedded C': <FaMicrochip />,
  ATmega: <FaMicrochip />,
  IoT: <FaMicrochip />,
  'Sensor Fusion': <FaMicrochip />,
  'Scikit-learn': <SiScikitlearn />,
  OpenCV: <SiOpencv />,
  MediaPipe: <FaPython />,
  CustomTkinter: <FaPython />,
  NumPy: <FaPython />,
  Minimax: <FaPython />,
  'Motor Control': <FaMicrochip />,
  Sensors: <FaMicrochip />,
  MATLAB: <FaPython />,
  Simulink: <FaPython />,
  'Signal Processing': <FaPython />,
  JavaScript: <SiJavascript />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  AWS: <FaAws />,
};

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-page-title">Featured Projects</h1>
      <p className="projects-page-subtitle">
        Award-winning IoT, ML, embedded, and full-stack work from my portfolio
      </p>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={project.title}
            className="project-card"
            style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={project.image.url} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.split(', ').map((tech) => (
                  <span key={tech} className="tech-badge">
                    {techIcons[tech] ?? '🔧'} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
