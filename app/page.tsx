import Image from "next/image";
import styles from "./page.module.scss";
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <a className={styles.skip} href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <h2>Welcome, nya :3</h2>
      </main>
      <footer>Nya</footer>
    </>
  );
}
