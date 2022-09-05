// window loading

let loading = document.querySelector(".window_loading");
let containerGlobal = document.querySelector(".container_global");

// menu responsive
let menu_resposive = document.querySelector(".menu_navegation");
let check = document.querySelector("#check");

// show cart
let containerCart = document.querySelector("#checkbtn");
let removeCart = document.querySelector(".barra_cart_products");

setTimeout(() => {
    loading.classList.add("remove");
    loading.classList.remove("add");
    containerGlobal.classList.remove("add_content")
},3000)

check.addEventListener("click", (e) => {
    menu_resposive.classList.toggle("remove_menu");
})

containerCart.addEventListener("click", (e) => {
    removeCart.classList.toggle("remove_cart");
})