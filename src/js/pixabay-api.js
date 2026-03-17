import axios from "axios";

const API_KEY = '54981355-018af070e068b3cf75c2fd7df';

export const getImagesByQuery = async (query, page) => {
   console.log(page);
   const response = await axios.get("https://pixabay.com/api/", {
      params: {
         key: API_KEY,
         q: query,
         image_type: "photo",
         orientation: "horizontal",
         safesearch: true,
         page: page,
         per_page: 15
      }
   });
   return response.data;
};
