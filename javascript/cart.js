let cart = {}

function printCart () {
    const contentCartBody = document.querySelector(".barra_cart_products")

    let html = "";
    let num = 0;

    const arrayCart = Object.values(cart)

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
        <div class="total_cart"> ${parseFloat(amount) * parseFloat(price)} US</div>
    </div>
        `
        const totalCard = document.querySelector(".total_card_products")
        // totalCard.textContent = `total: ${num += parseFloat(amount) * parseFloat(price)} US`;

        if(totalCard) {
            totalCard.textContent = `total: ${num += parseFloat(amount) * parseFloat(price)} US`;
            
        } else {
            totalCard.textContent = 0;
        }

    
    }) 


    contentCartBody.innerHTML = html;

}


export {printCart, cart}