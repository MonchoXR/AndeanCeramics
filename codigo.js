
let arrayProductos = [
{id:1, nombre: "Black Bag", precio: 80, cantidad:3, img:"../Assets/catalogo/Bag600x600.jpg" },
{id:2, nombre: "Coffe Cup", precio: 30, cantidad:2, img:"../Assets/catalogo/CoffeCup600x600.jpg" },
{id:1, nombre: "Leather Watch", precio: 130, cantidad:5, img:"../Assets/catalogo/HandWatch600x600.jpg" }];


 
let botonCard=document.getElementsByClassName("prod_addCart");
const prod_cajaDetalle=document.getElementsByClassName("primerArticuloJS");
const new_prodCajaDetalle = document.createElement('div');
const eliminarItem = document.getElementsByClassName("eliminarCarrito");
botonCard[0].onclick=()=>{

    
    new_prodCajaDetalle.innerHTML +=`
    <div class="prod_cajaDetalle">
        <div class="prod_imgCompra">
            <img src="${arrayProductos[0].img}" class="" alt="Catalago3">
            <div class="eliminarCarrito"> x </div>
         </div>
        <div>
         <span>${arrayProductos[0].nombre}</span></br>
         <span>${arrayProductos[0].cantidad} x $${arrayProductos[0].precio}</span>
        
         </div>
    </div>  
    `
    prod_cajaDetalle[0].appendChild(new_prodCajaDetalle);

   
    eliminarItem[0].onclick=()=>{ prod_cajaDetalle[0].removeChild(new_prodCajaDetalle);
      new_prodCajaDetalle.textContent =``;   
        }
}

botonCard[1].onclick=()=>{

    new_prodCajaDetalle.innerHTML +=`
    <div class="prod_cajaDetalle">
        <div class="prod_imgCompra">
            <img src="${arrayProductos[1].img}" class="" alt="Catalago3">
            <div class="eliminarCarrito"> x </div>
        </div>
        <div>
         <span>${arrayProductos[1].nombre}</span></br>
         <span>${arrayProductos[1].cantidad} x $${arrayProductos[1].precio}</span>
         
         </div>
    </div>  
    `
    prod_cajaDetalle[0].appendChild(new_prodCajaDetalle);
    // eliminarItem[1].onclick=()=>{ prod_cajaDetalle[0].removeChild(new_prodCajaDetalle) }
}



botonCard[2].onclick=()=>{
    //   alert("Hiciste click en el boton");
    
    new_prodCajaDetalle.innerHTML +=`
    <div class="prod_cajaDetalle">
        <div class="prod_imgCompra">
            <img src="${arrayProductos[2].img}" class="" alt="Catalago3">
            <div class="eliminarCarrito"> x </div>
        </div>
        <div>
         <span>${arrayProductos[2].nombre}</span></br>
         <span>${arrayProductos[2].cantidad} x $${arrayProductos[2].precio}</span>
         <div class="eliminarCarrito"> x </div>
         </div>
    </div>  
    `
    prod_cajaDetalle[0].appendChild(new_prodCajaDetalle);
    // eliminarItem[2].onclick=()=>{ prod_cajaDetalle[0].removeChild(new_prodCajaDetalle) }
}



