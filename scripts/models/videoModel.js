// eslint-disable-next-line
class Video extends Media {
	constructor(media) {
		super(media);
		this._video = media.video;
	}

	get video() {
		return this._video;
	}
}
