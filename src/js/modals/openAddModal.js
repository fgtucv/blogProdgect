const openButton = document.querySelector(".header_add-post");
const addModal = document.querySelector(".add-modal_backdrop");

openButton.addEventListener("click", openModal);

function openModal() {
    addModal.classList.remove("is-hidden");
};