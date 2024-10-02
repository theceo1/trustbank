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
            <h1 className="text-2xl font-bold mb-4 mt-4">Unlock a Brighter Financial Future</h1>
            <p className="text-gray-900 text-sm">
            At trustBank, our vision is to transform the financial landscape, empowering individuals to thrive in a secure, transparent, and innovative ecosystem.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Future of Payment</h2>
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
            Introducing the trustBank Debit Card - a game-changing tool that combines style, security, and convenience. With our iconic logo, this card symbolizes our dedication to empowering your financial ecosystem.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Empowering Individuals</h2>
            <p className="text-gray-900 text-sm">
            Our platform is designed to unleash your financial potential, providing:
                  <br />* Intuitive tools for effortless money management
                  <br />* Invest and grow your wealth with confidence
                  <br />* Access to emerging asset classes and digital economy opportunities
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Innovation, Amplified</h2>
            <p className="text-gray-900 text-sm">
              We took a responsible approach to innovation, taking into consideration the unique attributes of blockchain technology. 
               We harness the power of blockchain technology, balancing innovation with regulatory compliance. Our solutions:<br />
               <br />* Foster financial inclusion and accessibility
               <br />* Drive transparency and security
               <br />* Unlock new possibilities for individuals and communities

            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Built on Trust</h2>
            <p className="text-gray-900 text-sm">
              At the heart of our vision is a commitment to building trust with our users. We believe that transparency, security, and ethical practices are essential for creating a financial ecosystem that truly serves the needs of individuals and communities, globally.
              <br />Transparency, security, and ethics are the foundation of our vision. We&apos;re committed to:
                    <br />* Protecting your assets and data
                    <br />* Delivering exceptional user experiences
                    <br />* Fostering a community of trust and empowerment
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Join the Movement</h2>
            <p className="text-gray-900 text-sm">
            Be part of a revolutionary financial ecosystem that puts you first. Experience the future of finance with trustBank.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withSidebar(VisionPage);