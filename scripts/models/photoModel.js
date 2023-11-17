class Photo extends Media {
	constructor(media) {
		super(media);
		this._image = media.image;
	}

	get image() {
		return this._image;
	}
}
