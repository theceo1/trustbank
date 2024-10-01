// src/components/market/MarketOverview.tsx
import React, { useState, useEffect } from 'react';
import { fetchMarketOverview, Coin } from '../../services/api';

const MarketOverview: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchMarketOverview();
        setCoins(data);
        setError(null);
      } catch (error) {
        setError('Failed to fetch market overview');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading market overview...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Market Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coins.map((coin) => (
          <div key={coin.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{coin.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Current Price: ${coin.current_price.toFixed(2)}
            </p>
            <p
              className={`text-sm ${
                coin.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'
              }`}
            >
              24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketOverview;
