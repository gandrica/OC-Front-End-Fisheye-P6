async function getPhotographer() {
	let params = new URL(document.location).searchParams;
	const photographerId = +params.get("id");
	const { photographers } = await getPhotographers();
	const { medias } = await getMedias();
	const photographer = photographers.find(
		(photographer) => photographer.id === photographerId
	);
	const photographerMedias = medias.filter(
		(media) => media.photographerId === photographerId
	);

	return { ...photographer, medias: [...photographerMedias] };
}

function displayPhotographer(photographer) {
	const photographersSection = document.querySelector("#main");

	const photographerVue = new ProfileVue(photographer);

	const userProfileDOM = photographerVue.getUserProfileDOM();
	photographersSection.appendChild(userProfileDOM);
}

//Decorator Design Pattern
function displayOptions(photographer) {
	photographer.listItems = ["Popularité", "Date", "Titre"];
	return photographer;
}

function modifyList(photographer, itemText) {
	const listItemsModified = photographer.listItems.filter(
		(item) => item !== itemText
	);
	listItemsModified.unshift(itemText);
	photographer.listItems = listItemsModified;
	return photographer;
}

function sortByLikes(medias) {
	return medias.sort((a, b) => +b.likes - +a.likes);
}

function sortByDate(medias) {
	return medias.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function sortByTitle(medias) {
	medias.sort((a, b) => {
		const x = a.title.toLowerCase();
		const y = b.title.toLowerCase();
		return x < y ? -1 : x > y ? 1 : 0;
	});
}

function cleanAndPaintSection(photographer) {
	const photographersSection = document.querySelector("#main");
	photographersSection.innerHTML = "";
	displayPhotographer(new Photographer(photographer));
	displayModal(photographer.name);
	sortingItems(photographer);
	displayLightbox(photographer);
}

function sortingItems(photographer) {
	const sortingBox = document.querySelector(".sorting-box");

	sortingBox.addEventListener("mouseover", (e) => {
		e.target.setAttribute("aria-expanded", "true");
	});
	sortingBox.addEventListener("mouseout", (e) => {
		e.target.setAttribute("aria-expanded", "false");
	});

	sortingBox.addEventListener("click", (e) => {
		if (e.target.tagName === "P") {
			modifyList(photographer, e.target.textContent);
			const firstItem = photographer.listItems[0];
			if (firstItem === "Popularité") {
				sortByLikes(photographer.medias);
				cleanAndPaintSection(photographer);
			} else if (firstItem === "Date") {
				sortByDate(photographer.medias);
				cleanAndPaintSection(photographer);
			} else if (firstItem === "Titre") {
				sortByTitle(photographer.medias);
				cleanAndPaintSection(photographer);
			}
		}
	});
}

function closeModal(formModal) {
	const sentButton = document.querySelector("#sent-button");
	const closeButton = document.querySelector(".close-btn");
	const contactModal = document.querySelector("#contact_modal");

	sentButton.addEventListener("click", () => {
		if (!checkInputs()) {
			console.log("Invalid inputs");
		} else {
			contactModal.querySelector("form").reset();
			formModal.closeModal();
		}
	});

	closeButton.addEventListener("click", () => {
		formModal.closeModal();
	});
}

function keepTheFocus(selector) {
	const modal = document.querySelector(selector);
	const children = modal.querySelectorAll('[tabindex="0"]');
	children.forEach((child, i) => {
		child.addEventListener("keydown", (e) => {
			if (e.key === "Tab" && i === children.length - 1) {
				e.preventDefault();
				children[0].focus();
			}
		});
	});
}

function displayModal(name) {
	const formModal = new FormModal(name);
	const contactButton = document.querySelector("#contact-button");

	contactButton.addEventListener("click", () => {
		formModal.createForm();
		keepTheFocus("#contact_modal");
		closeModal(formModal);
	});
}

function invalidInput(input) {
	input.style.border = "1px solid #005C00";
	const label = document.querySelector(`label[for="${input.id}"]`);
	label.textContent = label.textContent.includes("valide")
		? `${label.textContent}`
		: `${label.textContent} pas valide *`;
	label.style.fontWeight = "700";
	label.style.fontSize = "2.3em";
	return false;
}

function validInput(input) {
	input.style.border = "none";
	const label = document.querySelector(`label[for="${input.id}"]`);
	label.textContent = label.textContent.includes("valide")
		? `${label.textContent.split(" ")[0]}`
		: `${label.textContent}`;
	label.style.fontWeight = "400";
	label.style.fontSize = "1.8em";
	return true;
}

function checkName(name) {
	const nameRegex = /^[a-zA-Z]{2,30}$/;
	const isValid = nameRegex.test(name.value + "");
	return isValid ? validInput(name) : invalidInput(name);
}

// Check email function
function checkEmail(email) {
	const emailRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	const isValid = emailRegex.test(email.value + "");
	return isValid ? validInput(email) : invalidInput(email);
}

function checkInputs() {
	const firstName = document.getElementById("first-name");
	const lastName = document.getElementById("last-name");
	const message = document.getElementById("message");
	const email = document.getElementById("email");

	checkName(firstName);
	checkName(lastName);
	checkName(message);
	checkEmail(email);

	const validInputs =
		checkName(firstName) &&
		checkName(lastName) &&
		checkName(message) &&
		checkEmail(email);

	if (validInputs) {
		console.log({
			firstName: firstName.value,
			lastName: lastName.value,
			email: email.value,
			message: message.value,
		});
		return true;
	} else {
		return false;
	}
}

function createLightbox(media, photographer) {
	const mediaToFind = photographer.medias.find((med) => +media.id === med.id);
	const lightboxModel = new Lightbox(mediaToFind, photographer.medias);
	let lightbox = new LightboxComponent(lightboxModel);
	lightbox.createLightbox();

	const closeIcon = document.querySelector(".lightbox-close-icon");
	closeIcon.addEventListener("click", () => {
		lightbox.closeLightbox();
	});

	const leftIcon = document.querySelector(".lightbox-left-icon");
	leftIcon.addEventListener("click", () => {
		lightbox.clearLightbox();
		createLightbox(lightboxModel.previousMedia(), photographer);
	});

	const rightIcon = document.querySelector(".lightbox-right-icon");
	rightIcon.addEventListener("click", () => {
		lightbox.clearLightbox();
		createLightbox(lightboxModel.nextMedia(), photographer);
	});
}

function displayLightbox(photographer) {
	const galleryContainer = document.querySelector(".gallery__container");

	galleryContainer.addEventListener("click", (e) => {
		if (e.target.classList.contains("media__image")) {
			createLightbox(e.target.closest(".media__container"), photographer);
			keepTheFocus(".lightbox");
		}
	});
}

function modifyLikesSpan(likeSpan, mediaContainer, likes, photographer) {
	likeSpan.innerHTML = `
		<span class="media__likes">
			${likes}
			${
				mediaContainer.classList.contains("liked")
					? '<i class="fa-solid fa-heart">'
					: '<i class="fa-regular fa-heart">'
			}
			</i>
		</span>
	`;

	const likesSpanDiv = document.querySelector(".likes");
	likesSpanDiv.innerHTML = `${photographer.medias
		.map((media) => media.likes)
		.reduce((acc, cum) => acc + cum)} <i class="fa-solid fa-heart">`;
}

function manageLikes(photographer) {
	const galleryContainer = document.querySelector(".gallery__container");
	galleryContainer.addEventListener("click", (e) => {
		if (e.target.tagName === "I") {
			const mediaContainer = e.target.closest(".media__container");
			const medias = photographer.medias;
			const mediaLikeSpan = e.target.closest(".media__likes");
			const mediaIndex = medias.findIndex(
				(media) => +media.id === +mediaContainer.id
			);
			if (!mediaContainer.classList.contains("liked")) {
				mediaContainer.classList.add("liked");
				photographer.medias[mediaIndex].likes++;
				modifyLikesSpan(
					mediaLikeSpan,
					mediaContainer,
					photographer.medias[mediaIndex].likes,
					photographer
				);
			} else {
				mediaContainer.classList.remove("liked");
				photographer.medias[mediaIndex].likes--;
				modifyLikesSpan(
					mediaLikeSpan,
					mediaContainer,
					photographer.medias[mediaIndex].likes,
					photographer
				);
			}
		}
	});
}

async function init() {
	// Récupère les datas des photographes
	const photographer = await getPhotographer();
	displayOptions(photographer);
	displayPhotographer(new Photographer(photographer));
	displayModal(photographer.name);
	sortingItems(photographer);
	displayLightbox(photographer);
	manageLikes(photographer);
}

init();
