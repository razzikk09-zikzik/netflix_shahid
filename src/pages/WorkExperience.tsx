import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { timelineData } from '../data/timeline';

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timelineData.map((item, index) => {
          const isWork = item.timelineType === 'work';
          const workBg =
            index % 2 === 0
              ? { background: 'rgb(33, 150, 243)', color: '#fff' }
              : { background: 'rgb(240, 240, 240)', color: '#111' };

          return (
            <VerticalTimelineElement
              key={`${item.name}-${item.dateRange}`}
              className={`vertical-timeline-element--${item.timelineType}`}
              contentStyle={isWork ? workBg : { background: 'rgb(255, 224, 230)', color: '#111' }}
              contentArrowStyle={
                isWork
                  ? {
                      borderRight:
                        index % 2 === 0
                          ? '7px solid rgb(33, 150, 243)'
                          : '7px solid rgb(240, 240, 240)',
                    }
                  : { borderRight: '7px solid rgb(255, 224, 230)' }
              }
              date={item.dateRange}
              iconStyle={
                isWork
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(255, 160, 200)', color: '#fff' }
              }
              icon={isWork ? <WorkIcon /> : <SchoolIcon />}
            >
              {isWork ? (
                <div className="timeline-card-body">
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                  {item.techStack ? (
                    <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                  ) : null}
                  <ul className="timeline-summary-list">
                    {item.summaryPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="timeline-card-body">
                  <h3 className="vertical-timeline-element-title">{item.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                  <ul className="timeline-summary-list">
                    {item.summaryPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </VerticalTimelineElement>
          );
        })}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
