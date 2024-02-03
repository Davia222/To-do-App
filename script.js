

let enterDiv = document.querySelector(".enterDiv");
let addTodoInput = document.querySelector("#addTodoInput");
let hafa = document.querySelector(".hafa");
let main = document.querySelector(".main");
let moonImg = document.querySelector(".moonImg");
let body = document.querySelector("body");


 

moonImg.addEventListener("click",function(){
    moonImg.classList.toggle("moonIg")
    main.classList.toggle("sun")
    body.classList.toggle("body2")

})




enterDiv.addEventListener("click", function() {
    if(addTodoInput.value === ""){
        alert("Please enter a text")
        return false
    }

    let checkBtn = document.createElement("div")
    let newItem = document.createElement("p")
    let deleteBtn = document.createElement("img")

    checkBtn.setAttribute("class","check")
    checkBtn.addEventListener("click",function(){
        checkBtn.classList.toggle("checked")
        newItem.classList.toggle("dash")

        
    })

    hafa.appendChild(checkBtn)

    newItem.setAttribute("class", "opera")
    newItem.innerHTML = addTodoInput.value
    hafa.appendChild(newItem)

    deleteBtn.setAttribute("src","/images/icon-cross.svg")
    deleteBtn.classList.add("close")
    deleteBtn.style.marginTop = "-20px"
    deleteBtn.addEventListener("click",function(){
        hafa.removeChild(newItem)
        hafa.removeChild(checkBtn)
        hafa.removeChild(deleteBtn)
    })

    hafa.appendChild(deleteBtn)

    addTodoInput.value = ""

}) 




