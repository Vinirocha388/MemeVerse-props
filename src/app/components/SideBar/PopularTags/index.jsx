import styles from "./PopularTags.module.css";

const PopularTags = ({ popularTags }) => {
    return (
        <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>Tags Populares</h3>
        <div className={styles.tagCloud}>
          {popularTags.map((tag, index) => (
            <span
              key={index}
              className={`${styles.tag} ${
                tag.size === "large"
                  ? styles.tagLarge
                  : tag.size === "medium"
                  ? styles.tagMedium
                  : ""
              }`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>     
    )
}

export default PopularTags;