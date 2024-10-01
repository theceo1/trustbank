import React, { useState, useEffect } from 'react';
import { fetchMarketOverview, MarketStats as MarketStatsType } from '../../services/api';

const MarketStats: React.FC = () => {
  const [stats, setStats] = useState<MarketStatsType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMarketOverview();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch market stats:', error);
      }
    };

    fetchData();
  }, []);

  if (!stats) return <div>Loading market stats...</div>;

  return (
    <div>
      <h2>Market Stats</h2>
      <p>Active Cryptocurrencies: {stats.active_cryptocurrencies}</p>
      <p>Markets: {stats.markets}</p>
      <p>Total Market Cap: ${stats.total_market_cap.usd.toFixed(2)}</p>
      <p>24h Volume: ${stats.total_volume.usd.toFixed(2)}</p>
      <p>BTC Dominance: {stats.market_cap_percentage.btc.toFixed(2)}%</p>
    </div>
  );
};

export default MarketStats;
