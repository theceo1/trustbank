import React, { useState, useEffect } from 'react';
import { fetchTopCryptos, Crypto } from '../../services/api';

const MarketOverview: React.FC = () => {
  const [coins, setCoins] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopCryptos(10);
        setCoins(data);
      } catch (error) {
        console.error('Failed to fetch market overview:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Market Overview</h2>
      {coins.map((coin) => (
        <div key={coin.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{coin.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Current Price: ${coin.current_price?.toFixed(2) || 'N/A'}
          </p>
          <p className={`text-sm ${(coin.price_change_percentage_24h || 0) > 0 ? "text-green-600" : "text-red-600"}`}>
            24h Change: {coin.price_change_percentage_24h?.toFixed(2) || 'N/A'}%
          </p>
        </div>
      ))}
    </div>
  );
};

export default MarketOverview;
