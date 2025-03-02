const openButton = document.querySelector(".header_add-post");
const backdrop = document.querySelector(".add-modal_backdrop");

openButton.addEventListener("click", openModal);

function openModal() {
    backdrop.classList.remove("is-hidden");
};