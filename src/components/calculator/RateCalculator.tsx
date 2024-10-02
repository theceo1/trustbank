//src/components/calculator/RateCalculator.tsx
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';
import Modal from '@/components/common/Modal';

interface CoinGeckoResponse {
  [key: string]: {
    usd: number;
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

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionError, setSubscriptionError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        `https://api.coingecko.com/api/v3/simple/price?ids=${currencyId}&vs_currencies=usd,ngn`
      );

      const currencyData = response.data[currencyId];

      if (!currencyData) {
        throw new Error(`No data found for ${selectedCurrency}`);
      }

      const usdRate = currencyData.usd;
      const ngnRate = currencyData.ngn;
      const usdAmount = parseFloat(amount);
      
      let value: number;
      if (walletAction === 'BUY') {
        value = (usdAmount / usdRate) * ngnRate;
      } else {
        value = (usdAmount * ngnRate) / usdRate;
      }

      setCalculatedValue(value);
    } catch (err: any) {
      console.error("Error fetching market value:", err);
      setError('Failed to fetch market value. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const formatNaira = (value: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const handleCalculate = () => {
    if (!amount || isNaN(parseFloat(amount))) {
      setError('Please enter a valid amount.');
      return;
    }
    fetchMarketValue();
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubscriptionError(null);

    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;

      setIsModalOpen(true);
      setEmail('');
    } catch (error: any) {
      setSubscriptionError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">CALCULATOR</h1>
      <h2 className="text-2lg font-semibold mb-8 text-gray-700">Market rates you can trust</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">CRYPTO | <span className="text-green-600">TRUST</span></h3>

          <div className="mb-4">
            <p className="mb-2">Select Currency:</p>
            <div className="flex space-x-2">
              {Object.keys(currencyIds).map((currency) => (
                <button
                  key={currency}
                  className={`p-2 rounded ${selectedCurrency === currency ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
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
              placeholder="Enter amount in USD"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="mb-4">
            {loading ? (
              <p className="text-lg text-teal-500">Calculating...</p>
            ) : error ? (
              <p className="text-lg text-red-500">{error}</p>
            ) : calculatedValue !== null ? (
              <>
                <p className="text-2xl font-bold">
                  {formatNaira(calculatedValue)}
                </p>
                <p className="text-sm text-gray-600">
                  {walletAction === 'BUY' 
                    ? `You need to pay ${formatNaira(calculatedValue)} NGN to buy $${amount} USD worth of ${selectedCurrency}` 
                    : `You'll get ${formatNaira(calculatedValue)} NGN for selling $${amount} USD worth of ${selectedCurrency}`}
                </p>
              </>
            ) : (
              <p className="text-2xl font-bold">{formatNaira(0)}</p>
            )}
            <p className="text-xs text-gray-500 mt-2">NOTE: This is an estimated rate. Actual rate may differ</p>
          </div>

          <button
            className="w-full bg-green-600 text-white py-2 rounded font-semibold"
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
            unoptimized
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-2">JOIN 30,000+ PEOPLE USING trustBank</p>
        <form onSubmit={handleSubscribe} className="mt-2 flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md px-4 py-2 border rounded-md mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
          </button>
          {subscriptionError && <p className="text-red-500 mt-2">{subscriptionError}</p>}
        </form>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">OR</h2>
        <p className="text-2xl font-bold text-blue-800 mb-4">Create a free account and get started</p>
        <Link href="/register" className="text-green-600 hover:underline">Register Now</Link>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Subscribed">
        <p className="text-green-600">Welcome to the <span className="font-bold text-green-600">TRUSTED</span> community. 😃 </p>
      </Modal>
    </div>
  );
};

export default RateCalculator;