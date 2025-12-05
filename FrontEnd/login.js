const loginApi = "http://localhost:5678/api/users/login";

const form = document.getElementById("login");
form.addEventListener("submit",  handleSubmit);
async function handleSubmit (event){
event.preventDefault();
let user =  {
    email: document.getElementById("email").value,
    password:document.getElementById("password").value
}
console.log(JSON.stringify(user));

let response = await fetch (loginApi,{
  method:"POST",
  headers:{
    "Content-Type": "application/json",
  },
 body : JSON.stringify(user),

});
let result = await response.json();
console.log(result);

}
