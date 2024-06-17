import axios from 'axios';

const APP_ID = '4c40cb1e';
const APP_KEY = '4348db43084a7d62ad5c4808109fa77c';

const getRecipes = async (query: string) => {
  try {
    const response = await axios.get(`https://api.edamam.com/search`, {
      params: {
        q: query,
        app_id: APP_ID,
        app_key: APP_KEY,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error("Błąd podczas pobierania przepisów:", error);
    throw error;
  }
};

export default getRecipes;