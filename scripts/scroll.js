const scrollFunc = () => {
  const links = document.querySelectorAll('.header-menu__item a')
const char = document.querySelector('.card-details__link-characteristics')
const newArrey = [...links, char]


seamless.polyfill();

newArrey.forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault()

    const id = element.getAttribute('href').substring(1)
    const section = document.getElementById(id)

    if (section) {
      seamless.elementScrollIntoView(section,  {
        behavior: "smooth",
        block: "start"
      })
    } else {
      seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
        behavior: "smooth",
        block: "center",
        inline: "center",
    });
    }
  })
})
}
 
scrollFunc()
