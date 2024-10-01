// src/pages/_app.tsx
import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import { ThemeProvider } from '../context/ThemeContext';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
        <SpeedInsights />
        <Analytics />
      </ThemeProvider>
    </AuthProvider>
  );
}