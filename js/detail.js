const detail = document.getElementById('detail')
const detailCard = document.getElementById('detail-card')

const showDetail = () => {
  detail.classList.toggle('hide')
  detail.classList.toggle('show-flex')
}

const hideDetail = () => {
  detail.classList.toggle('hide')
  detail.classList.toggle('show-flex')
}

const detailListenClick = () => {
  const cards = document.querySelectorAll('.pokemon-card')

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      showDetail(event)
    })
  })
}

detail.addEventListener('click', (event) => {
  if (event.target === detail) {
    hideDetail(event)
  }
})
