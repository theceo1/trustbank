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
          Welcome to the trustBank blog! Your destination for expert insights, market trends, and company news. Empowering your financial journey, one post at a time.
        </p>
          <article>
            <h2 className="text-2xl font-semibold mb-2 mt-4">The Future of Cryptocurrency</h2>
          <br />Crypto Insights: Stay ahead of the curve with the latest cryptocurrency market updates, trends, and predictions.<br />
          <br />trustBank Insights: Get exclusive company announcements, innovative feature releases, and behind-the-scenes stories.<br />
          <br />Financial Freedom: Discover expert tips and strategies for achieving your financial goals with secure, transparent, and accessible tools.<br />
          <br />Community Connect: Join the conversation around our latest initiatives, events, and community-driven projects.<br />
          </article>
          {/* <article>
            <h2 className="text-2xl font-semibold mb-2 mt-4">trustBank Initiatives</h2>
            <p>
              Learn about the latest initiatives and projects we are working on to improve our services and support our users. From new features to community events, stay informed about what&apos;s happening at trustBank.
            </p>
          </article> */}
          <article>
          <h2 className="text-2xl font-semibold mb-2 mt-4">Subscribe to Our Newsletter</h2>
            <p className="text-black">
              Stay informed, stay ahead. Receive monthly updates on: 
              <br />* Market analysis and predictions
              <br />* New feature releases
              <br />* Community events and initiatives
              <br />* Exclusive promotions and offers     
            </p>
          </article>
        </div>
    </>
  );
};

export default withSidebar(BlogPage);
