import React from 'react';
import './Skills.css';
import { technicalSkills } from '../data/skills';
import {
  FaAws,
  FaMicrochip,
  FaCode,
  FaLayerGroup,
  FaMobileAlt,
  FaServer,
  FaClock,
  FaSatelliteDish,
  FaEye,
  FaChartLine,
} from 'react-icons/fa';
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMicropython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiOpencv,
  SiGit,
  SiJupyter,
} from 'react-icons/si';

const iconMap: Record<string, JSX.Element> = {
  SiPython: <SiPython />,
  SiJavascript: <SiJavascript />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiMicropython: <SiMicropython />,
  SiNumpy: <SiNumpy />,
  SiPandas: <SiPandas />,
  SiScikitlearn: <SiScikitlearn />,
  SiTensorflow: <SiTensorflow />,
  SiOpencv: <SiOpencv />,
  SiGit: <SiGit />,
  SiJupyter: <SiJupyter />,
  FaChartLine: <FaChartLine />,
  FaAws: <FaAws />,
  FaMicrochip: <FaMicrochip />,
  FaLayerGroup: <FaLayerGroup />,
  FaMobileAlt: <FaMobileAlt />,
  FaServer: <FaServer />,
  FaClock: <FaClock />,
  FaSatelliteDish: <FaSatelliteDish />,
  FaEye: <FaEye />,
};

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-page-title">Technical Skills</h1>
      <p className="skills-page-subtitle">
        Languages, frameworks, embedded systems, and platforms I work with
      </p>

      {technicalSkills.map((group, index) => (
        <div key={group.category} className="skill-category" style={{ animationDelay: `${index * 0.1}s` }}>
          <h2 className="category-title">{group.category}</h2>
          <div className="skills-grid">
            {group.skills.map((skill, idx) => (
              <div key={`${group.category}-${skill.name}`} className="skill-card">
                <div className="icon">{iconMap[skill.iconKey] ?? <FaCode />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter, i) => (
                    <span
                      key={`${skill.name}-${i}`}
                      className="letter"
                      style={{ animationDelay: `${i * 0.04}s` }}
                    >
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
