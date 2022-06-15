class Producto {
	constructor(id,nombre,precio, cantidad, img) {
		this.id = id; 
		this.nombre = nombre;
        this.precio =  precio;
		this.cantidad = parseInt(cantidad);
		this.img = img;
	}
}


class Carrito {
	constructor(usuario = "Martin",articulos = []) {
		this.usuario = usuario
		this.articulos = articulos
	}
	
	addItem(articulo) {	
   
     
        // console.log(this.articulos);
        const encuentra = this.articulos.some((e)=> e.id === articulo.id);
        if(encuentra){
            
            this.articulos.forEach((e)=>{ 
                if(e.id == articulo.id){
                 e.cantidad++;

                let cant = document.getElementsByClassName("prd_cant") 
             
                 let index = this.articulos.findIndex((i)=> i.id == articulo.id)
              
                 cant[index].innerText =  e.cantidad;
                }

            })
   
        }
        else{
          
            this.articulos.push(articulo);

            this.articulos.forEach((num)=>{ 
                if(num.cantidad == 0)
                num.cantidad=1;})


                      

        let div2 = document.createElement("div")
        div2.classList.add("prod_cajaDetalle");

            div2.innerHTML +=`
     
            <div class="prod_imgCompra">
                <img src=${articulo.img} class="" alt="Catalago3">
                <div id="eliminarCarrito${articulo.id}"> x </div>
            </div>
            <div>
                <span>${ articulo.nombre}</span></br>
                <span class="prd_cant">${articulo.cantidad}</span> <span>x $${articulo.precio}</span>
            </div>
   
          `    
     
         cabecera.append(div2);
  
 
        
        /**evento eliminar */  
        let delbtn = document.getElementById(`eliminarCarrito${articulo.id}`)

        delbtn.onclick=()=> 
        {
            carrito.removeItem(articulo);
            cabecera.removeChild(div2);

            
            
        console.log(delbtn.parentElement.parentElement.children[1].children[2].innerText);
        // delbtn.parentElement.parentElement.children[1].children[2].innerText = 0;
        // conta=0;
    


            console.log(carrito);
         }
              
     }
        
    

	}
	
	removeItem(articulo) {

		const index = this.articulos.findIndex((a) => a.id === articulo.id);
		this.articulos.splice(index, 1);

        
	}
	
	vaciar() {
		this.articulos = []
	}

}

let carrito = new Carrito()


// if(localStorage.getItem("carrito")!=null){
//     carrito.articulo=JSON.parse(localStorage.getItem("carrito"));
   
// }


let productos = []
productos.push(new Producto(0,"kero", 40,0,"../Assets/catalogo/kero2.png"))
productos.push(new Producto(1,"Coffe Cup", 40,0,"../Assets/catalogo/CoffeCup600x600.jpg"))
productos.push(new Producto(2,"Leather Watch",40,0,"../Assets/catalogo/HandWatch600x600.jpg"))


console.log(productos)

let seccion = document.querySelector(".row_cat_prod") //me toma solo el primer elemento que coincidad
let cabecera = document.querySelector(".primerArticuloJS") 

// console.log(seccion)


for (let producto of productos) {
	let div = document.createElement("div")
    div.classList.add("col_cat_prod")

    div.innerHTML =`
        <div class="prod_marco">
            <div class="prod_img">
               <a href="bag.html">
                <img src="${producto.img}" class=" " alt="Catalago1">
                <div class="prod_quickView">View 3D</div>
                <div class="sale_produc">sale!</div>
               </a>
            </div>
  
            <h5 class=" text-center "> ${producto.nombre}</h5>
            <div class="prod_cart">
                <div class="prod_price">
                    <div class="prod_priceBefore">
                     $60.00
                    </div>
                    <div class="prod_priceCurrently">
                     ${producto.precio}
                    </div>
                </div>
                <button class="prod_addCart">
                Add To Cart
                </button >
            </div>
        </div>
 
    `
	seccion.append(div);

}

 let cards = document.getElementsByClassName("prod_addCart");

   // Boton de agregar

for (let i = 0; i < cards.length; i++) {
         
    cards[i].onclick = () => {

        carrito.addItem(productos[i]);
        console.log(carrito);         
   

              
     }
    
    }


