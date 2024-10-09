import React, { useState } from 'react';
import Head from 'next/head';
import withSidebar from '@/components/layout/withSidebar';
import Modal from '@/components/common/Modal';
import { supabase } from '@/lib/supabaseClient';

const BlogPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .upsert({ email }, { onConflict: 'email' })
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        openModal();
        setEmail('');
      } else {
        setError('This email is already subscribed to our newsletter.');
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Blog - trustBank</title>
        <meta name="description" content="Read our latest blog posts" />
      </Head>
      <div className="container mx-auto py-2 px-4 text-black">
        <h1 className="text-2xl font-bold text-black mt-12">trustBank Blog</h1>
        <p className="text-sm text-black mt-2 mb-6">
          Welcome to the trustBank blog! Your destination for expert insights, market trends, and company news. Empowering your financial journey, one post at a time.
        </p>

        <article className="mb-8">
          <h2 className="text-xl font-semibold">The Future of Cryptocurrency</h2>
          <ul className="text-sm text-black space-y-4">
            <li>Crypto Insights: Stay ahead of the curve with the latest cryptocurrency market updates, trends, and predictions.</li>
            <li>trustBank Insights: Get exclusive company announcements, innovative feature releases, and behind-the-scenes stories.</li>
            <li>Financial Freedom: Discover expert tips and strategies for achieving your financial goals with secure, transparent, and accessible tools.</li>
            <li>Community Connect: Join the conversation around our latest initiatives, events, and community-driven projects.</li>
          </ul>
        </article>

        <article className="mb-8">
          <h2 className="text-xl font-semibold mb-2">trustBank Initiatives</h2>
          <p className="text-sm text-black">
            Learn about the latest initiatives and projects we are working on to improve our services and support our users. From new features to community events, stay informed about what&apos;s happening at trustBank.
          </p>
        </article> 

        <article>
          <h2 className="text-xl font-semibold mb-2">Subscribe to Waitlist</h2>
          <p className="text-sm text-black mb-4">
            Stay informed, stay ahead. Receive monthly updates on:
          </p>
          <ul className="text-sm text-black list-disc list-inside mb-4">
            <li>Market analysis and predictions</li>
            <li>New feature releases</li>
            <li>Community events and initiatives</li>
            <li>Exclusive promotions and offers</li>
          </ul>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center">
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
              {isSubmitting ? 'Subscribing...' : 'Subscribe to the waitlist'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </article>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Subscribed">
        <p className="text-green-600">Welcome to the <span className="font-bold text-green-600">TRUSTED</span> community. 😃 </p>
      </Modal>
    </>
  );
};

export default withSidebar(BlogPage);
