import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const modal = document.querySelector('div.modal');
const gallery = document.querySelector('ul.gallery');


export const showLoader = () => {
    modal.classList.add("active");
}
export const hideLoader = () => {
    modal.classList.remove("active");
}

export const createGallery = images => {
    let markup = images.map(img => `<li class="gallery-item">
                                        <a class="gallery-link" href="${img.largeImageURL}">
                                            <img
                                                class="gallery-image"
                                                src="${img.webformatURL}"
                                                alt="${img.tags}"
                                            />
                                            <ul class="info-container">
                                                <li>
                                                    <p class="info-header">Likes</p>
                                                    <p class="info">${img.likes}</p>
                                                </li>
                                                <li>
                                                    <p class="info-header">Views</p>
                                                    <p class="info">${img.views}</p>
                                                </li>
                                                <li>
                                                    <p class="info-header">Comments</p>
                                                    <p class="info">${img.comments}</p>
                                                </li>
                                                <li>
                                                    <p class="info-header">Downloads</p>
                                                    <p class="info">${img.downloads}</p>
                                                </li>
                                            </ul> 
                                        </a>
                                    </li>`)
                        .join("");
    let lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt"});
    gallery.innerHTML = markup;
    lightbox.refresh();
}

export const clearGallery = (lightbox) => {
    gallery.innerHTML = '';
}


