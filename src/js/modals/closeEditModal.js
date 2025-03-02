import { createObject } from "../operation/getPostObject";

const closeButton = document.querySelector(".edit-modal_close-button");
const submitButton = document.querySelector(".edit-modal_post-button")
const backdrop = document.querySelector(".edit-modal_backdrop");
const loginInput = document.querySelector(".edit-modal_post-text");
const imgInput = document.querySelector(".edit-modal_author-name");
const textInput = document.querySelector(".edit-modal_post-img");

closeButton.addEventListener("click", closeModal);
submitButton.addEventListener("click", closeModal)

function closeModal(event) {
    event.preventDefault()

    backdrop.classList.add("is-hidden");
}