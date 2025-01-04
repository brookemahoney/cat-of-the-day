'use client'
import Image from 'next/image';
import Link from 'next/link';
import type { TSCat } from '@/ducks/cats';
import getCat from '@/ducks/cats';
import styles from './index.module.scss';
import { useState } from 'react';

const Cat = () => {
  const cat = getCat();
  return (
    <section id="cat">
      <h2>
        <Link href={cat.url}>{cat.name}</Link>
      </h2>
      {cat.photos.map(photo => (
        <div className={styles.photoWrapper}>
          <Image src={photo.full} alt={cat.name} />
        </div>
      ))}
    </section>
  );
};

export default Cat;
