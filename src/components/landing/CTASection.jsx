import React from 'react';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export default function CTASection({ onCTAClick }) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating Elements */}
        <div className="absolute top-0 left-8 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-12 right-12 w-6 h-6 bg-pink-400 rounded-full animate-pulse delay-75"></div>
        <div className="absolute bottom-8 left-16 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-150"></div>
        
        <div className="inline-flex items-center bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-yellow-400/30">
          <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
          <span className="text-yellow-400 font-semibold">Limited Time: Free Access</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Business Network Into a{' '}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Profit Engine?
          </span>
        </h2>
        
        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          Join JV8 today and start building the network that will change your business forever. 
          Connect with dream partners, earn substantial commissions, and automate your growth.
        </p>
        
        {/* Benefits Checklist */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
          {[
            'Instant AI partner matching',
            '8-level commission structure',
            '24/7 automated networking',
            'Verified quality connections',
            'Multiple income streams',
            'Risk-free trial period'
          ].map((benefit, index) => (
            <div key={index} className="flex items-center text-left">
              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
              <span className="text-slate-300">{benefit}</span>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="space-y-6">
          <button
            onClick={onCTAClick}
            className="group bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-slate-900 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 flex items-center justify-center mx-auto"
          >
            Start Your Success Story Now
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-slate-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>Free to join</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>Instant activation</span>
            </div>
          </div>
        </div>
        
        {/* Urgency Element */}
        <div className="mt-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20">
          <div className="text-red-400 font-semibold mb-2">⚡ Limited Time Offer</div>
          <div className="text-white text-lg">
            Join in the next 48 hours and get exclusive access to our 
            <span className="font-semibold text-yellow-400"> Premium AI Matching Algorithm</span>
          </div>
        </div>
      </div>
    </section>
  );
}