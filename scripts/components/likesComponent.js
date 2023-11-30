// eslint-disable-next-line
class LikesComponent {
	constructor(photographer) {
		this._photographer = photographer;

		this.$wrapper = document.createElement("div");
		this.$wrapper.setAttribute("class", "likes__container");
		this.$wrapper.setAttribute("tabindex", "0");
		this.$wrapper.setAttribute(
			"aria-label",
			"Le group nombre total des likes - euros/par jour"
		);
	}

	// Calculer le nombre des likes
	getLikes(medias) {
		return medias
			.map((media) => media.likes)
			.reduce((acc, cum) => acc + cum);
	}

	// Crééer le HTML du LikesComponent
	render() {
		const photosLikes = this.getLikes(this._photographer.medias);

		this.$wrapper.innerHTML = `
            <span class="likes">${photosLikes} <i class="fa-solid fa-heart" role="img" aria-label="Heart icon"></i></span>
            <span class="likes__price">${this._photographer.price}&euro; / jour</span>
            `;

		return this.$wrapper;
	}
}
