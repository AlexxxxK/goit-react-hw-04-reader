import axios from "axios";

axios.defaults.baseURL =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=d0d9269bb64f4997a9e2dac53fe31b15";

const fetchArticles = async () => {
  const response = await axios.get();

  return response.data;
};

export default fetchArticles;
