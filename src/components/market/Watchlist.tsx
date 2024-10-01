// src/components/market/Watchlist.tsx
import React, { useState, useEffect } from 'react';
import { fetchTopCryptos, Crypto } from '../../services/api';

const Watchlist: React.FC = () => {
  const [watchlist, setWatchlist] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopCryptos(5); // Fetch top 5 cryptocurrencies
        setWatchlist(data);
      } catch (error) {
        console.error('Failed to fetch watchlist:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Top Cryptocurrencies</h2>
      {watchlist.map((coin) => (
        <div key={coin.id}>
          <h3>{coin.name}</h3>
          <p>Price: ${coin.current_price?.toFixed(2) || 'N/A'}</p>
          <p>24h Change: {coin.price_change_percentage_24h?.toFixed(2) || 'N/A'}%</p>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
