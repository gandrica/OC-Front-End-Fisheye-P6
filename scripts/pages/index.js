// Afficher les photographes
async function displayData(photographers) {
	const photographersSection = document.querySelector(
		".photographer_section"
	);

	photographers.forEach((photographer) => {
		const photographerModel = new Photographer(photographer); // eslint-disable-line
		// eslint-disable-next-line
		const photographerTemplate = new PhotographerComponent(
			photographerModel
		);
		const userCardDOM = photographerTemplate.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

// Obtenir l'ID de la card et rediriger vers la page du photographe
function getCardId() {
	const photographersSection = document.querySelector(
		".photographer_section"
	);

	photographersSection.addEventListener("click", function (e) {
		if (e.target.classList.contains("profile__picture")) {
			const targetId = e.target.closest("article").id;
			e.target
				.closest("a")
				.setAttribute(
					"href",
					`./html/photographer.html?id=${targetId}`
				);
		}
	});

	photographersSection.addEventListener("keydown", function (e) {
		const picture = e.target.children[0].children[0];
		if (picture.classList.contains("profile__picture") && e.key === " ") {
			const targetId = picture.closest("article").id;
			picture
				.closest("a")
				.setAttribute(
					"href",
					`./html/photographer.html?id=${targetId}`
				);
		}
	});
}

//Initialise la page d'accueil
async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers(); // eslint-disable-line

	// Afficher les photographes
	displayData(photographers);

	// Obtenir l'ID de la card et rediriger vers la page du photographe
	getCardId();
}

//Lance la page d'accueil
init();
