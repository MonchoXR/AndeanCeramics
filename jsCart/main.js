let carrito = new Carrito()

contenedorCart = document.getElementById("tbody");




console.log(contenedorCart);
if((localStorage.getItem("carrito")!=null) ){   
    console.log("obtengo del storaga");
    for(let cart of carrito.articulos){

        let card = document.createElement("tr")
        // card.classList.add("prod_cajaDetalle")

        card.innerHTML =`
     
        <th scope="row " ><div  class="cuadrar"><button id="eliminarCart${cart.id}" class="prodEliminaCartCss"> X </button></div></th>
        <td><img src=${cart.img} class="cartImagen" alt="Catalago3"> </td>
        <td> <div  class="cuadrar"> ${ cart.nombre}</div></td>
        <td> <div  class="cuadrar"> $${cart.precio} </div></td>
        <td><div  class="cuadrar"> ${cart.cantidad} </div></td>
        <td><div  class="cuadrar"> 40 </div></td>
      `      
      contenedorCart.append(card);
        quitarDelCard(cart, card);
        // listarCards(productos);

    }

    
}

function quitarDelCard(producto, cards){
    let btnEliminar = document.getElementById(`eliminarCart${producto.id}`)
    
    btnEliminar.onclick=()=> 
    {
    console.log("mi cartID: "+producto.id)
    carrito.deleteProductToCart(producto);
    contenedorCart.removeChild(cards);   
    console.log(carrito);
    }


};

