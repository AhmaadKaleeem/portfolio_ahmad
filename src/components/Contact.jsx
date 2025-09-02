import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer } from '../utils/animation-variants';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaMobile } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState(false);
  const formRef = useRef(null);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    try {
      // Create form data for submission
      const formData = new FormData(formRef.current);
      
      // Use fetch to submit the form data to FormSubmit
      const response = await fetch('https://formsubmit.co/696629ed153151741376ccad236f6574', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitMessage('Thanks for your message! I will get back to you soon.');
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitError(true);
      setSubmitMessage('Something went wrong. Please try again or email me directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      // Clear success message after 5 seconds
      if (!submitError) {
        setTimeout(() => setSubmitMessage(''), 5000);
      }
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title text-center"
          variants={fadeIn("up")}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6 text-primary-light dark:text-primary-dark"
              variants={fadeIn("right", 0.1)}
            >
              Let's Connect
            </motion.h3>
            
            <motion.p
              className="text-gray-700 dark:text-gray-300 mb-8"
              variants={fadeIn("right", 0.2)}
            >
              Have a question or want to work together? Feel free to reach out using the contact form or through any of the channels below.
            </motion.p>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-center"
                variants={fadeIn("right", 0.3)}
              >
                <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-primary-light dark:text-primary-dark" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">ahmadkaleeem1@gmail.com</span>
              </motion.div>

              <motion.div 
                className="flex items-center"
                variants={fadeIn("right", 0.3)}
              >
                <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full mr-4">
                  <FaMobile className="text-primary-light dark:text-primary-dark" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">+92 328-0092525</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center"
                variants={fadeIn("right", 0.4)}
              >
                <div className="bg-primary-light/10 dark:bg-primary-dark/10 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-primary-light dark:text-primary-dark" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Islamabad, Pakistan</span>
              </motion.div>
              
              <motion.div 
                className="flex space-x-4 mt-8"
                variants={fadeIn("right", 0.5)}
              >
                <motion.a
                  href="https://github.com/AhmaadKaleeem"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/ahmadkaleembhatti"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>

                 
                <motion.a
                  href="https://www.instagram.com/_ahmadkaleem/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-200 dark:bg-gray-800 p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram size={20} />
                </motion.a>

              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="space-y-6"
              action="https://formsubmit.co/696629ed153151741376ccad236f6574"
              method="POST"
            >
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0px 0px 8px rgba(79, 70, 229, 0.3)" }}
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0px 0px 8px rgba(79, 70, 229, 0.3)" }}
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01, boxShadow: "0px 0px 8px rgba(79, 70, 229, 0.3)" }}
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="input-field resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                className={`button-primary w-full flex items-center justify-center ${
                  submitError ? 'bg-red-600 hover:bg-red-700' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin mr-2"></span>
                ) : null}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              
              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`${
                    submitError ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
                  } text-center mt-4`}
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;