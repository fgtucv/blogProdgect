import { showePost } from "./operation/showPost.js";

const paginationButton = document.querySelector(".main_pagination-button");

paginationButton.addEventListener("click", addContent);

let page = 1;

function addContent() {
    page += 1;
    
    showePost(page);
}

showePost(page);