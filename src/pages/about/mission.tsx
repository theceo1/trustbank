import React from 'react';
import Head from 'next/head';
import withSidebar from '@/components/layout/withSidebar';

const MissionPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Mission - trustBank</title>
        <meta name="description" content="Our mission statement" />
      </Head>
      <div className="h-screen w-full">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-8 mt-6">
      <h1 className="text-2xl font-bold text-black">Our Mission</h1>
          <p>
          At trustBank, our mission is to make financial services accessible, secure, and effortless for everyone, everywhere. We believe that financial inclusion is key to unlocking individual potential and global economic growth.          </p>

          <p>
            Through innovative solutions and a commitment to transparency, we strive to build trust with our users and create a secure financial ecosystem for everyone.
          </p>
        </div>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-2">
          <h1 className="text-2xl font-bold text-text-black">Our Purpose</h1>
          <br />* Empower 1 billion individuals globally with access to cryptocurrency and digital assets by 2045
          <br />* Reduce financial exclusion by 10% in the next 3 years
          <br />* Foster a community of financially literate individuals
        </div>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-2">
          <h1 className="text-2xl font-bold text-black">How We Do It</h1>
          <br />* Harnessing blockchain technology for efficient, secure transactions
          <br />* Providing intuitive platforms for easy onboarding
          <br />* Offering competitive rates and low fees
          <br />* Fostering partnerships with local businesses and organizations
        </div>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-2">
          <h1 className="text-2xl font-bold text-black">Join the Movement</h1>
          <p>
          Be part of a community that&apos;s shaping the future of finance. Experience the trustBank difference.
          </p>
        </div>

      </div>
    </>
  );
};

export default withSidebar(MissionPage);