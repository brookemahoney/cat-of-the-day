import Image from "next/image";
import styles from "./page.module.scss";
import Cat from '@/components/Cat';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <a className={styles.skip} href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Cat />
      </main>
      <footer>Nya</footer>
    </>
  );
}
