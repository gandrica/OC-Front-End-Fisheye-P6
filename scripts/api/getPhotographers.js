async function getPhotographers() {
	const photographersData = await fetch("./../data/photographers.json");
	const photographersJSON = await photographersData.json();
	const photographers = photographersJSON.photographers;

	return {
		photographers: [...photographers],
	};
}

async function getMedias() {
	const mediasData = await fetch("./../data/photographers.json");
	const mediasJSON = await mediasData.json();
	const medias = mediasJSON.media;

	return {
		medias: [...medias],
	};
}
