const img_main = document.getElementById("img_main")
let x = "0"
gallery()

function gallery() {
    if ( x <= 1 ) x++
    else { x = 1 }
    img_main.style.background = `url(../img/${x}.jpg) no-repeat center`
}

setInterval(gallery, 3000)