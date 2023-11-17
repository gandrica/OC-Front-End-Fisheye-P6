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

	createLightbox() {
		this.$wrapper.innerHTML = `
		<div class="icons-div">
			<span class="lightbox-close-icon" tabindex="0" role="button" aria-label="Close dialog"><i class="fa-solid fa-xmark"></i></span>
			<span class="lightbox-left-icon" tabindex="0" role="link" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></span>
			<span class="lightbox-right-icon" tabindex="0" role="link" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></span>
		</div>       
        `;

		const mediaFactory = new MediaFactory(this._media);

		this.$wrapper.appendChild(mediaFactory);
		this.$lightboxWrapper.appendChild(this.$wrapper);

		this.$lightboxWrapper.style.display = "flex";
		this.$lightboxWrapper.style.zIndex = "5";
		this.$wrapper.focus();
	}

	closeLightbox() {
		this.$lightboxWrapper.style.display = "none";
		this.$lightboxWrapper.style.zIndex = "1";
		this.clearLightbox();
	}
	clearLightbox() {
		this.$lightboxWrapper.innerHTML = "";
		return this.$lightboxWrapper;
	}
}
