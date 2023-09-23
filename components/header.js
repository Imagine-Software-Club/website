import styles from './header.module.css';

export default function HeaderComponent() {
    return (
        <div className={styles.container}>
            <h1>Imagine Software</h1>
            <div className={styles.rows}>
                <a href="/" className={styles.button}>
                    <svg className={styles.svg}>
                        <rect className={styles.rect} x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Home 
                </a>
                <a href="/about" className={styles.button}>
                    <svg className={styles.svg}>
                        <rect className={styles.rect} x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    About Us 
                </a>
                <a href="/" className={styles.button}>
                    <svg className={styles.svg}>
                        <rect className={styles.rect} x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Comming Soon
                </a>
                <a href="/" className={styles.button}>
                    <svg className={styles.svg}>
                        <rect className={styles.rect} x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Comming Soon
                </a>
                <a href="/" className={styles.button}>
                    <svg className={styles.svg}>
                        <rect className={styles.rect} x="0" y="0" fill="none" width="100%" height="100%"/>
                    </svg>
                    Comming Soon
                </a>
            </div>
        </div>
    )}