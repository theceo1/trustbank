// src/components/market/OrderBookTradeHistory.tsx
import React from 'react';

const OrderBookTradeHistory: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Order Book & Trade History</h2>
      <p className="text-gray-700 dark:text-gray-400">
        Show the current buy and sell orders for popular cryptocurrencies and display recent trades for popular trading pairs.
      </p>
    </div>
  );
};

export default OrderBookTradeHistory;
