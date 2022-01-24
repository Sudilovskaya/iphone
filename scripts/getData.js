const getData = () => {
  const list = document.querySelector('.cross-sell__list')
  
  const render = (data) => {
    console.log(item);
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
  
  fetch('https://iphone-project-48194-default-rtdb.firebaseio.com/db.json')
    .then((response) => {
       if (response.ok){
          return response.json()
        } else {
          throw new Error ('Данные были получены с ошибкой')
        }
        }) //обработает и приведет в нужный вид
        .then ((data) => {  //дождется обработки первого метода, принимает уже обработанные данные
          console.log(data);
        })
        .catch ((error) => {
          console.error(error.message);
        })
        
  }
 getData ()