import React from 'react'

const cryptocurrencies = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '$56,789.00', change: '+2.5%', marketCap: '$1.2T' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '$1,789.00', change: '-1.2%', marketCap: '$210B' },
  { id: 3, name: 'USDC', symbol: 'USDC', price: '$1.00', change: '+0.1%', marketCap: '$55B' },
]

const MarketOverview: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-600">
            <th className="pb-2">Coin</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Change</th>
            <th className="pb-2">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {cryptocurrencies.map((crypto) => (
            <tr key={crypto.id} className="border-t">
              <td className="py-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">{crypto.name}</p>
                    <p className="text-sm text-gray-500">{crypto.symbol}</p>
                  </div>
                </div>
              </td>
              <td className="py-3 font-medium">{crypto.price}</td>
              <td className={`py-3 font-medium ${
                crypto.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {crypto.change}
              </td>
              <td className="py-3 font-medium">{crypto.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MarketOverview