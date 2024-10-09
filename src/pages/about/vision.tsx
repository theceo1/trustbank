// src/pages/about/vision.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import withSidebar from '@/components/layout/withSidebar';
import Image from 'next/image';
import Modal from '@/components/common/Modal';
import { supabase } from '@/lib/supabaseClient'; // Make sure this import is correct

const VisionPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .upsert({ email: email }, { onConflict: 'email' })
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      if (data && data.length > 0) {
        console.log('Subscription successful:', data);
        setIsModalOpen(true);
        setEmail('');
      } else {
        setError('This email is already subscribed to our newsletter.');
      }
    } catch (error: any) {
      console.error('Error details:', error);
      if (error.message) {
        console.error('Error message:', error.message);
      }
      if (error.code) {
        console.error('Error code:', error.code);
      }
      setError('An error occurred while subscribing. Please try again.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Vision - trustBank</title>
        <meta name="description" content="Our vision statement" />
      </Head>
      <div className="min-h-screen w-full">
        <div className="container py-8 px-4 max-w-4xl mx-auto space-y-8">
          <div>
            <h1 className="text-2xl font-bold mt-6">Unlock a Brighter Financial Future</h1>
            <p className="text-black text-sm mt-2">
              At trustBank, our vision is to transform the financial landscape, empowering individuals to thrive in a secure, transparent, and innovative ecosystem.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Future of Payment</h2>
            <div className="flex justify-center">
              <div className="relative w-full h-[200px]">
                <Image 
                  src="/images/debit-card2.svg" 
                  fill 
                  style={{ objectFit: 'contain' }}
                  alt="Debit Card" 
                  priority
                />
              </div>
            </div>
            <p className="text-black text-sm mt-4">
              Introducing the trustBank Debit Card - a game-changing tool that combines style, security, and convenience. With our iconic logo, this card symbolizes our dedication to empowering your financial ecosystem.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Empowering Individuals</h2>
            <p className="text-black text-sm">
              Our platform is designed to unleash your financial potential, providing:
            </p>
            <ul className="text-black text-sm list-disc list-inside mt-2">
              <li>Intuitive tools for effortless money management.</li>
              <li>Invest and grow your wealth with confidence.</li>
              <li>Access to emerging asset classes and digital economy opportunities.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Innovation, Amplified</h2>
            <p className="text-black text-sm">
              We took a responsible approach to innovation, taking into consideration the unique attributes of blockchain technology. 
              We harness the power of blockchain technology, balancing innovation with regulatory compliance. Our solutions:
            </p>
            <ul className="text-black text-sm list-disc list-inside mt-2">
              <li>Foster financial inclusion and accessibility.</li>
              <li>Drive transparency and security.</li>
              <li>Unlock new possibilities for individuals and communities.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Built on Trust</h2>
            <p className="text-black text-sm">
              At the heart of our vision is a commitment to building trust with our users. We believe that transparency, security, and ethical practices are essential for creating a financial ecosystem that truly serves the needs of individuals and communities, globally.
            </p>
            <p className="text-black text-sm mt-2">
              Transparency, security, and ethics are the foundation of our vision. We&apos;re committed to:
            </p>
            <ul className="text-black text-sm list-disc list-inside mt-2">
              <li>Protecting your assets and data.</li>
              <li>Delivering exceptional user experiences.</li>
              <li>Fostering a community of trust and empowerment.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold">Join the Movement</h2>
            <p className="text-black text-sm">
              Be part of the financial ecosystem that puts you first. Experience the future of finance with trustBank.
            </p>
          </div>

          {/* Subscribe Form */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">Subscribe to Our Waitlist</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 ease-in-out"
              >
                Subscribe
              </button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </div>

      {/* Subscription Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Subscribed">
        <p className="text-green-600">Welcome to the <span className="font-bold text-green-600">TRUSTED</span> community. 😃 </p>
      </Modal>
    </>
  );
};

export default withSidebar(VisionPage);