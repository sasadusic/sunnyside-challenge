const hamburger = document.querySelector('#hamburger')
const ul = document.querySelector('#ul')

hamburger.onclick = () => {
    ul.classList.toggle('close')
}