const generatePokemonUlrs = () => {
  const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/'
  const urls = []

  for (let i = 1; i < 151; i++) {
    urls.push(pokemonUrl + i)
  }

  return urls
}

const getPokemons = async (index = 1) => {
  const pokemonUrls = generatePokemonUlrs()

  const promises = pokemonUrls.map(url => fetch(url).then(res => res.json()))
  const pokemons = await Promise.all(promises)

  return pokemons
}

const generatePokemonCards = async () => {
  const pokemons = await getPokemons()
  const pokemonCards = pokemons.map(pokemon => createCard(pokemon))

  console.log(pokemons)

  document.getElementById('pokemon-container').append(...pokemonCards)
}

generatePokemonCards()
