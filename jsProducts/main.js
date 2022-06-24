let productos = [
	{
		
		id: 0,
        nombre: "Kero",
        precio: 650,
        cantidad:0,
		img: "../Assets/catalogo/kero2.png",
	
	},
	{
		id: 1,
        nombre: "Coffe Cup",
        precio: 40,
        cantidad:0,
		img: "../Assets/catalogo/CoffeCup600x600.jpg",
	},
	{   
        id: 2,
		nombre: "Leather Watch",
        precio: 650,
        cantidad:0,
		img: "../Assets/catalogo/HandWatch600x600.jpg",

	},

    {   
        id: 3,
		nombre: "Leather Watch",
        precio: 350,
        cantidad:0,
		img: "../Assets/catalogo/HandWatch600x600.jpg",

	},

    {   
        id: 5,
		nombre: "Leather Watch",
        precio: 350,
        cantidad:0,
		img: "../Assets/catalogo/HandWatch600x600.jpg",

	},

    {   
        id: 6,
		nombre: "Leather Watch",
        precio: 350,
        cantidad:0,
		img: "../Assets/catalogo/HandWatch600x600.jpg",

	},


    
];


let carrito = new Carrito()


let seccion = document.querySelector(".row_cat_prod") //me toma solo el primer elemento que coincidad
let contenedor = document.querySelector(".primerArticuloJS") 
let contenedor2 = document.querySelector(".ContenedorMiniCart")
let prodMiniCart = document.querySelector(".prodMiniCart")
          

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


const listarCards = (productos) => {

    let BtnAddCart = document.getElementsByClassName("prod_addCart")

    for (let i = 0; i < BtnAddCart.length; i++) {

        BtnAddCart[i].onclick = () => {
            createCard(productos[i]);
        }
    }
    
};


const createCard = (producto) => {


    if (!carrito.productInCart(producto.id)) {
    
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
                <span class="prd_cant">${producto.cantidad}</span> <span>x $${producto.precio}</span>
            </div>
          `      
            contenedor.append(card);
            quitarDelCard(producto, card);


            let prodMiniCart = document.querySelector(".prodMiniCart")
          
            prodMiniCart.innerHTML =`
            <button class="prdViewCart" onclick="document.location='cart.html'"> View Cart </button>
            <button class="prdViewCheckOut">CheckOut</button>
            `
            contenedor2.append(prodMiniCart);

            }

        else{

            carrito.addCantToCart(producto);            
         
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
    console.log(carrito);
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
            <span>${ cart.nombre}</span></br>
            <span class="prd_cant">${cart.cantidad}</span> <span>x $${cart.precio}</span>
        </div>
      `      
        contenedor.append(card);
        quitarDelCard(cart, card);
        listarCards(productos);

    
        prodMiniCart.innerHTML =`
        <button class="prdViewCart" onclick="document.location='cart.html'"> View Cart </button>
        <button class="prdViewCheckOut">CheckOut</button>
        `
        contenedor2.append(prodMiniCart);

    }

          
}

listarCards(productos);

console.log(carrito)