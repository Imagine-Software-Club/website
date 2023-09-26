import HeaderComponent from "../components/Header/header";
import './styles.css';
import Head from 'next/head';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <Head>
            <title>Imagine Software Club Website</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <HeaderComponent />
          {children}
        </body>
      </html>
    )
  }