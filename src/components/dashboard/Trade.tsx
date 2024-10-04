// src/components/dashboard/Trade.tsx
import React from 'react';
import BuySell from '../trade/BuySell';
import DepositWithdraw from '../trade/DepositWithdraw';
import SendReceive from '../trade/SendReceive';
import SwapCrypto from '../trade/SwapCrypto';

const Trade: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lg shadow-gray-400 rounded-lg">
      <BuySell />
      <DepositWithdraw />
      <SendReceive />
      <SwapCrypto />
    </div>
  );
};

export default Trade;
