import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'Next.js GitHub Pages Testing',
  description: 'This page exists to test out Next.js on GitHub Pages.',
};

export default function RootLayout({

  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
