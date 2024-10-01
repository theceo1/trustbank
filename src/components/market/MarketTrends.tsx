// src/components/market/MarketTrends.tsx
import React, { useState, useEffect } from 'react';
import { fetchMarketTrends, MarketTrend } from '../../services/api';

const MarketTrends: React.FC = () => {
  const [gainers, setGainers] = useState<MarketTrend[]>([]);
  const [losers, setLosers] = useState<MarketTrend[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { gainers, losers } = await fetchMarketTrends();
        setGainers(gainers);
        setLosers(losers);
      } catch (error) {
        console.error('Failed to fetch market trends', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading market trends...</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Market Trends</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-green-600">Top Gainers</h3>
          <ul>
            {gainers.map((coin) => (
              <li key={coin.item.id} className="mt-2">
                {coin.item.name}: {coin.item.price_change_percentage_24h.toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-red-600">Top Losers</h3>
          <ul>
            {losers.map((coin) => (
              <li key={coin.item.id} className="mt-2">
                {coin.item.name}: {coin.item.price_change_percentage_24h.toFixed(2)}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarketTrends;
