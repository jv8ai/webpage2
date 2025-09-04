import React, { useEffect, useState, useCallback } from "react";
import { AffiliateClick } from "@/api/entities";

import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import CTASection from "../components/landing/CTASection";
import LoadingOverlay from "../components/landing/LoadingOverlay";

export default function Home() {
  const [isTracking, setIsTracking] = useState(false);
  const [trackingCode, setTrackingCode] = useState(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleAffiliateTracking = useCallback(async () => {
    try {
      // Parse URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const refCode = urlParams.get('ref__');
      
      if (refCode) {
        setIsTracking(true);
        setTrackingCode(refCode);
        
        // Store referral in localStorage
        localStorage.setItem('jv8_referral_id', refCode);
        localStorage.setItem('jv8_referral_timestamp', new Date().toISOString());
        
        // Log the click
        await logAffiliateClick(refCode);
        
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
        
        // Set redirect timer
        setTimeout(() => {
          setIsRedirecting(true);
          window.location.href = `https://jv8.co/#/Welcome?referrer=${refCode}`;
        }, 3000);
      }
    } catch (error) {
      console.error('Error handling affiliate tracking:', error);
      setIsTracking(false);
    }
  }, []);

  const logAffiliateClick = async (trackingCode) => {
    try {
      await AffiliateClick.create({
        tracking_code: trackingCode,
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || 'direct',
        page_url: window.location.href,
        ip_address: null // Will be populated by server if needed
      });
    } catch (error) {
      console.error('Error logging affiliate click:', error);
    }
  };

  useEffect(() => {
    handleAffiliateTracking();
  }, [handleAffiliateTracking]);

  const handleCTAClick = () => {
    const referralId = localStorage.getItem('jv8_referral_id');
    if (referralId) {
      window.location.href = `https://jv8.co/#/Welcome?referrer=${referralId}`;
    } else {
      window.location.href = 'https://jv8.co/#/Welcome';
    }
  };

  return (
    <>
      {(isTracking || isRedirecting) && (
        <LoadingOverlay 
          isRedirecting={isRedirecting}
          trackingCode={trackingCode}
        />
      )}
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/348bfecfe_newjvlogo.png"
                  alt="JV8 Logo"
                  className="h-20 w-auto"
                />
              </div>
              <button
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          <HeroSection onCTAClick={handleCTAClick} />
          <FeaturesSection />
          <BenefitsSection />
          <TestimonialsSection />
          <CTASection onCTAClick={handleCTAClick} />
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-6 md:mb-0">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/348bfecfe_newjvlogo.png"
                  alt="JV8 Logo"
                  className="h-8 w-auto mr-3 brightness-200"
                />
                <span className="text-lg font-semibold">JV8</span>
              </div>
              <p className="text-slate-400 text-center md:text-right">
                © 2024 JV8. All rights reserved. | 
                <span className="ml-2">AI-Powered Business Networking</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
