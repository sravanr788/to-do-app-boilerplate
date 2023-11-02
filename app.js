// input tag
var inputText = document.querySelector("#input")
// Add Button tag
var button = document.querySelector("#button")

// Todo list
var todolistTag = document.querySelector("#todolist")

//& array to store all todo elements , initially empty 
    // if(localStorage.getItem("todoArr")=null){
    // var todoArr = []
    // }
    // else{
        // var todoArr = JSON.parse(localStorage.getItem("todoArr"))
    // }

var todoArr = JSON.parse(localStorage.getItem("todoArr")) || []

display()

// When Add button is Clicked 
button.addEventListener("click" , addItemToArr)

//If input is on FOCUS and Enter is Clicked  addItemToArray should be called to add element to array
inputText.addEventListener("keypress",(event)=>{
    console.log(event)
    //EXTRA -> event.target.value==inputText.value
    if(event.key=="Enter"){
        addItemToArr();
    }
})

function addItemToArr (){
    //push the value to array , if its not an empty string 
    if(inputText.value!=""){
        todoArr.push(inputText.value)
        localStorage.setItem("todoArr",JSON.stringify(todoArr))
    }

    // reset the value too empty string ""
    inputText.value=""

    display();
}

function display(){
    //Clear out previous old ones everytime we add one item to array and display it
    todolistTag.innerHTML = "";
    todoArr.map((curr,i)=>{
        // structure of li tag
        var listItem = `<li id="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})"> &times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
    </li>`;
// insert it inside <ul id="todolist">
    todolistTag.innerHTML += listItem
    });
}

function deleteItem(i){

    // delete the element(index) from todoArr 
    todoArr.splice(i,1);
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
    display();
}

function editItem(i){
    var newValue = prompt("Please EDIT")
    todoArr.splice(i,1,newValue);
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
    display();
}

// reset the todo list
document.getElementById("reset").addEventListener("click",()=>{
    todoArr = []
    localStorage.setItem("todoArr",JSON.stringify(todoArr))
    display();
})


// local storage 
// var cartArr = ["Book","Pen","Eraser"]
// localStorage.setItem("cart",JSON.stringify(cartArr))

// cartArr.push("scale")
// localStorage.setItem("cart",JSON.stringify(cartArr))
// console.log(cartArr)

// var tempArr = JSON.parse(localStorage.getItem)
// console.log(tempArr)


// session storage
// var cartArr = ["Book","Pen","Eraser"]
// sessionStorage.setItem("cart",JSON.stringify(cartArr))

// cartArr.push("scale")
// sessionStorage.setItem("cart",JSON.stringify(cartArr))
// console.log(cartArr)

// var tempArr = JSON.parse(sessionStorage.getItem)
// console.log(tempArr)

var arr = JSON.parse(localStorage.getItem("todoArr"))
console.log(arr)