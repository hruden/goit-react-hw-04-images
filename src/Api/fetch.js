import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '38651118-3e038dee929842dc7edfb74da';

export const getURL = async ({searchQuery, page, per_page}) => {
  const parameters = new URLSearchParams({
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page,
    page,
  });
  const images = await axios.get(`${URL}?key=${KEY}&${parameters}`);

  return images.data;
}
