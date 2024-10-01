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
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 space-y-8 mt-6 mb-2">
          <h1 className="text-3xl font-bold text-gray-900">Our Mission</h1>
          <p>
            At trustBank, our mission is to empower individuals globally by providing accessible financial services to one billion people. We believe that financial inclusion is key to a better future, and we are dedicated to making this vision a reality.
          </p>

          <p>
            Through innovative solutions and a commitment to transparency, we strive to build trust with our users and create a secure financial ecosystem for everyone.
          </p>
        </div>
      </div>
    </>
  );
};

export default withSidebar(MissionPage);