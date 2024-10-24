window.addEventListener('scroll' , function() {
    const scrollPosition = this.window.scrollY
    const windowHeight = this.window.innerHeight

    const parallaxText1 = document.getElementById ('parallax-text-1')
    if (scrollPosition > 50) {
        parallaxText1.style.transform = `translateY(-${scrollPosition}px)`
        parallaxText1.style.opacity = `${1-scrollPosition/300}`
    }
});