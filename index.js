import{a as u,S as f,i as l}from"./assets/vendor-BqCEH3ag.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="54981355-018af070e068b3cf75c2fd7df",p=a=>u.get("https://pixabay.com/api/",{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data),n=document.querySelector("div.modal"),c=document.querySelector("ul.gallery"),m=()=>{n.classList.add("active")},y=()=>{n.classList.remove("active")},h=a=>{let r=a.map(o=>`<li class="gallery-item">
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
                                    </li>`).join(""),s=new f(".gallery a",{captionsData:"alt"});c.innerHTML=r,s.refresh()},g=a=>{c.innerHTML=""},L=document.querySelector(".form"),b=document.querySelector(".form input");document.querySelector('button[type="submit"]');L.addEventListener("submit",a=>{a.preventDefault();const r=b.value.trim();r!==""&&(m(),g(),p(r).then(s=>{console.log(s.hits),s.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):h(s.hits)}).catch(s=>{console.error(s),l.error({message:"An error occurred while trying to fetch images"})}).finally(()=>{y()}))});
//# sourceMappingURL=index.js.map
