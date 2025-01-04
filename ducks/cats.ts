import axios from 'axios';

export type TSCat = {
  id: number,
  url: string,
  name: string,
  description: string,
  photos: [{
    full: string,
  }?],
  videos: [{
    embed: string,
  }?],
  tags: [string?],
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

const getCat = () => {
  axios.get('https://api.petfinder.com/v2/animals', {
    params: {
      limit: 1,
      special_needs: 1,
      status: 'adoptable',
      type: 'Cat',
    }
  })
  .then(function (response: animalsResponse) {
    return response.data.animals[0];
  })
  .catch(function (error) {
    console.log(error);
    return catDefault;
  });
};

export default getCat;
