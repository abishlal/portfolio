import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLinkIcon, FolderIcon } from './icons';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Modal from './Modal';

const AnimatedSectionTitle: React.FC<{ title: string; isVisible: boolean }> = ({ title, isVisible }) => (
    <h2 className={`text-2xl md:text-3xl font-bold text-lightest-slate mb-12 flex items-center reveal ${isVisible ? 'visible' : ''}`}>
      {title}
      <span className="flex-grow ml-6 h-px bg-lightest-navy"></span>
    </h2>
);

const Projects: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedImageAlt, setSelectedImageAlt] = useState('');

  const handleOpenModal = (imageUrl: string, altText: string) => {
    setSelectedImage(imageUrl);
    setSelectedImageAlt(altText);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage('');
    setSelectedImageAlt('');
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="projects" className="py-12 md:py-20" ref={ref}>
        <AnimatedSectionTitle title="Things I've Built" isVisible={isVisible} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className={`bg-light-navy p-6 rounded-lg shadow-lg flex flex-col justify-between h-full transform hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-accent/50 reveal ${isVisible ? 'visible' : ''} ${project.image ? 'cursor-pointer' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={project.image ? () => handleOpenModal(project.image!, project.name) : undefined}
              role={project.image ? "button" : undefined}
              tabIndex={project.image ? 0 : -1}
              onKeyDown={project.image ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleOpenModal(project.image!, project.name); } } : undefined}
              aria-label={project.image ? `View screenshot for ${project.name}` : undefined}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-accent">
                      <FolderIcon />
                  </div>
                  {project.url && (
                      <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-slate hover:text-accent z-10"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`External link for ${project.name}`}
                      >
                          <ExternalLinkIcon />
                      </a>
                  )}
                </div>
                <h3 className="text-xl font-bold text-lightest-slate mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-slate text-sm mb-6">{project.description}</p>
              </div>
              <div className="flex flex-wrap items-center mt-auto">
                {project.tech.map((tech, i) => (
                  <div key={i} className="flex items-center mr-4 mb-2 text-xs text-slate">
                    <span className="text-accent mr-1">{tech.icon}</span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Modal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        imageUrl={selectedImage}
        imageAlt={selectedImageAlt}
      />
    </>
  );
};

export default Projects;  