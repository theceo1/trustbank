import React from 'react';
import Head from 'next/head';
import withSidebar from '@/components/layout/withSidebar';

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us - trustBank</title>
        <meta name="description" content="Get in touch with us" />
      </Head>

    <div className="h-screen w-full bg-blue-200">
    <div className="max-w-4xl mx-auto p-8 space-y-8 mt-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="text-gray-900">
        Have questions or need assistance? Reach out to us, and we&apos;ll be happy to help.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold">Name</label>
          <input type="text" id="name" className="w-full p-2 border rounded" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Your Email" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-bold">Message</label>
          <textarea id="message" className="w-full p-2 border rounded" placeholder="Your Message" rows={5}></textarea> {/* Use number for rows */}
        </div>
        <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-600">Send</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default withSidebar(Contact);
