'use client'

import Link from 'next/link';
import renewCat, { type TSCat, catDefault } from '@/ducks/cats';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import renewAccessToken from '@/ducks/auth';

const Cat = () => {
  const [accessToken, setAccessToken] = useState('');
  const [cat, setCat] = useState(catDefault);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (accessToken) {
      renewCat(accessToken, setCat);
    } else {
      renewAccessToken(setAccessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      setLoading(false);
    }
  }, [cat]);

  return (
    <section id="cat">
      {loading && (
        <h2 className={styles.loading}>Loading...</h2>
      )}
      {!loading && (
        <div className={styles.catWrapper}>
          <h2>
            {cat.name}
          </h2>
          <h3>
            <Link href={cat.url}>Adoptable!</Link>
          </h3>
          {cat.description && (
            <div className={styles.description}>
              <h3>Description</h3>
              <p>{cat.description}</p>
            </div>
          )}
          {cat.photos.map(photo => (
            <div className={styles.photoWrapper} key={photo.full}>
              <img
                alt={cat.name}
                src={photo.full}
              />
            </div>
          ))}
        </div>
      )}

    </section>
  );
};

export default Cat;
