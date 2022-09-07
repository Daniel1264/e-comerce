let cart = {}

function printCart () {
    const contentCartBody = document.querySelector(".barra_cart_products")
    let html = "";

    const arrayCart = Object.values(cart)

    arrayCart.forEach(({name, id, image, amount, stock}) => {
        html += `
        <div class="item_cart">
        <div class="item_cart-img">
            <img src="${image}" alt="">
        </div>

        <h4 class="item_cart-title">${name}</h4>
        <div class="item_cart-options" id="${id}">
            <i class='bx bx-minus'></i>
            <span id="amount">${amount}</span>
            <i class='bx bx-plus-medical'></i>
            <i class='bx bx-trash'></i>
        </div>
    </div>
        `
    })
    contentCartBody.innerHTML = html;
}


export {printCart, cart}