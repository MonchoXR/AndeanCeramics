class Carrito {
	constructor(usuario = "Martin",articulos = []) {
		this.usuario = usuario
		this.articulos = articulos
	}
	

    productInCart(idProducto) {
        console.log(this.articulos.some((a) => a.id === idProducto));
        return this.articulos.some((a) => a.id === idProducto);
	}

	addProductToCart(articulo) {	
    
        
    //  localStorage.setItem("carrito",JSON.stringify(carrito.articulos));

    this.articulos.push(articulo);
    this.articulos.forEach((a)=>{ 
        if(a.cantidad == 0)
        a.cantidad=1;})
	}
	
	deleteProductToCart(articulo) {

		const index = this.articulos.findIndex((a) => a.id === articulo.id  );
        console.log("mi index: "+index);
		this.articulos.splice(index, 1);

        
	}

    addCantToCart(articulo){

        this.articulos.forEach((e)=>{ 
            if(e.id == articulo.id){
             e.cantidad++;

            let cant = document.getElementsByClassName("prd_cant") 
         
             let index = this.articulos.findIndex((a)=> a.id == articulo.id)
          
             cant[index].innerText =  e.cantidad;
            }

        })

    }
	
	vaciar() {
		this.articulos = []
	}



}