import styles from './index.module.css';
import CardComponent from '../components/Card/card';

export default function Home() {
  const contact = 'Contact';
  const contactBody = 'this is our contact info yeyeeet'
  return (
      <main className={styles.container}>
        <div className={styles.page}>
          <img src="/logo.png" className={styles.image}/>
          <div className={styles.columns}>
            <p className={styles.mission}>Providing students with real world development experience</p>
            <p className={styles.mission}>Providing clients with expert level customization</p>
          </div>
        </div>
        <div className={styles.pageCol}>
          <div className={styles.row}>
            <CardComponent pictureUrl={"/triple4draft.jpg"}/>
            <div className={styles.cardColumns}>
              <p className={styles.mission}>Student Resource Organizations</p>
              <p className={styles.cardText}>
                We provide custom software development for a variety of clients. 
                One type of client is student resource organizations. 
                We haved worked with organizations like the AI Club and Burgess Institute for entrepreneurship & Innovation
                to help students create software for their business ventures and websites for their clubs. 
                The photo on the left showcases one of our members who was prseneting the work he did on a mobile app for the company Triple4s.
              </p>
            </div>
          </div>
        </div>
      </main>
  );
}