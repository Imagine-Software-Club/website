import styles from './card.module.css';

// {title: string, body: string}
export default function CardComponent({title,body,pictureUrl}) {
    return (
        <div className={styles.card}>
            {pictureUrl &&
                <img className={styles.image} src={pictureUrl}/>
            }
            {!pictureUrl  &&
                <><p className={styles.header}>{title}</p>
                <p className={styles.body}>{body}</p></>
            }
        </div>
    )}