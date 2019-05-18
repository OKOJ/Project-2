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
          .trim()
      }
    })
    .then(function (data) {
      console.log("going to profile", data);
      window.location.replace(data);
    })
    .catch(function (err) {
      console.log(err);
      alert(err.responseText);
    });
});