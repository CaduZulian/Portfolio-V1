// context
import { AppContextProvider } from '@/app/context/AppContext';

// components
import Header from '@/app/components/Header';
import Main from '@/app/components/Main';
import Footer from '@/app/components/Footer';

// styles
import './globals.scss';

export const metadata = {
  title: 'CaduZulian | Web Developer',
  description:
    'Carlos Eduardo Zulian is a Web Developer  who builds accessible, inclusive products and digital experiences for the web.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <AppContextProvider>
          <Header />

          <Main>{children}</Main>

          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
