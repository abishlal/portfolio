import React from 'react';
import { GITHUB_URL, LINKEDIN_URL, FACEBOOK_URL, INSTAGRAM_URL, CALENDLY_URL } from '../constants';
import { GitHubIcon, LinkedInIcon, FacebookIcon, InstagramIcon, CalendlyIcon } from './icons';

const Footer: React.FC = () => {
  const socialLinks = [
    { href: GITHUB_URL, icon: <GitHubIcon />, name: 'GitHub' },
    { href: LINKEDIN_URL, icon: <LinkedInIcon />, name: 'LinkedIn' },
    { href: INSTAGRAM_URL, icon: <InstagramIcon />, name: 'Instagram' },
    { href: CALENDLY_URL, icon: <CalendlyIcon />, name: 'Calendly' },
  ];

  return (
    <footer className="py-6 text-center">
      <div className="flex justify-center space-x-6 mb-4 md:hidden">
        {socialLinks.map(link => (
          <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent transition-colors duration-300">
            {link.icon}
          </a>
        ))}
      </div>
      <p className="text-slate text-sm">
        Built with React & Tailwind CSS by Abishlal N S.
      </p>
      <p className="text-xs text-lightest-navy mt-1">
        © {new Date().getFullYear()} Abishlal N S. All Rights Reserved.
      </p>

      {/* Floating Social Links for Desktop */}
      <div className="hidden md:flex flex-col fixed bottom-0 left-10 items-center space-y-6 z-10">
        {socialLinks.map(link => (
          <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent transition-transform duration-300 hover:-translate-y-1">
            {link.icon}
          </a>
        ))}
        <div className="h-24 w-px bg-slate"></div>
      </div>
    </footer>
  );
};

export default Footer;