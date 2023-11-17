class ProfileVue {
	constructor(photographer) {
		this._photographer = photographer;
	}

	getUserProfileDOM() {
		//Section
		const section = document.createElement("section");
		section.setAttribute("id", this._photographer.id);
		section.setAttribute("class", "photographer__section");
		section.setAttribute("aria-label", "Photographer section");

		const headerComponent = new HeaderComponent(
			this._photographer.id,
			this._photographer.name,
			this._photographer.city,
			this._photographer.country,
			this._photographer.tagline,
			this._photographer.picture
		);
		section.appendChild(headerComponent.getHeader());
		const sortingComponent = new SortingComponent(
			this._photographer.listItems
		);
		section.appendChild(sortingComponent.render());

		const galleryComponent = new GalleryComponent(this._photographer);
		section.appendChild(galleryComponent.render());

		console.log(section);

		return section;
	}
}
