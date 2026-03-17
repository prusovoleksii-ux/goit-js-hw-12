import{a as w,S as b,i as l}from"./assets/vendor-Brtjr80A.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const q="54981355-018af070e068b3cf75c2fd7df",d=async(s,e)=>(console.log(e),(await w.get("https://pixabay.com/api/",{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data),f=document.querySelector("div.modal"),m=document.querySelector("ul.gallery"),p=document.querySelector(".load-button"),S=new b(".gallery a",{captionsData:"alt"}),y=()=>{f.classList.add("active")},h=()=>{f.classList.remove("active")},g=()=>{p.classList.add("active")},L=()=>{p.classList.remove("active")},v=s=>{let e=s.map(o=>`<li class="gallery-item">
                                        <a class="gallery-link" href="${o.largeImageURL}">
                                            <img
                                                class="gallery-image"
                                                src="${o.webformatURL}"
                                                alt="${o.tags}"
                                            />
                                            <ul class="info-container">
                                                <li>
                                                    <p class="info-header">Likes</p>
                                                    <p class="info">${o.likes}</p>
                                                </li>
                                                <li>
                                                    <p class="info-header">Views</p>
                                                    <p class="info">${o.views}</p>
                                                </li>
                                                <li>
                                                    <p class="info-header">Comments</p>
                                                    <p class="info">${o.comments}</p>
                                                </li>
                                                <li>
                                                    <p class="info-header">Downloads</p>
                                                    <p class="info">${o.downloads}</p>
                                                </li>
                                            </ul> 
                                        </a>
                                    </li>`).join("");m.insertAdjacentHTML("beforeend",e),S.refresh()},$=()=>{m.innerHTML=""},B=document.querySelector(".form"),M=document.querySelector(".form input"),O=document.querySelector(".load-button");let n,a,c;function P(){const s=document.querySelector(".gallery li").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}B.addEventListener("submit",async s=>{if(s.preventDefault(),n=M.value.trim(),n!==""){y(),L(),$(),a=1;try{const e=await d(n,a);console.log(e.hits),c=e.totalHits/15,e.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(v(e.hits),c>a?g():l.info({message:"We're sorry, but you've reached the end of search results."}))}catch(e){console.error(e),l.error({message:"An error occurred while trying to fetch images"})}finally{h()}}});O.addEventListener("click",async s=>{y(),a+=1;try{const e=await d(n,a);v(e.hits),P(),c>a?g():(L(),l.info({message:"We're sorry, but you've reached the end of search results."}))}catch(e){console.error(e),l.error({message:"An error occurred while trying to fetch images"})}finally{h()}});
//# sourceMappingURL=index.js.map
