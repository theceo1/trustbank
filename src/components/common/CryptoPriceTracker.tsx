import React, { useState, useEffect, useCallback } from 'react';
import useWebSocket from 'react-use-websocket';

const BINANCE_WS_URL = 'wss://stream.binance.com:9443/ws';

interface CryptoPrice {
  symbol: string;
  price: string;
}

const CryptoPriceTracker: React.FC = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);

  const { sendMessage, lastMessage } = useWebSocket(BINANCE_WS_URL);

  useEffect(() => {
    const symbols = ['btcusdt', 'ethusdt', 'usdtngn'];
    const subscribeMsg = {
      method: 'SUBSCRIBE',
      params: symbols.map(symbol => `${symbol}@ticker`),
      id: 1
    };
    sendMessage(JSON.stringify(subscribeMsg));

    return () => {
      const unsubscribeMsg = {
        method: 'UNSUBSCRIBE',
        params: symbols.map(symbol => `${symbol}@ticker`),
        id: 1
      };
      sendMessage(JSON.stringify(unsubscribeMsg));
    };
  }, [sendMessage]);

  const messageHandler = useCallback((message: MessageEvent) => {
    const data = JSON.parse(message.data);
    if (data.e === '24hrTicker') {
      setPrices(prev => {
        const index = prev.findIndex(p => p.symbol === data.s);
        if (index !== -1) {
          const newPrices = [...prev];
          newPrices[index] = { symbol: data.s, price: data.c };
          return newPrices;
        } else {
          return [...prev, { symbol: data.s, price: data.c }];
        }
      });
    }
  }, []);

  useEffect(() => {
    if (lastMessage !== null) {
      messageHandler(lastMessage);
    }
  }, [lastMessage, messageHandler]);

  return (
    <div className="bg-white dark:bg-black shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Live Crypto Prices</h2>
      <div className="space-y-2">
        {prices.map((crypto) => (
          <div key={crypto.symbol} className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">{crypto.symbol.toUpperCase()}</span>
            <span className="font-medium text-gray-800 dark:text-white">${parseFloat(crypto.price).toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoPriceTracker;