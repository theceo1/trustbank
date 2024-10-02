// // src/pages/wallet.tsx
// import React from 'react';
// import Layout from '../components/layout/Layout';
// import Wallet from '../components/wallet/Wallet';
// import BuySell from '../components/trade/BuySell';
// import CryptoPriceTracker from '../components/common/CryptoPriceTracker';
// import ProtectedRoute from '../components/auth/ProtectedRoute';
// import Head from 'next/head';

// const WalletPage: React.FC = () => {
//   return (
//     <ProtectedRoute>
//       <Layout>
//         <Head>
//           <title>Wallet - trustBank</title>
//         </Head>
//         <div className="container mx-auto px-4 py-8">
//           <h1 className="text-3xl font-bold mb-6">Wallet</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <Wallet />
//             <BuySell />
//           </div>
//           <div className="mt-8">
//             <CryptoPriceTracker />
//           </div>
//         </div>
//       </Layout>
//     </ProtectedRoute>
//   );
// };

// export default WalletPage;