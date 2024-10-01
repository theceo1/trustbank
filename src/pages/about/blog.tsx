import React from 'react';
import Head from 'next/head';
import withSidebar from '@/components/layout/withSidebar';

const BlogPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog - trustBank</title>
        <meta name="description" content="Read our latest blog posts" />
      </Head>
      <div className="container mx-auto py-2 px-4 text-black mt-4">
        <h1 className="text-3xl font-bold mt-4 mb-4">trustBank Blog</h1>
        <p className="text-black mb-10">
          Welcome to the trustBank blog! Here, you&apos;ll find the latest updates on the crypto market, as well as news and insights from our company. Stay tuned for expert analysis, company announcements, and tips to help you achieve the most in your financial journey.
        </p>
        <div className="space-y-4">
          <p>
            Become the bank you trust. Our mission is to empower individuals with secure, transparent, and accessible financial tools that help them achieve their financial goals.
          </p>
          <article>
            <h2 className="text-2xl font-semibold mb-2 mt-10">The Future of Cryptocurrency</h2>
            <p className='mb-6'>
              Stay updated with the latest trends and predictions for the future of cryptocurrency. Our experts share their insights on how the market is evolving and what to expect in the coming years.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold mb-2 mt-10">trustBank Initiatives</h2>
            <p className='mb-60'>
              Learn about the latest initiatives and projects we are working on to improve our services and support our users. From new features to community events, stay informed about what&apos;s happening at trustBank.
            </p>
          </article>
          <article>
            <p>
              Welcome to the trustBank blog! Here, you&apos;ll find the latest updates on the crypto market, as well as news and insights from our company. Stay tuned for expert analysis, company announcements, and tips to help you make the most of your financial journey.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default withSidebar(BlogPage);
