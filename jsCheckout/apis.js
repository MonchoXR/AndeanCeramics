
contentCountry= document.getElementById("inputCountryJS");
contentState= document.getElementById("inputStateChkJS");
contentCity= document.getElementById("inputCityChk");


// let dataPais=[];
let nuevoPais=[];
let nuevoState=[];

var headers = new Headers();
headers.append("X-CSCAPI-KEY", "cW9EZkxnWDRyNmp2RkZ2MUVIU0NGSUZ2eFBibkV6M2pPWVRRWUFhQQ==");

var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
.then(response => response.json())
.then(result => {
    result.forEach(data => {
         let dataPais ={
        nombre: data.name,
        iso2: data.iso2,
        
        }
        nuevoPais.push(dataPais)
        
        let cardCountry = document.createElement("option");  
        cardCountry.innerHTML = `
        <option class="optionJS">${data.name}</option>
        `
        contentCountry.append(cardCountry)

     
    
    });
   
    // let inputCountry =document.getElementById("inputCountryJS")
    contentCountry.onclick=()=>{
        
           
        nuevoPais.forEach((p) =>{ 
            if(p.nombre === contentCountry.value){
              
                let ruta = 'https://api.countrystatecity.in/v1/countries/'+p.iso2+'/states';
                var headers = new Headers();
                headers.append("X-CSCAPI-KEY", "cW9EZkxnWDRyNmp2RkZ2MUVIU0NGSUZ2eFBibkV6M2pPWVRRWUFhQQ==");

                var requestOptions = {
                    method: 'GET',
                    headers: headers,
                    redirect: 'follow'
                };

                fetch(ruta, requestOptions)
                    .then(response => response.json())
                    .then(result =>{
                      
                        contentState.innerHTML=` <option selected="" disabled="" value="">Choose...</option>`;
                        contentCity.innerHTML=` <option selected="" disabled="" value="">Choose...</option>`;
                        result.forEach(data => {

                            let dataState ={
                                nombre: data.name,
                                iso2: data.iso2,
                                }

                                nuevoState.push(dataState)
                            
                           let cardState = document.createElement("option");  
                           cardState.innerHTML = `
                           <option class="optionJS">${data.name}</option>
                           `
                           contentState.append(cardState)
                                                    
                         });

                        //  let inputState =document.getElementById("inputStateChkJS")
                         contentState.onclick=()=>{
                            nuevoState.forEach((s) =>{
                                if(s.nombre === contentState.value){
                     
                                    let ruta = 'https://api.countrystatecity.in/v1/countries/'+p.iso2+'/states/'+s.iso2+'/cities';

                                    var headers = new Headers();
                                    headers.append("X-CSCAPI-KEY", "cW9EZkxnWDRyNmp2RkZ2MUVIU0NGSUZ2eFBibkV6M2pPWVRRWUFhQQ==");

                                    var requestOptions = {
                                        method: 'GET',
                                        headers: headers,
                                        redirect: 'follow'
                                    };
                                    
                                    fetch(ruta, requestOptions)
                                        .then(response => response.json())
                                        .then(result => {


                                            contentCity.innerHTML=` <option selected="" disabled="" value="">Choose...</option>`;
                                            result.forEach(data => {
                    
                                               let cardCity = document.createElement("option");  
                                               cardCity.innerHTML = `
                                               <option class="optionJS">${data.name}</option>
                                               `
                                               contentCity.append(cardCity)
                                             });


                                        })
                                        // .catch(error => console.log('error', error));


                                }

                            })



                         }
                             
                        
                    })
                    // .catch(error => console.log('error', error));

            }
        })
      
    }
   
})


