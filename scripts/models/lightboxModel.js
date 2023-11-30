// eslint-disable-next-line
class Lightbox extends Media {
	constructor(media, medias) {
		super(media);
		this._medias = medias;
		this._image = media.image;
		this._video = media.video;
	}

	//Getters de la Lightbox
	get medias() {
		return this._medias;
	}

	get image() {
		return this._image;
	}
	get video() {
		return this._video;
	}

	//Trouver l'index de cette media dans la liste de medias
	findIndexOfMedia() {
		const mediaIndex = this._medias.findIndex((media) => {
			return this._media === media;
		});
		return mediaIndex;
	}

	// Obtenir la media suivante dans les medias
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

	// Obtenir la media précédente dans les medias
	previousMedia() {
		const mediasLength = this._medias.length;
		const mediaIndex = this.findIndexOfMedia();
		if (mediaIndex - 1 < 0) {
			this._media = this._medias[mediasLength - 1];
			return this._media;
		} else {
			this._media = this._medias[mediaIndex - 1];
			return this._media;
		}
	}
}
