class LikesComponent {
	constructor(photographer) {
		this._photographer = photographer;

		this.$wrapper = document.createElement("div");
		this.$wrapper.setAttribute("class", "likes__container");
		this.$wrapper.setAttribute("tabindex", "0");
	}

	getLikes(medias) {
		return medias
			.map((media) => media.likes)
			.reduce((acc, cum) => acc + cum);
	}

	render() {
		const photosLikes = this.getLikes(this._photographer.medias);

		this.$wrapper.innerHTML = `
            <span class="likes">${photosLikes} <i class="fa-solid fa-heart"></i></span>
            <span class="likes__price">${this._photographer.price}&euro; / jour</span>
            `;

		return this.$wrapper;
	}
}
