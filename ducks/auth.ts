'use client'

import axios from 'axios';

const getAccessToken = (): string => {
  if (!localStorage.getItem('accessToken')) {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', process.env.NEXT_PUBLIC_CLIENT_ID || '');
    params.append('client_secret', process.env.NEXT_PUBLIC_CLIENT_SECRET || '');

    axios.post(
      'https://api.petfinder.com/v2/oauth2/token',
       params,
    ).then(function (response) {
      localStorage.setItem('accessToken', response.data.access_token);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return localStorage.getItem('accessToken') || '';
};

export default getAccessToken;
