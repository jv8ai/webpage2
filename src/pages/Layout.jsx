
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { User } from "@/api/entities";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { 
  Home, 
  Users, 
  TrendingUp, 
  Settings, 
  BarChart3,
  Menu,
  LogOut
} from "lucide-react";

import HomePage from './Home'; // Import the landing page

export default function Layout({ children, currentPageName }) {
  const [user, setUser] = useState(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Effect to load user data - adjusted for public pages
  useEffect(() => {
    User.me().then(setUser).catch(() => setUser(null));
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavigationItems = () => {
    return [
      {
        title: "Dashboard",
        url: createPageUrl("Dashboard"),
        icon: Home,
      },
      {
        title: "Network",
        url: createPageUrl("Network"),
        icon: Users,
      },
      {
        title: "Commissions",
        url: createPageUrl("Commissions"),
        icon: TrendingUp,
      },
      {
        title: "Analytics",
        url: createPageUrl("Analytics"),
        icon: BarChart3,
      },
      {
        title: "Settings",
        url: createPageUrl("Settings"),
        icon: Settings,
      },
    ];
  };

  const handleLogin = async () => {
    try {
      await User.login();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    await User.logout();
    setUser(null);
    window.location.href = '/';
  };

  // --- RENDER LOGIC FOR JV8.AI ---

  const isAtRoot = location.pathname === '/';
  const publicPages = ['Home']; // List explicitly public pages by their page name

  // Case 1: We are still determining the user's authentication status.
  if (user === undefined) {
    // If the user is at the root, show the Home page immediately.
    // This prioritizes the public content without waiting for auth check.
    if (isAtRoot) {
      return <HomePage />;
    }
    // For any other page, we must wait for the auth check, so show a loader.
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Case 2: We know the user is NOT logged in.
  if (user === null) {
    // If on a public page, render its content directly.
    if (publicPages.includes(currentPageName)) {
      return children;
    }
    // If on the root, always show the Home page regardless of currentPageName,
    // as it's the intended public landing.
    if (isAtRoot) {
      return <HomePage />;
    }
    
    // For all other non-public pages, show the login wall.
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-2xl rounded-2xl p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/348bfecfe_newjvlogo.png" 
              alt="JV8 Logo" 
              className="w-8 h-8"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">JV8</h1>
            <p className="text-slate-600">AI-Powered Business Networking</p>
          </div>
          <div className="space-y-4">
            <p className="text-sm text-slate-500">
              Connect with up to 100 dream partners and build wealth through 8-level affiliate commissions
            </p>
            <Button 
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 text-lg shadow-lg"
            >
              Sign In to Continue
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
            <div className="text-center">
              <p className="text-lg font-bold text-slate-900">100</p>
              <p className="text-xs text-slate-500">Connections</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-slate-900">8</p>
              <p className="text-xs text-slate-500">Levels Deep</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-slate-900">24/7</p>
              <p className="text-xs text-slate-500">AI Growth</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Case 3: We have a logged-in user. Render the full authenticated layout.
  const navigationItems = getNavigationItems();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="border-b border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/348bfecfe_newjvlogo.png" 
                  alt="JV8 Logo" 
                  className="w-5 h-5 brightness-200"
                />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">JV8</h2>
                <p className="text-xs text-gray-500">AI Business Network</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-2">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 py-2">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200 rounded-lg mb-1 ${
                          location.pathname === item.url ? 'bg-indigo-50 text-indigo-700' : ''
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-3 py-2">
                          <item.icon className="w-4 h-4" />
                          <span className="font-medium">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">
                    {user?.full_name?.[0]?.toUpperCase() || 'U'}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm truncate">
                    {user?.full_name || 'User'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="text-gray-500 hover:text-red-600"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          {/* Header with mobile trigger */}
          <header className="bg-white border-b border-gray-200 px-6 py-4 md:hidden">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200">
                <Menu className="w-5 h-5" />
              </SidebarTrigger>
              <h1 className="text-xl font-semibold">JV8</h1>
            </div>
          </header>

          {/* Main content area */}
          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
