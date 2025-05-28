'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  ArrowRight,
  Shield,
  Zap
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

const ProductPage = () => {
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
              <BarChart3 className="w-4 h-4 mr-2" />
              Privacy-First Analytics Platform
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 text-gray-900 leading-tight tracking-tight"
            >
              Measure ads with
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-2">
                complete privacy
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
            >
              Transform your advertising measurement with our privacy-first platform. 
              Get actionable insights while respecting user privacy and staying compliant.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center w-full sm:w-auto justify-center tracking-wide"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-emerald-300 hover:text-emerald-600 transition-all duration-300 w-full sm:w-auto tracking-wide"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Overview */}
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
              Everything you need for modern ad measurement
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto font-light"
            >
              Built for the privacy-first era with enterprise-grade security and compliance
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
                icon: TrendingUp,
                title: "Real-time Attribution",
                description: "Track performance across all channels with millisecond precision and immediate insights."
              },
              {
                icon: Shield,
                title: "Privacy Compliant",
                description: "GDPR, CCPA, and future-ready with advanced privacy-enhancing technologies."
              },
              {
                icon: Zap,
                title: "Instant Activation",
                description: "Turn insights into action immediately with direct platform integrations."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase 1 - ROAS Tracking */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                {/* Browser mockup */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 text-sm text-gray-500 font-mono">paapi.com/dashboard</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">ROAS Performance</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">4.2x Current</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">+12% vs Last Month</span>
                    </div>
                  </div>

                  {/* Simplified chart */}
                  <div className="h-48 bg-gray-50 rounded-xl p-6 relative overflow-hidden">
                    <div className="flex items-end justify-between h-full space-x-3">
                      {[3.2, 4.1, 3.8, 4.5, 3.9, 4.2, 4.8, 3.6].map((value, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(value / 5) * 100}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg flex-1 min-h-[8px] shadow-sm"
                        />
                      ))}
                    </div>
                    <div className="absolute bottom-2 left-6 right-6 flex justify-between text-xs text-gray-500 font-medium">
                      <span>Jan</span>
                      <span>Mar</span>
                      <span>May</span>
                      <span>Jul</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <div className="max-w-lg">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Real-time ROAS tracking across all channels
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                  Monitor return on ad spend in real-time with granular channel-level insights. 
                  Get instant alerts when performance drops and take immediate action.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="font-medium">Cross-channel attribution modeling</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="font-medium">Real-time performance alerts</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="font-medium">Automated optimization recommendations</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase 2 - Cost Analysis */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="max-w-lg">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Precise customer acquisition cost analysis
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                  Track every touchpoint in the customer journey to understand true acquisition costs. 
                  Optimize your media spend with granular cost breakdowns.
                </p>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-emerald-600">$12.50</div>
                      <div className="text-sm text-gray-600 font-medium">Avg. CAC</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">-23%</div>
                      <div className="text-sm text-gray-600 font-medium">vs Last Month</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 tracking-tight">Channel Performance</h3>
                  
                  <div className="space-y-6">
                    {[
                      { channel: 'Google Ads', cpa: '$8.50', color: 'bg-emerald-500', width: '85%' },
                      { channel: 'Facebook', cpa: '$12.30', color: 'bg-blue-500', width: '70%' },
                      { channel: 'LinkedIn', cpa: '$18.90', color: 'bg-purple-500', width: '45%' },
                      { channel: 'Twitter', cpa: '$15.60', color: 'bg-orange-500', width: '55%' }
                    ].map((row, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center flex-1">
                          <span className="text-sm font-medium text-gray-700 w-24">{row.channel}</span>
                          <div className="flex-1 mx-4 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: row.width }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              viewport={{ once: true }}
                              className={`h-full ${row.color} rounded-full`}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 w-16 text-right">{row.cpa}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
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
              Ready to transform your ad measurement?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light"
            >
              Join leading companies who trust Paapi for privacy-first advertising analytics
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
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-emerald-300 hover:text-emerald-600 transition-all duration-300 tracking-wide"
              >
                Schedule Demo
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

export default ProductPage; 