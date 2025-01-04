'use client'

import axios from 'axios';
import getAccessToken from './auth';

export type TSCat = {
  id: number,
  url: string,
  name: string,
  description: string,
  photos: {
    full: string,
  }[],
  videos: {
    embed: string,
  }[],
  tags: string[],
}

type animalsResponse = {
  data: {
    animals: [TSCat],
  },
};

const catDefault: TSCat = {
  id: 0,
  url: '',
  name: '',
  description: '',
  photos: [],
  videos: [],
  tags: [],
};

const getCat = (): TSCat => {
  let cat = catDefault;
  const accessToken = getAccessToken();

  try {
    axios.get('https://api.petfinder.com/v2/animals', {
      params: {
        limit: 1,
        special_needs: 1,
        status: 'adoptable',
        type: 'Cat',
      },
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    })
    .then(response => {
      cat = response.data.animals[0];
    });
  } catch (error) {
    console.log(error);
  }

  return cat;
};

export default getCat;
