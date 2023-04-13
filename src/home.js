import { elementFromHTML } from "./index";

function home() {
    const content = document.getElementById('content')
    const homeHTML = elementFromHTML(`
        <div class="home">
            <div class="carousel" data-carousel>
                <ul data-slides>
                    <li class="slide" data-active>
                        <img src=${require('./images/slider-1.jpg')}>
                    </li>
                    <li class="slide">
                        <img src=${require('./images/slider-2.png')}>
                    </li>
                    <li class="slide">
                        <img src=${require('./images/slider-3.jpeg')}>
                    </li>
                </ul>
                <button class="carousel-button left" data-carousel-button="left">&#8678</button>
                <button class="carousel-button right" data-carousel-button="right">&#8680</button>
            </div>
        </div>
    `
    )
    content.appendChild(homeHTML)

    slide()
}

function slide(){
    const buttons = document.querySelectorAll("[data-carousel-button")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "right" ? 1 : -1
            const slides = button
                            .closest("[data-carousel]")
                            .querySelector("[data-slides]")
            
            const activeSlide = slides.querySelector("[data-active]")
            let newIndex = [...slides.children].indexOf(activeSlide) + offset

            if (newIndex < 0) newIndex = slides.children.length -1
            if (newIndex >= slides.children.length) newIndex = 0

            slides.children[newIndex].dataset.active = true
            delete activeSlide.dataset.active
        })  
    })
}

export {
    home
}