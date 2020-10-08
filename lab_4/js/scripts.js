let myFullName = "Dennis Poludnev"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
const name = document.querySelector(".header");
name.innerText = myFullName + "'s Lab 4.";
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
const paragraph = document.querySelector(".content");

const mp1 = document.createElement("p");
mp1.className = "one";
mp1.innerText = "Hello wolrd!";
paragraph.appendChild(mp1);

const mp2 = document.createElement("p");
mp2.className = "two"
mp2.innerText = "Hello back at you!";
paragraph.appendChild(mp2);
// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
let length = myFullName.length - 1
mp1.innerText = "My name has " + length + " characters.";
// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
const thirdChar = myFullName[2].toUpperCase();

mp2.innerText = "The 3rd letter of name is " + thirdChar
// 6 Add a new line to your second paragraph
mp2.innerText = "The 3rd letter of my name is " + thirdChar + ". \n"
// 7 Return the final three characters of your last name to that new line
const lastChars = myFullName.substring(myFullName.length - 3, myFullName.length);
mp2.innerText = "The 3rd letter of my name is " + thirdChar + ". \n" + "The last 3 letters of my name are: " + lastChars;
// 8 Substring your first and last name into two separate variables
const firstN = myFullName.substring(0,6);
const lastN = myFullName.substring(7,15);
// 9 Add the total length of your first and last names together
const total = firstN.length + lastN.length;
// 10 Display that total next to your name in your header
document.querySelector(".header").append(" There are " + total + " letters in my first and last name");