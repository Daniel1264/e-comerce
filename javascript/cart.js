let cart = {}

function printCart () {
    const contentCartBody = document.querySelector(".barra_cart_products")
    let html = "";
    let num = 0;

    const arrayCart = Object.values(cart)
 let totalCart = document.querySelector(".total");

    arrayCart.forEach(({name, id, image, amount, price}) => {
        html += `
    <div class="item_cart">
        <div class="item_cart-img">
            <img src="${image}" alt="">
        </div>

        <h4 class="item_cart-title">${name}</h4>
        <h5>$ ${price} US</h5>
        <div class="item_cart-options" id="${id}">
            <i class='bx bx-minus'></i>
            <span id="amount">${amount}</span>
            <i class='bx bx-plus-medical'></i>
            <i class='bx bx-trash'></i>
        </div>
        <div class="total_cart">total: $ ${parseFloat(amount) * parseFloat(price)} US</div>
    </div>
        `
    }) 
    contentCartBody.innerHTML = html;
    totalCart = `<p>total: ${num += parseFloat(amount) * parseFloat(price)}</p>`
}


export {printCart, cart}