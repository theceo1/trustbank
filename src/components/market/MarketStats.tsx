// src/components/market/MarketStats.tsx
import React, { useState, useEffect } from 'react';
import { fetchMarketStats, MarketStats as MarketStatsType } from '../../services/api';

const MarketStats: React.FC = () => {
  const [stats, setStats] = useState<MarketStatsType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMarketStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch market stats', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600 dark:text-teal-500">Loading market stats...</div>;
  }

  if (!stats) {
    return <div className="text-center text-red-600">Failed to load market stats</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Market Stats</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Market Cap</h3>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-300">${stats.total_market_cap.usd.toLocaleString()}</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">24h Trading Volume</h3>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-300">${stats.total_volume.usd.toLocaleString()}</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Bitcoin Dominance</h3>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-300">{stats.market_cap_percentage.btc.toFixed(2)}%</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Active Cryptocurrencies</h3>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-300">{stats.active_cryptocurrencies}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;
