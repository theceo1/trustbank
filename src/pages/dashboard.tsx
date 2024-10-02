// src/pages/dashboard.tsx
import React from 'react';
import Head from 'next/head';
import { ArrowPathIcon, FunnelIcon } from '@heroicons/react/24/outline';
import AccountBalance from '@/components/dashboard/AccountBalance';
import RecentTransactions from '@/components/dashboard/RecentTransactions';
import MarketOverview from '@/components/dashboard/MarketOverview';
import Trade from '@/components/dashboard/Trade';
import CryptoPriceTracker from '@/components/common/CryptoPriceTracker';
import Layout from '@/components/layout/Layout';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <Layout>
        <Head>
          <title>Dashboard - trustBank</title>
          <meta name="description" content="User Dashboard" />
        </Head>

        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mt-6">
            <h1 className="text-3xl font-bold text-black">Dashboard</h1>
            {/* <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-teal-600 transition">
                <ArrowPathIcon className="w-5 h-5 mr-2" />
                Refresh
              </button>
              <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-teal-600 transition">
                <FunnelIcon className="w-5 h-5 mr-2" />
                Filter
              </button>
            </div> */}
          </div>
          
          <p className="text-lg text-gray-600 mb-8 mt-2">
            Welcome, {user?.name || user?.email}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <AccountBalance />
              <div className="mt-8">
                <CryptoPriceTracker />
              </div>
              <RecentTransactions />
            </div>
            
            <div className="lg:col-span-2">
              <MarketOverview />
              <div className="mt-8">
                <Trade />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
};

export default Dashboard;