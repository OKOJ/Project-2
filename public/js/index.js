// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $examplePrice = $("#example-price");
var $exampleQuantity = $("#example-quantity");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var $exampleImage =  $("#example-image");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    price: $examplePrice.val().trim(),
    quantity: $exampleQuantity.val().trim(),
    description: $exampleDescription.val().trim(),
    image: $exampleImage.val().trim()
  };

  if (!(example.text || example.price || example.quantity)) {
    alert("You must enter an product text, price, and quantity!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $examplePrice.val("");
  $exampleQuantity.val("");
  $exampleDescription.val("");
  $exampleImage.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

//Dynamic text for front page
var $i = 1;
var $n = 2;
var $s = $('span').length;

window.setInterval(function(){
  $i ++;
  $n ++;
  if($i > $s){
    $i = 1;
  }
  if($n > $s){
    $n = 1;
  }
  $('.active').removeClass('active');
  $('span:nth-child(' + $i + ')').addClass('active');
  $('.next').removeClass('next');
  $('span:nth-child(' + $n + ')').addClass('next');
}, 2000);