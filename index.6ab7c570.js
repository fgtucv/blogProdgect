const e=async e=>{try{return await fetch(`https://67bf7fceb2320ee05013e1b7.mockapi.io/blogproject/post?page=${e}&limit=4`).then(e=>e.json())}catch(e){return e}},t=document.querySelector(".main_list");function n(n){e(n).then(e=>{!function(e){if(0!==e.length){let n=e.map(e=>`
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
                    </div>
                </li>`).join("");t.insertAdjacentHTML("beforeend",n)}}(e)})}document.querySelector(".main_pagination-button").addEventListener("click",function(){n(s+=1)});let s=1;n(1);const i=document.querySelector(".header_add-post"),a=document.querySelector(".add-modal_backdrop");i.addEventListener("click",function(){a.classList.remove("is-hidden")});
//# sourceMappingURL=index.6ab7c570.js.map
