// getting localStorage Data
let getLoggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if(getLoggedUser === null){
      location.replace("index.php");
    }
let welcome = document.querySelector("#userName")
  welcome.innerText = getLoggedUser.fname;
let list = getLoggedUser.email + "List";
function logOut(){
  localStorage.removeItem("loggedUser");
  location.replace("index.php");
}

let selectUl = document.getElementById("list");
  let  myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", addToDoList);
  document.addEventListener("DOMContentLoaded", tableCreation);
// Todo List functions
function addToDoList(event){
  event.preventDefault();
  let inputValue = document.getElementById("newInput").value;
    if(inputValue === "")return;
  myForm.reset();

  let listArr = [];
  if( localStorage.getItem(list) === null){
  localStorage.setItem(list, JSON.stringify(listArr));
  }
  let oldList = JSON.parse(localStorage.getItem(list));
  let curDate = new Date();
  for(let i=0; i<oldList.length; i++){
  if(oldList[i].name === inputValue){
    alert("this name exixts");
    return;
    }
  }
  oldList.push({name:inputValue, date:curDate.toLocaleDateString()});
  localStorage.setItem(list,JSON.stringify(oldList));
  tableCreation();
}

// Table Functions
function addElementTag(node,tag){
node.appendChild(document.createElement(tag));
}

function addElementTagWithText (node,tag,text){
  let newTag =document.createElement(tag);
  newTag.innerText=text
node.appendChild(newTag);
}

function addElementTagWithHtml (node,tag,text){
  let newTag =document.createElement(tag);
  newTag.innerHTML=text;
node.appendChild(newTag);
}

function addElementTagButton (node,tag,attributeName,attributeValue,text){
    let newBtn = document.createElement(tag);
        newBtn.innerText=text;
      newBtn.setAttribute(attributeName,attributeValue);
      newBtn.setAttribute("id",text);
      node.appendChild(newBtn);
}

// Table Formation
function tableCreation(){
let tableData = JSON.parse(localStorage.getItem(list));
  if(tableData ===null)return;
let selectTable = document.getElementById("table");
  selectTable.innerHTML ="";
  let tr = document.createElement("tr");
    selectTable.appendChild(tr);
    for(let i=0; i<4; i++){
      addElementTag(tr,"th");
    }
    let selectTh = tr.querySelectorAll("th");
      selectTh[0].innerText = "Name";
      selectTh[1].innerText = "Created_Date";
      selectTh[2].innerText = "Delete";
      selectTh[3].innerText = "Udate";
      for(let i =0; i<tableData.length; i++){
         tr = document.createElement("tr");
        selectTable.appendChild(tr);
          addElementTagWithText(tr,"td",tableData[i].name);
          addElementTagWithText(tr,"td",tableData[i].date);
          addElementTagWithHtml(tr,"td","<button class='btn btn-sm' style='background:red' onclick=updateTableRow('"+tableData[i].name+"')>update</button>");
          addElementTagWithHtml(tr,"td","<button class='btn btn-sm' style='background:red' onclick=deleteTableRow('"+tableData[i].name+"')>delete</button>");
      }
}

  // Data Updation functions

  function deleteTableRow(name){
    let parsedUserList = JSON.parse(localStorage.getItem(list));
    let temArray = [];
      for(let i=0; i<parsedUserList.length; i++){
        if(parsedUserList[i].name === name){
          continue;
        }
        temArray.push(parsedUserList[i]);
      }
      localStorage.setItem(list,JSON.stringify(temArray));
      tableCreation();
  }


  function updateTableRow(name){
    let upDateParsedList = JSON.parse(localStorage.getItem(list));
    let updatedArray = [];
    let updateInputValue = document.getElementById("newInput");
    let selectBtn = document.getElementById("newBtn");
      selectBtn.style.display = "none";
    for(let i=0; i<upDateParsedList.length; i++){
      if(upDateParsedList[i].name === name){
          updateInputValue.value = upDateParsedList[i].name;
        if(document.getElementById("Update") !== null){
          document.getElementById("Update").remove();
          document.getElementById("cancel").remove();
        }
          addElementTagButton(myForm, "button", "onclick", "formUpdation('"+upDateParsedList[i].name+"')", "Update");
          addElementTagButton(myForm, "button", "onclick", "cencelUpdate()", "cancel");
       }
    }
  }

  function cencelUpdate(){
        myForm.reset();
    location.replace("mydetails.php");
  }

function formUpdation(name){
let upDateList = JSON.parse(localStorage.getItem(list));
  let updatedInput = document.getElementById("newInput").value;
  let arrayUpdate = [];
  for(let i=0; i<upDateList.length; i++){
    if(upDateList[i].name === updatedInput){
      alert("list name already exixts");
      location.replace("mydetails.php");
      myForm.reset();
      return;
    }
    if(upDateList[i].name === name){
      if(updatedInput === "")return;
      upDateList[i].name = updatedInput;
    }myForm.reset();

    arrayUpdate.push(upDateList[i]);

  }
  localStorage.setItem(list,JSON.stringify(arrayUpdate));
  tableCreation();
  location.replace("mydetails.php");
}
