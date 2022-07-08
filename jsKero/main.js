let kero = {
		
		id: 0,
        nombre: "Kero",
        precio: 650,
        cantidad:0,
		img: "../Assets/catalogo/kero2.png",
	
}

let carrito = new Carrito();

let bag_btnJs = document.getElementById("bag_btnJs");

bag_btnJs.onclick = () => {

    if (!carrito.validaInCart(kero.id)) {
    
        carrito.addProductToCart(kero)
    
    }

    else{

        carrito.addCantToCart(kero);   

 
    }
   
console.log(carrito)
}


