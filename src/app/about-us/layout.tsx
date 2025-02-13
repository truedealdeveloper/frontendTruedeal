import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Truedeal',
  description: 'Learn about Truedeal - your ultimate travel companion for unforgettable journeys and unbeatable deals.',
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