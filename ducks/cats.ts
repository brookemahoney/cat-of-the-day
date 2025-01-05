import axios from 'axios';
import getAccessToken from './auth';
import {
  type Dispatch,
  SetStateAction
} from 'react';

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

export const catDefault: TSCat = {
  id: 0,
  url: '',
  name: '',
  description: '',
  photos: [],
  videos: [],
  tags: [],
};

const renewCat = (accessToken: string, setCat: Dispatch<SetStateAction<TSCat>>) => {
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
      setCat(response.data.animals[0]);
    })
    .catch(error => {
      console.log(error);
    });
};

export default renewCat;
