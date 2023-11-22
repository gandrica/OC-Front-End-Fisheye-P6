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
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	displayData(photographers);
	getCardId();
}

init();
