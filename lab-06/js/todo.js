"use strict";

function addItem(text, done){
    const item = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    label.textContent = text;
    input.type = "checkbox";
    input.checked = done;
    input.id = `todo${todo.querySelectorAll('li').length + 1}`;
    label.htmlFor = input.id;

    const button = document.createElement('button');
    button.textContent = "x";
    button.addEventListener('click', ev => {
        item.remove();
    });
    
    
    item.appendChild(input);
    item.appendChild(label);
    item.appendChild(button);
    todo.appendChild(item);
}

function clearList(){
    while(todo.firstChild){
        todo.removeChild(todo.firstChild);
    }
}

function saveToStorage(){
    const elements = Array.from(todo,querySelectorAll('li'));
    const data = elements.map(el => {
        return{
            text: el.querySelector('label').textContent,
            done: el.querySelector('input').checked
        }
    });

    localStorage.setItem(todo.id, JSON.stringify(data));
}

add.addEventListener('click', ev => {
    if(text.value){ //check we have data
        addItem(text.value);    
        text.value = null;  //clear the input
        text.focus();   //give textbox focus
    }
    
});

clear.addEventListener('click', ev => {
    clearList();
});

text.addEventListener('keydown', ev =>{
    if(ev.key == "Enter"){
        add.click();
    }
});