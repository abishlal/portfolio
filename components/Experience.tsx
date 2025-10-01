import React from 'react';
import { EXPERIENCES } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedSectionTitle: React.FC<{ title: string; isVisible: boolean }> = ({ title, isVisible }) => (
  <h2 className={`text-2xl md:text-3xl font-bold text-lightest-slate mb-12 flex items-center reveal ${isVisible ? 'visible' : ''}`}>
    {title}
    <span className="flex-grow ml-6 h-px bg-lightest-navy"></span>
  </h2>
);

const BoldText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g).filter(part => part);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="text-light-slate font-semibold">{part.slice(2, -2)}</strong>
        ) : (
          part
        )
      )}
    </>
  );
};

const ExperienceItem: React.FC<{ exp: typeof EXPERIENCES[0]; isVisible: boolean; delay: number }> = ({ exp, isVisible, delay }) => (
  <div
    className={`flex flex-col md:flex-row reveal ${isVisible ? 'visible' : ''}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="md:w-1/4 mb-4 md:mb-0">
      <p className="text-accent font-semibold">{exp.company}</p>
      <p className="text-sm text-slate">{exp.period}</p>
    </div>
    <div className="md:w-3/4 md:pl-8">
      <h3 className="text-xl font-bold text-lightest-slate mb-2">{exp.role}</h3>
      <ul className="space-y-3 list-inside">
        {exp.achievements.map((ach, i) => (
          <li key={i} className="flex">
            <span className="text-accent mr-3">▹</span>
            <span className="text-slate"><BoldText text={ach} /></span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const professionalExp = EXPERIENCES.filter(e => e.type === 'Professional');
  const volunteeringExp = EXPERIENCES.filter(e => e.type === 'Volunteering');

  return (
    <section id="experience" className="py-12 md:py-20" ref={ref}>
      <AnimatedSectionTitle title="Where I’ve Worked" isVisible={isVisible} />
      {isVisible && (
        <div className="space-y-12">
          {professionalExp.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} isVisible={isVisible} delay={index * 150} />
          ))}

          {volunteeringExp.length > 0 && (
            <div className="pt-8">
              <h3 className={`text-xl md:text-2xl font-bold text-slate mb-8 flex items-center reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${professionalExp.length * 150}ms` }}>
                Volunteering
                <span className="flex-grow ml-4 h-px bg-lightest-navy/50"></span>
              </h3>
              <div className="space-y-12">
                {volunteeringExp.map((exp, index) => (
                  <ExperienceItem key={index} exp={exp} isVisible={isVisible} delay={(professionalExp.length + index) * 150} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Experience;