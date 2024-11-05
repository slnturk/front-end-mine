/*
const parallaxSection = document.querySelector('.parallax')

document.addEventListener('DOMContentLoaded',function() {
    const options = {
        root:null,
        treshold:0.1
    }

    console.log(parallaxSection.offsetTop)

    const observor = new IntersectionObserver(function(entries,observor){
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                text1();
                console.log("observor çalıştı")
            }
        })
    },options)

    window.addEventListener('scroll',function(){
        observor.observe(parallaxSection)
    })
    
})


function activeParallaxEfect() {
    window.addEventListener('scroll',function() {
        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight

        const parallaxText1 = document.getElementById('parallax-text-1')
        if(scrollPosition > parallaxSection.offsetTop-300 && scrollPosition < 1041){
            parallaxText1.style.transform = `translateY(-${scrollPosition/2}px)`
            parallaxText1.style.opacity = `${1 - scrollPosition/windowHeight}`
        }

        const parallaxText2 = document.getElementById('parallax-text-2')
        if(scrollPosition > 300){
            document.body.classList.add('active-text-2')
        }

        const feature1 = document.querySelector('parallax-feature-1')
        const feature2 = document.querySelector('parallax-feature-2')

        if(scrollPosition > windowHeight/2){
            document.body.classList.add('scale-feature-2')
        } else {
            document.body.classList.remove('scale-feature-2')
        }
    })
}

function text1() {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    const parallaxText1 = document.getElementById('parallax-text-1')
    parallaxText1.style.transform = `translateY(-${scrollPosition/2}px)`
    parallaxText1.style.opacity = `${1 - scrollPosition/windowHeight}`
}

*/

const buttons = document.getElementsByClassName('btn')

Array.from(buttons).forEach(button => {
    button.addEventListener('click', function(){

        Array.from(buttons).forEach (b =>{
            b.classList.remove('active')
        }) 
         
        button.classList.toggle('active')
        
    })
});