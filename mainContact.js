// const form = document.querySelector("form");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log(e);

// });

const form = document.querySelector("form");
form.addEventListener("submit", (e) => handleSubmit(e));

const validation = new window.JustValidate(form);

let datosForm;



validation
	.addField("#name", [
		{
			rule: "required",
			errorMessage: "Campo obligatorio",
		},

	])

    .addField("#email", [
		{
			rule: "required",
			errorMessage: "Campo obligatorio",
		},
		// {
		// 	rule: "email",
		// 	errorMessage: "Inserte email válido",
		// },
	])


    .addField("#mensaje", [
		{
			rule: "required",
			errorMessage: "Campo obligatorio",
		},
	
	]);


    validation.showSuccessLabels({ "#email": "The email looks good!" });

function handleSubmit (e) {
	e.preventDefault();


    if (!validation.isValid) return (console.log(validation.isValid));
    //sino es valido devuelve el return y queda ahi
    

    const data = new FormData(form);
	datosForm = Object.fromEntries(data.entries());
	console.log(datosForm);
    
    form.reset();
	console.log("mensaje enviado");

};
