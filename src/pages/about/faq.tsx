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

    <div className="max-w-4xl mx-auto space-y-6 mt-12 ml-4">
      <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
      <div className="space-y-4 mb-4">

      <h3 className="text-xl font-bold"> Asked Questions</h3>
      <p>
      Get answers to your questions about trustBank, the innovative cryptocurrency exchange platform empowering the unbanked.
      </p>

      <div className="space-y-6 mb-4">
        <div>
          <h2 className="text-xl font-bold">What is trustBank?</h2>
          <p className="text-black ">
          trustBank is your gateway to seamless crypto banking. We&apos;re dedicated to providing secure, swift, and transparent financial solutions for the underserved.</p>
        </div>

        <div className="space-y-6 mb-6">
        <div>
          <h2 className="text-xl font-bold">What drives trustBank&apos;s mission?</h2>
          <p className="text-text-black ">
          Our mission is to bridge the financial gap, connecting millions worldwide to cutting-edge crypto banking services.
          </p>
        </div>

        <div className="space-y-6 mb-4">
        <div>
          <h2 className="text-xl font-bold">What are trustBank&apos;s core values?</h2>
          <p className="text-black">
                <br />* Customer-centricity
                <br />* Innovation
                <br />* Transparency
                <br />* Security
                <br />* Inclusivity
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mt-6 mb-2">How can I create an account?</h2>
          <p className="text-black">
            You can create an account by visiting our{' '}
            <Link href="/register" legacyBehavior>
              <a className="text-green-600 hover:underline">Sign Up</a>
            </Link>{' '}
            page and following the instructions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mt-6 mb-2">How do I report suspicious activity?</h2>
          <p className="text-black">
          Contact our dedicated support team via email or visit the {' '}
            <Link href="/about/contact" legacyBehavior>
              <a className="text-green-600 hover:underline">contact us</a>
            </Link>{' '}
            page and fill the form.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mt-6 mb-2">What services do you offer?</h2>
          <p className="text-black">
            We offer cryptocurrency trading, a secure wallet, and a debit card for easy transactions, among other financial services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mt-6 mb-2">What are your customer support hours?</h2>
          <p className="text-black">
          Our support team is available 24/7.</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mt-6 mb-2">What cryptocurrencies do you support?</h2>
          <p className="text-black">
          We support major cryptocurrencies, including Bitcoin, Ethereum, Tether and Litecoin.
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default withSidebar(FAQPage);