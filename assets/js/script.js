const filterBtn = document.querySelector(".filter-btn");

filterBtn.addEventListener("click", applyFilters);

/**
 * Aplica os filtros de categoria e preço às cartas.
 */
function applyFilters() {
  const selectedCategory = getSelectedCategory();
  const maxPrice = getMaxPrice();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const show = shouldShowCard(card, selectedCategory, maxPrice);
    toggleCardVisibility(card, show);
  });
}

/**
 * Retorna a categoria selecionada no filtro (em minúsculas).
 */
function getSelectedCategory() {
  return document.querySelector("#category").value.trim().toLowerCase();
}

/**
 * Retorna o valor do preço máximo selecionado como número.
 */
function getMaxPrice() {
  const price = parseFloat(document.querySelector("#price").value.trim());
  return isNaN(price) ? null : price;
}

/**
 * Verifica se a carta deve ser exibida com base nos filtros.
 */
function shouldShowCard(card, selectedCategory, maxPrice) {
  const categoryCard = card.dataset.category.toLowerCase();
  const priceCard = parseFloat(card.dataset.price);

  const categoryMatches = !selectedCategory || selectedCategory === categoryCard;
  const priceMatches = maxPrice === null || priceCard <= maxPrice;

  return categoryMatches && priceMatches;
}

/**
 * Alterna a visibilidade da carta com base na filtragem.
 */
function toggleCardVisibility(card, show) {
  card.classList.toggle("show", show);
  card.classList.toggle("hide", !show);
}
