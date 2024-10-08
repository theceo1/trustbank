//src/components/dashboard/MarketOverview.tsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  image: string;
}

interface MarketOverviewProps {
  itemsPerPage?: number;
}

const MarketOverview: React.FC<MarketOverviewProps> = ({ itemsPerPage = 10 }) => {
  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: keyof Cryptocurrency; direction: 'ascending' | 'descending' } | null>(null);

  const fetchCryptocurrencies = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get<Cryptocurrency[]>(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${itemsPerPage}&page=${page}&sparkline=false`
      );
      setCryptocurrencies(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch cryptocurrency data. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [itemsPerPage, page]);

  useEffect(() => {
    fetchCryptocurrencies();
  }, [fetchCryptocurrencies]);

  const handleSort = (key: keyof Cryptocurrency) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedCryptocurrencies = React.useMemo(() => {
    let sortableCryptos = [...cryptocurrencies];
    if (sortConfig !== null) {
      sortableCryptos.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableCryptos;
  }, [cryptocurrencies, sortConfig]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-white p-6 rounded-lg overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
      <div className="overflow-x-auto">
        <table className="w-full min-w-full table-auto">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="pb-2 pr-4 whitespace-nowrap">Coin</th>
              <th className="pb-2 px-4 whitespace-nowrap">Price</th>
              <th className="pb-2 px-4 whitespace-nowrap">Change</th>
              <th className="pb-2 pl-4 whitespace-nowrap">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {sortedCryptocurrencies.map((crypto) => (
              <tr key={crypto.id} className="border-t">
                <td className="py-3 pr-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Image src={crypto.image} alt={crypto.name} width={28} height={28} className="rounded-full mr-3" />
                    <div>
                      <p className="font-medium text-sm sm:text-base">{crypto.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{crypto.symbol.toUpperCase()}</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 font-medium text-sm sm:text-base whitespace-nowrap">${crypto.current_price.toLocaleString()}</td>
                <td className={`py-3 px-4 font-medium text-sm sm:text-base whitespace-nowrap ${
                  crypto.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="py-3 pl-4 font-medium text-sm sm:text-base whitespace-nowrap">${crypto.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(prev => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MarketOverview;