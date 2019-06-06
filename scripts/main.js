var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/index.png'){
        myImage.setAttribute('src','images/pug.png');
    } else {
        myImage.setAttribute('src','images/index.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Pugs are cool, ' + myName;
    if(!localStorage.getItem('name')){
        setUserName();
    } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Pugs are cool, ' + storedName;
    }
}



myButton.onclick = function(){
    setUserName();
}