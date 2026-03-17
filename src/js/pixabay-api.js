import axios from "axios";

const API_KEY = '54981355-018af070e068b3cf75c2fd7df';

export const getImagesByQuery = query => {
   return axios.get("https://pixabay.com/api/", {
      params: {
         key: API_KEY,
         q: query,
         image_type: "photo",
         orientation: "horizontal",
         safesearch: true
      }
   }).then(res => res.data);
};
