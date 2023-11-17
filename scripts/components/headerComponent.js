class HeaderComponent {
	constructor(id, name, city, country, tagline, picture) {
		this._id = id;
		this._name = name;
		this._city = city;
		this._country = country;
		this._tagline = tagline;
		this._picture = picture;

		this.$wrapper = document.createElement("header");
		this.$wrapper.setAttribute("class", "header__section");
		this.$wrapper.setAttribute("aria-label", "Photograph section header");
	}

	getHeader() {
		//Section Header
		const titleDiv = document.createElement("div");
		titleDiv.setAttribute("class", "header__title-group");
		titleDiv.setAttribute("aria-label", "Photograph section header");

		const h1 = document.createElement("h1");
		h1.textContent = this._name;

		const p = document.createElement("p");
		p.setAttribute("class", "profile__description");
		p.innerHTML = `
			<span class="city-country">${this._city}, ${this._country}</span>
			<span class="tagline">${this._tagline}</span>
        `;
		titleDiv.appendChild(h1);
		titleDiv.appendChild(p);

		const contactButton = document.createElement("button");
		contactButton.setAttribute("class", "contact_button");
		contactButton.setAttribute("id", "contact-button");
		contactButton.setAttribute("tabindex", "0");
		contactButton.textContent = "Contactez-moi";

		const imgDiv = document.createElement("div");
		imgDiv.setAttribute("class", `profile__picture-div`);

		const img = document.createElement("img");
		img.setAttribute("src", this._picture);
		img.setAttribute("class", `profile__picture id-${this._id}`);
		img.setAttribute("alt", `${this._name}`);

		imgDiv.appendChild(img);

		this.$wrapper.appendChild(titleDiv);
		this.$wrapper.appendChild(contactButton);
		this.$wrapper.appendChild(imgDiv);

		return this.$wrapper;
	}
}
