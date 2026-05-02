import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beyond Presence API Test',
  description: 'Test application for Beyond Presence API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
