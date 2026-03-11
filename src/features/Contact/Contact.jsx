import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Section from '../../components/Section';
import {
  bounceIn,
  slideInFromTop,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  heroIconReveal,
  iosStyles
} from '../../constants';
import { useContactForm } from './useContactForm';
import { EMAIL, socialLinks } from '../../data/portfolioData';
import contactBg from '../../assets/bg/contact_bg.png';

const Contact = ({ activeSection }) => {
  const { formData, isSubmitting, submitStatus, formRef, handleInputChange, handleSubmit } = useContactForm();

  return (
    <Section 
      id="contact" 
      className="scroll-mt-20 md:scroll-mt-0" 
      bgImage={contactBg}
      bgStyle={{ filter: 'blur(15px) brightness(0.7)', opacity: 0.5 }}
    >
      <motion.h2
        className={`${iosStyles.heading + " text-center"} ${activeSection === 'contact' ? 'scale-105' : 'scale-100 opacity-90'}`}
        variants={bounceIn}
      >
        Get In Touch
      </motion.h2>
      <div className="max-w-2xl mx-auto">
        <motion.div className="text-center mb-8" variants={slideInFromTop}>
          <motion.a
            href={`mailto:${EMAIL}`}
            className="text-lg md:text-xl text-primary hover:text-secondary transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {EMAIL}
          </motion.a>
          <div className="mt-3 text-white/40 flex flex-col md:flex-row items-center justify-center gap-2">
            <span>📍 Chennai, India</span>
            <span className="hidden md:inline">•</span>
            <a href="tel:+919360436613" className="hover:text-primary">+91-9360436613</a>
          </div>
        </motion.div>

        <div className="flex justify-center space-x-12 mb-16">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={i}
                variants={heroIconReveal}
                whileHover={{ y: -5, scale: 1.1, color: "var(--system-blue)" }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-4xl text-white/40 transition-colors"
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>

        <motion.form ref={formRef} onSubmit={handleSubmit} className={iosStyles.form}>
          <motion.div variants={slideInFromLeft}>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
              whileFocus={{ scale: 1.01 }}
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none text-lg text-white placeholder-white/30"
            />
          </motion.div>
          <motion.div variants={slideInFromRight} className="mt-4">
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
              whileFocus={{ scale: 1.01 }}
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none text-lg text-white placeholder-white/30"
            />
          </motion.div>
          <motion.div variants={slideInFromLeft} className="mt-4">
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="How can I help you?"
              required
              rows="5"
              whileFocus={{ scale: 1.01 }}
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none text-lg text-white placeholder-white/30 resize-none"
            />
          </motion.div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            variants={slideInFromBottom}
            className="mt-6 w-full bg-white text-black px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:bg-white/90 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
          {submitStatus === 'success' && <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>}
          {submitStatus === 'error' && <p className="mt-4 text-red-500 text-center">Failed to send message. Please try again.</p>}
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
