const SORT_NUMBER = {
  FIELD: 'id',
  CLASS: 'number',
}

const SORT_NAME = {
  FIELD: 'name',
  CLASS: 'name',
}

const ORDER_ASC = 'asc'
const ORDER_DESC = 'desc'

let currentSortOrder = ORDER_ASC
let currentSortBy = SORT_NUMBER.CLASS

const sortBtn = document.getElementById('sort-btn')
const sortDropdown = document.getElementById('sort-dropdown')

const toggleShowDropdown = (event) => {
  const sortBy = handleSortType(event)

  if (typeof sortBy !== 'undefined') {
    const sortOrder = handleSortOrder(sortBy)

    sortPokemon(sortOrder, sortBy.FIELD, sortBy.CLASS)
  }

  sortDropdown.classList.toggle('show')
  sortDropdown.classList.toggle('hide')
}

const handleSortType = (event) => {
  switch (event.target.id) {
    case 'sort-name':
      return SORT_NAME
    case 'sort-number':
      return SORT_NUMBER
    default:
      break
  }
}

const handleSortOrder = (sortBy) => {
  if (sortBy.CLASS === currentSortBy) {
    currentSortOrder = currentSortOrder === ORDER_ASC ? ORDER_DESC : ORDER_ASC
    return currentSortOrder
  } else {
    return currentSortOrder
  }
}

sortBtn.addEventListener('click', (event) => {
  toggleShowDropdown(event)
})

sortDropdown.addEventListener('click', (event) => {
  toggleShowDropdown(event)
})
