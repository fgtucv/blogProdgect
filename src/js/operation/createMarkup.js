const list = document.querySelector(".main_list")

export function createMarkup(array) {
    if (array.length === 0) {
        return
    } else {
        const html = array.map((obj) => {
            return `
            <li class="main_item" id="${obj.id}">
                    <img class="main_post-img" src="${obj.postImeges}"
                        alt="https://placehloder.antonshell.me/img?width=500">
                    <div class="main_info-div">
                        <span class="main_author-login">${obj.authorLogin}</span>
                        <span class="main_post-date">${obj.publicationDate}</span>
                        <p class="main_post-text">${obj.postText}</p>
                        <span class="main_likes">${obj.likes}
                            <svg class="main_likes-icon">
                                <use href="./icons/symbol-defs.svg#icon-heart"></use>
                            </svg>
                        </span>
                    </div>
                </li>`;
        }).join("");

        list.insertAdjacentHTML("beforeend", html)
    }
}