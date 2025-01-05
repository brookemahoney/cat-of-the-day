'use client'

import Link from 'next/link';
import renewCat, { type TSCat, catDefault } from '@/ducks/cats';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import renewAccessToken from '@/ducks/auth';

const Cat = () => {
  const [accessToken, setAccessToken] = useState('');
  const [cat, setCat] = useState(catDefault);

  useEffect(() => {
    if (accessToken) {
      renewCat(accessToken, setCat);
    } else {
      renewAccessToken(setAccessToken);
    }
  }, [accessToken]);

  return (
    <section id="cat">
      <h2>
        <Link href={cat.url}>{cat.name}</Link>
      </h2>
      {cat.photos.map(photo => (
        <div className={styles.photoWrapper} key={photo.full}>
          <img
            alt={cat.name}
            src={photo.full}
            />
        </div>
      ))}
    </section>
  );
};

export default Cat;
