import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { EDUCATION } from '../constants';
import { GraduationCapIcon } from './icons';

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

const Education: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="education" className="py-12 md:py-20" ref={ref}>
      <AnimatedSectionTitle title="Education" isVisible={isVisible} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {EDUCATION.map((item, index) => (
          <div
            key={index}
            className={`bg-light-navy p-6 rounded-lg shadow-lg flex flex-col transform hover:-translate-y-2 transition-transform duration-300 reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start mb-4">
                <div className="text-accent mr-4 pt-1">
                    <GraduationCapIcon />
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-baseline flex-wrap">
                        <h3 className="text-lg font-bold text-lightest-slate">{item.degree}</h3>
                        <p className="text-slate text-sm whitespace-nowrap pl-2">{item.dates}</p>
                    </div>
                    <p className="text-accent mb-2">{item.institution}</p>
                    {item.gpa && <p className="text-slate text-sm font-semibold mb-2">{item.gpa}</p>}
                </div>
            </div>
            
            {item.notes && item.notes.length > 0 && (
                <ul className="space-y-2 flex-grow md:pl-12">
                    {item.notes.map((note, noteIndex) => (
                        <li key={noteIndex} className="flex text-slate text-sm">
                            <span className="text-accent mr-3">▹</span>
                            <span><BoldText text={note} /></span>
                        </li>
                    ))}
                </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;