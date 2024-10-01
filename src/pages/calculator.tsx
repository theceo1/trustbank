//src/pages/calculator.tsx
import React from 'react';
import Head from 'next/head';
import RateCalculator from '../components/calculator/RateCalculator';
import withSidebar from '@/components/layout/withSidebar';

const CalculatorPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Rate Calculator - trustBank</title>
        <meta name="description" content="Calculate cryptocurrency exchange rates" />
      </Head>
      <div className="container mx-auto px-4 py-2">
        <RateCalculator />
      </div>
    </>
  );
};

export default withSidebar(CalculatorPage); 
