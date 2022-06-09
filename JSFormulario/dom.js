const form = document.querySelector("form");
console.log(form);
// form.onclick=("submit",(e)=>{
form.addEventListener("submit",(e)=> handleSubmit(e));