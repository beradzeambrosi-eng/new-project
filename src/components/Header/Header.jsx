import Link from "next/link";
import styles from "./Header.module.css";

function Header({navigationData}) {
    console.log(navigationData)
  return (
    <header className={styles.headerCont}>
      <Link href="/about" className = {`${styles.navItem} ${styles.logo}`}>CodeIT</Link>
      {/* TODO: Navigation /}
      {/ TODO: Props-ის განხილვა*/}
      <nav className={styles.navCont}>
        <ul className={styles.navList}>
            {navigationData.map((navObj, index, array) => {
            console.log(crypto.randomUUID())
            return (
          <li key = {navObj.title + index}>
            <Link href= {navObj.path} className={styles.navItem}>
             {navObj.title}
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