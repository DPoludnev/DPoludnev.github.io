
const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; //Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) { 
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here
    
    fetch(busRouteURL) //
      .then((response) => { 
        return response.json(); 
      })
      .then((route) => { 
        let title; 
        let Max_lat; 
        let Min_lat;
        let Max_lon; 
        let Min_lon;
        
        if (typeof route.title !== "undefined") {
          sessionStorage.setItem("title", route.title);  
          sessionStorage.setItem("Max_lat", route.lat_max);
          sessionStorage.setItem("Min_lat", route.lat_min);
          sessionStorage.setItem("Max_lon", route.lon_max);
          sessionStorage.setItem("Min_lon", route.lon_min);

          message =
            sessionStorage.getItem("title") +
            " <br>Lat max : " +
            sessionStorage.getItem("latMax") +
            " <br>Lat min : " +
            sessionStorage.getItem("latMin") +
            " <br>Lon Max : " +
            sessionStorage.getItem("lonMax") +
            " <br>Lon Min :" +
            sessionStorage.getItem("lonMin");
            
      }
      else {
        message = "No bus info available"
      }
      main.innerHTML = "Bus Route Info: " + message;})  
      .catch((err) => {   
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}