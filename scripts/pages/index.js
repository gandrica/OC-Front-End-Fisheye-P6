async function displayData(photographers) {
	const photographersSection = document.querySelector(
		".photographer_section"
	);

	photographers.forEach((photographer) => {
		const photographerModel = new Photographer(photographer);
		const photographerTemplate = new PhotographerComponent(
			photographerModel
		);
		const userCardDOM = photographerTemplate.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

function getCardId() {
	const links = document.querySelectorAll("article a");
	links.forEach((link) => {
		link.addEventListener("click", function (e) {
			const targetId = e.target.closest("article").id;
			link.setAttribute(
				"href",
				`./html/photographer.html?id=${targetId}`
			);
		});
	});
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	displayData(photographers);
	getCardId();
}

init();
