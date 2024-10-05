//src/pages/about/mission.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import withSidebar from '@/components/layout/withSidebar';
import Modal from '@/components/common/Modal';
import { supabase } from '@/lib/supabaseClient';

const MissionPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;

      setIsModalOpen(true);
      setEmail('');
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Mission - trustBank</title>
        <meta name="description" content="Our mission statement" />
      </Head>
      <div className="min-h-screen w-full">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
          <section>
            <h1 className="text-2xl font-bold text-black mb-4">Our Mission</h1>
            <p className="text-sm text-black">
              At trustBank, our mission is to make financial services accessible, secure, and effortless for everyone, everywhere. We believe that financial inclusion is key to unlocking individual potential and global economic growth.
            </p>
            <p className="mt-4 text-sm text-black">
              Through innovative solutions and a commitment to transparency, we strive to build trust with our users and create a secure financial ecosystem for everyone.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Our Purpose</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-black">
              <li>Empower a billion individuals globally with access to cryptocurrency and digital assets by 2045.</li>
              <li>Reduce financial exclusion by 4% in the next 3 years.</li>
              <li>Foster a community of financially literate individuals.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">How We Do It</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-black">
              <li>Harnessing blockchain technology for efficient, secure transactions.</li>
              <li>Providing intuitive platforms for easy onboarding.</li>
              <li>Offering competitive rates and low fees.</li>
              <li>Fostering partnerships with local businesses and organizations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Join the Movement</h2>
            <p className="text-sm text-black">
              Be part of a community that&apos;s shaping the future of finance. Experience the trustBank difference.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">Stay Updated</h2>
            <p className="text-sm text-black mb-4">
              Subscribe to our newsletter to receive updates on our mission and how we&apos;re making a difference.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col items-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-md px-4 py-2 border rounded-md mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
          </section>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Subscribed">
      <p className="text-green-600">Welcome to the <span className="font-bold text-green-600">TRUSTED</span> community. 😃 </p>
      </Modal>
    </>
  );
};

export default withSidebar(MissionPage);