$("#user-sign-up").on("submit", function(e) {
  e.preventDefault();
  $.ajax({
    method: "POST",
    url: "/api/signup",
    data: {
      email: $("#email")
        .val()
        .trim(),
      password: $("#password")
        .val()
        .trim()
    }
  })
    .then(function(data) {
      console.log(data);
      window.location.replace(data);
    })
    .catch(function(err) {
      console.log(err);
      alert(err.responseText);
    });
});

function initMap() {

  var uluru = { lat: 40.7608, lng: -111.8910 };
  var location1 = { lat: 40.3960304, lng: -111.9246005 };
  var location2 = { lat: 40.8495378, lng: -111.7252947 };
  var location3 = { lat: 40.5760371, lng: -111.8086808 };
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 9, center: uluru });
  var Marker = new google.maps.Marker({ position: uluru, map: map });
  var Marker2 = new google.maps.Marker({ position: location1, map: map });
  var Marker3 = new google.maps.Marker({ position: location2, map: map }); 
  var Marker4 = new google.maps.Marker({ position: location3, map: map }); 
  
} 