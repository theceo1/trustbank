import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Alert from '../../components/common/Alert';

const ResetPassword: React.FC = () => {
  const router = useRouter();
  const { token } = router.query;
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    setSuccess('');
    // TODO: Implement password reset functionality
    setSuccess('Password reset functionality not implemented yet');
    router.push('/login');
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
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-300">
              New password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 border rounded-lg text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-gray-700 dark:text-gray-300">
              Confirm new password
            </label>
            <input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              required
              className="w-full px-3 py-2 border rounded-lg text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
