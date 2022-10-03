//? IMPORTACIONES
import product from './data.js'
import printProducts from './printUsers.js'

// ?SELECTORES 

// CONTENT LOADING SCREEN AND CONTENT BODY
let loader = document.querySelector("#loading");
let globalContent = document.querySelector("#root");

// CONTENT BODY (PRODUCTS)
let contentBody = document.querySelector(".content_body")

// CONTENT MENU(FOOD), CARTSHOPPING AND MENU CART
let contentCart = document.querySelector(".menu_cart")
let contentMenu = document.querySelector(".menu_food")
let cartLogo = document.querySelector(".bxs-cart-add")
let cartTotal = document.querySelector(".menu_total")

// CONTENT TOTAL PRODUCTS

// CONTENT BUTTONS OF OPTIONS OF THE PRODUCTS IN THE CART SHOPPING

// ?SETTIMEOUT AND EVENTS 
let cart = {}

// SETTIMEOUT OF LOADING SCREEN
setTimeout(() => {
    loader.classList.add("delete_window_loader")
    loader.classList.remove("window_loader")
    globalContent.classList.add("show_content")
    globalContent.classList.remove("content")
}, 5000)

// EVENT OF CART (SHOW OF CARTSHOPPING)
cartLogo.addEventListener('click', () => {
    contentMenu.classList.toggle("menu_food_show")
})

// EVENT ADD A PRODUCT TO CARTSHOPPING


contentBody.addEventListener('click', (e) => {
    if (e.target.classList.contains("btn_add")) {
        const idFood = +e.target.parentElement.id

        const findFood  = product.find((item) => idFood === item.id)
        if (cart[idFood]) {
            cart[idFood].amount++
            if (cart[idFood].amount > cart[idFood].stok) {
                alert("se agoto el producto master")
                cart[idFood].amount = cart[idFood].stok
            }
        } else {
            cart[idFood] = findFood
            cart[idFood].amount = 1
        }
        printCart()
    }
}
)

// 
contentCart.addEventListener('click', (e) => {
    if(e.target.classList.contains("bx-plus-medical")) {
        const idFood = +e.target.parentElement.id
        cart[idFood].amount++
        if (cart[idFood].amount > cart[idFood].stok) {
            alert("el producto llego a su limite")
            cart[idFood].amount = cart[idFood].stok
        }

    }
    if(e.target.classList.contains("bx-minus")) {
        const idFood = +e.target.parentElement.id
        cart[idFood].amount--
        if (cart[idFood].amount === 0) {
            let questing = confirm ("¿desea eliminar?")
            if (questing == true) {
                delete cart[idFood]
            }
        }
    }

    if(e.target.classList.contains("bx-trash")) {
        const idFood = +e.target.parentElement.id
        delete cart[idFood]
    }
    printCart()

})

function printCart() {
    let html = ""
    let sum = 0
    const arrayCart = Object.values(cart)
    let total = ""

    arrayCart.forEach(({id, name, image, amount, price}) => {
        html += `
        <div class="item_cart">
                <div class="item_cart-img">
                    <img src="${image}" alt="">
                </div>

                <h4 class="item_cart-title">${name}</h4>
                <div class="item_cart-options" id="${id}">
                    <i class='bx bx-minus'></i>
                    <i class='bx bx-plus-medical'></i>
                    <i class='bx bx-trash'></i>
                    <span >total : ${amount * price}</span>
                </div>
            </div>
        `
         total = sum+= amount * price
    })
    cartTotal.textContent = `Total: ${total} MNX`
    contentCart.innerHTML = html
}

// 








// llamada de funciones

printProducts(product, contentBody)

