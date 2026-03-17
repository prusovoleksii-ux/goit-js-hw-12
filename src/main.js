import {getImagesByQuery} from "./js/pixabay-api.js";
import {createGallery} from "./js/render-functions.js";
import {showLoader} from "./js/render-functions.js";
import {hideLoader} from "./js/render-functions.js";
import {clearGallery} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const text = document.querySelector('.form input');
const submit = document.querySelector('button[type="submit"]');


form.addEventListener("submit", e => {
    e.preventDefault();
    const query = text.value.trim();
    if (query === "") return;
    showLoader();
    clearGallery();
    getImagesByQuery(query)
        .then(res => {
            console.log(res.hits);
            if (res.hits.length === 0){
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                createGallery(res.hits);
            }
        })
        .catch(err => {
            console.error(err)
            iziToast.error({
                message: 'An error occurred while trying to fetch images',
            });
        })
        .finally(() => {
            hideLoader();
        });
});