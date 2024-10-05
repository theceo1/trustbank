// src/pages/about/faq.tsx

import Link from 'next/link';
import React from 'react';
import withSidebar from '@/components/layout/withSidebar';
import Head from 'next/head';

const FAQPage: React.FC = () => {
  const faqs = [
    {
      question: "What is trustBank?",
      answer: "trustBank is your gateway to seamless crypto banking. We're dedicated to providing secure, swift, and transparent financial solutions for the underserved."
    },
    {
      question: "What drives trustBank's mission?",
      answer: "Our mission is to bridge the financial gap, connecting millions worldwide to cutting-edge crypto banking services."
    },
    {
      question: "What are trustBank's core values?",
      answer: (
        <ul className="list-disc list-inside">
          <li>Customer-centricity</li>
          <li>Innovation</li>
          <li>Transparency</li>
          <li>Security</li>
          <li>Inclusivity</li>
        </ul>
      )
    },
    {
      question: "How can I create an account?",
      answer: (
        <>
          You can create an account by visiting our{' '}
          <Link href="/register" className="text-green-600 hover:underline">
            Sign Up
          </Link>{' '}
          page and following the instructions.
        </>
      )
    },
    {
      question: "How do I report suspicious activity?",
      answer: (
        <>
          Contact our dedicated support team via email or visit the{' '}
          <Link href="/about/contact" className="text-green-600 hover:underline">
            contact us
          </Link>{' '}
          page and fill the form.
        </>
      )
    },
    {
      question: "What services do you offer?",
      answer: "We offer cryptocurrency trading, a secure wallet, and a debit card for easy transactions, among other financial services."
    },
    {
      question: "What are your customer support hours?",
      answer: "Our support team is available 24/7."
    },
    {
      question: "What cryptocurrencies do you support?",
      answer: "We support major cryptocurrencies, including Bitcoin, Ethereum, Tether and Litecoin."
    }
  ];

  return (
    <>
      <Head>
        <title>FAQ - trustBank</title>
        <meta name="description" content="Frequently Asked Questions" />
      </Head>

      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold text-black mb-6 mt-8">Frequently Asked Questions</h1>
        <p className="text-sm text-black mb-8">
          Get answers to your questions about trustBank, the innovative cryptocurrency exchange platform empowering the unbanked.
        </p>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-semibold mb-2">{faq.question}</h2>
              <div className="text-sm text-black">
                {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default withSidebar(FAQPage);