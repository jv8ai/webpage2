import React from 'react';
import { Brain, Zap, Target, Shield, Repeat, Globe } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Matching',
    description: 'Our advanced AI analyzes your business goals, industry, and preferences to connect you with perfect partnership opportunities.',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Zap,
    title: '24/7 Automation',
    description: 'Set it and forget it. Our platform works around the clock to grow your network and track your affiliate commissions automatically.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Target,
    title: 'Quality Over Quantity',
    description: 'We focus on meaningful connections that drive real results, not just adding numbers to your contact list.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Shield,
    title: 'Verified Partners',
    description: 'Every member goes through our comprehensive verification process to ensure authentic, serious business professionals.',
    gradient: 'from-rose-500 to-orange-500'
  },
  {
    icon: Repeat,
    title: '8-Level Commission',
    description: 'Earn recurring commissions up to 8 levels deep. Build once, earn forever from your growing network.',
    gradient: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Connect with entrepreneurs and business owners from around the world. Expand your reach beyond geographical limits.',
    gradient: 'from-yellow-500 to-green-500'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Powered by{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Advanced AI Technology
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of business networking with intelligent automation, 
            verified connections, and unlimited earning potential.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-slate-50/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-transparent hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}