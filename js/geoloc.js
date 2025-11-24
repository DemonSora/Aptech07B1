var x = document.getElementById("div")

// if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showposition)
//     alert("true")
// }
// else{
//     alert("false")
// }

navigator.geolocation.getCurrentPosition(athe)

function athe(a){
    let lat = a.coords.latitude;
    let lon = a.coords.longitude;
    // x.innerHTML = "latitude: "+ lat+ "<br>longitude: "+ lon;
    let Latlon = new google.maps.LatLng(lat, lon);
    let Mymap = new google.maps.Map(x, {
        zoom: 16,
        center: Latlon,
        mapTypeId: "roadmap"
    });
    new google.maps.Marker({
        position:Latlon,
        title: "You",
        map: Mymap
    })
}

// console.log(navigator.geolocation)