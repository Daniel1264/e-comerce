
function printCart(contentCartHTML) {
    let html = "";
    let cart = {}
    const arrayCart = Object.values(cart)

    arrayCart.forEach(({id, name, image, amount, price}) => {
        html += `
        <div class="item_cart">
                <div class="item_cart-img">
                    <img src="${image}" alt="">
                </div>

                <h4 class="item_cart-title">${name}</h4>
                <div class="item_cart-options" id="${id}">
                <span id="amount">${amount}</span>
                <span>total : ${amount * price}</span>
                <i class='bx bx-minus'></i>
                    <i class='bx bx-plus-medical'></i>
                    <i class='bx bx-trash'></i>
                </div>
            </div>
        `
    })
    contentCartHTML.innerHTML = html;
}

export default printCart