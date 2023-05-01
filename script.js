const ulSquares = document.querySelector("ul")


 for ( let i = 0; i < 60; i++) {
    
    const random= (min,max) => Math.random() * (max-min)+min
    const li = document.createElement("li")

    const size = Math.floor(random(10,130))

    const position = random(0,99);
    
    const delay = random(5,0.1)

    li.style.width =`${size}px`
    li.style.height =`${size}px`
    li.style.bottom =`-600px`

    li.style.left =`${position}%`
    li.style.animationDelay =`${delay}s`

    ulSquares.appendChild(li)
}