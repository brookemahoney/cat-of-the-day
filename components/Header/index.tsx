import Image from 'next/image';
import styles from './index.module.scss';
import logo from './cat-of-the-day-logo.png';

const Header = () => (
  <header className={styles.header}>
    <h1 id="site-title">
      <div className={styles.logo}>
        <Image src={logo} alt="logo" priority />
      </div>
      Cat Of The Day
    </h1>
  </header>
);

export default Header;