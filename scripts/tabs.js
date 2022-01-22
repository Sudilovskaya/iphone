const tabs = document.querySelectorAll('.card-detail__change')

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