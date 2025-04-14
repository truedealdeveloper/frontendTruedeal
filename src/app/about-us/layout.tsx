import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | TrueDeal4U - Your Trusted Travel Partner',
  description: 'Learn about TrueDeal4U - a leading travel agency dedicated to creating unforgettable travel experiences with personalized service and expert guidance.',
  keywords: 'about truedeal4u, travel agency about us, travel company history, trusted travel partner'
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-white">
      {children}
    </main>
  );
} 