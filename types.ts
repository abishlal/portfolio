import React from 'react';

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  type: 'Professional' | 'Volunteering';
}

export interface Project {
  name: string;
  description: string;
  tech: { name: string; icon: React.ReactNode }[];
  url?: string;
  dates?: string;
  image?: string;
}

export interface OpenSourceContribution {
  projectName: string;
  description: string;
  url: string;
  tech: { name: string; icon: React.ReactNode }[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: React.ReactNode }[];
}

export interface EducationItem {
    degree: string;
    institution: string;
    dates: string;
    gpa?: string;
    notes?: string[];
}

export interface Achievement {
    name: string;
    dates: string;
    description: string;
}

export interface Certification {
    name: string;
    skills: string[];
    url?: string;
}