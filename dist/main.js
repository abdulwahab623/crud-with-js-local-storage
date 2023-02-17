const selectedRow = null;


//get data from form
// function readData(){
//     var fdata = {};
//     fdata["namee"] = document.getElementById("name").value;
//     fdata["emaill"] = document.getElementById("email").value;
//     fdata["phonee"] = document.getElementById("phone").value;
//      return fdata;
// }
// function readData(){
//     const fdata = {};
//     fdata["namee"] = document.getElementById("name").value;
//     fdata["emaill"] = document.getElementById("email").value;
//     fdata["phonee"] = document.getElementById("phone").value;
//      return fdata;  
// }

 

// if (localStorage.getItem('usersList')=== null){

//     localStorage.setItem ('usersList',JSON.stringify([]));
// } 
// users ek array hai user mai data store rakhny k leay on refresh

//JSON parsing is the process of converting a JSON object in text format 
//to a Javascript object that can be used inside a program.

const  users =JSON.parse(localStorage.getItem('usersList'));

console.log(users)


    const myFormm = document.getElementById('myForm');   
    myFormm.addEventListener('submit', onSubmit);
function onSubmit (e){
    e.preventDefault(); // data rokny k leay
    const nameInput = document.getElementById('name').value ;
    const emailInput = document.getElementById('email').value;
    const phoneInput = document.getElementById('phone').value;
    const passwordInput = document.getElementById('password').value;

//store in array localstorage
   
var user = {
    "name":nameInput,
    "email":emailInput,
    "phone":phoneInput,
    "password":passwordInput
    };  

if (nameInput === '' || emailInput === '' ||  phoneInput === ''||  passwordInput === '') {
   alert("please enter info");
    setTimeout(() => msg.remove(), 2000);
} else {
   users.push(user); 
   // users.push(user);
    localStorage.setItem('usersList', JSON.stringify(users));//this will reset data after refresh 
    alert('sucessfully Register');
    window.location.href = 'login.html';

    
}  
}












