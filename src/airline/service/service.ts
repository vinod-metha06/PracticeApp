import axios from 'axios';

const airlineUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getAirlineDataApi = async () => {
  try {
    const response = await axios.get(airlineUrl);
    console.log(response.data)
    return response.data;
  } catch (error) {
    return 'error';
  }
};
