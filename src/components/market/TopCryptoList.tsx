import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { fetchTopCryptos, Crypto } from '../../services/api';

const TopCryptoList: React.FC = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopCryptos(10);
        setCryptos(data);
      } catch (error) {
        console.error('Failed to fetch top cryptocurrencies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold p-4 bg-gray-100">Top Cryptocurrencies</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">24h Change</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market Cap</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cryptos.map((crypto) => (
              <tr key={crypto.id}>
                <td className="px-6 py-4 whitespace-nowrap">{crypto.market_cap_rank || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {crypto.image && (
                      <Image
                        src={crypto.image}
                        alt={crypto.name}
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                    )}
                    {crypto.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">${crypto.current_price?.toFixed(2) || 'N/A'}</td>
                <td className={`px-6 py-4 whitespace-nowrap ${(crypto.price_change_percentage_24h || 0) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {crypto.price_change_percentage_24h?.toFixed(2) || 'N/A'}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap">${crypto.market_cap?.toLocaleString() || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopCryptoList;
