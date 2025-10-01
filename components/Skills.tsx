import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedSectionTitle: React.FC<{ title: string; isVisible: boolean }> = ({ title, isVisible }) => (
    <h2 className={`text-2xl md:text-3xl font-bold text-lightest-slate mb-12 flex items-center reveal ${isVisible ? 'visible' : ''}`}>
      {title}
      <span className="flex-grow ml-6 h-px bg-lightest-navy"></span>
    </h2>
  );

const Skills: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" className="py-12 md:py-20" ref={ref}>
      <AnimatedSectionTitle title="My Skillset" isVisible={isVisible} />
      {isVisible && (
      <div className="space-y-12">
        {SKILL_CATEGORIES.map((category, catIndex) => (
          <div 
            key={category.title}
            className={`reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${catIndex * 200}ms` }}
          >
            <h3 className="text-xl font-bold text-lightest-slate mb-6">{category.title}</h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className={`bg-lightest-navy px-4 py-2 rounded-full flex items-center space-x-2 text-slate hover:text-accent hover:bg-slate-700 transition-all duration-300 reveal ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${catIndex * 200 + skillIndex * 50}ms` }}
                >
                  {skill.icon && <span className="text-accent">{skill.icon}</span>}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      )}
    </section>
  );
};

export default Skills;
