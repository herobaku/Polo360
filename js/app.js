const img_main = document.getElementById("img_main")
let x = "1"
gallery()
function gallery() {
    x <= 1 ? x++ : x = 1
    img_main.style.background = `url(../img/${x}.jpg) no-repeat center/cover`
}
setInterval(gallery, 5000)