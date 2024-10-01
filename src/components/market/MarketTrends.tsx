import React, { useState, useEffect } from 'react';
import { fetchTrendingCryptos, Crypto } from '../../services/api';
import Image from 'next/image';

const MarketTrends: React.FC = () => {
  const [trends, setTrends] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingCryptos();
        setTrends(data);
      } catch (error) {
        console.error('Failed to fetch market trends:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Market Trends</h2>
      {trends.map((coin) => (
        <div key={coin.id}>
          {coin.thumb && (
            <Image
              src={coin.thumb}
              alt={coin.name}
              width={24}
              height={24}
              unoptimized
            />
          )}
          <h3>{coin.name}</h3>
          <p>Symbol: {coin.symbol}</p>
          <p>Market Cap Rank: {coin.market_cap_rank || 'N/A'}</p>
          <p>Price (BTC): {coin.price_btc?.toFixed(8) || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

export default MarketTrends;
