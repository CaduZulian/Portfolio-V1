import { Metadata } from 'next';
import 'react-toastify/dist/ReactToastify.css';

import GoogleAnalytics from './googleAnalitics';

// context
import { AppContextProvider } from '@/app/context/AppContext';
import { TranslateContextProvider } from './context/TranslateContext';

// components
import Header from '@/app/components/Header';
import Main from '@/app/components/Main';
import Footer from '@/app/components/Footer';

// styles
import './globals.scss';

export const metadata: Metadata = {
  title: 'CaduZulian | Web Developer',
  description:
    'Carlos Eduardo Zulian is a Web Developer  who builds accessible, inclusive products and digital experiences for the web.',
  themeColor: '#171717',
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  keywords: [
    'web developer',
    'front-end developer',
    'front-end',
    'developer',
    'web',
    'react',
    'nextjs',
    'javascript',
    'typescript',
    'nodejs',
    'css',
    'html',
    'portfolio',
    'caduzulian',
    'cadu zulian',
    'carlos eduardo zulian',
    'carlos zulian',
    'zulian',
  ],
  icons: [
    {
      rel: 'icon',
      url: '/favicons/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      url: '/favicons/apple-icon-57x57.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      url: '/favicons/apple-icon-60x60.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      url: '/favicons/apple-icon-72x72.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      url: '/favicons/apple-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      url: '/favicons/apple-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      url: '/favicons/apple-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      url: '/favicons/apple-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      url: '/favicons/apple-icon-152x152.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicons/apple-icon-180x180.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '36x36',
      url: '/favicons/android-icon-36x36.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '48x48',
      url: '/favicons/android-icon-48x48.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '72x72',
      url: '/favicons/android-icon-72x72.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: '/favicons/android-icon-96x96.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '144x144',
      url: '/favicons/android-icon-144x144.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/favicons/android-icon-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: '/favicons/favicon-96x96.png',
    },
  ],
  openGraph: {
    type: 'website',
    siteName: 'CaduZulian | Web Developer',
    title: 'CaduZulian | Web Developer',
    description:
      'Carlos Eduardo Zulian is a Web Developer  who builds accessible, inclusive products and digital experiences for the web.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CaduZulian | Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@cadu_zulian',
    title: 'CaduZulian | Web Developer',
    description:
      'Carlos Eduardo Zulian is a Web Developer  who builds accessible, inclusive products and digital experiences for the web.',
    images: {
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'CaduZulian | Web Developer',
    }
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID ?? ''} />
      <body>
        <TranslateContextProvider>
          <AppContextProvider>
            <Header />

            <Main>{children}</Main>

            <Footer />
          </AppContextProvider>
        </TranslateContextProvider>
      </body>
    </html>
  );
}
