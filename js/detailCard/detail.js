import createDetailCard from './createDetailCard.js'

const detail = document.getElementById('detail')
let pokemonInfos = []

const showDetail = (card) => {
  const pokemon = getPokemonFromCard(card)
  console.log(pokemon)

  createDetailCard(pokemon)

  console.log('create')

  detail.classList.remove('hide')
  detail.classList.add('show-flex')
}

const getPokemonFromCard = (card) => {
  const numberText = card.querySelector('.number').innerText
  const number = numberText.split('#')
  const id = parseInt(number[1])

  return pokemonInfos[id - 1]
}

const hideDetail = () => {
  detail.classList.remove('show-flex')
  detail.classList.add('hide')
}

const detailListenClick = (pokemons) => {
  const cards = document.querySelectorAll('.pokemon-card')
  pokemonInfos = pokemons

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      showDetail(card)
    })
  })
}

detail.addEventListener('click', (event) => {
  if (event.target === detail) {
    hideDetail(event)
  }
})

export default detailListenClick
