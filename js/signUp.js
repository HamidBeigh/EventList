
  const myForm = document.getElementById("myForm");
  myForm.addEventListener("submit",saveDataToStorage);

  function saveDataToStorage(e){
    e.preventDefault();
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var checkbox = document.getElementById("checkbox");
    function formValidation() {
      let fieldEmty = true;
      document.getElementById("error").innerHTML ="";
      if(fname === ""){
        document.getElementById("error").innerHTML += "* first name is Missing</br>";
        fieldEmty = false;
      }
      if(lname === ""){
        document.getElementById("error").innerHTML += "* last name is Missing</br>";
        fieldEmty = false;
      }
      if(email === ""){
        document.getElementById("error").innerHTML += "* email is Missing</br>";
        fieldEmty = false;
      }
      if(password === ""){
        document.getElementById("error").innerHTML += "* password is Missing</br>";
        fieldEmty = false;
      }
      if(checkbox.checked === false){
        document.getElementById("error").innerHTML += "* Terms of use not accepted.";
        fieldEmty = false;
      }
     return fieldEmty;
    }
    if(formValidation() === true){
    var newData = {fname, lname, email, password};

      let  emtyArr = [];
  if(localStorage.getItem("user") === null){
     let emtyArrStr = JSON.stringify(emtyArr);
    localStorage.setItem("user", emtyArrStr);
  }
    let oldData = JSON.parse(localStorage.getItem("user"));
    for(let i=0; i<oldData.length; i+=1){
      if(oldData[i].email === email){
        alert("user is already registered");
        return;
      }
    }
    oldData.push(newData);
    let oldDataStr = JSON.stringify(oldData);
    localStorage.setItem("user", oldDataStr);
    location.replace("log_in.php");
  }else{
    document.getElementById("error").innerText;
  }
}
