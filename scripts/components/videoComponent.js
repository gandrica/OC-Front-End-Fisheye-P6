class VideoComponent {
	constructor(media) {
		this._media = media;

		this.$wrapper = document.createElement("div");
		this.$wrapper.setAttribute("class", "media__container");
		this.$wrapper.setAttribute("id", this._media.id);
	}

	render() {
		const link = document.createElement("a");
		link.setAttribute("class", "media__link");
		link.setAttribute("href", "#");

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
		description.innerHTML = `
					<span class="media__title">${this._media.title}</span>
					<span class="media__likes aria-label="likes"">${this._media.likes} ${
			description.classList.contains("liked")
				? '<i class="fa-solid fa-heart">'
				: '<i class="fa-regular fa-heart">'
		}</i></span>
				`;

		this.$wrapper.appendChild(link);
		this.$wrapper.appendChild(description);

		return this.$wrapper;
	}
}
