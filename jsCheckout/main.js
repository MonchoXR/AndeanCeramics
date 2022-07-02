let carrito = new Carrito();

contTblChk = document.getElementById("chk_tbody");
contChkTotal = document.getElementById("check_contAll");

subtTotal = document.getElementById("check_subTotalJS");
shipTotal = document.getElementById("check_shipJS");
precioTotal = document.getElementById("check_precioTotal");



let listaPais = []

if (carrito.preciosubTotal < 1) {
    contChkTotal.innerHTML = "CARRITO VACIO";
} else {
    listarCarts();

}




function listarCarts() {
 
    for (let cart of carrito.articulos) {
        let card = document.createElement("tr");
        card.innerHTML = `
        <tr>          
             <td>${cart.nombre}*${(cart.cantidad)}</td>
             <td>${cart.cantidad*cart.precio}</td>      
        </tr>
       `

        contTblChk.append(card);

        subtTotal.innerText =`$${carrito.preciosubTotal}`;
        shipTotal.innerText =  `$${costoEnvio}`;
        precioTotal.innerText =`$${carrito.calcularTotalConEnvío()}`;
    

    }


}




// function ObtenerPaises(){

//     fetch("https://restcountries.com/v3.1/all")

//         .then(resultado =>resultado.json())
//         .then(data =>{
//             // console.log(typeof(data))
//          data.forEach(pais => {
//            let dataPais ={
//                 nombre: pais.name.common,
//                 maps: pais.maps.googleMaps

//            }

//            listaPais.push(dataPais);
    
           
//            let cardCountry = document.createElement("option");
      
//            cardCountry.innerHTML = `
       
//            <option>${pais.name.common}</option>
//            `
//            contentCountry.append(cardCountry)
//          });
       
        
//         })


        

    
// }   

// ObtenerPaises();



const formChk = document.getElementById("formCheckout");
formChk.addEventListener("submit", (e) => handleSubmit(e));


function handleSubmit (e) {
	e.preventDefault();


    formChk.setAttribute("class", "row col-8 needs-validation" );

    if(formChk.checkValidity()){
     
    const datachk = new FormData(formChk);

    let datosFormchk = Object.fromEntries(datachk.entries());
    console.log(datosFormchk )
  
   
    formChk.reset();
  
    }
    else{
        formChk.classList.add('was-validated')

    }

    
};




