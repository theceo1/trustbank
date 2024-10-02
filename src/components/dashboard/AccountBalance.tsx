// src/components/dashboard/AccountBalance.tsx
import React, { useState } from 'react';
import Modal from '../common/Modal'; // Adjust the import path as needed

const AccountBalance: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-green-600 text-black p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Account Balance</h2>
      <div className="flex items-baseline">
        <span className="text-4xl font-bold">₦0.00</span>
        <span className="ml-2 text-sm">NGN</span>
      </div>
      <p className="text-sm mt-1">≈ 0.00 BTC</p>
      <button
        onClick={openModal}
        className="mt-2 w-full bg-black text-gray-100 px-2 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
      >
        Deposit
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Deposit Funds">
        <p className="text-green-600">Deposit feature COMING SOON.</p>
      </Modal>
    </div>
  );
};

export default AccountBalance;
