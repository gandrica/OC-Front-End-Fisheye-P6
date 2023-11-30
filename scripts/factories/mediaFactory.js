//Factory Design Pattern utilisé pour crééer un PhotoComponent ou un VideoComponent

// eslint-disable-next-line
class MediaFactory {
	constructor(media) {
		if (media.video) {
			const videoComponent = new VideoComponent(new Video(media)); // eslint-disable-line
			return videoComponent.render();
		} else if (media.image) {
			const photoComponent = new PhotoComponent(new Photo(media)); // eslint-disable-line
			return photoComponent.render();
		} else {
			throw new Error("Format média inconnu");
		}
	}
}
