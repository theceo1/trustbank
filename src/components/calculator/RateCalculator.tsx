import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface CoinGeckoResponse {
  [key: string]: {
    ngn: number;
  };
}

const RateCalculator: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<'BTC' | 'ETH' | 'USDT' | 'USDC'>('BTC');
  const [walletAction, setWalletAction] = useState('BUY');
  const [amount, setAmount] = useState('');
  const [calculatedValue, setCalculatedValue] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currencyIds: { [key in typeof selectedCurrency]: string } = {
    BTC: 'bitcoin',
    ETH: 'ethereum',
    USDT: 'tether',
    USDC: 'usd-coin'
  };

  const fetchMarketValue = async () => {
    setLoading(true);
    setError(null);
    setCalculatedValue(null);

    try {
      const currencyId = currencyIds[selectedCurrency];
      const response = await axios.get<CoinGeckoResponse>(
        `https://api.coingecko.com/api/v3/simple/price?ids=${currencyId}&vs_currencies=ngn`
      );

      console.log("API Response:", response.data);

      const currencyData = response.data[currencyId];

      if (!currencyData) {
        throw new Error(`No data found for ${selectedCurrency}`);
      }

      const rate = currencyData.ngn;
      const value =
        walletAction === 'BUY'
          ? parseFloat(amount) / rate
          : parseFloat(amount) * rate;

      setCalculatedValue(value);
    } catch (err: any) {
      console.error("Error fetching market value:", err);
      setError('Failed to fetch market value. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleCalculate = () => {
    if (!amount || isNaN(parseFloat(amount))) {
      setError('Please enter a valid amount.');
      return;
    }
    fetchMarketValue();
  };

  return (
    <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">CALCULATOR</h1>
      <h2 className="text-2lg font-semibold mb-8 text-gray-700">Market rates you can trust</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">CRYPTO | <span className="text-teal-500">TRUST</span></h3>

          <div className="mb-4">
            <p className="mb-2">Select Currency:</p>
            <div className="flex space-x-2">
              {Object.keys(currencyIds).map((currency) => (
                <button
                  key={currency}
                  className={`p-2 rounded ${selectedCurrency === currency ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => setSelectedCurrency(currency as 'BTC' | 'ETH' | 'USDT' | 'USDC')}
                >
                  {currency}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="mb-2">Wallet Action:</p>
            <select
              className="w-full p-2 border rounded"
              value={walletAction}
              onChange={(e) => setWalletAction(e.target.value)}
            >
              <option value="BUY">BUY</option>
              <option value="SELL">SELL</option>
            </select>
          </div>

          <div className="mb-4">
            <p className="mb-2">Amount in USD</p>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <p className="text-sm text-gray-600 mt-1">$1 - NGN1640</p>
          </div>

          <div className="mb-4">
            {loading ? (
              <p className="text-lg text-teal-500">Calculating...</p>
            ) : error ? (
              <p className="text-lg text-red-500">{error}</p>
            ) : calculatedValue !== null ? (
              <>
                <p className="text-2xl font-bold">
                  {calculatedValue.toFixed(4)} {selectedCurrency}
                </p>
                <p className="text-sm text-gray-600">
                  {walletAction === 'BUY' ? `You can buy ${calculatedValue.toFixed(4)} ${selectedCurrency}` : `You'll get ${calculatedValue.toFixed(4)} ${selectedCurrency}`}
                </p>
              </>
            ) : (
              <p className="text-2xl font-bold">0.00</p>
            )}
            <p className="text-xs text-gray-500 mt-2">NOTE: This is an estimated rate. Actual rate may differ</p>
          </div>

          <button
            className="w-full bg-teal-500 text-white py-2 rounded font-semibold"
            onClick={handleCalculate}
            disabled={loading}
          >
            Calculate
          </button>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/images/calculator-illustration.png"
            alt="Calculator Illustration"
            width={600}
            height={600}
            unoptimized // Add this prop to bypass image optimization
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-2">JOIN 300,000+ PEOPLE USING trustBank</p>
        <p className="text-2xl font-bold text-blue-800">Create a free account and get started</p>
      </div>
    </div>
  );
};

export default RateCalculator;
