import styles from "./PremiumFeatures.module.css";

const PremiumFeatures = ({ premiumFeatures }) => {
    return (
        <div className={styles.sidebarSection}>
        <h3 className={styles.sidebarTitle}>MemeVerse Premium</h3>
        <div className={styles.premiumCard}>
          <h4 className={styles.premiumTitle}>
            Desbloqueie recursos exclusivos!
          </h4>
          <ul className={styles.premiumFeatures}>
            {premiumFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button className={styles.premiumButton}>
            Experimentar Grátis
          </button>
        </div>
      </div>
    )
}

export default PremiumFeatures;