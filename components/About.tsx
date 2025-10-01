import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { EMAIL_ADDRESS, PHONE_NUMBER, LOCATION } from "../constants";
import { EmailIcon, LocationIcon, PhoneIcon } from "./icons";

const AnimatedSectionTitle: React.FC<{ title: string; isVisible: boolean }> = ({
  title,
  isVisible,
}) => (
  <h2
    className={`text-2xl md-text-3xl font-bold text-lightest-slate mb-12 flex items-center reveal ${isVisible ? "visible" : ""
      }`}
  >
    {title}
    <span className="flex-grow ml-6 h-px bg-lightest-navy"></span>
  </h2>
);

const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const details = [
    { label: "Phone", value: PHONE_NUMBER, icon: <PhoneIcon /> },
    { label: "City", value: LOCATION, icon: <LocationIcon /> },
    { label: "Email", value: EMAIL_ADDRESS, icon: <EmailIcon /> },
  ];

  const coreSkills = [
    "Python",
    "React & Angular",
    "Generative AI",
    "Azure DevOps",
    "Docker",
    "Microservices",
  ];

  return (
    <section id="about" className="py-12 md:py-20" ref={ref}>
      <AnimatedSectionTitle title="About Me" isVisible={isVisible} />
      {isVisible && (
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div
            className={`lg:w-2/3 space-y-4 reveal ${isVisible ? "visible" : ""
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            <p className="text-slate">
              As a dedicated and passionate professional, I bring a strong
              background in full-stack development and Generative AI. My
              experience at Soliton Technologies has provided me with hands-on
              expertise in Python, React, Angular, and building scalable
              microservices on Azure.
            </p>
            <p className="text-slate">
              Beyond my professional work, I am deeply committed to leadership
              and community. I have a long history of volunteering with
              organizations like IEEE, where I've mentored students and
              organized events. I am passionate about using technology to solve
              complex problems and drive innovation.
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-6 text-sm">
              {coreSkills.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="text-accent mr-2">▹</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`lg:w-1/3 w-full reveal ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            <ul className="space-y-4 bg-light-navy p-6 rounded-lg">
              {details.map((item) => (
                <li key={item.label} className="flex items-center text-slate text-sm">
                  <span className="text-accent mr-2 text-sm">{item.icon}</span>
                  <span className="flex-1 break-all">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;