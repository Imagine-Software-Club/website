import Head from 'next/head';
import styles from './index.module.css';
import HeaderComponent from '../components/header';

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Imagine Software Club Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <HeaderComponent />
      <main>
        
      </main>

      <footer>
        
      </footer>

     
    </div>
    
  );
}
