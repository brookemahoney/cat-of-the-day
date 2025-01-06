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
  const [tagsDescription, setTagsDescription] = useState('');
  const [location, setLocation] = useState('');

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
    if (cat.tags.length) {
      setTagsDescription(cat.tags.join(', '));
    }
    if (cat.contact.address.city || cat.contact.address.state) {
      setLocation([cat.contact.address.city, cat.contact.address.state].filter(location => location).join(', '));
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
          {(cat.description || tagsDescription) && (
            <div className={styles.description}>
              {cat.description && (
                <p>{cat.description}</p>
              )}
              {tagsDescription && (
                <p>{tagsDescription}</p>
              )}
              {location && (
                <p>{location}</p>
              )}
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
