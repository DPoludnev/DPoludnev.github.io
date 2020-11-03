const myHeading = document.querySelector('h1');
myHeading.textContent = 'Dennis'
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}

const test = "6";
console.log(typeof test);