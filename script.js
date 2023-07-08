const input = document.querySelector('.text-input')
const addBtn = document.querySelector('.btn-success')
const removeBtn = document.querySelector('.btn-danger')
const ul = document.querySelector('.list-group')
const bodyColor = document.querySelector('body')


addBtn.addEventListener('click', () => {
    bodyColor.style.background = randomColor()
    addList()

})
removeBtn.addEventListener('click', ()=>{
    ul.innerHTML = ''

})



input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      addList()
        bodyColor.style.background = randomColor()

    }
})

function randomColor() {
    let color = "#"
    for (let i = 1; i < 7; i++)
        color += Math.floor(Math.random() * 10)
    return color
}


console.log(randomColor())

function addList() {
    if (input.value.length !== 0){
        ul.innerHTML += `<li class="list-group-item">${input.value}</li>`
        input.value = ''
    }
}
