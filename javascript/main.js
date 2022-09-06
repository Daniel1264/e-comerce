// IMPORTACION DE MODULOOS
import {dataProducts} from "./dataProducts.js"
import {printContent} from "./printContent.js"
import {printCart, cart} from "./cart.js"

// SELECTORES DE ETIQUETA (CLASE, ID)
 let contentProducts = document.querySelector(".container_products")


// FUNCIONES A UTILIZAR

printContent(contentProducts, dataProducts); //Function products


contentProducts.addEventListener("click", (e) => {
    if(e.target.classList.contains("add_product")) {
        const idFood = +e.target.parentElement.id;

        const findFood = dataProducts.find((item) => item.id === idFood)
        if(cart[idFood]) {
            cart[idFood].amount++
        } else {
            cart[idFood] = findFood;
            cart[idFood].amount = 1;
        }
     printCart() 

    }
})

