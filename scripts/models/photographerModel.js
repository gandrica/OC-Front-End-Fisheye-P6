class Photographer {
	constructor(data) {
		this._name = data.name;
		this._portrait = data.portrait;
		this._city = data.city;
		this._country = data.country;
		this._price = data.price;
		this._tagline = data.tagline;
		this._id = data.id;
		this._medias = data.medias;
		this._picture = `./../assets/photographers/ID_Photos/${this._portrait}`;
		this._listItems = data.listItems;
	}

	get name() {
		return this._name;
	}

	get portrait() {
		return this._portrait;
	}

	get city() {
		return this._city;
	}

	get country() {
		return this._country;
	}

	get price() {
		return this._price;
	}

	get tagline() {
		return this._tagline;
	}

	get id() {
		return this._id;
	}

	get medias() {
		return this._medias;
	}

	get picture() {
		return this._picture;
	}
	get listItems() {
		return this._listItems;
	}
}
