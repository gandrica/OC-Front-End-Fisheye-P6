class MediaFactory {
	constructor(media) {
		if (media.video) {
			const videoComponent = new VideoComponent(new Video(media));
			return videoComponent.render();
		} else if (media.image) {
			const photoComponent = new PhotoComponent(new Photo(media));
			return photoComponent.render();
		} else {
			throw new Error("Format média inconnu");
		}
	}
}
