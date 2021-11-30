let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mysrc = myImage.getAttribute('src');
    if(mysrc === 'images/firefox.jpg'){
        myImage.setAttribute('src', 'images/firefox2.jpeg');
    }else{
        myImage.setAttribute('src', 'images/firefox.jpg');
    }
} 


let myButton  = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}