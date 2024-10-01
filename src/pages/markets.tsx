//src/pages/markets.tsx
import React from 'react';
import Layout from '../components/layout/Layout';
import MarketOverview from '../components/market/MarketOverview';
import MarketTrends from '../components/market/MarketTrends';
import NewsFeed from '../components/market/NewsFeed';
import MarketStats from '../components/market/MarketStats';
import PriceCharts from '../components/market/PriceCharts';
import Watchlist from '../components/market/Watchlist';
import withSidebar from '@/components/layout/withSidebar';
import Head from 'next/head';

import ProtectedRoute from '@/components/auth/ProtectedRoute';

const MarketsPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Market - trustBank</title>
        <meta name="description" content="Market Overview" />
      </Head>
      <ProtectedRoute>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Market</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MarketOverview />
          </div>
          <div className="lg:col-span-1">
            <MarketStats />
          </div>
          <div className="lg:col-span-3">
            <PriceCharts coin="bitcoin" />
          </div>
          <div className="lg:col-span-2">
            <MarketTrends />
          </div>
          <div className="lg:col-span-1">
            <Watchlist />
          </div>
          <div className="lg:col-span-3">
            <NewsFeed />
          </div>
        </div>
      </div>
      </ProtectedRoute>
    </Layout>
  );
};

export default withSidebar(MarketsPage);
