export function printContent(contentHTML, data) {
    let html = "";

    data.forEach(({name, stock, price, image})  => {
        html += `
        <div class="product_card">
           <div class="image_product">
                <img src="${image}" alt="image_product">       
           </div>
           <div class="product_card_information">
                <h2>${name}</h2>
               <p>lorem is a price mothewd write a function that return a string with a value in number</p>
               <p>stock ${stock}</p>
               <p>${price}</p>
            </div>
            <button>add</button>
        </div>
        `
        contentHTML.innerHTML = html;
    })
}