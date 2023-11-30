// eslint-disable-next-line
class Media {
	constructor(media) {
		this._media = media;
		this._title = media.title;
		this._likes = media.likes;
		this._date = media.date;
		this._id = media.id;
		this._photographerId = media.photographerId;
		this._price = media.price;
	}

	//Getters de la media

	get media() {
		return this._media;
	}

	get title() {
		return this._title;
	}

	get likes() {
		return this._likes;
	}

	get date() {
		return this._date;
	}

	get id() {
		return this._id;
	}

	get photographerId() {
		return this._photographerId;
	}

	get price() {
		return this._price;
	}
}
