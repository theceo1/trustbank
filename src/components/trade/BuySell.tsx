// src/components/trade/BuySell.tsx

import React, { useState } from 'react';
import Modal from '../common/Modal'; // Make sure the Modal component is available at this path

type TradeAction = 'buy' | 'sell';

const BuySell: React.FC = () => {
  const [action, setAction] = useState<TradeAction>('buy');
  const [currency, setCurrency] = useState('BTC');
  const [amount, setAmount] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Buy / Sell Cryptocurrency</h2>
      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 ${action === 'buy' ? 'bg-green-500 text-white' : 'bg-gray-200'} rounded-l`}
          onClick={() => setAction('buy')}
        >
          Buy
        </button>
        <button
          className={`flex-1 py-2 ${action === 'sell' ? 'bg-red-500 text-white' : 'bg-gray-200'} rounded-r`}
          onClick={() => setAction('sell')}
        >
          Sell
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currency">
            Currency
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="0.00"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md ${
            action === 'buy' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
          } text-white font-bold`}
        >
          {action === 'buy' ? 'Buy' : 'Sell'} {currency}
        </button>
      </form>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={`Confirm ${action}`}>
        <p>
          You are about to {action} ${amount}USD worth of {currency}. Do you want to proceed?
        </p>
        <div className="flex justify-end mt-4 bg-red">
          <button
            onClick={closeModal}
            className="mr-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={closeModal}
            className={`px-4 py-2 ${action === 'buy' ? 'bg-green-500 hover:bg-green-600' : 'bg-green-500 hover:bg-green-600'} text-white rounded`}
          >
            Confirm
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BuySell;
