let carrito = new Carrito();

contTblChk = document.getElementById("chk_tbody");
contChkTotal = document.getElementById("check_contAll");

subtTotal = document.getElementById("check_subTotalJS");
shipTotal = document.getElementById("check_shipJS");
precioTotal = document.getElementById("check_precioTotal");

contentCountry= document.getElementById("inputCountryJS");

let listaPais = []

if (carrito.preciosubTotal < 1) {
    contChkTotal.innerHTML = "CARRITO VACIO";
} else {
    listarCarts();

}




function listarCarts() {
    console.log("obtengo del storagaparaCheckou");
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
console.log(carrito);

function ObtenerPaises(){

    fetch("https://restcountries.com/v3.1/all")

        .then(resultado =>resultado.json())
        .then(data =>{
         data.forEach(pais => {
           let dataPais ={
                nombre: pais.name.common,
                maps: pais.maps.googleMaps

           }

           listaPais.push(dataPais);
        console.log(pais)
           
           let cardCountry = document.createElement("option");
        //    cadtCountry.classList.add("selected")
           cardCountry.innerHTML = `
       
           <option>${pais.name.common}</option>
           `
           contentCountry.append(cardCountry)
         });
       
        
        })


        

    
}   

ObtenerPaises();
console.log(listaPais)


//NO PUEDO HACER listaPais[0]