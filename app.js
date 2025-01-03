// Stats Cards Hover Section

let statsColor = document.getElementsByClassName("stats__item")[0].style.color

function MouseOver(elem) {
    let title = elem.children[0].innerHTML
    let para = elem.children[1].innerHTML

    elem.children[0].innerHTML = para
    elem.children[1].innerHTML = title
    elem.style.backgroundColor = "#fa6771"
}
function MouseOut(elem) {
    let title = elem.children[1].innerHTML
    let para = elem.children[0].innerHTML

    elem.children[0].innerHTML = title
    elem.children[1].innerHTML = para

    elem.style.backgroundColor = statsColor
}

// Sliding Panels after Scroll Y POS: 2500

window.addEventListener("scroll", scroll);

function scroll() {
    
    let y = window.scrollY
    let topSlider = document.querySelector(".about__hidden--top")
    let bottomSlider = document.querySelector(".about__hidden--bottom")

    if(y > 2550) {

        topSlider.style.left = "0%"
        topSlider.style.borderBottom = "1px solid black"
        bottomSlider.style.right = "0%"
    } else {
        topSlider.style.left = "100%"
        topSlider.style.borderBottom = "none"
        bottomSlider.style.right = "100%"
    }
    
}

