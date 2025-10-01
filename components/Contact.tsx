import React, { useState } from 'react';
import { EMAIL_ADDRESS } from '../constants';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedSectionTitle: React.FC<{ title: string; isVisible: boolean }> = ({ title, isVisible }) => (
  <h2 className={`text-2xl md:text-3xl font-bold text-lightest-slate mb-12 flex items-center justify-center text-center reveal ${isVisible ? 'visible' : ''}`}>
    {title}
  </h2>
);

const Contact: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill out all fields.');
      setFormStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        setErrorMessage('Please enter a valid email address.');
        setFormStatus('error');
        return;
    }

    setErrorMessage('');
    setFormStatus('sending');

    // Simulate an API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 4000); // Reset after 4 seconds
    }, 1500);
  };

  const getButtonText = () => {
    switch (formStatus) {
      case 'sending': return 'Sending...';
      case 'success': return 'Message Sent!';
      default: return 'Send Message';
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 text-center max-w-2xl mx-auto" ref={ref}>
      <AnimatedSectionTitle title="What's Next?" isVisible={isVisible} />
      <div className={`reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
        <h3 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-4">Get In Touch</h3>
        <p className="text-slate mb-12">
          I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you!
        </p>
        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          className="inline-block px-8 py-4 text-accent border border-accent rounded hover:bg-accent hover:bg-opacity-10 transition-all duration-300"
        >
          Say Hello
        </a>
      </div>
      
      <form
        onSubmit={handleSubmit}
        noValidate
        className={`mt-20 text-left reveal ${isVisible ? 'visible' : ''}`}
        style={{ transitionDelay: '200ms' }}
      >
          <div className="grid grid-cols-1 gap-6">
              <div>
                  <label htmlFor="name" className="text-slate">Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} disabled={formStatus === 'sending'} className="w-full mt-2 p-3 bg-lightest-navy border border-light-navy rounded-md focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50" placeholder="Your Name" required/>
              </div>
              <div>
                  <label htmlFor="email" className="text-slate">Email</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} disabled={formStatus === 'sending'} className="w-full mt-2 p-3 bg-lightest-navy border border-light-navy rounded-md focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50" placeholder="your.email@example.com" required/>
              </div>
              <div>
                  <label htmlFor="message" className="text-slate">Message</label>
                  <textarea id="message" rows={4} value={formData.message} onChange={handleChange} disabled={formStatus === 'sending'} className="w-full mt-2 p-3 bg-lightest-navy border border-light-navy rounded-md focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50" placeholder="Your message..." required></textarea>
              </div>
              <div className="text-right">
                <button type="submit" disabled={formStatus === 'sending' || formStatus === 'success'} className="px-6 py-2 bg-accent bg-opacity-10 text-accent border border-accent rounded hover:bg-opacity-20 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed">
                    {getButtonText()}
                </button>
              </div>
              {formStatus === 'error' && <p className="text-red-400 text-sm mt-2 text-center">{errorMessage}</p>}
              {formStatus === 'success' && <p className="text-accent text-sm mt-2 text-center">Thanks for reaching out! I'll get back to you soon.</p>}
          </div>
      </form>
    </section>
  );
};

export default Contact;