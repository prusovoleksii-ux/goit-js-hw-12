import {getImagesByQuery} from "./js/pixabay-api.js";
import {createGallery} from "./js/render-functions.js";
import {showLoader} from "./js/render-functions.js";
import {hideLoader} from "./js/render-functions.js";
import {showLoadMoreButton} from "./js/render-functions.js";
import {hideLoadMoreButton} from "./js/render-functions.js";
import {clearGallery} from "./js/render-functions.js";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const text = document.querySelector('.form input');
const loadMoreButton = document.querySelector('.load-button');

let query;
let page;
let pageLimit;

function scroll() {
    const length = document.querySelector('.gallery li').getBoundingClientRect().height;
    window.scrollBy({
    top: length*2,
    behavior: "smooth",
});
}

form.addEventListener("submit", async e => {
    e.preventDefault();
    query = text.value.trim();
    if (query === "") return;
    showLoader();
    hideLoadMoreButton();
    clearGallery();
    page = 1;
    try {
        const res = await getImagesByQuery(query, page);
        console.log(res.hits);
        pageLimit = (res.totalHits/15);
        if (res.hits.length === 0){
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            createGallery(res.hits);
            if (pageLimit > page) showLoadMoreButton();
            else {
                iziToast.info({
                    message: "We're sorry, but you've reached the end of search results."
                });
            }
        }
    } catch (err) {
        console.error(err);
        iziToast.error({
            message: 'An error occurred while trying to fetch images',
        });
    } finally { hideLoader(); }
});

loadMoreButton.addEventListener("click", async e => {
    hideLoadMoreButton();
    showLoader();
    page += 1;
    try {
        const res = await getImagesByQuery(query, page)
        createGallery(res.hits);
        scroll();
        if (pageLimit > page) showLoadMoreButton();
        else {
            hideLoadMoreButton();
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results."
            });
        }
    }
    catch(err) {
        console.error(err)
        iziToast.error({
            message: 'An error occurred while trying to fetch images',
        });
    } finally { hideLoader(); }
});