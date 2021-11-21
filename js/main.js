// document JavaScript

// show and hide dropdown menu 
var header = document.getElementById("header");
var menuButton = document.getElementById("bt-menu");
var bars = "fas fa-bars";
var times = "fas fa-times";


function dropdown(){
    switch (header.style.height === "82px") {
        case true:
            header.style.height = "360px";
            menuButton.setAttribute("class", times);
            break;
    
        case false:
            header.style.height = "82px";
            menuButton.setAttribute("class", bars);
            break;
    }
}
function hideMenu(){
    header.style.height = "82px";
    menuButton.setAttribute("class", bars);
}


// show question awnser 
var awnser1 = document.getElementById("question-awnser1");
var plus1 = document.getElementById("plus1");
var awnser2 = document.getElementById("question-awnser2");
var plus2 = document.getElementById("plus2");
var awnser3 = document.getElementById("question-awnser3");
var plus3 = document.getElementById("plus3");
var awnser4 = document.getElementById("question-awnser4");
var plus4 = document.getElementById("plus4");
var awnser5 = document.getElementById("question-awnser5");
var plus5 = document.getElementById("plus5");


function showPlus1(){
    switch(plus1.innerHTML){
        case "+":
            // close others responds
            awnser2.style.height = "50px";
            plus2.innerHTML = "+";
            awnser3.style.height = "50px";
            plus3.innerHTML = "+";
            awnser4.style.height = "50px";
            plus4.innerHTML = "+";
            awnser5.style.height = "50px";
            plus5.innerHTML = "+";
            // open the responds
            this.awnser1.style.height = "auto";
            this.plus1.innerHTML = "-";
            break;
        case "-":
            this.awnser1.style.height = "50px";
            this.plus1.innerHTML = "+";
            break;
    }
    
}
function showPlus2(){
    switch(plus2.innerHTML){
        case "+":
            // close others responds
            awnser1.style.height = "50px";
            plus1.innerHTML = "+";
            awnser3.style.height = "50px";
            plus3.innerHTML = "+";
            awnser4.style.height = "50px";
            plus4.innerHTML = "+";
            awnser5.style.height = "50px";
            plus5.innerHTML = "+";
            // open the responds
            this.awnser2.style.height = "auto";
            this.plus2.innerHTML = "-";
            break;
        case "-":
            this.awnser2.style.height = "50px";
            this.plus2.innerHTML = "+";
            break;
    }
}
function showPlus3(){
    switch(plus3.innerHTML){
        case "+":
            // close others responds
            awnser1.style.height = "50px";
            plus1.innerHTML = "+";
            awnser2.style.height = "50px";
            plus2.innerHTML = "+";
            awnser4.style.height = "50px";
            plus4.innerHTML = "+";
            awnser5.style.height = "50px";
            plus5.innerHTML = "+";
            // open the responds
            this.awnser3.style.height = "auto";
            this.plus3.innerHTML = "-";
            break;
        case "-":
            this.awnser3.style.height = "50px";
            this.plus3.innerHTML = "+";
            break;
    }
}
function showPlus4(){
    switch(plus4.innerHTML){
        case "+":
            // close others responds
            awnser1.style.height = "50px";
            plus1.innerHTML = "+";
            awnser2.style.height = "50px";
            plus2.innerHTML = "+";
            awnser3.style.height = "50px";
            plus3.innerHTML = "+";
            awnser5.style.height = "50px";
            plus5.innerHTML = "+";
            // open the responds
            this.awnser4.style.height = "auto";
            this.plus4.innerHTML = "-";
            break;
        case "-":
            this.awnser4.style.height = "50px";
            this.plus4.innerHTML = "+";
            break;
    }
}
function showPlus5(){
    switch(plus5.innerHTML){
        case "+":
            // close others responds
            awnser1.style.height = "50px";
            plus1.innerHTML = "+";
            awnser2.style.height = "50px";
            plus2.innerHTML = "+";
            awnser3.style.height = "50px";
            plus3.innerHTML = "+";
            awnser4.style.height = "50px";
            plus4.innerHTML = "+";
            // open the responds
            this.awnser5.style.height = "auto";
            this.plus5.innerHTML = "-";
            break;
        case "-":
            this.awnser5.style.height = "50px";
            this.plus5.innerHTML = "+";
            break;
    }
}


// show images on scrolling 
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

function scrolling(){
    if (document.documentElement.scrollTop >= 800){
        img1.classList.remove("hide");
    }
    if (document.documentElement.scrollTop >= 1300){
        img2.classList.remove("hide");
    }
    if (document.documentElement.scrollTop < 1000){
        toTop.style.visibility = "hidden";
    }
    if (document.documentElement.scrollTop >= 1350){
        toTop.style.visibility = "visible";
    }
    if (document.documentElement.scrollTop >= 2200){
        img3.classList.remove("hide");
    }
    if (document.documentElement.scrollTop >= 4500){
        img4.classList.remove("hide");
    }
}


// Count Down Timer  
let seconds = 13000,
    timer = document.getElementById("countDown");
    count;
    countDown = setInterval(function(){
        "use strict";
        count();

    },1000);

function count(){
    let hours = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let remSeconds = seconds - ((hours * 3600) + (mins * 60));
    if(hours < 10){
        hours = "0" + hours;
    }
    if(mins < 10){
        mins = "0" + mins;
    }
    if(remSeconds < 10){
        remSeconds = "0" + remSeconds;
    }
    timer.innerHTML = "   " + hours + ":" + mins + ":" + remSeconds; 
    if(seconds > 0){
        seconds -= 1;
    }else{
        clearInterval(countDown);
    }
}

// button Scroll to top 
let toTop = document.getElementById("toTop");
toTop.onclick = function(){
    document.documentElement.scrollTo(0, 0);
}



