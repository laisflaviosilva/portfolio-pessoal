$(document).ready(function(){
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky")
            $('.span').addClass("sticky")
        }else {
            $('.navbar').removeClass("sticky")
            $('.span').removeClass("sticky")
        }
    })
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('menu-btn i').toggleClass("active")
    })
})

const title = document.querySelector('.dev')
let texts = ['Desenvolvedora Full-Stack', 'UX e UI Designer']
function typeWriter(element, done) {
    let char = element.split('').reverse()
    const typer = setInterval(function(){
        if(!char.length){
            clearInterval(typer)
            return setTimeout(done, 500)
        }
        const next = char.pop()
        title.innerHTML += next
    }, 100)


}
function clear(done) {
    let char = title.innerHTML
    let nr = char.length
    let typer = setInterval(function(){
        if(nr-- == 0) {
            clearInterval(typer)
            return done()
        }
        title.innerHTML = char.slice(0, nr)
    }, 100)
}

function footer(container, el) {
    let textNow = -1
    function nextText(cb) {
        if(textNow < container.length - 1) textNow++
        else textNow = 0
        let element = container[textNow]
        typeWriter(element, function(){
            clear(nextText)
        }) 
    }
    nextText(nextText)
}

footer(texts)

