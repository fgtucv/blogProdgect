!function(){let e=async e=>{try{return await fetch(`https://67bf7fceb2320ee05013e1b7.mockapi.io/blogproject/post?page=${e}&limit=4`).then(e=>e.json())}catch(e){return e}},t=document.querySelector(".main_list");function o(o){e(o).then(e=>{!function(e){if(0!==e.length){let o=e.map(e=>`
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
                </li>`).join("");t.insertAdjacentHTML("beforeend",o)}}(e)})}document.querySelector(".main_pagination-button").addEventListener("click",function(){o(a+=1)});let a=1;o(1);let n=document.querySelector(".header_add-post"),d=document.querySelector(".add-modal_backdrop");n.addEventListener("click",function(){d.classList.remove("is-hidden")});let i=async e=>{try{let t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};return await fetch("https://67bf7fceb2320ee05013e1b7.mockapi.io/blogproject/post",t).then(e=>e.json())}catch(e){return e}},c=document.querySelector(".add-modal_close-button"),s=document.querySelector(".add-modal_post-button"),l=document.querySelector(".add-modal_backdrop"),r=document.querySelector(".add-modal_post-text"),u=document.querySelector(".add-modal_author-name"),m=document.querySelector(".add-modal_post-img");function p(e){var t,o,a;e.preventDefault(),l.classList.add("is-hidden"),t=r.value,o=m.value,a=u.value,i({authorLogin:`${t}`,authorName:`${t}`,postImeges:`${a}`,publicationDate:new Date().getTime(),likes:Math.round(528*Math.random()+1),views:10*Math.round(528*Math.random()+1),postText:`${o}`})}c.addEventListener("click",p),s.addEventListener("click",p);let h=document.querySelector(".header_edit-post"),_=document.querySelector(".edit-modal_backdrop");h.addEventListener("click",function(){_.classList.remove("is-hidden")});let y=document.querySelector(".edit-modal_close-button"),b=document.querySelector(".edit-modal_post-button"),f=document.querySelector(".edit-modal_backdrop");function v(e){e.preventDefault(),f.classList.add("is-hidden")}document.querySelector(".edit-modal_post-text"),document.querySelector(".edit-modal_author-name"),document.querySelector(".edit-modal_post-img"),y.addEventListener("click",v),b.addEventListener("click",v)}();
//# sourceMappingURL=index.738da8d0.js.map
