class Carrito {
	constructor(usuario = "Martin", articulos = []) {
		this.usuario = usuario;
		this.articulos = this._recuperarCarritoArticulos() || articulos;
        this.precioTotal = this._recuperarCarritoPrecioTotal() || 0;
	}
	

    validaInCart(idProducto) {
        console.log(this.articulos.some((a) => a.id === idProducto));
        return this.articulos.some((a) => a.id === idProducto);
	}
    

	addProductToCart(articulo) {	

    this.articulos.push(articulo);


    Swal.fire({
        position: 'top',
        icon: 'success',
        title:  articulo.nombre,
        text:'Agregado',
        showConfirmButton: false,
        timer: 1000
      })
    

    this.articulos.forEach((a)=>{ 
        if(a.cantidad == 0)
        a.cantidad=1;})

        console.log(articulo.precio)
     
        this.precioTotal = this.precioTotal +articulo.precio;
        this._saveCarritoStorage();

	}
	
	deleteProductToCart(articulo) {

		const index = this.articulos.findIndex((a) => a.id === articulo.id  );
        console.log("mi index: "+index);

        this.articulos[index].cantidad =0;
		this.articulos.splice(index, 1);

       
       
        this.precioTotal = this._calcularTotal(this.articulos)
        this._saveCarritoStorage();

        let subTotal = document.getElementsByClassName("prod_subTotal") 
 
        subTotal[0].innerText = `$${this.precioTotal}`;


        // localStorage.setItem("carrito",JSON.stringify(this.articulos));

       
	}

    addCantToCart(articulo){

        this.articulos.forEach((e)=>{ 
            if(e.id == articulo.id){
             e.cantidad++;

            let cant = document.getElementsByClassName("prd_cantJs") 
         
             let index = this.articulos.findIndex((a)=> a.id == articulo.id)
          
             cant[index].innerText =  `${e.cantidad} x `;
            //  this.precioTotal = e.precio * e.cantidad;
            
            }

        })

        /*para Carrito*/
        console.log("voy sumando: " +this._calcularTotal(this.articulos) );
        this.precioTotal = this._calcularTotal(this.articulos) 
       
        /*para DOM*/
        let subTotal = document.getElementsByClassName("prod_subTotal") 
        subTotal[0].innerText = ` $${this.precioTotal}`;
        
        this._saveCarritoStorage();

    }
	
	vaciar() {
		this.articulos = []
	}

    _recuperarCarritoArticulos() {
		if(localStorage.getItem("carrito")!=null){
            this.articulos=(JSON.parse(localStorage.getItem("carrito")).articulos);
        
        }
		return this.articulos;
	}

    _recuperarCarritoPrecioTotal() {
		if(localStorage.getItem("carrito")!=null){
            this.precioTotal=(JSON.parse(localStorage.getItem("carrito")).precioTotal);
        
        }
		return this.precioTotal;
	}

    _saveCarritoStorage() {
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }

    
    _calcularTotal(productos) {
		let total = 0;

		productos.forEach((articulo) => {
            console.log("precio del calcular es: "+ articulo.precio);
			total = total + articulo.cantidad* articulo.precio;
		});

		return total;
	}



}