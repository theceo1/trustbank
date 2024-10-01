// src/pages/index.tsx
import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

const Home: React.FC = () => {
  const router = useRouter();
  const { login, user, loading } = useAuth();

  
  useEffect(() => {
    const token = router.query.token as string;
    if (token) {
      console.log('Token received, logging in');
      login(token);
    } else if (!loading && user) {
      console.log('User already logged in, redirecting to dashboard');
      router.push('/dashboard');
    }
    }, [router.query.token, login, user, loading, router]);
  

  const handleGetStarted = () => {
    if (user) {
      // User is authenticated, redirect to dashboard
      router.push('/dashboard');
    } else {
      // User is not authenticated, redirect to login
      router.push('/login');
    }
  };


  return (
    <Layout>
      <Head>
        <title>trustBank - Cryptocurrency Exchange you can trust</title>
        <meta name="description" content="Begin your cryptocurrency journey with us" />
      </Head>
      <div className="px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-2">
          <h1 className="text-6xl font-bold mb-2">trustBank</h1>
          <p className="text-xl mb-8">TRADE | SPEND | <span className="text-green-600">EARN</span></p>
          <p className="text-lg mb-6">
            Secure and user-friendly cryptocurrency exchange you can <span className="text-green-600">trust</span>.
          </p>
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-md text-lg hover:bg-opacity-90"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Secure Transactions</h3>
              <p className="text-gray-700">Experience fast, secure, and transparent transactions on our platform.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Real-Time Market Data</h3>
              <p className="text-gray-700">Stay ahead with the latest market trends and live price updates.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">User-Friendly Interface</h3>
              <p className="text-gray-700">Our intuitive interface makes trading simple, even for beginners.</p>
            </div>
          </div>
        </section>

        {/* Vision Board Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Vision Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-600 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">trustCard</h3>
              <p className="text-gray-200">Borderless Payments, Real-Time transactions at terminal, and cashback rewards when you transact with trustCard.</p>
            </div>
            <div className="bg-green-600 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">trustCoin</h3>
              <p className="text-gray-200">Tired of market volatility? Look no further! Experience stability with trustCoin, our most stable ETF. Safe for investment and a reliable store of value.</p>
            </div>
            <div className="bg-green-600 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">trustExchange</h3>
              <p className="text-gray-200">Experience user-friendly yet professional trading of ETFs and other digital assets on a trusted platform, <span className="text-black">TTX</span>.</p>
            </div>
            <div className="bg-green-600 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">trustTerminal</h3>
              <p className="text-gray-200">Point Of Service terminal for merchants who accept crypto payments. Save on transaction time, cost, profit, and EARN on every transaction approved through the terminal.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-700 mb-4">
                trustBank has made my crypto trading experience smooth and secure. I couldn&apos;t ask for a better platform.
              </p>
              <p className="font-semibold text-gray-700">- Ijeoma Ogugua</p>
            </div>
            <div className="bg-white dark:bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-700 mb-4">
                The real-time market data and intuitive design have helped me make informed decisions quickly.
              </p>
              <p className="font-semibold text-gray-700">- Michael Massamba</p>
            </div>
            <div className="bg-white dark:bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-700 mb-4">
                I use trustBank for my crypto trading needs. I like the top-notch security and reliable service. I certainly recommend it.
              </p>
              <p className="font-semibold text-gray-700">- Vivian Vincent</p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-black text-white py-8 mt-12">
          <div className="container mx-auto text-center">
            <p className="mb-4">&copy; 2024 trustBank. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <Link href="/register" legacyBehavior><a className="hover:underline">Join Us</a></Link>
              <Link href="/terms" legacyBehavior><a className="hover:underline">Terms of Service</a></Link>
              <Link href="/privacy" legacyBehavior><a className="hover:underline">Privacy Policy</a></Link>
              <Link href="/about/contact" legacyBehavior><a className="hover:underline">Contact Us</a></Link>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Home;
