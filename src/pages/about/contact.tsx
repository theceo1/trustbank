// src/pages/about/contact.tsx
import React, { useState } from 'react';
import Head from 'next/head';
import withSidebar from '@/components/layout/withSidebar';
import { supabase } from '@/lib/supabaseClient'; // Ensure this import is correct

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // Fetch user location based on IP address using ipinfo
      const response = await fetch(`https://ipinfo.io?token=${process.env.NEXT_PUBLIC_IPINFO_API_KEY}`);
      const locationData = await response.json();
      const userLocation = `${locationData.city}, ${locationData.region}, ${locationData.country}`;

      const { data, error } = await supabase
        .from('contact_messages') // Replace with your table name
        .insert([
          {
            name,
            email,
            message,
            location: userLocation, // Add location to the database
            created_at: new Date().toISOString(), // Set the current date and time
          },
        ]);

      if (error) throw error;

      // Open the modal on successful submission
      setIsModalOpen(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error: any) {
      setError('An error occurred while sending your message. Please try again.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Contact Us - trustBank</title>
        <meta name="description" content="Get in touch with us" />
      </Head>

      <div className="h-screen w-full bg-blue-200">
        <div className="max-w-4xl mx-auto p-8 space-y-8 mt-6">
          <h1 className="text-2xl font-semibold">Contact Us</h1>
          <p className="text-sm text-black">
            Have questions or need assistance? Reach out to us, and we&apos;ll be happy to help.
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold">Message</label>
              <textarea
                id="message"
                className="w-full p-2 border rounded"
                placeholder="How can we help?"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Send</button>
          </form>
        </div>
      </div>

      {/* Modal for Thank You Message */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <div className="animate-checkmark">
              {/* Animated Checkmark */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold mt-4">Thank you for contacting us!</h2>
            <p className="mt-2">Your satisfaction is our priority. We will reach out to you via email shortly.</p>
            <p className="mt-4">Signed: Tony from trustBank</p>
            <button onClick={closeModal} className="mt-4 bg-green-600 text-white p-2 rounded hover:bg-green-700">Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default withSidebar(Contact);
