// eslint-disable-next-line
class PhotoComponent {
	constructor(media) {
		this._media = media;

		this.$wrapper = document.createElement("div");
		this.$wrapper.setAttribute("class", "media__container");
		this.$wrapper.setAttribute("id", this._media.id);
	}

	// Crééer le HTML du PhotoComponent
	render() {
		const link = document.createElement("a");
		link.setAttribute("href", "#");
		link.setAttribute("class", "media__link");
		link.setAttribute("tabindex", "0");

		const img = document.createElement("img");
		img.setAttribute(
			"src",
			`../../assets/photographers/${this._media.photographerId}/${this._media.image}`
		);
		img.setAttribute("alt", this._media.title);
		img.setAttribute("class", "media__image");

		link.appendChild(img);

		const description = document.createElement("p");
		description.setAttribute("class", "media__description");
		description.setAttribute(
			"aria-label",
			"Le groupe nom de la photo / nombre de likes de la photo"
		);
		description.innerHTML = `
					<span class="media__title">${this._media.title}</span>
					<span class="media__likes">${this._media.likes} <i class="fa-regular fa-heart" role="img" aria-label="Heart icon" tabindex="0">
		</i></span>
				`;

		this.$wrapper.appendChild(link);
		this.$wrapper.appendChild(description);

		return this.$wrapper;
	}
}
