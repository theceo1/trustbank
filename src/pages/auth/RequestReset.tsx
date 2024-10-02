//src/pages/auth/RequestReset.tsx
import React, { useState } from 'react';
import Alert from '../../components/common/Alert';
import Link from 'next/link';

const RequestReset: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    // TODO: Implement password reset functionality
    setSuccess('Password reset functionality not implemented yet');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-teal-500 to-blue-600">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Reset your password
        </h2>
        {error && <Alert type="error" message={error} />}
        {success && <Alert type="success" message={success} />}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email-address" className="block text-gray-700 dark:text-gray-300">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 border rounded-lg text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition"
          >
            Send reset link
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          Remembered your password?{' '}
          <Link href="/login" legacyBehavior>
            <a><span className="text-green-600 hover:underline">Login</span></a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RequestReset;
