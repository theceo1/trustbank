// src/pages/register.tsx
import React, { useState } from 'react';
import { useRouter, Router } from 'next/router';
import Alert from '@/components/common/Alert';
import Head from 'next/head';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name },
        },
      });
      if (error) throw error;
      localStorage.setItem('newlyRegistered', 'true');
      router.push('/dashboard');
    } catch (error: any) {
      setError('Registration failed: ' + error.message);
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
        <title>Register - trustBank</title>
        <meta name="description" content="Create an account" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 space-y-6 relative">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Create Your Account</h2>
          {error && <Alert type="error" message={error} />}
          {success && <Alert type="success" message={success} />}
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black">Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-green-600 text-white rounded-md text-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Register
            </button>
          </form>
          <div className="mt-4">
            <button
              onClick={handleGoogleLogin}
              className="w-full py-3 px-4 bg-red-600 text-white rounded-md text-lg font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Continue with Google
            </button>
          </div>
          <p className="text-sm text-center text-black">
            Already have an account? <Link href="/login"><span className="text-green-600 hover:underline">Login</span></Link>
          </p>
          
          {/* Added trustBank text */}
          <div className="absolute bottom-2 right-2 text-sm font-semibold text-black">
            trustBank
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;