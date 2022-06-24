
const form = document.getElementById("form");
form.addEventListener("submit", (e) => handleSubmit(e));

const validation = new window.JustValidate(form);
let datosForm;
let bIsValido;

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
		{
			rule: "email",
			errorMessage: "Inserte email válido",
		},
	])


    .addField("#mensaje", [
		{
			rule: "required",
			errorMessage: "Campo obligatorio",
		},
	
	])
	
	.onSuccess((event) => {

		bIsValido=true;
		console.log("es valido");

		const data = new FormData(form);

		datosForm = Object.fromEntries(data.entries());
	   console.log(datosForm);
	   console.log("mensaje enviado");
		form.reset();
	  })
	
	.onFail(()=>{

		bIsValido=false;
		console.log("false");
	})
	
	;



function handleSubmit (e) {
	e.preventDefault();


};
