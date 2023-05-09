import { elementFromHTML } from "./index";

let drinks = [
    {
        "name":"Brewed Tea",
        "type":"tea",
        "price": {"cold" : 18,"hot" : "15"},
        "image": "./images/brewed-tea.png",
        "description": "Black tea"
    },
    {
        "name":"Peach",
        "type":"tea",
        "price": {"cold" : 18,"hot" : "15"},
        "image": "./images/peach-tea.png",
        "description": "Black tea with peach flavour"
    },
    {
        "name":"Earlgrey",
        "type":"tea",
        "price": {"cold" : 18,"hot" : "15"},
        "image": "./images/earlgrey-tea.png",
        "description": "Tea blend with oil of bergamot"
    },
    {
        "name":"Chamomile",
        "type":"tea",
        "price": {"cold" : 18,"hot" : "15"},
        "image": "./images/chamomile-tea.png",
        "description": "Tea blend with the aroma of chamomile flowers"
    },
    {
        "name":"Rose and Roselle",
        "type":"tea",
        "price": {"cold" : 18,"hot" : "15"},
        "image": "./images/rose-and-roselle-tea.png",
        "description": "Tea blend with the aroma of rose and rosella flowers"
    },
    {
        "name":"Mixed Fruit Oolong",
        "type":"tea",
        "price": {"cold" : 18,"hot" : "15"},
        "image": "./images/mixed-fruit-oolong-tea.png",
        "description": "Tea blend with the taste and aroma for mixed fruits"
    },
    {
        "name":"Cookies and Cream",
        "type":"frappe",
        "price": 30,
        "image": "./images/cookies-and-cream-frappe.png",
        "description": "Iced blended cookies and cream with whipped cream"
    },
    {
        "name":"Caramel",
        "type":"frappe",
        "price": 30,
        "image": "./images/caramel-frappe.png",
        "description": "Iced blended caramel and milk with whipped cream"
    },
    {
        "name":"Avocadoffee",
        "type":"frappe",
        "price": 30,
        "image": "./images/avocadoffee-frappe.png",
        "description": "Iced blended avocado and milk coffee with whipped cream"
    },
    {
        "name":"Matcha",
        "type":"frappe",
        "price": 30,
        "image": "./images/matcha-frappe.png",
        "description": "Iced blended japanese matcha and milk with whipped cream"
    },
    {
        "name":"Chocolate",
        "type":"frappe",
        "price": 30,
        "image": "./images/chocolate-frappe.png",
        "description": "Iced blended chocolate and milk with whipped cream"
    },
    {
        "name":"Matcha",
        "type":"milk",
        "price": 25,
        "image": "./images/matcha-milk.png",
    },
    {
        "name":"Sakura",
        "type":"milk",
        "price": 25,
        "image": "./images/sakura-milk.png",
    },
    {
        "name":"Chocolate",
        "type":"milk",
        "price": 25,
        "image": "./images/chocolate-milk.png",
    },
    {
        "name":"Es Loreng",
        "type":"indonesia",
        "price": 25,
        "image": "./images/es-loreng-indonesia.png",
    },
    {
        "name":"Kopi Pandan",
        "type":"indonesia",
        "price": 25,
        "image": "./images/kopi-pandan-indonesia.png",

    },
    {
        "name":"Cendolita",
        "type":"indonesia",
        "price": 25,
        "image": "./images/cendolita-indonesia.png",
    },
]

function menu() {
    const content = document.getElementById('content')
    const menuHTML = elementFromHTML(`
        <div class="menu">
            <div class="tea">
                <div class="menu-heading">
                    <div>TEA</div>
                    <div class="menu-type">
                        <div>Hot</div>
                        <div>Cold</div>
                    </div>
                </div>
                <div class="menu-choice">
                    <div id="tea-photo" class="menu-photo"><img src="${require('./images/chamomile-tea.png')}"></div>
                    <div class="menu-price" data-tea></div>
                </div>
            </div> 

            <div class="frappe">
                <div class="menu-heading">
                    <div>FRAPPE</div>
                    <div class="menu-type">
                        <div>Cold</div>
                    </div>
                </div>
                <div class="menu-choice">
                    <div id="frappe-photo" class="menu-photo"><img src="${require('./images/caramel-frappe.png')}"></img></div>
                    <div class="menu-price" data-frappe></div>
                </div>
            </div>

            <div class="milk">
                <div class="menu-heading">
                    <div>MILK SERIES</div>
                </div>

                <div class="menu-choice-2" data-milk></div>
            </div>

            <div class="indonesia">
                <div class="menu-heading">
                    <div>#MILIKINDONESIA</div>
                </div>

                <div class="menu-choice-2" data-indonesia></div>
            </div>
        </div>
    `
    )
    content.appendChild(menuHTML)
    listTeaMenu()
    listFrappeMenu()
    listSecondMenu("milk")
    listSecondMenu("indonesia")
}

function listTeaMenu(){
    const teaData = document.querySelector('[data-tea]')

    //New array with drink type
    const drinkType = drinks.filter(obj => {
        return obj.type == "tea"
    })

    //For each Drink, create divs (name, price) and add it to menu name
    drinkType.forEach(element => outputDrinks(element))

    function outputDrinks(element){
        const drinkHTML = elementFromHTML(`
            <div class="drink-name">
                <div>${element.name}</div>
                <div class="price">
                    <div class="hot">${element.price.hot}</div>
                    <div class="cold">${element.price.cold}</div>
                </div>
            </div>
        `)
        teaData.appendChild(drinkHTML)
    }
}

function listFrappeMenu(){
    const frappeData = document.querySelector('[data-frappe]')

    //New array with drink type
    const drinkType = drinks.filter(obj => {
        return obj.type == "frappe"
    })

    //For each Drink, create divs (name, price) and add it to menu name
    drinkType.forEach(element => outputDrinks(element))

    function outputDrinks(element){
        const drinkHTML = elementFromHTML(`
            <div class="drink-name">
                <div>${element.name}</div>
                <div class="price">
                    <div class="cold">${element.price}</div>
                </div>
            </div>
        `)
        frappeData.appendChild(drinkHTML)
    }
}

function listSecondMenu(type){
    const menuProduct = document.querySelector(`[data-${type}]`)

    const drinkType = drinks.filter(obj => {
        return obj.type == type
    })
    //For each Drink, create divs (name, price) and add it to menu name
    drinkType.forEach(element => outputDrinks(element))

    function outputDrinks(element){
        const drinkHTML = elementFromHTML(`
            <div class="drink-container">
                <img src='${require(`${element.image}`)}'></img>
                <div class="drink-name">${element.name}</div>
                <div class="price">${element.price}</div>
            </div>
        `)
        menuProduct.appendChild(drinkHTML)
    }
}

//Popup menu item
function openMenu(){

}

export {
    menu, drinks
}