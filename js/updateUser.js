const myForm = document.getElementById("myForm");
myForm.addEventListener("submit",formUpdation);
var getLoggedUser = JSON.parse(localStorage.getItem("loggedUser"));
var userDetails = JSON.parse(localStorage.getItem("user"));
insertData();
 function insertData(){
   let fname = document.getElementById("fname");
   let lname = document.getElementById("lname");
   let password = document.getElementById("password");
   for (let i=0; i<userDetails.length; i++){
     if(getLoggedUser.email === userDetails[i].email){
      fname.value = userDetails[i].fname;
      lname.value = userDetails[i].lname;
      password.value = userDetails[i].password;
     }
   }
 }
 function cencelUpdate(){
       myForm.reset();
   location.replace("mydetails.php");
 }

function formUpdation(event){
  event.preventDefault();
  var inputFname = document.getElementById("fname").value;
  var inputLname = document.getElementById("lname").value;
  var inputPassword = document.getElementById("password").value;
  let userUpdateDetails = JSON.parse(localStorage.getItem("user"));
 let arrayUpdate = [];
 for(let i=0; i<userUpdateDetails.length; i++){

   if(userUpdateDetails[i].email === getLoggedUser.email){
     if(inputFname ==="" || inputLname ==="" || inputPassword === "")return;
       userUpdateDetails[i].fname = inputFname;
       userUpdateDetails[i].lname = inputLname;
       userUpdateDetails[i].password = inputPassword;

   }

   arrayUpdate.push(userUpdateDetails[i]);

 }
 localStorage.setItem("user",JSON.stringify(arrayUpdate));
 location.replace("mydetails.php");
}
