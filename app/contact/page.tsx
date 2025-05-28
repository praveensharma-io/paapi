'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  User, 
  MessageSquare, 
  ArrowRight, 
  Check, 
  AlertCircle,
  Send,
  Globe,
  Linkedin,
  Twitter
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "contact@paapi.ai",
      description: "Send us an email anytime",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "123 Innovation Drive",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 8am - 6pm",
      description: "Weekend support available",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
          
          {/* Animated particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-500/30 rounded-full"
              animate={{
                x: [0, Math.random() * 50 - 25],
                y: [0, Math.random() * 50 - 25],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-6 py-3 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium mb-8 border border-emerald-200"
            >
              <Mail className="w-5 h-5 mr-3" />
              Get In Touch
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-5xl lg:text-7xl font-black mb-8 tracking-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Contact
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                Our Team
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Ready to transform your advertising measurement? Let&apos;s discuss how our privacy-first platform can help you achieve better results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-lg font-semibold text-emerald-600 mb-2">{info.content}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl transform rotate-1 scale-[1.02] shadow-lg"></div>
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100/80 relative z-10"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a message</h2>
                  <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-2">Full Name *</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl group-hover:border-emerald-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-white/60 focus:bg-white placeholder:text-gray-500 placeholder:font-normal"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-2">Email Address *</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300 w-5 h-5" />
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl group-hover:border-emerald-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-white/60 focus:bg-white placeholder:text-gray-500 placeholder:font-normal"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-2">Company</label>
                    <div className="relative group">
                      <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl group-hover:border-emerald-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-white/60 focus:bg-white placeholder:text-gray-500 placeholder:font-normal"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2 ml-2">Phone Number</label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300 w-5 h-5" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl group-hover:border-emerald-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-white/60 focus:bg-white placeholder:text-gray-500 placeholder:font-normal"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-2">Subject *</label>
                  <div className="relative group">
                    <Send className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl group-hover:border-emerald-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-white/60 focus:bg-white placeholder:text-gray-500 placeholder:font-normal"
                      required
                    />
                  </div>
                </div>

                <div className="relative mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-2">Message *</label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-6 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300 w-5 h-5" />
                    <textarea
                      placeholder="Tell us about your project, goals, and how we can help..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl group-hover:border-emerald-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-white/60 focus:bg-white resize-none placeholder:text-gray-500 placeholder:font-normal"
                      required
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full py-4 rounded-2xl font-semibold text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
                    formStatus === 'sending'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                  }`}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      <span>Sending Message...</span>
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : formStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5 mr-2" />
                      <span>Failed to Send - Please Try Again</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Right Column - Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Contact Us */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Contact Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Free Consultation</h4>
                      <p className="text-gray-600 text-sm">Get expert advice on your ad measurement strategy</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Custom Solutions</h4>
                      <p className="text-gray-600 text-sm">Tailored privacy-first measurement for your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
                      <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl border border-emerald-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-emerald-600 font-semibold">8:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-emerald-600 font-semibold">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/60 rounded-2xl">
                  <p className="text-sm text-gray-600">
                    <strong>Emergency Support:</strong> Available 24/7 for enterprise customers
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Twitter className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="mailto:contact@paapi.ai"
                    className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                question: "How quickly can I get started?",
                answer: "Most clients are up and running within 48 hours. Our team provides full onboarding support to ensure a smooth transition."
              },
              {
                question: "Is my data secure and private?",
                answer: "Absolutely. We use Privacy-Enhancing Technologies (PETs) and are fully compliant with GDPR, CCPA, and other privacy regulations."
              },
              {
                question: "Do you offer custom integrations?",
                answer: "Yes, we provide custom integrations for enterprise clients. Our API is flexible and can connect with most marketing platforms."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer 24/7 support for enterprise customers, with dedicated account managers and technical support teams."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 