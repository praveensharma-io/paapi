'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  ArrowRight,
  Mail,
  Users,
  Shield,
  Lock
} from 'lucide-react';

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const AboutPage = () => {
  // Team member data
  const teamMembers = [
    {
      name: 'David Tam',
      role: 'Co-Founder - Product',
      image: '/david.png',
      bio: "David brings 30 years of experience analysing and using data to drive marketing efficiency and effectiveness for many large brands. Since 2020, David has been an avid W3C contributor shaping the future of private advertising.",
      email: 'david.tam@paapi.ai'
    },
    {
      name: 'Dan Hesmondhalgh',
      role: 'Co-Founder - Commercial',
      image: '/dan.jpg',
      bio: "Dan brings 15 years of experience as a sales leader in digital marketing tech. Dan started his career in media buying at a big 6 agency, and also founded a research platform for mass produced fashion buyers, both of which underscored his belief in the power of data-led buying.",
      email: 'dan.hesmondhalgh@paapi.ai'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white to-teal-50/20"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium tracking-wide mb-8 border border-emerald-100"
            >
              <Users className="w-4 h-4 mr-2" />
              Our Mission & Team
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 text-gray-900 leading-tight tracking-tight"
            >
              We&apos;re building the
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-2">
                future of ad measurement
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Our mission is to provide advertisers with powerful, actionable insights 
              while maintaining the highest standards of user privacy and data security.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 tracking-tight"
            >
              Our Core Values
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto font-light"
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Privacy First",
                description: "We believe privacy is a fundamental human right. Our solutions are designed to protect user data while delivering powerful insights."
              },
              {
                icon: BarChart3,
                title: "Data Accuracy",
                description: "We're committed to providing the most accurate and actionable data possible, so you can make informed decisions with confidence."
              },
              {
                icon: Lock,
                title: "Security & Trust",
                description: "We maintain the highest standards of data security and transparency, ensuring our platform is worthy of your trust."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-block"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 tracking-tight">Meet The Team</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto mt-6 font-light"
            >
              The brilliant minds behind Paapi&apos;s innovation and success
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="p-8 sm:p-10 flex flex-col sm:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 mx-auto sm:mx-0 rounded-full overflow-hidden border-4 border-emerald-100 relative">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill
                        sizes="(max-width: 640px) 128px, 128px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight text-center sm:text-left">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-4 text-center sm:text-left">{member.role}</p>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-emerald-600 hover:text-emerald-700 transition-colors text-sm flex items-center"
                      >
                        <Mail className="w-4 h-4 mr-1" />
                        {member.email}
                      </a>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors"
                      >
                        Contact
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              Want to join our team?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light"
            >
              We&apos;re always looking for talented individuals who share our passion for privacy and innovation
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center tracking-wide"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-emerald-300 hover:text-emerald-600 transition-all duration-300 tracking-wide"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-0.5 w-5 h-5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                    ))}
                  </div>
                </div>
                <span className="text-2xl font-bold tracking-tight">paapi</span>
              </div>
              <p className="text-gray-400 leading-relaxed font-light">
                Privacy-first ad measurement platform for the modern marketer.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 tracking-tight">Product</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Features</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Documentation</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 tracking-tight">Company</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">About</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Blog</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Careers</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 tracking-tight">Legal</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Privacy</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Terms</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Security</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-sm tracking-wide">&copy; 2025 Paapi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage; 