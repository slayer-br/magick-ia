const filterBtn = document.querySelector(".filter-btn");

filterBtn.addEventListener("click", () => {
  // Obtém os valores dos filtros, removendo espaços extras
  const selectedCategory = document.querySelector("#category").value.trim().toLowerCase();
  const maxPrice = parseFloat(document.querySelector("#price").value.trim());

  // Verifica se há filtros ativos
  const hasCategoryFilter = selectedCategory !== "";
  const hasPriceFilter = !isNaN(maxPrice);

  // Seleciona todas as cartas
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const categoryCard = card.dataset.category.toLowerCase();
    const priceCard = parseFloat(card.dataset.price);

    // Verifica se a carta atende aos filtros
    const categoryMatches = !hasCategoryFilter || selectedCategory === categoryCard;
    const priceMatches = !hasPriceFilter || priceCard <= maxPrice;

    // Define se a carta deve ser exibida
    const showCard = categoryMatches && priceMatches;

    // Mostra ou esconde a carta com base na filtragem
    card.classList.toggle("show", showCard);
    card.classList.toggle("hide", !showCard);
  });
});
