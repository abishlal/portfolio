import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { CERTIFICATIONS } from '../constants';
import { CertificateIcon, ExternalLinkIcon } from './icons';

const AnimatedSectionTitle: React.FC<{ title: string; isVisible: boolean }> = ({ title, isVisible }) => (
  <h2 className={`text-2xl md:text-3xl font-bold text-lightest-slate mb-12 flex items-center reveal ${isVisible ? 'visible' : ''}`}>
    {title}
    <span className="flex-grow ml-6 h-px bg-lightest-navy"></span>
  </h2>
);

const Certifications: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="certifications" className="py-16 md:py-24" ref={ref}>
      <AnimatedSectionTitle title="Certifications" isVisible={isVisible} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATIONS.map((item, index) => (
          <div
            key={index}
            className={`group bg-light-navy p-6 rounded-lg shadow-lg flex flex-col transform hover:-translate-y-2 transition-all duration-300 reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-start space-x-3">
                <div className="text-accent">
                  <CertificateIcon className="w-10 h-10" />
                </div>
                <h3 className={`text-lg font-bold text-lightest-slate mb-2 ${item.url ? 'group-hover:text-accent' : ''} transition-colors duration-300`}>
                  {item.name}
                </h3>
              </div>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-accent z-10 transition-colors duration-300"
                  aria-label={`Verify certification: ${item.name}`}
                >
                  <ExternalLinkIcon />
                </a>
              )}
            </div>


            <ul className="space-y-2 text-slate text-sm flex-grow mt-2">
              {item.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="flex">
                  <span className="text-accent mr-3">▹</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;