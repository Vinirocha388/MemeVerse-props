import styles from "./MemeCard.module.css";
import InteractionBar from "../InteractionBar";

const MemeCard = ({ id, title, description, image, author, category, likes, comments, authorAvatar }) => {
    return (
        <div key={id} className={styles.memeCard}>
            <div className={styles.memeCardHeader}>
                <div className={styles.memeAuthor}>
                    <img src={authorAvatar} alt={author} />
                    <span>{author}</span>
                </div>
                <span className={styles.memeCategory}>{category}</span>
            </div>
            <img
                src={image}
                alt={title}
                className={styles.memeImage}
            />
            <div className={styles.memeContent}>
                <h3 className={styles.memeTitle}>{title}</h3>
                <p className={styles.memeDescription}>{description}</p>

               
                <InteractionBar
                    likes={likes}
                    comments={comments}
                />
                
            </div>
        </div>
    );
};
export default MemeCard;