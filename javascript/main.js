// IMPORTACION DE MODULOOS
import {dataProducts} from "./dataProducts.js"
import {printContent} from "./printContent.js"
import {printCart, cart} from "./cart.js"

// SELECTORES DE ETIQUETA (CLASE, ID)
 let contentProducts = document.querySelector(".container_products")
 const contentCartBody = document.querySelector(".barra_cart_products")

// FUNCIONES A UTILIZAR

printContent(contentProducts, dataProducts); //Function products

// EVENTOS (CONTENIDO DEL CARRO, AGREGA, RESTAR O ELIMINAR PRODUCTO)

// CONTENIDO DEL CARRO

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

// AGREGAR, RESTAR, ELIMINAR ELEMENTO

contentCartBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("bx-minus")) {
        const idFood = +e.target.parentElement.id;
        cart[idFood].amount--;
    }

    if (e.target.classList.contains("bx-plus-medical")) {
        const idFood = +e.target.parentElement.id;
        cart[idFood].amount++;
    }

    if (e.target.classList.contains("bx-trash")) {
        const idFood = +e.target.parentElement.id;
        delete cart[idFood];
    }

    printCart(contentCartBody);
});