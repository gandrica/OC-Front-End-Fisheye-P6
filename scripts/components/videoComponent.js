// eslint-disable-next-line
class VideoComponent {
	constructor(media) {
		this._media = media;

		this.$wrapper = document.createElement("div");
		this.$wrapper.setAttribute("class", "media__container");
		this.$wrapper.setAttribute("id", this._media.id);
	}

	//Crééer le HTML pour le VideoComponent
	render() {
		const link = document.createElement("a");
		link.setAttribute("class", "media__link");
		link.setAttribute("href", "#");
		link.setAttribute("tabindex", "0");

		const video = document.createElement("video");

		video.setAttribute("aria-label", this._media.title);
		video.setAttribute("class", "media__video");
		video.setAttribute("controls", "true");
		video.setAttribute("tabindex", "0");

		const source = document.createElement("source");
		source.setAttribute(
			"src",
			`../../assets/photographers/${this._media.photographerId}/${this._media.video}`
		);
		video.appendChild(source);

		link.appendChild(video);

		const description = document.createElement("p");
		description.setAttribute("class", "media__description");
		description.setAttribute(
			"aria-label",
			"Le groupe nom de la video / nombre de likes de la video"
		);

		/* eslint-disable */
		description.innerHTML = `
					<span class="media__title">${this._media.title}</span>
					<span class="media__likes">${this._media.likes} ${
						description.classList.contains("liked")
							? '<i class="fa-solid fa-heart" role="img" tabindex="0">'
							: '<i class="fa-regular fa-heart" role="img" aria-label="Heart icon" tabindex="0">'
					}</i></span>
				`;
		/* eslint-enable */

		this.$wrapper.appendChild(link);
		this.$wrapper.appendChild(description);

		return this.$wrapper;
	}
}
