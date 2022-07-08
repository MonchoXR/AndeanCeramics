let productos = [
	{
		
		id: 0,
        nombre: "Kero",
        precio: 650,
        cantidad:0,
		img: "../Assets/catalogo/kero600x600.png",
	
	},
	{
		id: 1,
        nombre: "Gallina PortaHuevos",
        precio: 40,
        cantidad:0,
		img: "../Assets/catalogo/Gallina600x600.png",
	},
	{   
        id: 2,
		nombre: "Iglesia Ayacuchana",
        precio: 650,
        cantidad:0,
		img: "../Assets/catalogo/IglesiaAyacuchana.png",

	},
    {   
        id: 3,
		nombre: "Toro de Pucará",
        precio: 650,
        cantidad:0,
		img: "../Assets/catalogo/ToritoDePucará.png",

	},

    {   
        id: 4,
		nombre: "Monataña de Huascarán",
        precio: 650,
        cantidad:0,
		img: "../Assets/catalogo/MontañdeHuascaran.png",

	},

    {   
        id: 5,
		nombre: "Arca de Noe",
        precio: 650,
        cantidad:0,
		img: "../Assets/catalogo/ArcaNoe.png",

	},

    {   
        id: 6,
		nombre: "Lámpara de Angelito",
        precio: 650,
        cantidad:0,
		img: "../Assets/catalogo/AngelitoLamparas.png",

	},

    {   
        id: 7,
		nombre: "Lámpara del Arbol de la Felicidad",
        precio: 650,
        cantidad:0,
		img: "../Assets/catalogo/LámparaArboldelaFelicidad.png",

	},

    {   
        id: 8,
		nombre: "La Virgen de Guadalupe",
        precio: 650,
        cantidad:0,
		img: "../Assets/catalogo/VirgenDeGuadalupe.png",

	},


    






];


let carrito = new Carrito()


let seccion = document.querySelector(".row_cat_prod") //me toma solo el primer elemento que coincidad
let contenedor = document.querySelector(".primerArticuloJS") 
let contenedor2 = document.querySelector(".ContenedorMiniCart")
let prdContSubt = document.querySelector(".prod_contSubtJs")

// let prodMiniCart = document.querySelector(".prodMiniCart")
          

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
  
            <h5 class=" text-center text-size "> ${producto.nombre}</h5>
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


const listarCards = (productos) => {

    let BtnAddCart = document.getElementsByClassName("prod_addCart")

    for (let i = 0; i < BtnAddCart.length; i++) {

        BtnAddCart[i].onclick = () => {
            createCard(productos[i]);
        }
    }
    
};


const createCard = (producto) => {


    if (!carrito.validaInCart(producto.id)) {
    
        carrito.addProductToCart(producto)

        let card = document.createElement("div")
        card.classList.add("prod_cajaDetalle")
   
       
        card.innerHTML =`
     
            <div class="prod_imgCompra">
                <img src=${producto.img} class="" alt="Catalago3">
                <button id="eliminarCarrito${producto.id}" class="prodEliminaCss"> x </button>
            </div>
            <div>
                <span>${ producto.nombre}</span></br>
                <span class="prd_cantJs prod_colorLetraCart">${producto.cantidad} x </span> <span> $${producto.precio}</span>
            </div>
          `      
            contenedor.append(card);
            quitarDelCard(producto, card);


            // let prdContSubt = document.querySelector(".prod_contSubtJs")




            //DOM VIEW VIEW BUTTON
            prdContSubt.innerHTML =`

            <p class="prod_colorLetraCart"><strong>SubTotal:</strong><span  class="prod_subTotal"> $${carrito.preciosubTotal}</span></p>
            <div class="prodMiniCart">  
               <button class="prdViewCart" onclick="document.location='cart.html'"> View Cart </button>
               <button class="prdViewCheckOut" onclick="document.location='checkout.html'">CheckOut</button>
           </div>
           
            `   
            contenedor2.append(prdContSubt);


            }

        else{

            carrito.addCantToCart(producto);   

             //DOM CANTIDAD
            let cant = document.getElementsByClassName("prd_cantJs") 
            let index = carrito.articulos.findIndex((a)=> a.id == producto.id)
            cant[index].innerText =  `${carrito.articulos[index].cantidad} x `;

            //DOM SUB TOTAL
            let subTotal = document.getElementsByClassName("prod_subTotal") 
            subTotal[0].innerText = ` $${carrito.preciosubTotal}`;
         
         
        }
        console.log(carrito);
 
 } 

 

const quitarDelCard = (producto, cards) => {

    let btnEliminar = document.getElementById(`eliminarCarrito${producto.id}`)
    
    btnEliminar.onclick=()=> 
    {
    console.log("mi cartID: "+producto.id)
    carrito.deleteProductToCart(producto);
    contenedor.removeChild(cards); 
      
    let subTotal = document.getElementsByClassName("prod_subTotal") 
 
    subTotal[0].innerText = `$${carrito.preciosubTotal}`;



    if(carrito.preciosubTotal<1){
        prdContSubt.innerHTML="";
    }

      


    }

  


};

if((localStorage.getItem("carrito")!=null) ){   
    console.log("obtengo del storaga");
    for(let cart of carrito.articulos){

        let card = document.createElement("div")
        card.classList.add("prod_cajaDetalle")

        card.innerHTML =`
     
        <div class="prod_imgCompra">
            <img src=${cart.img} class="" alt="Catalago3">
            <button id="eliminarCarrito${cart.id}" class="prodEliminaCss"> x </button>
        </div>
        <div>
            <span class="prod_colorLetraCart">${ cart.nombre}</span></br>
            <span class="prd_cantJs prod_colorLetraCart">${cart.cantidad} x </span> <span>$${cart.precio}</span>
        </div>
      `      
        contenedor.append(card);
        quitarDelCard(cart, card);
        listarCards(productos);

        prdContSubt.innerHTML =`

        <p class="prod_colorLetraCart"><strong>SubTotal :</strong><span  class="prod_subTotal"> $${carrito.preciosubTotal}</span></p>
        <div class="prodMiniCart">  
           <button class="prdViewCart" onclick="document.location='cart.html'"> View Cart </button>
           <button class="prdViewCheckOut"  onclick="document.location='checkout.html'" >CheckOut</button>
       </div>
        `
        contenedor2.append(prdContSubt);

    }

          
}

listarCards(productos);

console.log(carrito)