import axios from 'axios';

export const getCarsData = async (condition = null) => {
  try {
    let query = '';
    if (condition) {
      query = `?${condition}`;
    }
    const { data } = await axios.get(`/api/cars${query}`);
    return data.payload;
  } catch (error) {
    console.log(error);
  }
};
