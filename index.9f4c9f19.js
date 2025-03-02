const e=async e=>{try{return await fetch(`https://67bf7fceb2320ee05013e1b7.mockapi.io/blogproject/post?page=${e}&limit=4`).then(e=>e.json())}catch(e){return e}},t=document.querySelector(".main_list");function o(o){e(o).then(e=>{!function(e){if(0!==e.length){let o=e.map(e=>`
            <li class="main_item" id="${e.id}">
                    <img class="main_post-img" src="${e.postImeges}"
                        alt="https://placehloder.antonshell.me/img?width=500">
                    <div class="main_info-div">
                        <span class="main_author-login">${e.authorLogin}</span>
                        <span class="main_post-date">${e.publicationDate}</span>
                        <p class="main_post-text">${e.postText}</p>
                        <span class="main_likes">${e.likes}
                            <svg class="main_likes-icon">
                                <use href="./icons/symbol-defs.svg#icon-heart"></use>
                            </svg>
                        </span>
                        <span class="main_id-span">id: ${e.id}</span>
                    </div>
                </li>`).join("");t.insertAdjacentHTML("beforeend",o)}}(e)})}document.querySelector(".main_pagination-button").addEventListener("click",function(){o(n+=1)});let n=1;o(1);const a=document.querySelector(".header_add-post"),d=document.querySelector(".add-modal_backdrop");a.addEventListener("click",function(){d.classList.remove("is-hidden")});const c=async e=>{try{let t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return await fetch("https://67bf7fceb2320ee05013e1b7.mockapi.io/blogproject/post",t).then(e=>e.json())}catch(e){return e}},i=document.querySelector(".add-modal_close-button"),s=document.querySelector(".add-modal_post-button"),r=document.querySelector(".add-modal_backdrop"),l=document.querySelector(".add-modal_post-text"),u=document.querySelector(".add-modal_author-name"),m=document.querySelector(".add-modal_post-img");function p(e){var t,o,n;e.preventDefault(),r.classList.add("is-hidden"),t=l.value,o=m.value,n=u.value,c({authorLogin:`${t}`,authorName:`${t}`,postImeges:`${n}`,publicationDate:new Date().getTime(),likes:Math.round(528*Math.random()+1),views:10*Math.round(528*Math.random()+1),postText:`${o}`})}i.addEventListener("click",p),s.addEventListener("click",p);const h=document.querySelector(".header_edit-post"),_=document.querySelector(".edit-modal_backdrop");h.addEventListener("click",function(){_.classList.remove("is-hidden")});const y=document.querySelector(".edit-modal_close-button"),b=document.querySelector(".edit-modal_post-button"),v=document.querySelector(".edit-modal_backdrop");function f(e){e.preventDefault(),v.classList.add("is-hidden")}document.querySelector(".edit-modal_post-text"),document.querySelector(".edit-modal_author-name"),document.querySelector(".edit-modal_post-img"),y.addEventListener("click",f),b.addEventListener("click",f);
//# sourceMappingURL=index.9f4c9f19.js.map
