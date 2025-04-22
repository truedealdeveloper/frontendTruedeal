import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | TrueDeal4U - Your Trusted Travel Partner',
  description: 'TrueDeal4U is a leading travel company specializing in customized tour packages worldwide. With years of experience, we create unforgettable travel experiences with personalized service and expert guidance.',
  keywords: 'about truedeal4u, travel agency, tour operator, travel company, trusted travel partner',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
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