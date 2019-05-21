
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var map, geocoder;

$("#user-sign-up").on("submit", function (e) {
  e.preventDefault();
  $.ajax({
      method: "POST",
      url: "/api/signup",
      data: {
        name: $("#name")
          .val()
          .trim(),
        email: $("#email")
          .val()
          .trim(),
        password: $("#password")
          .val()
          .trim(),
        phone: $("#phone")
          .val()
          .trim(),
        address: $("#address")
          .val()
          .trim(),
      }
    })
    .then(function (data) {
      console.log(data);
      window.location.replace(data);
    })
    .catch(function (err) {
      console.log(err);
      alert(err.responseText);
    });
});

function getUsers() {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).then(function(data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      const address = data[i].address;
      createPins(address)
    }
  });
}
getUsers()

function createPins(address) {

  geocoder.geocode({
    address: address
  }, function (results, status) {
      console.log(results[0].geometry.location);

      var marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: map
      });
  });
}

function initMap() {

  geocoder = new google.maps.Geocoder;
  var uluru = {
      lat: 40.7608,
      lng: -111.8910
  };

  map = new google.maps.Map(
      document.getElementById('map'), {
          zoom: 4,
          center: uluru
      });

      // button id from sign up HB
  $("#tryMe").on("click", function (event) {
    console.log("clicked me")
      event.preventDefault();
      var input = $("#address").val().trim();

      geocoder.geocode({
          'address': input
      }, function (results, status) {
          console.log(results[0].geometry.location);

          var marker = new google.maps.Marker({
              position: results[0].geometry.location,
              map: map
          });
      });
  })
}


  // var uluru = { lat: 40.7608, lng: -111.8910 };
  // var location1 = { lat: 40.3960304, lng: -111.9246005 };
  // var location2 = { lat: 40.8495378, lng: -111.7252947 };
  // var location3 = { lat: 40.5760371, lng: -111.8086808 };
  // var map = new google.maps.Map(
  //   document.getElementById('map'), { zoom: 9, center: uluru });
  // var Marker = new google.maps.Marker({ position: uluru, map: map });
  // var Marker2 = new google.maps.Marker({ position: location1, map: map });
  // var Marker3 = new google.maps.Marker({ position: location2, map: map }); 
  // var Marker4 = new google.maps.Marker({ position: location3, map: map }); 
