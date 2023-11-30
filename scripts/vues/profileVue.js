// eslint-disable-next-line
class ProfileVue {
	constructor(photographer) {
		this._photographer = photographer;
	}

	// Renvoi dans une section le HeaderComponent, le SortingComponent et le GalleryComponent
	getUserProfileDOM() {
		//Section
		const section = document.createElement("section");
		section.setAttribute("id", this._photographer.id);
		section.setAttribute("class", "photographer__section");
		section.setAttribute("aria-label", "Photographer section");

		//Création d'un HeaderComponent et l'ajouter au profile du photographe
		// eslint-disable-next-line
		const headerComponent = new HeaderComponent(
			this._photographer.id,
			this._photographer.name,
			this._photographer.city,
			this._photographer.country,
			this._photographer.tagline,
			this._photographer.picture
		);
		section.appendChild(headerComponent.getHeader());

		//Création d'un SortingComponent et l'ajouter au profile du photographe
		// eslint-disable-next-line
		const sortingComponent = new SortingComponent(
			this._photographer.listItems
		);
		section.appendChild(sortingComponent.render());

		//Création d'un GalleryComponent et l'ajouter au profile du photographe
		// eslint-disable-next-line
		const galleryComponent = new GalleryComponent(this._photographer);
		section.appendChild(galleryComponent.render());

		return section;
	}
}
