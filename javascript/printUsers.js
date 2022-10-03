

function printProducts(data, cotentHTML) {
    let html = ""

    data.forEach(element => {
        html += `
        <div class="card" id =${element.id}>
        <div class="card_img">
            <img src=${element.image}>
        </div>
        <div class="card_information">
            <h2>${element.name}</h2>
            <h4>Stock : ${element.stok}</h4>
            <p><h4>Description:</h4> ${element.description}</p>
            <p>${element.price}MNX</p>
        </div>
        <button class="btn_add">Agregar </button>
    </div>
        `
    });

    cotentHTML.innerHTML = html
}

export default printProducts