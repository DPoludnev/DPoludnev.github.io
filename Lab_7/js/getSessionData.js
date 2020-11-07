// Get saved data from sessionStorage
let title = sessionStorage.getItem("title"); //Your code here
let lat_max = sessionStorage.getItem("Max_lat");
let lat_min = sessionStorage.getItem("Min_lat");
let lon_max = sessionStorage.getItem("Max_lon");
let lon_min = sessionStorage.getItem("Min_lon");

// Your code here

const titl = document.getElementById("title"); 
const latMax = document.getElementById("lat_max");
const latMin = document.getElementById("lat_min");
const lonMax = document.getElementById("lon_max");
const lonMin = document.getElementById("lon_min");

// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
titl.innerText = title;
latMax.innerText = lat_max;
latMin.innerText = lat_min;
lonMax.innerText = lon_max;
lonMin.innerText = lon_min;