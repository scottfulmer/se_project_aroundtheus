export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscapeUp);

  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}
export function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscapeUp);

  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}
export function handleEscapeUp(e) {
  if (e.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}
