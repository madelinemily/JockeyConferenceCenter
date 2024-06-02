filtering("all");

function filtering(c){
    var i, event;

    event = document.getElementsByClassName("event-card");

    if(c == "all"){
        c = "";
    }
    for(i = 0; i < event.length; i++){
        removeType(event[i], "show");
        if(event[i].className.indexOf(c) > -1){
            addType(event[i], "show")
    }
}

function addType(type, name){
    var i, array1, array2;
    array1 = type.className.split(" ");
    array2 = name.split(" ");
    for(i = 0; i < array2.length; i++){
        if(array1.indexOf(array2[i]) == -1){
            type.className += " " + array2[i];
        }
    }
}

function removeType(type, name){
    var i, array1, array2;
    array1 = type.className.split(" ");
    array2 = name.split(" ");
    for(i = 0; i < array2.length; i++){
        while(array1.indexOf(array2[i]) > -1){
            array1.splice(array1.indexOf(array2[i]), 1);
        }
    }
    type.className = array1.join(" ");
}

const tabs = document.querySelectorAll('.btn');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');
    })
}
)}


const slideText = document.querySelector(".slide-text").children;
const textLength = slideText.length;
let idx = 0;

function changeText(){
    for(let i = 0; i < textLength; i++){
        slideText[i].classList.remove("slide-text-words");
    }
    slideText[idx].classList.add("slide-text-words");
    if(idx == textLength-1){
        idx = 0;
    }
    else{
        idx++;
    }

    setTimeout(changeText, 3000);
}

window.onload = changeText