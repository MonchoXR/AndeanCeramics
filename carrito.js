class Carrito {
	constructor(usuario = "Martin", articulos = []) {
		this.usuario = usuario;
		this.articulos = this._recuperarCarrito() || articulos;
	}
	

    productInCart(idProducto) {
        console.log(this.articulos.some((a) => a.id === idProducto));
        return this.articulos.some((a) => a.id === idProducto);
	}

	addProductToCart(articulo) {	
    
                

    this.articulos.push(articulo);
    // this.articulos=[articulo, ...this.articulos]
    this.articulos.forEach((a)=>{ 
        if(a.cantidad == 0)
        a.cantidad=1;})

        localStorage.setItem("carrito",JSON.stringify(this.articulos));

	}
	
	deleteProductToCart(articulo) {

		const index = this.articulos.findIndex((a) => a.id === articulo.id  );
        console.log("mi index: "+index);

        this.articulos[index].cantidad =0;
		this.articulos.splice(index, 1);
        // localStorage.setItem("carrito",JSON.stringify(this.articulos));
        this._saveCarritoStorage();
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
        this._saveCarritoStorage();

    }
	
	vaciar() {
		this.articulos = []
	}

    _recuperarCarrito() {
		if(localStorage.getItem("carrito")!=null){
            this.articulos=JSON.parse(localStorage.getItem("carrito"));
        
        }
		return this.articulos;
	}

    _saveCarritoStorage() {
        localStorage.setItem("carrito",JSON.stringify(this.articulos));
    }



}