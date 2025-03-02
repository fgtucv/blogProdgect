const openButton = document.querySelector(".header_edit-post");
const backdrop = document.querySelector(".edit-modal_backdrop");

openButton.addEventListener("click", openModal);

function openModal() {
    backdrop.classList.remove("is-hidden");
};