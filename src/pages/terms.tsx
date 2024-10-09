import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Link from 'next/link';

const TermsOfService: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - trustBank</title>
        <meta name="description" content="Terms of Service" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 mt-6">Terms of Service</h1>
        <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using the trustBank website, mobile application, or any of our services (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use our Services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Description of Services</h2>
            <p>trustBank provides financial technology services, including but not limited to digital banking, money transfers, cryptocurrency trading, and financial management tools.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Eligibility</h2>
            <p>You must be at least 18 years old and capable of forming a binding contract to use our Services. By using our Services, you represent and warrant that you meet all eligibility requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Account Registration</h2>
            <p className="mb-2">4.1. To access certain features of the Services, you must register for an account. You agree to provide accurate, current, and complete information during the registration process.</p>
            <p>4.2. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Use of Services</h2>
            <p className="mb-2">5.1. You agree to use the Services only for lawful purposes and in accordance with these Terms.</p>
            <p className="mb-2">5.2. You agree not to use the Services:</p>
            <ul className="list-disc list-inside ml-4">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>To transmit any material that is defamatory, obscene, or offensive.</li>
              <li>To impersonate or attempt to impersonate trustBank, a trustBank employee, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Fees and Payments</h2>
            <p className="mb-2">6.1. trustBank may charge fees for certain Services. You agree to pay all fees and charges incurred in connection with your account.</p>
            <p>6.2. We reserve the right to change our fees at any time. Any changes to fees will be posted on our website and will take effect 30 days after posting.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Intellectual Property Rights</h2>
            <p>The Services and their entire contents, features, and functionality are owned by trustBank and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Termination</h2>
            <p>We may terminate or suspend your account and bar access to the Services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">9. Disclaimer of Warranties</h2>
            <p>The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis, without any warranties of any kind, either express or implied.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">10. Limitation of Liability</h2>
            <p>In no event shall trustBank be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">11. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of Nigeria, without regard to its conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">12. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will always post the most current version on our website. By continuing to use the Services, you agree to be bound by the updated Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">13. Contact Us</h2>
            <p>
              If you have any question about the Terms of Service, please{' '}
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

export default TermsOfService;