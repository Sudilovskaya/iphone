const getData = () => {
  const list = document.querySelector('.cross-sell__list')
  const btn = document.querySelector('.cross-sell__add')

  

  let stack = 4
  let count = 1
  
  const render = (data) => {  // логика рендера
    
    list.innerHTML = ''

    data.forEach(item => {
      list.insertAdjacentHTML('beforeend', `
        <li>
						<article class="cross-sell__item">
							<img class="cross-sell__image" src="./${item.photo}" alt="${item.id}">
							<h3 class="cross-sell__title">${item.name}</h3>
							<p class="cross-sell__price">${item.price}₽</p>
							<button type="button" class="button button_buy cross-sell__button">Купить</button>
						</article>
					</li>
      `)
    })
  }
  
  const sliceArray = (data, index) => { //логика отрезания от даты опр. частей
    return data.slice(0, index)  // index - newStack
  }

  const changeData = (data) => {  //логика изменения даты. принимает массив полученный методом fetch
    const newStack = stack * count  

    render(sliceArray(data, newStack)) //передаем рез-т выполнения функции sliceArray

    if (data.length > newStack) {
      count++
    } else {
      btn.style.display = 'none'
    }
  }

  const getGoods = () => {
      fetch('https://iphone-project-48194-default-rtdb.firebaseio.com/db.json')
    .then((response) => {
       if (response.ok){
          return response.json()
        } else {
          throw new Error ('Данные были получены с ошибкой')
        }
        }) //обработает и приведет в нужный вид
        .then ((data) => {  //дождется обработки первого метода, принимает уже обработанные данные
          changeData(data);
        })
        .catch ((error) => {
          console.error(error.message);
        })
  }

        btn.addEventListener('click', getGoods )
        getGoods()
  }
 getData ()