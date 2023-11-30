// eslint-disable-next-line
class GalleryComponent {
	constructor(photographer) {
		this._photographer = photographer;
		this._medias = photographer.medias;
		this.$wrapper = document.createElement("div");
		this.$wrapper.setAttribute("class", "gallery__container");
	}

	// Crééer la galerie du photographe à partir de ses medias  utilisant le Factory Design Pattern
	render() {
		this._medias.forEach((media) => {
			this.$wrapper.appendChild(new MediaFactory(media)); // eslint-disable-line
		});

		const likesComponent = new LikesComponent(this._photographer); // eslint-disable-line
		this.$wrapper.appendChild(likesComponent.render());

		return this.$wrapper;
	}
}
