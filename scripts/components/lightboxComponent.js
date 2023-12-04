// eslint-disable-next-line
class LightboxComponent {
	constructor(media) {
		this._media = media;

		this.$wrapper = document.createElement("div");
		this.$wrapper.setAttribute("class", "lightbox");
		this.$wrapper.setAttribute("role", "dialog");
		this.$wrapper.setAttribute("aria-label", "Image closeup view");
		this.$wrapper.setAttribute("tabindex", "0");

		this.$lightboxWrapper = document.querySelector(".lightbox-wrapper");
	}

	//Crééer le HTML de la Lightbox
	createLightbox() {
		this.$wrapper.innerHTML = `
		<div class="icons-div">
			<span role="link" aria-label="Close dialog" class="lightbox-close-icon" tabindex="0" role="button" aria-label="Close dialog"><i class="fa-solid fa-xmark"></i></span>
			<span role="link" aria-label="Previous image" class="lightbox-left-icon" tabindex="0" role="link" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></span>
			<span role="link" aria-label="Next image" class="lightbox-right-icon" tabindex="0" role="link" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></span>
		</div>       
        `;

		const mediaFactory = new MediaFactory(this._media); // eslint-disable-line
		const video =
			mediaFactory.firstChild.firstChild.classList.contains(
				"media__video"
			);
		if (video) {
			mediaFactory.firstChild.firstChild.setAttribute("tabindex", "0");
			mediaFactory.firstChild.firstChild.play();
			mediaFactory.firstChild.firstChild.addEventListener("click", () => {
				if (mediaFactory.firstChild.firstChild.paused) {
					mediaFactory.firstChild.firstChild.play();
				} else {
					mediaFactory.firstChild.firstChild.pause();
				}
			});
			mediaFactory.firstChild.firstChild.addEventListener(
				"keydown",
				(e) => {
					if (e.key === " " || e.key === "Enter") {
						if (mediaFactory.firstChild.firstChild.paused) {
							mediaFactory.firstChild.firstChild.play();
						} else {
							mediaFactory.firstChild.firstChild.pause();
						}
					}
				}
			);
		}

		this.$wrapper.appendChild(mediaFactory);
		this.$lightboxWrapper.appendChild(this.$wrapper);

		this.$lightboxWrapper.style.display = "flex";
		this.$lightboxWrapper.style.zIndex = "5";
		this.$wrapper.focus();
	}

	//Fermer la Lightbox
	closeLightbox() {
		this.$lightboxWrapper.style.display = "none";
		this.$lightboxWrapper.style.zIndex = "1";
		this.clearLightbox();
	}

	// Nettoyer le HTML de la Lightbox
	clearLightbox() {
		this.$lightboxWrapper.innerHTML = "";
		return this.$lightboxWrapper;
	}
}
