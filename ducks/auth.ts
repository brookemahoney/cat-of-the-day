import axios from 'axios';
import {
  type Dispatch,
  SetStateAction
} from 'react';

const getAccessToken = (setAccessToken: Dispatch<SetStateAction<string>>) => {
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', process.env.NEXT_PUBLIC_CLIENT_ID || '');
  params.append('client_secret', process.env.NEXT_PUBLIC_CLIENT_SECRET || '');

  axios.post(
    'https://api.petfinder.com/v2/oauth2/token',
      params,
  ).then(response => {
    setAccessToken(response.data.access_token || '');
  })
  .catch(error => {
    console.log(error);
  });
};

export default getAccessToken;
