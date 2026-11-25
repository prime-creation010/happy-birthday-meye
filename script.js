document.getElementById("year").textContent = new Date().getFullYear();
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const lightboxImage = lightbox.querySelector("img");
  document.querySelectorAll(".photo").forEach(photo => {
    photo.addEventListener("click", () => {
      lightboxImage.src = photo.dataset.full;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });
  const close = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.src = "";
  };
  lightbox.querySelector(".lightbox-close").addEventListener("click", close);
  lightbox.addEventListener("click", event => { if (event.target === lightbox) close(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") close(); });
}