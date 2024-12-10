export function selectedProductKeyName(id) {
	return `product_selected_${id}`
}

export function getProductSelectedById() {
	return localStorage.getItem("item_ID");
}

export function getCardAnimationClass() {
	return "image-effect";
}

export function cardAnimationOccured(id) {
	let selectedProductName = selectedProductKeyName(id);
    return localStorage.getItem(selectedProductName);
}