class PhotographerComponent {
	constructor(data) {
		this._photographer = new Photographer(data);
	}

	get photographer() {
		return this._photographer;
	}

	getUserCardDOM() {
		const article = document.createElement("article");
		article.setAttribute("id", this._photographer.id);
		article.setAttribute("class", "profile-index");

		const link = document.createElement("a");
		link.setAttribute("aria-label", this._photographer.name);
		link.setAttribute("class", "link-index");
		link.setAttribute("tabindex", "0");

		const imgContainer = document.createElement("div");
		imgContainer.setAttribute("class", "profile__image-container");

		const img = document.createElement("img");
		img.setAttribute("src", this._photographer.picture);
		img.setAttribute(
			"class",
			`profile__picture id-${this._photographer.id}`
		);
		img.setAttribute("alt", "");
		img.setAttribute("aria-hidden", "true");

		imgContainer.appendChild(img);
		link.appendChild(imgContainer);

		const h2 = document.createElement("h2");
		h2.setAttribute("class", "profile__image-name");
		h2.textContent = this._photographer.name;

		link.appendChild(h2);

		const p = document.createElement("p");
		p.setAttribute("class", "profile__description");
		p.innerHTML = `
			<span class="city-country">${this._photographer.city}, ${this._photographer.country}</span>
			<span class="tagline">${this._photographer.tagline}</span>
			<span class="price"> ${this._photographer.price}/jour</span>
        `;

		article.appendChild(link);
		article.appendChild(p);

		return article;
	}
}
