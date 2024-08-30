import type { Metadata } from 'next';
import React from 'react';
import { Inter, IBM_Plex_Serif } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ibmPlexSerif = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
});

export const metadata: Metadata = {
  title: 'Horizon',
  description: 'Horizon is a modern banking platform for everyone.',
  icons: {
    icon: './icons/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
