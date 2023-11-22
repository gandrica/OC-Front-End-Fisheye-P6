class FormModal {
	constructor(name) {
		this._name = name;

		this.$wrapper = document.createElement("div");
		this.$wrapper.setAttribute("id", "contact_modal");
		this.$wrapper.setAttribute("class", "modal");
		this.$wrapper.setAttribute("role", "dialog");
		this.$wrapper.setAttribute("aria-labelledby", "form-heading");
		this.$wrapper.setAttribute("tabindex", "0");

		this.$modalWrapper = document.querySelector(".modal-wrapper");
	}

	clearModal() {
		this.$modalWrapper.innerHTML = "";
		return this.$modalWrapper;
	}

	createForm() {
		const form = `
            <div class="form-wrapper">
                <header role="banner">
                    <h1 id="form-heading" class="form-heading">Contactez-moi <br/> <span class="form-heading-title">${this._name}</span></h1>
					<div role="button" tabindex="0" class="close-btn-div">
						<img src="../../assets/icons/close.svg" class="close-btn"/>
					</div>
                    
                </header>
                <form >
					<div role="group" aria-label="Form">
						<div aria-label="First name fieldset" class="modal-fieldset">
							<label for="first-name" id="first-name-label" class="first-name-label">Prénom</label>
							<input type="text" tabindex="0" id="first-name" class="first-name" aria-labelledby="first-name-label"/>
						</div>
						<div aria-label="Last name fieldset" class="modal-fieldset">
							<label for="last-name" id="last-name-label" class="">Nom</label>
							<input type="text" tabindex="0" id="last-name" class="last-name" aria-labelledby="last-name-label" />
						</div>
						<div aria-label="Email fieldset" class="modal-fieldset">
							<label for="email" id="email-label" class="email-label">Email</label>
							<input type="email" id="email" class="email" tabindex="0" aria-labelledby="email-label"/>
						</div>
						<div aria-label="Message fieldset" class="modal-fieldset">
							<label for="message" id="message-label" class="message-label">Votre message</label>
							<input type="text" name="message" id="message" tabindex="0" class="message" aria-labelledby="message-label"/>
						</div>
					</div>
                    
                    <div role="button" aria-label="Close Contact Form" name="sent-button" id="sent-button" class="contact_button" tabindex="0" aria-label=" Button type submit"><p>Envoyer</p></div>
                </form>
            </div>;
        `;
		this.$wrapper.innerHTML = form;
		this.$modalWrapper.appendChild(this.$wrapper);

		this.$modalWrapper.classList.add("modal-on");
		this.$modalWrapper.style.display = "flex";

		this.$modalWrapper.style.zIndex = "3";
		console.log(this.$wrapper);

		this.$wrapper.focus();
	}

	closeModal() {
		this.$modalWrapper.classList.remove("modal-on");
		this.$modalWrapper.style.display = "none";
		this.$modalWrapper.style.zIndex = "1";
		this.clearModal();
	}
}
