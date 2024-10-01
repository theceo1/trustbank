// src/components/market/Watchlist.tsx
import React, { useState, useEffect } from 'react';
import { fetchWatchlist, Coin } from '../../services/api';

const Watchlist: React.FC = () => {
  const [watchlist, setWatchlist] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWatchlist();
        setWatchlist(data);
      } catch (error) {
        console.error('Failed to fetch watchlist', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading watchlist...</div>;
  }

  return (
    <div className="bg-white text-gray-900 shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 ">My Watchlist</h2>
      <ul>
        {watchlist.map((coin) => (
          <li key={coin.id} className="mb-2">
            {coin.name}: ${coin.current_price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
