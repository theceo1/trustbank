// File: src/pages/login.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Alert from '@/components/common/Alert';
import Head from 'next/head';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      router.push('/dashboard');
    } catch (error: any) {
      setError('Login failed: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw error;
    } catch (error: any) {
      setError('Google login failed: ' + error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Login - trustBank</title>
        <meta name="description" content="Login to your account" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">Login to Your Account</h2>
          {error && <Alert type="error" message={error} />}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-green-300 dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-green-300 dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-green-600 text-white rounded-md text-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <div className="flex justify-between items-center mt-4">
              <Link href="/auth/RequestReset" legacyBehavior><a><span className="text-sm text-green-600 hover:underline">Forgot your password?</span></a></Link>
            </div>
          </form>
          <div className="mt-4">
            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 px-4 bg-red-600 text-white rounded-md text-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Continue with Google
            </button>
          </div>
          <p className="text-sm text-center text-gray-400 mt-4">
            Don&apos;t have an account?{' '}
            <Link href="/register" legacyBehavior>
              <a className="text-green-600 hover:underline">Register</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;