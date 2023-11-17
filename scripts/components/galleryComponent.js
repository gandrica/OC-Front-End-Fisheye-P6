class GalleryComponent {
	constructor(photographer) {
		this._photographer = photographer;
		this._medias = photographer.medias;
		this.$wrapper = document.createElement("div");
		this.$wrapper.setAttribute("class", "gallery__container");
	}
	render() {
		this._medias.forEach((media) => {
			this.$wrapper.appendChild(new MediaFactory(media));
		});

		const likesComponent = new LikesComponent(this._photographer);
		this.$wrapper.appendChild(likesComponent.render());

		return this.$wrapper;
	}
}
