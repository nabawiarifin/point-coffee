import './style.css';
const header = document.createElement('header')
const div = document.createElement('div')
const button = document.querySelectorAll('button')

document.body.appendChild(header)
document.body.appendChild(div)
div.setAttribute('id', 'content')

const content = document.getElementById('content')

const mainHeader = (() => {
    const header = document.querySelector('header')
    const headerHTML = elementFromHTML(`
        <div class="header-container">
            <div id="image-header"></div>
            <ul>
                <li><button class="header-button">Home</button></li>
                <li><button class="header-button">Menu</button></li>
                <li><button class="header-button">Contact</button></li>
            </ul>
        </div>
    `)
    header.appendChild(headerHTML)
})();

const headerPress = (() => {
    const button = document.getElementsByClassName('header-button')

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', () => button[i].innerHTML)
    }

})();

function elementFromHTML(html) {
    const template = document.createElement('template')

    template.innerHTML = html.trim()

    return template.content.firstElementChild
}


