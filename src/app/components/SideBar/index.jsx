import styles from "./SideBar.module.css";
import EventCard from "./EventCard";
import PremiumFeatures from "./PremiumFeatures";
import PopularTags from "./PopularTags";

const SideBar = ({events, premiumFeatures, popularTags }) => {
    return (
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Eventos Próximos</h3>
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event} />
            ))}
          </div>

         <PremiumFeatures premiumFeatures={premiumFeatures} />

          <PopularTags popularTags={popularTags} />
        </aside>
    );
};

export default SideBar;