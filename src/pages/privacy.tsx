import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - trustBank</title>
        <meta name="description" content="Privacy Policy" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 mt-6">Privacy Policy</h1>
        <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

        <p className="mb-4">
          At trustBank, we are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services. This policy outlines our data collection and use practices.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <p className="mb-2">1.1. Personal Information: We may collect personal information such as your name, email address, phone number, and government-issued ID numbers when you register for our services.</p>
            <p className="mb-2">1.2. Financial Information: To provide our services, we may collect financial information such as bank account details, credit card information, and transaction history.</p>
            <p className="mb-2">1.3. Usage Data: We collect information on how you interact with our services, including access times, pages viewed, and the routes by which you access our services.</p>
            <p>1.4. Device Information: We may collect information about the device and internet connection you use to access our services, including hardware model, operating system, unique device identifiers, and mobile network information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send notifications, updates, security alerts, and support messages</li>
              <li>Respond to comments, questions, and customer service requests</li>
              <li>Prevent fraudulent activities and enhance the security of our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. How We Share Your Information</h2>
            <p className="mb-2">We may share your personal information with:</p>
            <p className="mb-2">3.1. Service Providers: We may share your information with third-party vendors who provide services on our behalf.</p>
            <p className="mb-2">3.2. Business Partners: We may share your information with our business partners to offer you certain products, services or promotions.</p>
            <p>3.3. Legal Requirements: We may disclose your information where required to do so by law or subpoena or if we believe that such action is necessary to comply with the law or defend our legal rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Your Data Protection Rights</h2>
            <p className="mb-2">Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc list-inside ml-4">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request the correction of inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Cookies and Similar Technologies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last Updated&rdquo; date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Children&apos;s Privacy</h2>
            <p>Our services are not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">9. International Data Transfers</h2>
            <p>Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
            <p>
              If you have any question about the Privacy Policy, please{' '}
              <Link href="/about/contact" className="text-green-600 hover:underline">
                contact
              </Link>{' '}
              us.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;