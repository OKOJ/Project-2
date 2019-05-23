
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var map, geocoder, marker;

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
  }).then(function (data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      createPins(data[i])
    }
  });
}
getUsers()

// function getFullName(item) {
//   var fullname = [item.firstname, item.lastname].join(" ");
//   return fullname;
// // }

function getProduct(productStand) {
  var product = [productStand.text, productStand.price, productStand.quantity, productStand.description].join('<div></div>');
  return product;
}

function createPins(user) {

  geocoder.geocode({
    address: user.address
  }, function (results, status) {
    console.log(results[0].geometry.location);

    var marker = new google.maps.Marker({
      position: results[0].geometry.location,
      map: map
    });
    marker.addListener('click', function () {

      var contentString = `
        <div id="content">
          <div id="siteNotice">
          </div>
          <h1 id="firstHeading" class="firstHeading">Market Stand</h1>
          <div id="bodyContent">
          Products: <li>${user.Examples.map(getProduct)}</li>
          </div>
        </div>
        `;
        // console.log(user.Examples)
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      infowindow.open(map, marker);
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
      zoom: 9,
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
