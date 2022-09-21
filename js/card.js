
createCard = function (pokemon) {
  const id = pokemon.id.toString().padStart(3, '0')
  const image = pokemon.sprites.other['official-artwork'].front_default

  var cardElement = document.createElement('div')
  cardElement.classList.add('pokemon-card')
  cardElement.innerHTML = `
    <div class="number">#${id}</div>
    <img src="${image}" alt="${pokemon.name}">
    <div class="name">${pokemon.name}</div>
    `
  return cardElement
}
