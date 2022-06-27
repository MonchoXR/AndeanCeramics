const minimoEnvioGratis = 3000;
const costoEnvio = 100;

class Carrito {
	constructor(usuario = "Martin", articulos = []) {
		this.usuario = usuario;
		this.articulos = this._recuperarCarritoArticulos() || articulos;
        this.preciosubTotal = this._recuperarCarritoSubTotal() || 0;
        this.precioTotal =  this._recuperarCarritoTotal() ||  0;
        
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
     
        this.preciosubTotal = this.preciosubTotal +articulo.precio;
        this._saveCarritoStorage();

	}
	
	deleteProductToCart(articulo) {

		const index = this.articulos.findIndex((a) => a.id === articulo.id  );

        this.articulos[index].cantidad =0;
		this.articulos.splice(index, 1);

       
       
        this.preciosubTotal = this._calcularSubTotal(this.articulos)
        this._saveCarritoStorage();


        // localStorage.setItem("carrito",JSON.stringify(this.articulos));

       
	}

    addCantToCart(articulo){

        this.articulos.forEach((e)=>{ 
            if(e.id == articulo.id){
             e.cantidad++;

            let cant = document.getElementsByClassName("prd_cantJs") 
         
             let index = this.articulos.findIndex((a)=> a.id == articulo.id)
          
             cant[index].innerText =  `${e.cantidad} x `;

            }

        })

        /*para Carrito*/
        console.log("voy sumando: " +this._calcularSubTotal(this.articulos) );
        this.preciosubTotal = this._calcularSubTotal(this.articulos) 

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

    _recuperarCarritoSubTotal() {
		if(localStorage.getItem("carrito")!=null){
            this.preciosubTotal=(JSON.parse(localStorage.getItem("carrito")).preciosubTotal);
        
        }
		return this.preciosubTotal;
	}

    _recuperarCarritoTotal() {
		if(localStorage.getItem("carrito")!=null){
            this.precioTotal=(JSON.parse(localStorage.getItem("carrito")).precioTotal);
        
        }
		return this.precioTotal;
	}

    _saveCarritoStorage() {
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }

    
    _calcularSubTotal(productos) {
		let total = 0;

		productos.forEach((articulo) => {

			total = total + articulo.cantidad* articulo.precio;
		});

		return total;
	}

    // _calcularPrecioTotalXProducto(articulo){


    //     this.precioTotalXProducto = this.preciosubTotal*this.cantidad
    // }

    calcularTotalConEnvío() {
		if( this.preciosubTotal >= minimoEnvioGratis){
            this.precioTotal = this.preciosubTotal;
        }
        else{
            this.precioTotal = this.preciosubTotal + costoEnvio;
        }

        this._saveCarritoStorage();
        return this.precioTotal;

        
	}



}