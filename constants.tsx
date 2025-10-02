import React from "react";
import type {
  Experience,
  Project,
  OpenSourceContribution,
  SkillCategory,
  EducationItem,
  Achievement,
  Certification,
} from "./types";
import {
  PythonIcon,
  HtmlCssIcon,
  JavaScriptIcon,
  ReactIcon,
  AngularIcon,
  TypeScriptIcon,
  FastApiIcon,
  WordPressIcon,
  AzureIcon,
  DockerIcon,
  GitIcon,
  PostgreSqlIcon,
  GitHubActionsIcon,
  GenAiIcon,
  VectorDbIcon,
  MicroservicesIcon,
  LangchainIcon,
} from "./components/icons";

export const EXPERIENCES: Experience[] = [
  {
    company: "Soliton Technologies",
    role: "Senior Project Engineer",
    period: "May 2023 - Present",
    type: "Professional",
    achievements: [
      "Architected and implemented **MVVM** architecture in fe, improving scalability and reducing technical debt.",
      "Engineered a **70% reduction in code review** cycle time via an open-source pr agent; contributed and merged a feature back to the open-source project.",
      "**Implemented** and optimized CI/CD pipelines on **Azure** and **Docker**, cutting deployment time by **65%**.",
      "**Mentored** **10+** interns on **Python**, contributed over **5+ KSS** on Python, DevOps, and Azure cloud.",
      "**Standardised** and documented the best practices (including video tutorials) for using **Azure cloud** and **CI/CD pipelines** for microservice deployment.",
    ],
  },
  {
    company: "Soliton Technologies",
    role: "Project Engineer",
    period: "Jan 2023 - May 2023",
    type: "Professional",
    achievements: [
      "**Designed** and implemented **4-microservice** architecture with event-driven workflows, enhancing system modularity and resilience.",
      "Created a Python starter project setup using **Poetry**, cutting project setup time by **80%**.",
      "**Designed** & deployed an **AI-based** test sequence generator, accelerating semiconductor testing by **50%**.",
      "Developed an **AI Platform** where users can create AI Assistants with various configurations, significantly enhancing user self-service.",
      "Deployed an **Azure cloud-based AI Chat Assistant** utilizing **RAG** principles, resolving queries within the Soliton.",
    ],
  },
  {
    company: "IEEE",
    role: "Volunteer",
    period: "4+ Years",
    type: "Volunteering",
    achievements: [
      "Volunteering for the past 4 years, organising and taking sessions for college students.",
      "Contributed to various IEEE events and workshops, fostering a culture of learning and innovation.",
    ],
  },
  {
    company: "Spartans",
    role: "Volunteer",
    period: "Community Group",
    type: "Volunteering",
    achievements: [
      "Volunteering in a community group focused on building healthier bodies and minds through sports, games, and meditation.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Home Lab Server",
    dates: "Aug 2023",
    description:
      "Built a secure on-prem home lab server using Portainer to self-host services like Immich, protected by Cloudflare and backup redundancy.",
    tech: [
      { name: "Docker", icon: <DockerIcon /> },
      { name: "Portainer", icon: <MicroservicesIcon /> },
      { name: "Cloudflare", icon: <AzureIcon /> },
    ],
  },
  {
    name: "IEEE SJCE SB Website",
    description:
      "Official website for the IEEE Student Branch at St. Joseph's College of Engineering.",
    tech: [
      { name: "WordPress", icon: <WordPressIcon /> },
      { name: "HTML & CSS", icon: <HtmlCssIcon /> },
    ],
    image: "components/assets/ieeesjcesbC.png",
  },
  {
    name: "IEEE SJCE IAS SBC Website",
    description:
      "Website for the IEEE Industry Applications Society Student Branch Chapter.",
    tech: [
      { name: "WordPress", icon: <WordPressIcon /> },
      { name: "HTML & CSS", icon: <HtmlCssIcon /> },
    ],
    image: "components/assets/ieee-ias.png",
  },
  {
    name: "Dept. of EEE Website",
    description:
      "Official website for the Department of Electrical and Electronics Engineering.",
    tech: [
      { name: "HTML & CSS", icon: <HtmlCssIcon /> },
      { name: "JavaScript", icon: <JavaScriptIcon /> },
    ],
    image: "components/assets/eee.png",
  },
  {
    name: "Jet Potential 2k22 Website",
    description: "Event website for a technical symposium.",
    tech: [
      { name: "HTML & CSS", icon: <HtmlCssIcon /> },
      { name: "JavaScript", icon: <JavaScriptIcon /> },
    ],
    image: "components/assets/jet2k22.png",
  },
  {
    name: "ICMTRA23 Conference Website",
    description:
      "International conference website for multidisciplinary research and applications.",
    tech: [{ name: "WordPress", icon: <WordPressIcon /> }],
    image: "components/assets/icmtra.png",
  },
  {
    name: "Womensera Event Website",
    description: "A special event website focused on women in engineering.",
    tech: [{ name: "HTML & CSS", icon: <HtmlCssIcon /> }],
    image: "components/assets/womensera.png",
  },
  {
    name: "Energy Meter Web App",
    description:
      "A web application for monitoring and managing energy consumption.",
    tech: [
      { name: "Angular", icon: <AngularIcon /> },
      { name: "Firebase", icon: <AzureIcon /> },
    ],
    url: "https://energymeterpro.web.app/",
    image: "components/assets/energymeter.png",
  },
  {
    name: "Conocithon Event Website",
    description: "Website for a hackathon event.",
    tech: [{ name: "HTML & CSS", icon: <HtmlCssIcon /> }],
    image: "components/assets/conocithon.png",
  },
  {
    name: "IEEE India Council SCT Website",
    description:
      "Website for the IEEE India Council Student Coordination Team.",
    tech: [{ name: "WordPress", icon: <WordPressIcon /> }],
    image: "components/assets/ic-sct.jpeg",
  },
];

export const OPEN_SOURCE_CONTRIBUTIONS: OpenSourceContribution[] = [
  {
    projectName: "PR-Agent by CodiumAI",
    description:
      "The PR introduces improvements to the Azure DevOps integration, focused on better ticket context handling and comment thread management",
    url: "https://github.com/Codium-ai/pr-agent",
    tech: [
      { name: "Python", icon: <PythonIcon /> },
      { name: "GitHub Actions", icon: <GitHubActionsIcon /> },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <PythonIcon /> },
      { name: "JavaScript", icon: <JavaScriptIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "HTML & CSS", icon: <HtmlCssIcon /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Angular", icon: <AngularIcon /> },
      { name: "FastAPI", icon: <FastApiIcon /> },
      { name: "Flask", icon: <PythonIcon /> },
      { name: "GenAI (LLMs, RAG)", icon: <GenAiIcon /> },
      { name: "Llamaindex", icon: <LangchainIcon /> },
      { name: "Langchain", icon: <LangchainIcon /> },
      { name: "Microservices", icon: <MicroservicesIcon /> },
      { name: "WordPress", icon: <WordPressIcon /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Azure Cloud", icon: <AzureIcon /> },
      { name: "Azure DevOps", icon: <AzureIcon /> },
      { name: "Docker", icon: <DockerIcon /> },
      { name: "Git", icon: <GitIcon /> },
      { name: "GitHub Actions", icon: <GitHubActionsIcon /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <PostgreSqlIcon /> },
      { name: "Qdrant & Weaviate", icon: <VectorDbIcon /> },
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Engineering",
    institution: "St. Joseph's College of Engineering",
    dates: "Aug 2019 - May 2023",
    gpa: "9.01 CGPA",
    notes: [
      "Specialized in **Electrical and Electronics Engineering**",
      "Awarded with the **Best Outgoing Student** of the Year",
      'Project and Paper published on "**Smart Energy Management and Load Monitoring of Individual Loads**"',
    ],
  },
  {
    degree: "Higher Secondary School",
    institution: "Carmel Higher Secondary School",
    dates: "2018 - 2019",
    notes: [
      "Completed with a **80%** score in the State Board",
      "State level Athlete in 400m Hurdles event",
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    name: "Innovator of the Year/2024",
    dates: "May 2024",
    description:
      "Awarded to the team for bringing innovative AI Platform for creating AI Assistants.",
  },
  {
    name: "Star Team Award",
    dates: "Dec 2024",
    description:
      "Awarded for being a great team to deliver high-impact customer solution under tight deadlines.",
  },
  {
    name: "Best Outgoing Student of the Year",
    dates: "2023",
    description:
      "Awarded by St. Joseph's College of Engineering for exceptional academic performance and leadership.",
  },
  {
    name: "Richard E. Mervin Scholar",
    dates: "2022",
    description:
      "Awarded by the IEEE Computer Society for outstanding contributions to the field of Computer Science.",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/abishlal/1E939F5580F51D7B?sharingId=794D45DF6C40A7CE",
    skills: [
      "Azure Security & Access Management",
      "Azure Storage Management",
      "Compute Resource Deployment & Management",
      "Virtual Networking Implementation",
      "Resource Monitoring & Maintenance",
    ],
  },
  {
    name: "Microsoft Certified: Azure Fundamental",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/abishlal/AD9FEFD8CF8FCAAB?sharingId",
    skills: [
      "Cloud concepts",
      "Azure architecture and services",
      "Azure management and governance",
    ],
  },
];

export const GITHUB_URL = "https://github.com/abishlalns";
export const LINKEDIN_URL = "https://www.linkedin.com/in/abishlal";
export const FACEBOOK_URL = "https://www.facebook.com/abishlalns";
export const INSTAGRAM_URL = "https://www.instagram.com/abish_lal/";
export const CALENDLY_URL = "https://calendly.com/abishlal/30min";
export const EMAIL_ADDRESS = "abishlalns03@gmail.com";
export const PHONE_NUMBER = "+91 8870135905";
export const LOCATION = "Nagercoil, Tamil Nadu";
