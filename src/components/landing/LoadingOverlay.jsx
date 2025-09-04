import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function LoadingOverlay({ isRedirecting, trackingCode }) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-lg z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
        <div className="mb-6">
          {!isRedirecting ? (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {!isRedirecting ? 'Setting up your experience...' : 'Ready to go!'}
        </h3>
        
        <p className="text-slate-600 mb-4">
          {!isRedirecting 
            ? `Processing referral code: ${trackingCode}` 
            : 'Redirecting you to JV8 with your referral tracked'
          }
        </p>
        
        {isRedirecting && (
          <div className="flex items-center justify-center text-indigo-600 font-semibold">
            <span className="mr-2">Taking you to JV8</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}