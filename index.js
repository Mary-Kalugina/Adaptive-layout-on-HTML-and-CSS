window.addEventListener("load", () => setTimeout(showPopup, 3000));

function showPopup() {
    let popup = document.querySelector(".popup-fade");
    popup.classList.add("showPopup");
    document.querySelector(".subscribe-button").addEventListener("click", () => popup.classList.remove("showPopup"));
    popup.addEventListener("click", () => popup.classList.remove("showPopup"));
    popup.querySelector(".popup").addEventListener('click', function(event) {
        event.stopPropagation();
    });
    popup.querySelector(".popup__close").addEventListener("click", () => popup.classList.remove("showPopup"));
}