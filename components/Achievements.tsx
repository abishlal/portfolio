import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { ACHIEVEMENTS } from '../constants';
import { TrophyIcon } from './icons';

const AnimatedSectionTitle: React.FC<{ title: string; isVisible: boolean }> = ({ title, isVisible }) => (
    <h2 className={`text-2xl md:text-3xl font-bold text-lightest-slate mb-12 flex items-center reveal ${isVisible ? 'visible' : ''}`}>
      {title}
      <span className="flex-grow ml-6 h-px bg-lightest-navy"></span>
    </h2>
  );

const Achievements: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="achievements" className="py-12 md:py-20" ref={ref}>
      <AnimatedSectionTitle title="Achievements" isVisible={isVisible} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((item, index) => (
          <div
            key={index}
            className={`bg-light-navy p-6 rounded-lg shadow-lg flex flex-col transform hover:-translate-y-2 transition-transform duration-300 reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="text-accent mb-4">
              <TrophyIcon />
            </div>
            <h3 className="text-lg font-bold text-lightest-slate">{item.name}</h3>
            <p className="text-slate text-sm mb-2">{item.dates}</p>
            <p className="text-slate text-sm flex-grow">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;