/*const parallaxSection = document.querySelector('.parallax')

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
}*/


const buttons = document.getElementsByClassName('btn')
var oldSection = 'reklam'
var newSection = 'reklam'

Array.from(buttons).forEach(button => {
    button.addEventListener('click',function(){
        Array.from(buttons).forEach(b =>{
            b.classList.remove('active')
        })
        button.classList.add('active')
        oldSection = newSection
        newSection = button.dataset.button
        setActive(newSection,oldSection)
    })
});

function setActive(ns,os) {
    document.querySelector(`.${os}`).classList.add('d-none')
    document.querySelector(`.${ns}`).classList.remove('d-none')

    const nextButton = document.querySelector(`.${ns} .bi-chevron-right`)
    const prevButton = document.querySelector(`.${ns} .bi-chevron-left`)
    const carouselContent = document.querySelector(`.${ns} .carousel-content`)
    const circles = Array.from(document.querySelectorAll(`.${ns} .bi-circle-fill`))

    const scrollAmount = document.querySelector(`.${ns} .carousel-1`).clientWidth
    let carouselIndex = 0; 

    carouselContent.scrollTo({left:0,behavior:'instant'})
    circleActivity(circles,carouselIndex)

    nextButton.addEventListener('click',function() {
        carouselIndex += 1;
        if(carouselIndex>circles.length-1){
            carouselIndex = 0
            circleActivity(circles,carouselIndex)
            carouselContent.scrollTo({left:scrollAmount*carouselIndex,behavior:'smooth'})
        } else {
            circleActivity(circles,carouselIndex)
            carouselContent.scrollTo({left:scrollAmount*carouselIndex,behavior:'smooth'})  
        }
    })

    prevButton.addEventListener('click',function(){
        carouselIndex -= 1;
        if(carouselIndex < 0){
            carouselIndex = circles.length-1
            circleActivity(circles,carouselIndex)
            carouselContent.scrollTo({left:scrollAmount*carouselIndex,behavior:'smooth'})
        } else {
            circleActivity(circles,carouselIndex)
            carouselContent.scrollTo({left:scrollAmount*carouselIndex,behavior:'smooth'})
        }
    })

    circles.forEach((circle,index) => {
        circle.addEventListener('click',()=>{
            circles.forEach(c => {
                c.classList.remove('active')
            })
            circle.classList.add('active')
            carouselContent.scrollTo({left:scrollAmount*index,behavior:'smooth'})
        })
    })
}

setActive(newSection,oldSection)

function circleActivity(circles,carouselIndex) {
    circles.forEach((circle,index) => {
        if(index === carouselIndex){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
}