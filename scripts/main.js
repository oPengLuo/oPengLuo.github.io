/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.jpg'){
        myImage.setAttribute('src','images/2.jpg')
    } else {
        if(mySrc === 'images/3.jpg'){
            myImage.setAttribute('src', 'images/1.jpg')
        } else {
            myImage.setAttribute('src', 'images/3.jpg')
        }
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla很酷，' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = lacalStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}