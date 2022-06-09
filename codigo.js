
let arrayProductos = [
{id:1, nombre: "Black Bag", precio: 80, cantidad:3, img:"../Assets/catalogo/Bag600x600.jpg" },
{id:2, nombre: "Coffe Cup", precio: 30, cantidad:2, img:"../Assets/catalogo/CoffeCup600x600.jpg" },
{id:3, nombre: "Leather Watch", precio: 130, cantidad:5, img:"../Assets/catalogo/HandWatch600x600.jpg" }];

// console.log(arrayProductos[0].id);
 
class Carrito
{
    constructor(id, nombre, precio, cantidad, img){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.img = img;
    }
}

const carritoLista =[];

let botonCard=document.getElementsByClassName("prod_addCart");
const cabeceraArticulo=document.getElementsByClassName("primerArticuloJS");

const eliminarItem = document.getElementsByClassName("eliminarCarrito");



botonCard[0].onclick=()=>{

    carritoLista.push(new Carrito(arrayProductos[0].id, arrayProductos[0].nombre, arrayProductos[0].precio, arrayProductos[0].cantidad,  arrayProductos[0].img));
    console.log(carritoLista);
   
    const new_prodCajaDetalle = document.createElement('div');
    new_prodCajaDetalle.innerHTML +=`
    <div class="prod_cajaDetalle">
        <div class="prod_imgCompra">
            <img src=${arrayProductos[0].img} class="" alt="Catalago3">
            <div class="eliminarCarrito"> x </div>
        </div>
        <div>
         <span>${arrayProductos[0].nombre}</span></br>
         <span>${arrayProductos[0].cantidad} x $${arrayProductos[1].precio}</span>
         
         </div>
    </div>  
    `
    cabeceraArticulo[0].appendChild(new_prodCajaDetalle);


    
    eliminarItem[0].onclick=()=>{ cabeceraArticulo[0].removeChild(new_prodCajaDetalle);
      new_prodCajaDetalle.innerHTML =``;   
        }

   
}



botonCard[1].onclick=()=>{

    const new_prodCajaDetalle = document.createElement('div');
    new_prodCajaDetalle.innerHTML +=`
    <div class="prod_cajaDetalle">
        <div class="prod_imgCompra">
            <img src=${arrayProductos[1].img} class="" alt="Catalago3">
            <div class="eliminarCarrito"> x </div>
        </div>
        <div>
         <span>${arrayProductos[1].nombre}</span></br>
         <span>${arrayProductos[1].cantidad} x $${arrayProductos[1].precio}</span>
         
         </div>
    </div>  
    `
    cabeceraArticulo[0].appendChild(new_prodCajaDetalle);

           
    eliminarItem[1].onclick=()=>{ cabeceraArticulo[0].removeChild(new_prodCajaDetalle);
        new_prodCajaDetalle.innerHTML =``;   
          }
}



// botonCard[2].onclick=()=>{
//     //   alert("Hiciste click en el boton");
    
//     new_prodCajaDetalle.innerHTML +=`
//     <div class="prod_cajaDetalle">
//         <div class="prod_imgCompra">
//             <img src="${arrayProductos[2].img}" class="" alt="Catalago3">
//             <div class="eliminarCarrito"> x </div>
//         </div>
//         <div>
//          <span>${arrayProductos[2].nombre}</span></br>
//          <span>${arrayProductos[2].cantidad} x $${arrayProductos[2].precio}</span>
//          <div class="eliminarCarrito"> x </div>
//          </div>
//     </div>  
//     `
//     prod_cajaDetalle[0].appendChild(new_prodCajaDetalle);
//     // eliminarItem[2].onclick=()=>{ prod_cajaDetalle[0].removeChild(new_prodCajaDetalle) }
// }


function deleteUser(userId ){
    const index = carritoLista.findIndex((user) => user.id === arrayProductos[0].id);
    carritoLista.splice(index, 1);
    new_prodCajaDetalle.innerHTML =``; 
}

