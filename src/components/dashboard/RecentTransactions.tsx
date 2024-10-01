import React from 'react'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'

const transactions = [
  { id: 1, type: 'buy', coin: 'Bitcoin', amount: '0.05 BTC', value: '+$1,250' },
  { id: 2, type: 'sell', coin: 'Ethereum', amount: '0.25 ETH', value: '-$75' },
  { id: 3, type: 'deposit', coin: 'USDC', amount: '$500', value: '+$500' },
]

const RecentTransactions: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <ul className="space-y-4">
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`p-2 rounded-full mr-3 ${
                transaction.type === 'buy' ? 'bg-green-100' : 
                transaction.type === 'sell' ? 'bg-red-100' : 'bg-blue-100'
              }`}>
                {transaction.type === 'buy' && <ArrowUpIcon className="w-4 h-4 text-green-600" />}
                {transaction.type === 'sell' && <ArrowDownIcon className="w-4 h-4 text-red-600" />}
                {transaction.type === 'deposit' && <ArrowUpIcon className="w-4 h-4 text-blue-600" />}
              </div>
              <div>
                <p className="font-medium">{transaction.coin}</p>
                <p className="text-sm text-gray-500">{transaction.amount}</p>
              </div>
            </div>
            <span className={`font-medium ${
              transaction.value.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {transaction.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentTransactions