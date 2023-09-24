import styles from './header.module.css';
import Link from 'next/link';

export default function HeaderComponent() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Imagine Software</h1>
            <div className={styles.rows}>
                <Link href="/" className={styles.button}>
                    <svg className={styles.svg}>
                        <rect className={styles.rect} x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Home 
                </Link>
                <Link href="/board" className={styles.button}>
                    <svg className={styles.svg}>
                        <rect className={styles.rect} x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Board 
                </Link>
                <Link href="/alumni" className={styles.button}>
                    <svg className={styles.svg}>
                        <rect className={styles.rect} x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Alumni
                </Link>
                <Link href="/leaderboard" className={styles.button}>
                    <svg className={styles.svg}>
                        <rect className={styles.rect} x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Ping Pong
                </Link>
                <Link href="/portfolio" className={styles.button}>
                    <svg className={styles.svg}>
                        <rect className={styles.rect} x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Portfolio
                </Link>
            </div>
        </div>
    )}