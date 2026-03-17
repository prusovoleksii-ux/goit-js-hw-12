import{a as L,S as v,i as l}from"./assets/vendor-Brtjr80A.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const b="54981355-018af070e068b3cf75c2fd7df",d=async(r,e)=>(console.log(e),(await L.get("https://pixabay.com/api/",{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data),f=document.querySelector("div.modal"),h=document.querySelector("ul.gallery"),m=document.querySelector(".load-button"),w=()=>{f.classList.add("active")},q=()=>{f.classList.remove("active")},p=()=>{m.classList.add("active")},y=()=>{m.classList.remove("active")},g=r=>{let e=r.map(s=>`<li class="gallery-item">
                                        <a class="gallery-link" href="${s.largeImageURL}">
                                            <img
                                                class="gallery-image"
                                                src="${s.webformatURL}"
                                                alt="${s.tags}"
                                            />
                                            <ul class="info-container">
                                                <li>
                                                    <p class="info-header">Likes</p>
                                                    <p class="info">${s.likes}</p>
                                                </li>
                                                <li>
                                                    <p class="info-header">Views</p>
                                                    <p class="info">${s.views}</p>
                                                </li>
                                                <li>
                                                    <p class="info-header">Comments</p>
                                                    <p class="info">${s.comments}</p>
                                                </li>
                                                <li>
                                                    <p class="info-header">Downloads</p>
                                                    <p class="info">${s.downloads}</p>
                                                </li>
                                            </ul> 
                                        </a>
                                    </li>`).join(""),i=new v(".gallery a",{captionsData:"alt"});h.insertAdjacentHTML("beforeend",e),i.refresh()},S=r=>{h.innerHTML=""},$=document.querySelector(".form"),B=document.querySelector(".form input"),M=document.querySelector(".load-button");let n,a,u;function x(){const r=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:r*3,behavior:"smooth"})}$.addEventListener("submit",r=>{r.preventDefault(),n=B.value.trim(),n!==""&&(w(),y(),S(),a=1,d(n,a).then(e=>{console.log(e.hits),u=e.totalHits/15,e.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(g(e.hits),u>a?p():l.info({message:"We're sorry, but you've reached the end of search results."}))}).catch(e=>{console.error(e),l.error({message:"An error occurred while trying to fetch images"})}).finally(()=>{q()}))});M.addEventListener("click",r=>{a+=1,d(n,a).then(e=>{g(e.hits),x(),u>a?p():(y(),l.info({message:"We're sorry, but you've reached the end of search results."}))}).catch(e=>{console.error(e),l.error({message:"An error occurred while trying to fetch images"})})});
//# sourceMappingURL=index.js.map
