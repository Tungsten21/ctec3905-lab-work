function greetMe(){
    console.log("Hello!");
}

function changeButton(){
    myTrigger.textContent = "Please work";
}

myTrigger.addEventListener('click', greetMe);