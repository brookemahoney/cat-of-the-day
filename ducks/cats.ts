import axios from 'axios';
import getAccessToken from './auth';
import {
  type Dispatch,
  SetStateAction
} from 'react';

export type TSCat = {
  contact: {
    email: string | null,
    phone: string | null,
      address: {
      address1: string | null,
      address2: string | null,
      city: string | null,
      state: string | null,
      postcode: string | null,
      country: string | null,
    }
  },
  description: string,
  id: number,
  name: string,
  photos: {
    small: string,
    medium: string,
    large: string,
    full: string,
  }[],
  tags: string[],
  url: string,
}

type animalsResponse = {
  data: {
    animals: [TSCat],
  },
};

export const catDefault: TSCat = {
  contact: {
    email: '',
    phone: '',
      address: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      postcode: '',
      country: '',
    }
  },
  description: '',
  id: 0,
  name: '',
  photos: [],
  tags: [],
  url: '',
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
