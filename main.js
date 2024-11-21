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

/*const fs = require('fs')
const filePath = 'şirketler'
fs.readdir(filePath,(err,files)=>{
    if(err){
        console.error('klasör okunamadı:',err)
        return;
    }
    console.log('klasör içeriği:');
    files.forEach(file=>{
        console.log(file)
    })
})
console.log(filePath)*/

const imagePaths = ['şirketler/acibadem-sigorta.png','şirketler/ak-sigorta.png','şirketler/allianz.png',
    'şirketler/anadolu-hayat-emeklilik.png','şirketler/anadolu-sigorta.png','şirketler/aveon-global-sigorta.png',
    'şirketler/axa-hayat-emeklilik.png','şirketler/axa-sigorta.png','şirketler/demir-saglik.png',
    'şirketler/doga-sigorta.png','şirketler/eureko.png','şirketler/fiba-sigorta.png',
    'şirketler/gig-sigorta.png','şirketler/hdi-sigorta.png','şirketler/magdeburger-sigorta.png',
    'şirketler/mapfre-sigorta.png','şirketler/neova-sigorta.png','şirketler/orient-sigorta.png',
    'şirketler/quick-sigorta.png','şirketler/ray-sigorta.png','şirketler/sompo-sigorta.png',
    'şirketler/turk-nippon-sigorta.png','şirketler/turkiye-sigorta.png','şirketler/unico.png',
    'şirketler/zurich-sigorta.png']

    const sirketContainer = document.querySelector('.şirket-container')

imagePaths.forEach((imagePath,index)=>{
    if(index<10){
        const card = document.createElement('div')
        card.className = 'şirket-card'
    
        const img = document.createElement('img')
        img.src = imagePath
        img.className = 'şirket-img'
    
        card.appendChild(img)
        sirketContainer.appendChild(card)
    } else {
        const card = document.createElement('div')
        card.className = 'şirket-card d-none'
    
        const img = document.createElement('img')
        img.src = imagePath
        img.className = 'şirket-img'
    
        card.appendChild(img)
        sirketContainer.appendChild(card)
    }
    
})

const width = document.querySelector('.şirket-card').clientWidth
sirketContainer.style.width = `${(width*5)+(20*4)}px`

let secretCards = []

document.getElementById('see-more').addEventListener('click',()=>{
    if(secretCards.length === 0){
        Array.from(document.querySelectorAll('.şirket-card.d-none')).forEach(card => {
            secretCards.push(card)
        })
    }
    document.querySelector('#see-more i').classList.toggle('bi-chevron-down')
    document.querySelector('#see-more i').classList.toggle('bi-chevron-up')
    Array.from(document.querySelectorAll('#see-more span')).forEach(span=>{span.classList.toggle('d-none')})
    secretCards.forEach(card =>{
        card.classList.toggle('d-none')
    })
})

const tostRow = Array.from(document.querySelectorAll('.tost-row'))
const tostMenu = Array.from(document.querySelectorAll('.tost-menü'))

function toggleTost(i) {
    tostMenu.forEach((t,index) => {
        if(t.classList.contains('open')){
            t.classList.remove('open')
            t.classList.add('close')
            const icon = t.querySelector('i')
            icon.classList.remove('bi-chevron-up')
            icon.classList.add('bi-chevron-down')
        } else if(index===i){
            t.classList.remove('close')
            t.classList.add('open')
            const icon = t.querySelector('i')
            icon.classList.remove('bi-chevron-down')
            icon.classList.add('bi-chevron-up')
        }
    })
}

tostRow.forEach((row,index) => {
    row.addEventListener('click', () => {
        toggleTost(index)
    })
})

/*const imagePath = ['sigortalar/traffic.svg','sigortalar/auto-v2.svg','sigortalar/imm.svg','sigortalar/complementhealth-v2.svg','sigortalar/health-v2.svg','sigortalar/travel.svg',
    'sigortalar/dask.svg','sigortalar/traffic.svg',
]

const sigortaContainer = documet.querySelector('.sigorta-container')

/*
imagePath.forEach((imagePath,index)=>{
    if(index<10)
})
*/

/*const card = document.createElement('div')
card.className = 'sigorta-card'

const img = document.createElement('img')
img.src = imagePath
img.className = 'sigorta-img'

card.appendChild(img)
sigortaContainer.appendChild(card) */
