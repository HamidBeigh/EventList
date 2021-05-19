const login_form = document.getElementById("login_form");
login_form.addEventListener("submit",checkIdPwd);
 function checkIdPwd(event){
   event.preventDefault();
   let userId = document.getElementById("userId").value;
   let userPwd = document.getElementById("userPwd").value;
   let savedData = JSON.parse(localStorage.getItem("user"));
console.log(savedData);
let userFound;
   for(let i=0; i<savedData.length; i+=1){
    if(savedData[i].email === userId && savedData[i].password === userPwd){
       userFound = savedData[i];
        break;
     }
       }
       if(userFound){
         localStorage.setItem("loggedUser",JSON.stringify(userFound));
         location.replace("/project_1/mydetails.php");
       }else{
         alert("invalid Username or password");
       }
 }
