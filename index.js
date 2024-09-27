function random() {
    const colors = ['red', 'blue', 'purple']
    return colors[Math.floor(Math.random() * colors.length)]
}

function colors() {
    const select = document.getElementById('color')
    const buttons = document.querySelectorAll('button')
    const choose = select.value
    buttons.forEach(button => {
        if (choose === "random") {
            button.style.backgroundColor = random()
        } else if (choose) {
            button.style.backgroundColor = choose
        } else {
            button.style.backgroundColor = '' 
        }
    })
}
