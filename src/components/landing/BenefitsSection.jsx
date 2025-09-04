
import React from 'react';
import { DollarSign, TrendingUp, Users, Clock, Star, Award } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-100/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-indigo-100/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-green-700">Proven Results</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Turn Your Network Into a{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Wealth Machine
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Join thousands of entrepreneurs who have transformed their business relationships 
              into profitable partnerships and recurring income streams.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Multiple Income Streams</h4>
                  <p className="text-slate-600 text-sm">Earn from referrals, partnerships, and affiliate commissions simultaneously.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Exponential Growth</h4>
                  <p className="text-slate-600 text-sm">Each connection multiplies your opportunities through our 8-level system.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Quality Connections</h4>
                  <p className="text-slate-600 text-sm">Connect with verified, serious entrepreneurs ready to collaborate.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Save Time</h4>
                  <p className="text-slate-600 text-sm">AI handles the heavy lifting while you focus on building relationships.</p>
                </div>
              </div>
            </div>
            
            {/* Success Metrics */}
            <div className="bg-gradient-to-r from-white/60 to-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">$50K+</div>
                  <div className="text-sm text-slate-600">Avg. Annual Earnings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-indigo-600">98%</div>
                  <div className="text-sm text-slate-600">Member Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">24hrs</div>
                  <div className="text-sm text-slate-600">First Connection</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
              {/* Commission Structure Visualization */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-4 text-center">8-Level Commission Structure</h4>
                <div className="space-y-3">
                  {[
                    { level: 'Level 1', percentage: '25%', amount: '$250' },
                    { level: 'Level 2', percentage: '15%', amount: '$150' },
                    { level: 'Level 3', percentage: '10%', amount: '$100' },
                    { level: 'Level 4', percentage: '8%', amount: '$80' },
                    { level: 'Level 5', percentage: '5%', amount: '$50' },
                    { level: 'Level 6', percentage: '3%', amount: '$30' },
                    { level: 'Level 7', percentage: '2%', amount: '$20' },
                    { level: 'Level 8', percentage: '1%', amount: '$10' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                      <span className="font-medium text-slate-700">{item.level}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-600 font-semibold">{item.amount}</span>
                        <span className="text-slate-500 text-sm">({item.percentage})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-green-600">Total Potential: $690</div>
                <div className="text-sm text-slate-600">Per referral across all levels</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
