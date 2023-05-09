import './style.css';
import { home } from "./home";
import { menu, drinks } from "./menu";

const header = document.createElement('header')
const div = document.createElement('div')

document.body.appendChild(header)
document.body.appendChild(div)
div.setAttribute('id', 'content')

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
    menu()
})();

const headerPress = (() => {
    // Loops through header menu to see which navbar selection pressed
    const button = document.getElementsByClassName('header-button')

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', () => headerSelection(button[i].innerHTML))
    }

})();

function elementFromHTML(html) {
    const template = document.createElement('template')

    template.innerHTML = html.trim()

    return template.content.firstElementChild
}

function headerSelection (choice) {
    if (choice == "Home") {
        removeContent()
        home()
    } else if (choice == "Menu") {
        removeContent()
        menu()
    } else {
    }
}

// Switch content
function removeContent () {
    const content = document.getElementById('content')
    if (content.childNodes.length === 0) {
        console.log("No Child")
    } else {
        content.removeChild(content.firstElementChild)
    }
}

export {
    elementFromHTML
}

