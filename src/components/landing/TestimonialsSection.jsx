import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Tech Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face&q=80',
    content: 'JV8 transformed how I network. In 3 months, I connected with 50+ quality partners and earned over $12,000 in commissions. The AI matching is incredibly accurate.',
    rating: 5,
    earnings: '$12,000+ in 3 months'
  },
  {
    name: 'Marcus Johnson',
    role: 'Business Coach',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&q=80',
    content: 'The 8-level commission structure is genius. I now earn passive income from connections I made months ago. This platform pays for itself many times over.',
    rating: 5,
    earnings: '$8,500+ monthly passive'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Digital Marketing Expert',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&q=80',
    content: 'Finally, a networking platform that actually works. Every connection is pre-qualified and genuinely interested in collaboration. Best investment I\'ve made.',
    rating: 5,
    earnings: '73 quality partnerships'
  },
  {
    name: 'David Park',
    role: 'E-commerce Founder',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&q=80',
    content: 'The AI knows exactly who I need to meet. I\'ve formed 3 major business partnerships that have already generated 6-figure revenue opportunities.',
    rating: 5,
    earnings: '6-figure opportunities'
  },
  {
    name: 'Lisa Thompson',
    role: 'Consultant',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face&q=80',
    content: 'JV8 doesn\'t just connect you with anyone - it finds your perfect business matches. The quality of connections and the commission structure is unmatched.',
    rating: 5,
    earnings: '95% connection success rate'
  },
  {
    name: 'Alex Kim',
    role: 'SaaS Entrepreneur',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&q=80',
    content: 'This platform single-handedly revolutionized my business development. The automated networking saves me 20+ hours per week while multiplying my results.',
    rating: 5,
    earnings: '20+ hours saved weekly'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-200/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Join Thousands of{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Successful Entrepreneurs
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our members say about their 
            transformation and earnings through JV8.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 group hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-indigo-600" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 shadow-lg"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </div>
              
              {/* Earnings Badge */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-full px-4 py-2 text-center">
                <div className="text-sm font-semibold text-green-700">{testimonial.earnings}</div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-white/50">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">5,000+</div>
                <div className="text-sm text-slate-600">Active Members</div>
              </div>
              <div className="w-px h-8 bg-slate-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">$2.5M+</div>
                <div className="text-sm text-slate-600">Commissions Paid</div>
              </div>
              <div className="w-px h-8 bg-slate-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">98.7%</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}