let carrito = new Carrito();

contenedorCart = document.getElementById("cart_contJS");
contPrimeraSecc = document.getElementById("cart_primeraSeccJS");
contentTable = document.getElementById("tbody");

subtTotal = document.getElementById("cart_subTotalJS");
shipTotal = document.getElementById("cart_shipJS");
precioTotal = document.getElementById("cart_precioTotal");


if(carrito.preciosubTotal<1){
    contenedorCart.innerHTML="CARRITO VACIO";
}
else{
    listarCarts();

}


function listarCarts() {

// if((localStorage.getItem("carrito")!=null) ){   
    console.log("obtengo del storaga");
    for(let cart of carrito.articulos){

        let card = document.createElement("tr")
        // card.classList.add("prod_cajaDetalle")
        
        card.innerHTML =`
     
        <th scope="row " ><div  class="prd_cuadroBtnX"><button id="eliminarCart${cart.id}" class=" cartEliminaCss"> X </button></div></th>
        <td ><img src=${cart.img} class="cartImagen" alt="Catalago3"> </td>
        <td  class="prd_cuadro"> <div  class="prd_cuadro"> ${ cart.nombre}</div></td>
        <td  class="prd_cuadro"> <div  class="prd_cuadro"> $${cart.precio} </div></td>
        <td  class="prd_cuadro"><div  class="prd_cuadro"> ${cart.cantidad} </div></td>
        <td  class="prd_cuadro"><div  class="prd_cuadro">  ${(cart.cantidad*cart.precio)} </div></td>
      `      
      contentTable.append(card);
        quitarDelCard(cart, card);
      
        subtTotal.innerText =`$${carrito.preciosubTotal}`;
        shipTotal.innerText =  `$${costoEnvio}`;
        precioTotal.innerText =`$${carrito.calcularTotalConEnvío()}`;


        if(carrito.preciosubTotal<1){
           contenedorCart.innerHTML="CARRITO VACIO";
        }
    
        console.log(carrito);
    }

}    



function quitarDelCard(producto, cards){
    let btnEliminar = document.getElementById(`eliminarCart${producto.id}`)
    
    btnEliminar.onclick=()=> 
    {
    console.log("mi cartID: "+producto.id)
    carrito.deleteProductToCart(producto);
    contentTable.removeChild(cards);   

    subtTotal.innerText = `$${carrito.preciosubTotal}`;
    shipTotal.innerText = `$${costoEnvio}`;
    precioTotal.innerText =`$${carrito.calcularTotalConEnvío()}`;

    if(carrito.preciosubTotal<1){
        contenedorCart.innerHTML="CARRITO VACIO";
    }
  

    
    }


};


 console.log(carrito);