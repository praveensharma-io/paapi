'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, 
  BarChart3, 
  Users, 
  Zap, 
  Lock, 
  TrendingUp, 
  Target,
  ChevronRight,
  Mail,
  User,
  MessageSquare,
  Facebook,
  Linkedin,
  Star,
  Check,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

// Custom animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] // Custom easing for smoother motion
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

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const features = [
    {
      icon: Users,
      title: "User-Level",
      description: "Stitching the cross-channel path to give ROAS for each individual.",
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: BarChart3,
      title: "Actionable Insights",
      description: "Identify waste with precision, directly activate audiences to drive performance.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Privacy-First",
      description: "Future-proofed, leveraging the latest Privacy-Enhancing Technologies (PETs).",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "10x", label: "Faster Processing" },
    { number: "100%", label: "Privacy Compliant" },
    { number: "24/7", label: "Expert Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      image: "https://i.pravatar.cc/150?img=1",
      quote: "Paapi has transformed how we measure our ad performance. The privacy-first approach gives us confidence in our data."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "InnovateX",
      image: "https://i.pravatar.cc/150?img=2",
      quote: "The level of detail in user-level attribution is unmatched. We've seen a 40% improvement in our ROAS."
    },
    {
      name: "Emma Rodriguez",
      role: "Digital Marketing Lead",
      company: "GrowthLabs",
      image: "https://i.pravatar.cc/150?img=3",
      quote: "Finally, a solution that respects user privacy while delivering actionable insights. Game-changing."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "month",
      features: [
        "Up to 100,000 monthly users",
        "Basic attribution",
        "Email support",
        "Standard reports"
      ],
      color: "from-emerald-400 to-teal-500"
    },
    {
      name: "Professional",
      price: "$999",
      period: "month",
      features: [
        "Up to 500,000 monthly users",
        "Advanced attribution",
        "Priority support",
        "Custom reports",
        "API access"
      ],
      color: "from-blue-400 to-cyan-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "month",
      features: [
        "Unlimited users",
        "Full attribution suite",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee"
      ],
      color: "from-purple-400 to-pink-500"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-white to-emerald-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ 
              scale: [0.8, 1.1, 1],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse",
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mb-8 flex items-center justify-center"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-xl">
              <div className="grid grid-cols-3 gap-1 w-8 h-8">
                {[...Array(9)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: i * 0.1,
                      ease: "easeInOut"
                    }}
                    className="w-2 h-2 bg-white rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Loading bar */}
          <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden mb-3 mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut"
              }}
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
            />
          </div>
          
          {/* Loading text that fades in and out */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-center text-sm font-medium text-emerald-700"
          >
            Initializing...
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden font-sans">
      {/* Hero Section with Particles */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-3xl"></div>
          
          {/* Animated Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-500 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4 mr-2" />
              Privacy-First Technology
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Privacy-First
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Ad Measurement
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent text-4xl lg:text-5xl">
                & Optimisation Platform
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Driving effectiveness and efficiency in the age of privacy. 
              Unlock the full potential of your advertising with cutting-edge measurement solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              >
                Get Started
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-emerald-400 hover:text-emerald-600 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="relative"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-96 h-96 mx-auto relative"
              >
                {/* Central Lock Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center shadow-2xl">
                    <Lock className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                      <Shield className="w-8 h-8 text-emerald-500" />
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                      <BarChart3 className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                      <Target className="w-8 h-8 text-purple-500" />
                    </div>
                  </div>
                  
                  <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                      <TrendingUp className="w-8 h-8 text-orange-500" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Enhanced Animations */}
      <section className="py-32 bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              rotate: [360, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
          />
          
          {/* Geometric shapes */}
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-16 h-16 border-2 border-emerald-300/30 rounded-lg"
          />
          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-teal-300/20 to-emerald-300/20 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full text-emerald-700 text-sm font-semibold mb-8 border border-emerald-200/50 shadow-lg"
            >
              <BarChart3 className="w-5 h-5 mr-3" />
              <span className="tracking-wide">Performance Metrics</span>
            </motion.div>

            <motion.h2 
              variants={fadeInUp}
              className="text-5xl lg:text-6xl font-black mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Proven
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                Results
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Numbers that speak for themselves - see why leading companies trust our platform
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 overflow-hidden">
                  {/* Background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Decorative elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-100/50 to-teal-100/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon based on index */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                  >
                    {index === 0 && <Shield className="w-12 h-12 text-emerald-500" />}
                    {index === 1 && <Zap className="w-12 h-12 text-blue-500" />}
                    {index === 2 && <Lock className="w-12 h-12 text-purple-500" />}
                    {index === 3 && <Users className="w-12 h-12 text-orange-500" />}
                  </motion.div>

                  <div className="relative z-10">
                    {/* Number with counter animation */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      className="mb-4"
                    >
                      <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      
                      {/* Animated underline */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                      />
                    </motion.div>

                    {/* Label */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-gray-700 font-semibold text-lg tracking-tight group-hover:text-emerald-700 transition-colors duration-300"
                    >
                      {stat.label}
                    </motion.div>

                    {/* Additional description based on stat */}
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-gray-500 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {index === 0 && "Reliable service you can count on"}
                      {index === 1 && "Lightning-fast data processing"}
                      {index === 2 && "GDPR & CCPA compliant platform"}
                      {index === 3 && "Round-the-clock assistance"}
                    </motion.p>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{
                      background: [
                        "linear-gradient(45deg, transparent 30%, rgba(16,185,129,0.1) 50%, transparent 70%)",
                        "linear-gradient(45deg, transparent 30%, rgba(16,185,129,0.1) 50%, transparent 70%)"
                      ]
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Floating badge for special stats */}
                {(index === 1 || index === 2) && (
                  <motion.div
                    initial={{ scale: 0, y: -20 }}
                    whileInView={{ scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                  >
                    {index === 1 ? "FASTEST" : "SECURE"}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom section with additional info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100 max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <TrendingUp className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="font-bold text-gray-900 mb-2">Growing Fast</h4>
                  <p className="text-gray-600 text-sm">500+ new clients monthly</p>
                </div>
                
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="font-bold text-gray-900 mb-2">Precise Targeting</h4>
                  <p className="text-gray-600 text-sm">99.9% attribution accuracy</p>
                </div>
                
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <BarChart3 className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="font-bold text-gray-900 mb-2">Real-time Data</h4>
                  <p className="text-gray-600 text-sm">Live dashboard updates</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Enhanced Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Powerful Features for
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Modern Advertising
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of ad measurement with our comprehensive suite of privacy-first tools
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              rotate: [360, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          />
          
          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
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
          {/* Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-emerald-300 text-sm font-medium mb-8 border border-white/20"
            >
              <Star className="w-5 h-5 mr-3 fill-current text-yellow-400" />
              <span className="font-semibold tracking-wide">What Our Clients Say</span>
            </motion.div>

            <motion.h2 
              variants={fadeInUp}
              className="text-5xl lg:text-7xl font-black mb-8 tracking-tight"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Stories of
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Success
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Discover how industry leaders are transforming their advertising with our privacy-first platform
            </motion.p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-emerald-400/50 transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />

                  {/* Quote decoration */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl" />
                  
                  {/* Large quote mark */}
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute top-6 right-6 text-emerald-400/30"
                  >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </motion.div>

                  <div className="relative z-10">
                    {/* Rating */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center mb-6"
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.4 + index * 0.1 + i * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                        >
                          <Star className="w-6 h-6 text-yellow-400 fill-current mr-1" />
                        </motion.div>
                      ))}
                      <span className="ml-2 text-gray-300 text-sm font-medium">5.0</span>
                    </motion.div>

                    {/* Quote */}
                    <motion.blockquote 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-white text-lg leading-relaxed mb-8 font-medium"
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </motion.blockquote>

                    {/* Author */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="relative">
                        <motion.img
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-3 border-emerald-400/50 shadow-lg"
                        />
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center border-2 border-gray-900"
                        >
                          <Check className="w-3 h-3 text-gray-900" />
                        </motion.div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-bold text-white text-lg tracking-tight">{testimonial.name}</h4>
                        <p className="text-emerald-400 text-sm font-semibold">{testimonial.role}</p>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{
                      background: [
                        "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                        "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)"
                      ]
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <motion.div 
              variants={fadeInUp}
              className="inline-flex flex-col sm:flex-row items-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 flex items-center"
              >
                Join Our Success Stories
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              
              <motion.p 
                variants={fadeInUp}
                className="text-gray-400 text-sm"
              >
                Trusted by 500+ companies worldwide
              </motion.p>
            </motion.div>

            {/* Company logos */}
            <motion.div 
              variants={fadeInUp}
              className="mt-12 flex flex-wrap justify-center items-center gap-12 opacity-40"
            >
              {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company) => (
                <motion.div
                  key={company}
                  whileHover={{ 
                    scale: 1.1,
                    opacity: 0.8,
                    transition: { duration: 0.3 }
                  }}
                  className="text-2xl font-bold text-white tracking-tight cursor-pointer"
                >
                  {company}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white p-8 rounded-3xl shadow-lg relative ${
                  plan.popular ? 'ring-2 ring-emerald-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${plan.color} hover:shadow-lg transition-all duration-300`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Contact Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-teal-100/20 to-emerald-100/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3"></div>
        
        {/* Animated dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-1.5 h-1.5 bg-emerald-400/30 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full text-emerald-700 text-sm font-medium tracking-wide mb-4 border border-emerald-100"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Us
            </motion.div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Let&apos;s start a conversation
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              We&apos;d love to hear from you. Tell us about your project or needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Form container with glass effect */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-3xl transform rotate-1 scale-[1.03] shadow-lg"></div>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100/80 relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-2">Your name</label>
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
                    <div className="absolute inset-0 border border-emerald-400/0 group-hover:border-emerald-400/10 rounded-2xl pointer-events-none transition-colors duration-300"></div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-2">Email address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl group-hover:border-emerald-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-white/60 focus:bg-white placeholder:text-gray-500 placeholder:font-normal"
                      required
                    />
                    <div className="absolute inset-0 border border-emerald-400/0 group-hover:border-emerald-400/10 rounded-2xl pointer-events-none transition-colors duration-300"></div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="relative mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 ml-2">Your message</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-6 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300 w-5 h-5" />
                  <textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl group-hover:border-emerald-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-300 bg-white/60 focus:bg-white resize-none placeholder:text-gray-500 placeholder:font-normal"
                    required
                  ></textarea>
                  <div className="absolute inset-0 border border-emerald-400/0 group-hover:border-emerald-400/10 rounded-2xl pointer-events-none transition-colors duration-300"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`px-10 py-4 rounded-full font-semibold text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
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
                      <span>Sending...</span>
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      >
                        <Check className="w-5 h-5 mr-2" />
                      </motion.div>
                      <span>Message Sent!</span>
                    </>
                  ) : formStatus === 'error' ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      >
                        <AlertCircle className="w-5 h-5 mr-2" />
                      </motion.div>
                      <span>Please try again</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                      >
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </motion.div>
              
              {/* Alternative contact methods */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-10 text-center text-sm text-gray-500"
              >
                <p>Or reach us directly at <a href="mailto:contact@paapi.ai" className="text-emerald-600 hover:text-emerald-700 font-medium">contact@paapi.ai</a></p>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-0.5 w-4 h-4">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                    ))}
                  </div>
                </div>
                <span className="text-xl font-bold">paapi</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Leading the future of privacy-first ad measurement and optimization.
              </p>
              <div className="flex space-x-4 mt-6">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">PRODUCT</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Features</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Pricing</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Case Studies</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Documentation</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">COMPANY</h3>
              <div className="space-y-3">
                <a href="/about" className="block text-gray-400 hover:text-emerald-400 transition-colors">About Us</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Careers</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Blog</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">LEGAL</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">Cookie Policy</a>
                <a href="#" className="block text-gray-400 hover:text-emerald-400 transition-colors">GDPR</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Paapi. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollYProgress.get() > 0.2 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40"
      >
        <ChevronRight className="w-6 h-6 rotate-[-90deg]" />
      </motion.button>
    </div>
  );
};

export default HomePage; 