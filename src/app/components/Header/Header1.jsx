import Link from "next/link";
import styles from "./Header.module.css";

function Header({ navigationData }) {
  console.log(navigationData);
  return (
    <header className={styles.headerCont}>
      <Link href="/" className={`${styles.navItem} ${styles.logo}`}>
        CodeIT
      </Link>
      {/* TODO: Navigation /}
      {/ TODO: Props-ის განხილვა*/}
      <nav className={styles.navCont}>
        <ul className={styles.navList}>
          {navigationData.map((navObj, index, array) => {
            return (
              <li>
                <Link href="/about" className={styles.navItem}>
                  Link 1
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header; 
