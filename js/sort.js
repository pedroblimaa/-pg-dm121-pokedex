const SORT_NUMBER = {
  FIELD: 'id',
  CLASS: 'number',
  ICON_CLASS: 'fas fa-hashtag',
}

const SORT_NAME = {
  FIELD: 'name',
  CLASS: 'name',
  ICON_CLASS: 'fas fa-font',
}

const ORDER_ASC = 'asc'
const ORDER_DESC = 'desc'
const ICON_DESC = 'fas fa-long-arrow-alt-up'
const ICON_ASC = 'fas fa-long-arrow-alt-down'

const alphIconClass = 'fas fa-font'
const numbIconClass = 'fas fa-font'

let currentSortOrder = ORDER_ASC
let currentSortBy = SORT_NUMBER.CLASS

const sortBtn = document.getElementById('sort-btn')
const sortDropdown = document.getElementById('sort-dropdown')
const sortIcon = document.getElementById('sort-icon')
const sortArrow = document.getElementById('sort-arrow')

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
    sortArrow.className = currentSortOrder === ORDER_ASC ? ICON_ASC : ICON_DESC
    return currentSortOrder
  } else {
    currentSortBy = sortBy.CLASS
    sortIcon.className = sortBy.ICON_CLASS
    sortArrow.className = ICON_ASC
    return ORDER_ASC
  }
}

sortBtn.addEventListener('click', (event) => {
  toggleShowDropdown(event)
})

sortDropdown.addEventListener('click', (event) => {
  toggleShowDropdown(event)
})
