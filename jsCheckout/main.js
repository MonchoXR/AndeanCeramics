let carrito = new Carrito();

contTblChk = document.getElementById("chk_tbody");

subtTotal = document.getElementById("check_subTotalJS");
shipTotal = document.getElementById("check_shipJS");
precioTotal = document.getElementById("check_precioTotal");

if (carrito.preciosubTotal < 1) {
    contenedorCart.innerHTML = "CARRITO VACIO";
} else {
    listarCarts();

}


function listarCarts() {
    console.log("obtengo del storagaparaCheckou");
    for (let cart of carrito.articulos) {
        let card = document.createElement("tr");
        card.innerHTML = `
        <tr>          
             <td>${cart.nombre}*${(cart.cantidad)}</td>
             <td>${cart.cantidad*cart.precio}</td>      
        </tr>
       `

        contTblChk.append(card);

        subtTotal.innerText =`$${carrito.preciosubTotal}`;
        shipTotal.innerText =  `$${costoEnvio}`;
        precioTotal.innerText =`$${carrito.calcularTotalConEnvío()}`;
    

    }


}
console.log(carrito);