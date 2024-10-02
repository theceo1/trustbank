import React, { useState } from 'react';
import Head from 'next/head';
import withSidebar from '@/components/layout/withSidebar';
import Modal from '@/components/common/Modal';

  const BlogPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Head>
        <title>Blog - trustBank</title>
        <meta name="description" content="Read our latest blog posts" />
      </Head>
      <div className="container mx-auto py-2 px-4 text-black mt-10">
        <h1 className="text-3xl font-bold">trustBank Blog</h1>
        <p className="text-black">
          Welcome to the trustBank blog! Your destination for expert insights, market trends, and company news. Empowering your financial journey, one post at a time.
        </p>
          <article>
            <h2 className="text-2xl font-semibold mt-6 mb-2">The Future of Cryptocurrency</h2>
            
          <br />Crypto Insights: Stay ahead of the curve with the latest cryptocurrency market updates, trends, and predictions. <br />
          <br />trustBank Insights: Get exclusive company announcements, innovative feature releases, and behind-the-scenes stories.<br />
          <br />Financial Freedom: Discover expert tips and strategies for achieving your financial goals with secure, transparent, and accessible tools.<br />
          <br />Community Connect: Join the conversation around our latest initiatives, events, and community-driven projects.<br />
          </article>
          <article>
            <h2 className="text-2xl font-semibold mt-6 mb-2">trustBank Initiatives</h2>
            <p>
              Learn about the latest initiatives and projects we are working on to improve our services and support our users. From new features to community events, stay informed about what&apos;s happening at trustBank.
            </p>
          </article> 
          <article>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-black">
              Stay informed, stay ahead. Receive monthly updates on: <br />
              <br />* Market analysis and predictions. <br />
              <br />* New feature releases. <br />
              <br />* Community events and initiatives. <br />    
              <br />* Exclusive promotions and offers.     
            </p>

            <form className="mt-2 flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md px-4 py-2 border rounded-md mb-2"
          />
          <button
            // type="submit"
            onClick={openModal}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Subscribe to Newsletter
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} title="Subscribed">
            <p className="text-green-600">Welcome to the <span className="font-bold text-green-600">TRUSTED</span> community. 😃 </p>
          </Modal>
        </form>
          </article>
        </div>
    </>
  );
};

export default withSidebar(BlogPage);
