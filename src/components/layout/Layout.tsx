//src/components/layout/Layout.tsx
import React, { useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import Header from './Header';
import Sidebar from './Sidebar';

// Extend the Window interface to include VercelAnalytics
declare global {
  interface Window {
    VercelAnalytics: {
      track: (event: string, properties?: Record<string, any>) => void;
    };
  }
}

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

    // Manual event tracking using window.VercelAnalytics
    if (typeof window !== 'undefined' && window.VercelAnalytics) {
      window.VercelAnalytics.track('sidebar_toggle', {
        isSidebarOpen: !isSidebarOpen,
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-300">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      {/* Main content area */}
      <main className="flex-1 p-4">
        {children}
      </main>

      {/* Sidebar for mobile screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          <div
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black opacity-50"
          />
        </div>
      )}

      <SpeedInsights />
      <Analytics />
    </div>
  );
};

export default LayoutComponent;