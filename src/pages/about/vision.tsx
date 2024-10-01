// src/pages/about/vision.tsx
import React from 'react';
import Head from 'next/head';
import withSidebar from '@/components/layout/withSidebar';
import Image from 'next/image';

const VisionPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Vision - trustBank</title>
        <meta name="description" content="Our vision statement" />
      </Head>
      <div className=" min-h-screen w-full">
        <div className="container py-8 px-4 max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-2xl font-bold mb-4 mt-4">Our Vision</h1>
            <p className="text-gray-900 text-sm">
              At trustBank, our vision is to revolutionize the way people interact with their finances. We believe that everyone should have access to secure, transparent, and empowering financial tools that help them achieve their goals.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Our Debit Card</h2>
            <div className="flex justify-center">
            <Image
                src="/images/debit-card.png"
                alt="trustBank Debit Card"
                width={400}
                height={250}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
            <p className="text-gray-900 text-sm mt-4">
              Our trustBank debit card is designed to provide you with a secure and convenient way to manage your finances. With the trustBank logo prominently displayed, this card is a symbol of our commitment to empowering you and building a trustworthy financial ecosystem.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Empowering Individuals</h2>
            <p className="text-gray-900 text-sm">
              We aim to empower individuals by providing them with the knowledge, tools, and resources they need to take control of their financial future. Our platform is designed to be user-friendly and accessible, making it easy for anyone to manage their money, invest, and grow their wealth.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Fostering Innovation</h2>
            <p className="text-gray-900 text-sm">
              We took a responsible approach to innovation, taking into consideration the unique attributes of blockchain technology. trustBank maintains the foundational principles of regulatory compliance while demonstrating how blockchain technology can enhance financial services. With our blockchain-based solutions our users can participate in the digital economy and explore emerging asset classes.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Building Trust</h2>
            <p className="text-gray-900 text-sm">
              At the heart of our vision is a commitment to building trust with our users. We believe that transparency, security, and ethical practices are essential for creating a financial ecosystem that truly serves the needs of individuals and communities, globally.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withSidebar(VisionPage);