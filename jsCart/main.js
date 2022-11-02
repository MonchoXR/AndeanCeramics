let carrito = new Carrito();

contenedorCart = document.getElementById("cart_contJS");
contPrimeraSecc = document.getElementById("cart_primeraSeccJS");
contentTable = document.getElementById("tbodyJS");

contentTable2 = document.getElementById("tbody2JS");
contentMitabla3 = document.getElementById("tablaidjss3");
contentHilo2 = document.getElementById("mihiloJs");

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
    // console.log("obtengo del storaga");
    var mql = window.matchMedia('(max-width: 992px)');
    
    for(let cart of carrito.articulos){

        let card = document.createElement("tr")
        let card2 = document.createElement("tbody")


        card.innerHTML =`   
               
        <th scope="row " ><div  class="prd_cuadroBtnX"><button id="eliminarCart${cart.id}" class=" cartEliminaCss"> X </button></div></th>
        <td ><img src=${cart.img} class="cartImagen" alt="Catalago3"> </td>
        <td  class="prd_cuadro"> <div  class="prd_cuadro"> ${ cart.nombre}</div></td>
        <td  class="prd_cuadro"> <div  class="prd_cuadro"> $${cart.precio} </div></td>
        <td  class="prd_cuadro"><div  class="prd_cuadro"> ${cart.cantidad} </div></td>
        <td  class="prd_cuadro"><div  class="prd_cuadro">  ${(cart.cantidad*cart.precio)} </div></td>

         `   
        
           
        let a = document.createElement("div");
        a = card.children[0].children[0].innerHTML
        card2.innerHTML =`
                 
                    <tr> 
                        <td><div  class="">${a}</button></div></td>
                        <td></td>      
                     </tr> 
                     <tr>          
                        <td>Product</td>
                        <td> ${ cart.nombre}</td>      
                     </tr>    
                     <tr>          
                        <td>Price</td>
                        <td>$${cart.precio}</td>      
                    </tr>
                     <tr>          
                        <td>Quantity</td>
                        <td>${cart.cantidad}</td>      
                     </tr>
                    
            
                    `  
                    contentMitabla3.append(card2);
                    quitarDelCard(cart, card, card2);
                    contentMitabla3.style.display ="hidden"; 

                    

           function render(e) {
            
     
                if (e.matches) {

                    contentHilo2.style.display="none";
                    contentTable.style.display="none";
                    contentMitabla3.style.display='';

                    // quitarDelCard(cart, card, card2);
                   }
              
       
               else{
        
                contentHilo2.style.display='';
                contentTable.style.display='';
                contentMitabla3.style.display="none"; 

                // quitarDelCard(cart, card, card2);
                
         
           
                   }
                
                   
            }

                        
            render(mql);
            mql.addEventListener('change',render);
            
            contentTable.append(card);
            quitarDelCard(cart, card, card2);
            



         subtTotal.innerText =`$${carrito.preciosubTotal}`;
         shipTotal.innerText =  `$${costoEnvio}`;
         precioTotal.innerText =`$${carrito.calcularTotalConEnvío()}`;
 
 
         if(carrito.preciosubTotal<1){
            contenedorCart.innerHTML="CARRITO VACIO";
         }
         
        console.log(carrito);
    }

}    



function quitarDelCard(producto, cards,card2){
    let btnEliminar = document.getElementById(`eliminarCart${producto.id}`)
    
    btnEliminar.onclick=()=> 
    {
    console.log("mi cartID: "+producto.id)
    carrito.deleteProductToCart(producto);
    contentTable.removeChild(cards);   
    contentMitabla3.removeChild(card2); 

    subtTotal.innerText = `$${carrito.preciosubTotal}`;
    shipTotal.innerText = `$${costoEnvio}`;
    precioTotal.innerText =`$${carrito.calcularTotalConEnvío()}`;

    if(carrito.preciosubTotal<1){
        contenedorCart.innerHTML="CARRITO VACIO";
    }
  

    
    }


};


 console.log(carrito);



      

       
