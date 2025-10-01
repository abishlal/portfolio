import React, { useState, useEffect, useMemo } from "react";
import { LINKEDIN_URL } from "../constants";
import image from "./assets/photo.jpeg";

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = useMemo(
    () => [
      "Full-Stack Specialist.",
      "Generative AI Engineer.",
      "DevOps Enthusiast.",
      "Senior Project Engineer.",
    ],
    []
  );

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[titleIndex];
      const updatedText = isDeleting
        ? currentTitle.substring(0, typedText.length - 1)
        : currentTitle.substring(0, typedText.length + 1);

      setTypedText(updatedText);

      if (!isDeleting && updatedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const typingSpeed = isDeleting ? 75 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, titleIndex, titles]);

  return (
    <section
      id="home"
      className="relative bg-navy bg-cover bg-center min-h-screen flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-8 py-20"
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\'%3e%3crect width=\\'40\\' height=\\'40\\' fill=\\'%230a192f\\'/%3e%3ccircle cx=\\'20\\' cy=\\'20\\' r=\\'1\\' fill=\\'%23112240\\'/%3e%3c/svg%3e')",
      }}
    >
      <div className="absolute inset-0 bg-navy bg-opacity-90 z-0"></div>
      <div className="relative z-10 lg:w-3/5 text-center lg:text-left">
        <p
          className="text-accent text-lg mb-4 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Hi, my name is
        </p>
        <h1
          className="text-3xl md:text-6xl lg:text-5xl font-bold text-lightest-slate animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          ABISHLAL N S
        </h1>
        <h2
          className="text-3xl md:text-5xl lg:text-4xl font-bold text-slate mt-2 min-h-[72px] md:min-h-[96px] lg:min-h-[120px] animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <span>I'm a {typedText}</span>
          <span className="blinking-cursor">|</span>
        </h2>
        <p
          className="text-slate max-w-xl mx-auto lg:mx-0 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          Senior Project Engineer with 2+ years in Full-Stack and Generative AI
          engineering, specializing in building scalable microservices on Azure.
          Expertise in RAG implementation, Python, React, and Azure DevOps.
          Proven success in moving prototypes to resilient production systems.
        </p>
        <div
          className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start animate-fade-in-up"
          style={{ animationDelay: "500ms" }}
        >
          <a
            href="#projects"
            className="px-8 py-4 text-accent border border-accent rounded hover:bg-accent hover:bg-opacity-10 transition-all duration-300 text-center"
          >
            View My Work
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-lightest-slate bg-lightest-navy rounded hover:bg-slate-700 transition-all duration-300 text-center"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
      <div
        className="relative z-10 lg:w-2/5 mt-8 lg:mt-0 animate-fade-in-up"
        style={{ animationDelay: "600ms" }}
      >
        <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto group">
          <div className="absolute top-0 left-0 w-full h-full border-2 border-accent rounded-md z-0 transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 ease-in-out"></div>
          <div className="relative z-10 rounded-md overflow-hidden shadow-xl bg-light-navy">
            <img
              src={image}
              alt="Abishlal N S - Professional Headshot"
              className="rounded-md w-full transform group-hover:scale-105 transition-all duration-500 ease-in-out"
              aria-label="A professional headshot of Abishlal N S"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
