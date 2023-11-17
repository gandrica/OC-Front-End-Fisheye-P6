class Lightbox extends Media {
	constructor(media, medias) {
		super(media);
		this._medias = medias;
		this._image = media.image;
		this._video = media.video;
	}

	get medias() {
		return this._medias;
	}

	get image() {
		return this._image;
	}
	get video() {
		return this._video;
	}

	findIndexOfMedia() {
		const mediaIndex = this._medias.findIndex((media) => {
			return this._media === media;
		});
		return mediaIndex;
	}

	nextMedia() {
		const mediasLength = this._medias.length;
		const mediaIndex = this.findIndexOfMedia();
		if (mediaIndex + 1 >= mediasLength) {
			this._media = this._medias[0];
			return this._media;
		} else {
			this._media = this._medias[mediaIndex + 1];
			return this._media;
		}
	}

	previousMedia() {
		const mediasLength = this._medias.length;
		const mediaIndex = this.findIndexOfMedia();
		if (mediaIndex - 1 <= 0) {
			this._media = this._medias[mediasLength - 1];
			return this._media;
		} else {
			this._media = this._medias[mediaIndex - 1];
			return this._media;
		}
	}
}
