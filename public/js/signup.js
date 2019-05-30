
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

// function getProduct(productStand) {
//   var product = [productStand.text].join("<div></div>");
//   return product;
// }

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
      console.log(user.Examples)
      var products = (user.Examples)
      var items = "";
      for (var i = 0; i < products.length; i++) {
        items += `<a href="/example/${products[i].id}">
               ${products[i].text}</a>`
      }
      var contentString = `
        <div id="content">
          <div id="siteNotice">
          </div>
          <h1 id="firstHeading" class="firstHeading">Market Stand</h1>
          <div id="bodyContent">
         <p> <h5>Address:${user.address}</h5>  
           
          <h5>Phone: ${user.phone}</h5>
           
          <h5>Products:</h5>
          ${items}
          </div>
          </div>
          `
          
         
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