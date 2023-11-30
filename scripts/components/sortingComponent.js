// eslint-disable-next-line
class SortingComponent {
	constructor(listItems) {
		this._listItems = listItems;
		this.$wrapper = document.createElement("div");
		this.$wrapper.setAttribute("class", "sorting-photos");
	}

	//Crééer le HTML pour le SortingComponent
	render() {
		const label = document.createElement("p");
		label.setAttribute("id", "sorting-label");
		label.setAttribute("class", "sorting-label");
		label.setAttribute("role", "search");
		label.innerText = "Trier par";

		const div = document.createElement("div");
		div.setAttribute("class", "sorting-box");
		div.setAttribute("role", "list");
		div.setAttribute("aria-labelledby", "sorting-label");
		div.setAttribute("aria-haspopup", "true");
		div.setAttribute("aria-expanded", "false");

		this._listItems.forEach((listItem) => {
			const option = document.createElement("p");
			option.setAttribute("role", "listitem");
			option.setAttribute("class", "sorting-item");
			option.setAttribute("tabindex", "0");
			option.innerText = listItem;

			div.appendChild(option);
		});

		this.$wrapper.appendChild(label);
		this.$wrapper.appendChild(div);

		return this.$wrapper;
	}
}
