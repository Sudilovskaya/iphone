const tabs = document.querySelectorAll('.card-detail__change')
const tabsTitle = document.querySelector('.card-details__title')
const tabsPrice = document.querySelector('.card-details__price')
const tabsImage = document.querySelector('.card__image_item')

const tabsOptions = [
  {
    name: "Graphite",
    memory: '128',
    price: 60000,
    image: 'img/iPhone-graphite.webp'
  },
   {
    name: "Silver",
    memory: '256',
    price: 70000,
    image: 'img/iPhone-silver.webp'
  }, 
  {
    name: "Sierra Blue",
    memory: '512',
    price: 80000,
    image: 'img/iPhone-sierra_blue.webp'
  }
]

const changeContent = (index) => {
  tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
  tabsPrice.textContent = `${tabsOptions[index].price}P`
  
  tabsImage.setAttribute('src', tabsOptions[index].image )
}

const changeActiveTabs = (indexClickedTab) => {  //перебор кнопок
  tabs.forEach((tab, index) => {
    tab.classList.remove('active') //очищаем у всех класс

    if (index === indexClickedTab) { 
       tab.classList.add('active')  //добавляем класс, если индекс совпал с тем что нажали
    }

  })
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    changeActiveTabs(index)
  }) 
})

changeContent(0)