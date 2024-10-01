// src/pages/faq.js

import Link from 'next/link';
import React from 'react';
import withSidebar from '@/components/layout/withSidebar';
import Head from 'next/head';

const FAQPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>FAQ - trustBank</title>
        <meta name="description" content="Frequently Asked Questions" />
      </Head>

    <div className="max-w-4xl mx-auto space-y-8 mt-12 ml-2">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold mb-4">What is trustBank?</h2>
          <p className="text-gray-900 ">
            trustBank is the financial platform dedicated to providing secure, swift and transparent crypto banking solutions for the unbanked. We offer a range of services from cryptocurrency trading to fiat currency management and an exciting range of reward earnings per transactions.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mt-6 mb-2">How can I create an account?</h2>
          <p className="text-gray-900">
            You can create an account by visiting our{' '}
            <Link href="/register" legacyBehavior>
              <a className="text-green-600 hover:underline">Sign Up</a>
            </Link>{' '}
            page and following the instructions.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mt-6 mb-2">What services do you offer?</h2>
          <p className="text-gray-900">
            We offer cryptocurrency trading, a secure wallet, and a debit card for easy transactions, among other financial services.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default withSidebar(FAQPage);