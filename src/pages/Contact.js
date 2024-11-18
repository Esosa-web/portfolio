import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { useForm } from '@formspree/react';

const FloatingGradient = () => (
  <motion.div
    className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-pink-500/5 to-blue-500/5"
    animate={{
      background: [
        "radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)",
        "radial-gradient(circle at 100% 100%, rgba(219, 39, 119, 0.05) 0%, transparent 50%)",
        "radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)",
      ],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

const ParticlesBackground = () => (
  <div className="absolute inset-0 opacity-30">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full mix-blend-screen"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: `${Math.random() * 30 + 5}px`,
          height: `${Math.random() * 30 + 5}px`,
          backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
          filter: 'blur(3px)',
        }}
      />
    ))}
  </div>
);

const InputField = ({ label, type, value, onChange, error }) => (
  <motion.div 
    className="relative mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      className={`peer w-full bg-white/5 border-2 ${error ? 'border-red-500/50' : 'border-white/10'} 
                 rounded-lg px-4 py-3 text-white placeholder-transparent
                 focus:border-purple-500/50 focus:outline-none focus:ring-0
                 transition-all duration-300`}
    />
    <label className="absolute left-4 -top-2.5 bg-black px-2 text-sm text-gray-400
                    transition-all duration-300 peer-placeholder-shown:top-3.5 
                    peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm
                    peer-focus:text-purple-500">
      {label}
    </label>
    {error && (
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-red-400 text-sm mt-1 block"
      >
        {error}
      </motion.span>
    )}
  </motion.div>
);

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formspreeState, handleFormspreeSubmit] = useForm("mpwzlajp");

  const validateForm = () => {
    const newErrors = {};
    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formState.email)) newErrors.email = 'Email is invalid';
    if (!formState.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await handleFormspreeSubmit({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message
        });
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        setErrors({});
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } catch (error) {
        console.error('Form submission error:', error);
        setIsSubmitting(false);
      }
    }
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Esosa-web', color: 'hover:text-purple-500' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/esosa-emwionkpa-0ab5b3326/', color: 'hover:text-blue-500' },
    { icon: FaEnvelope, url: 'mailto:esosaisnow@gmail.com', color: 'hover:text-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20 px-4 
                    overflow-hidden relative">
      <ParticlesBackground />
      <FloatingGradient />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 
                       to-pink-500 bg-clip-text text-transparent inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Let's Connect
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Have a question or want to work together? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-[2fr,1fr] gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InputField
              label="Name"
              type="text"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              error={errors.name}
            />
            <InputField
              label="Email"
              type="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              error={errors.email}
            />
            <InputField
              label="Subject (Optional)"
              type="text"
              value={formState.subject}
              onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
            />
            <motion.div
              className="relative mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <textarea
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder=" "
                rows={5}
                className={`peer w-full bg-white/5 border-2 ${errors.message ? 'border-red-500/50' : 'border-white/10'} 
                           rounded-lg px-4 py-3 text-white placeholder-transparent
                           focus:border-purple-500/50 focus:outline-none focus:ring-0
                           transition-all duration-300`}
              />
              <label className="absolute left-4 -top-2.5 bg-black px-2 text-sm text-gray-400
                              transition-all duration-300 peer-placeholder-shown:top-3.5 
                              peer-placeholder-shown:text-base peer-focus:-top-2.5 
                              peer-focus:text-sm peer-focus:text-purple-500">
                Message
              </label>
              {errors.message && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-400 text-sm mt-1 block"
                >
                  {errors.message}
                </motion.span>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full py-3 px-6 rounded-lg relative overflow-hidden group
                         ${isSubmitted ? 'bg-green-500' : 'bg-purple-500'} 
                         transition-all duration-300 disabled:opacity-50`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence mode='wait'>
                {isSubmitting ? (
                  <motion.div
                    key="submitting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-purple-500"
                  >
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                  </motion.div>
                ) : isSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <IoCheckmarkCircle className="text-xl" />
                    <span>Sent Successfully!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <FaPaperPlane className="text-sm group-hover:translate-x-1 
                                           group-hover:-translate-y-1 transition-transform" />
                    <span>Send Message</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>

          {/* Social Links Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 
                            bg-clip-text text-transparent">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map(({ icon: Icon, url, color }) => (
                  <motion.a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 text-gray-300 ${color} 
                               transition-colors duration-300`}
                    whileHover={{ x: 10 }}
                  >
                    <Icon className="text-xl" />
                    <span>{url.replace(/(https?:\/\/)|(www\.)/g, '')}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <motion.div 
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 
                            bg-clip-text text-transparent">Quick Response</h3>
              <p className="text-gray-300">
                I typically respond within 24 hours. Looking forward to our conversation!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;