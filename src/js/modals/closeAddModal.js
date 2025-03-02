import { createObject } from "../operation/getPostObject";

const closeButton = document.querySelector(".add-modal_close-button");
const submitButton = document.querySelector(".add-modal_post-button")
const backdrop = document.querySelector(".add-modal_backdrop");
const loginInput = document.querySelector(".add-modal_post-text");
const imgInput = document.querySelector(".add-modal_author-name");
const textInput = document.querySelector(".add-modal_post-img");

closeButton.addEventListener("click", closeModal);
submitButton.addEventListener("click", closeModal)

function closeModal(event) {
    event.preventDefault()

    backdrop.classList.add("is-hidden");

    createObject(loginInput.value, textInput.value, imgInput.value)
}