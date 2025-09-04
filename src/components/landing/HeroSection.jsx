import React from 'react';
import { ArrowRight, Sparkles, Users, TrendingUp } from 'lucide-react';

export default function HeroSection({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-600 mr-2" />
              <span className="text-sm font-semibold text-slate-700">AI-Powered Networking Revolution</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Connect with{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                100 Dream Partners
              </span>
              {' '}& Build Wealth Together
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              Join the exclusive AI-powered business networking platform where entrepreneurs connect, 
              collaborate, and create multiple income streams through 8-level affiliate commissions.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold text-indigo-600">100+</div>
                <div className="text-sm text-slate-600">Dream Partners</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold text-purple-600">8-Level</div>
                <div className="text-sm text-slate-600">Commissions</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold text-indigo-600">24/7</div>
                <div className="text-sm text-slate-600">AI Automation</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onCTAClick}
                className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25 transform hover:-translate-y-1 flex items-center justify-center"
              >
                Start Building Your Network
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="border-2 border-slate-300 hover:border-indigo-300 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/80 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>
            
            <p className="mt-6 text-sm text-slate-500">
              ✨ Free to join • No credit card required • Instant AI matching
            </p>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="space-y-6">
                {/* Network Visualization */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">AI Partner Match</div>
                      <div className="text-sm text-slate-600">5 new connections today</div>
                    </div>
                  </div>
                  <TrendingUp className="w-6 h-6 text-green-500" />
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4">
                  <div className="text-sm text-slate-600 mb-1">Commission Earnings</div>
                  <div className="text-2xl font-bold text-green-600">$2,847.50</div>
                  <div className="text-sm text-green-600">+127% this month</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-indigo-50 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-indigo-600">47</div>
                    <div className="text-sm text-slate-600">Active Partners</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <div className="text-lg font-bold text-purple-600">Level 8</div>
                    <div className="text-sm text-slate-600">Commission Tier</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-xl opacity-60 animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}