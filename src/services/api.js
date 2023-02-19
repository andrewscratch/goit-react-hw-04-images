import axios from 'axios';

const KEY = '32013358-5f0ce484babf54b5e474c4ac5';
const BASE_URL = 'https://pixabay.com/api/';

const getImages = async (query = [], page = 1, perPage = 12) => {
  const options = {
    params: {
      q: query,
      page: page,
      per_page: perPage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      key: KEY,
    },
  };

  const {
    data: { hits, totalHits },
    status,
  } = await axios.get(`${BASE_URL}`, options);

  if (status !== 200 || totalHits === 0) {
    throw new Error();
  } else return { hits, totalHits };
};

export const API = {
  getImages,
};