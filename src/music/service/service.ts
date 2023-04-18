import axios from 'axios';

const musicUrl = 'https://itunes.apple.com/search?term=';

export const getMusicDataApi = async (name: string) => {
  try {
    const response = await axios.get(musicUrl + `${name}`);
    return response.data.results;
  } catch (error) {
    return 'error';
  }
};
