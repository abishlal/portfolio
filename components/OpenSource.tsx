import React from 'react';
import { OPEN_SOURCE_CONTRIBUTIONS } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { ExternalLinkIcon, GitBranchIcon } from './icons';

const AnimatedSectionTitle: React.FC<{ title: string; isVisible: boolean }> = ({ title, isVisible }) => (
  <h2 className={`text-2xl md:text-3xl font-bold text-lightest-slate mb-12 flex items-center reveal ${isVisible ? 'visible' : ''}`}>
    {title}
    <span className="flex-grow ml-6 h-px bg-lightest-navy"></span>
  </h2>
);

const OpenSource: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="opensource" className="py-12 md:py-20" ref={ref}>
      <AnimatedSectionTitle title="Open Source Contributions" isVisible={isVisible} />
      <div className="space-y-6">
        {OPEN_SOURCE_CONTRIBUTIONS.map((contribution, index) => (
          <div
            key={index}
            className={`bg-light-navy p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-start gap-6 transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-accent/50 reveal ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="text-accent mt-1 hidden sm:block">
              <GitBranchIcon />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-lightest-slate group-hover:text-accent transition-colors duration-300">
                        {contribution.projectName}
                    </h3>
                      <a
                        href={contribution.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate hover:text-accent z-10"
                        aria-label={`View contribution to ${contribution.projectName}`}
                    >
                        <ExternalLinkIcon />
                    </a>
                </div>
              <p className="text-slate text-sm mb-6">{contribution.description}</p>
              <div className="flex flex-wrap items-center mt-auto">
                {contribution.tech.map((tech, i) => (
                  <div key={i} className="flex items-center mr-4 mb-2 text-xs text-slate">
                    <span className="text-accent mr-1">{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpenSource;