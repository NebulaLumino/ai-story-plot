import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Story Plot Generator',
  description: 'Craft compelling story plots with unique protagonist archetypes, settings, and conflict dynamics.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
