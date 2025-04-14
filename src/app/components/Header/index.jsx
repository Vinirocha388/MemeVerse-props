import styles from './Header.module.css';

export default function Header({ logo, navItems }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img src={logo.image} alt={logo.name} className={styles.logoImage} />
        <span className={styles.logoName}>{logo.name}</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}><a href={item.href}>{item.label}</a></li>
          ))}
        </ul>
      </nav>
      <input type="text" placeholder="Buscar memes..." className={styles.searchInput} />
    </header>
  );
}
