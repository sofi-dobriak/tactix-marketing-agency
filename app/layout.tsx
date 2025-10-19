import './globals.css';
import localFont from 'next/font/local';

const figtree = localFont({
  src: [
    {
      path: '../public/fonts/figtree-v9-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/figtree-v9-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-figtree',
});

const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-clashDisplay',
});

export const metadata = {
  title: {
    default: 'Tactix',
    template: 'Tactix | %s',
  },
  description: 'Promotional landing page for a marketing agency',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${clashDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
