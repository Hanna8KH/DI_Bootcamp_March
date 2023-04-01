generateColors ()
let currentColor
eventListenersMain ()
let isMousePressed = false
gridDivs ()

function gridDivs () {
    let mainDivsNumber = 0
    for (i = 0; i < 40000; i++) {
        const main = document.getElementById('main')
        let mainDivsNumber = document.createElement('div')
        main.appendChild(mainDivsNumber)
    }
}

function eventListenersMain () {
    const main = document.getElementById('main')
    main.addEventListener('mousedsown', handleClick)
    main.addEventListener('mousemove', handleMove)
    document.body.addEventListener('mouseup', handleMouseUp)

}
function handleMouseUp () {
    isMousePressed = false
}
function handleClick () {
    if (currentColor == null) return
    isMousePressed = true 
}
function handleMove (e) {
    if (isMousePressed) return;
    console.log('coordinates: ', e.x, e.y);
    const hoveredDiv = document.elementFromPoint(e.x, e.y)
    hoveredDiv.style.backgroundColor = currentColor
    // isMousePressed = false

}

function generateColors () {
    const colorDivs = document.querySelectorAll(".color")
    for (const colorDiv of colorDivs ) {
        const randomColor = generateRandomColor ()
        colorDiv.style.backgroundColor = randomColor
        colorDiv.dataset.color = randomColor
        colorDiv.addEventListener('click', setColor)
        }
}
function generateRandomColor () {
    const hex = Math.floor(Math.random() * 16777215).toString(16)
    return '#' + hex
}

function setColor (e) {
    const chosenColor = e.target.dataset.color
    currentColor = chosenColor
    const button = document.querySelector('.clear button')
    button.style.backgroundColor = chosenColor
}