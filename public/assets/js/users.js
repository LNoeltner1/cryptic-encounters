$("#name-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a userName obj
    var userName = {
      // name from name input
      name: $("#name").val().trim(),
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/username", userName)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
      });
  
    // empty each input box by replacing the value with an empty string
    $("#name").val("");
  
  });

  $("#age-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a userAge obj
    var userAge = {
      // age from age input
      age: $("#age").val().trim(),
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/userage", userAge)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
      });
  
    // empty each input box by replacing the value with an empty string
    $("#age").val("");

  
  });
  $("#gender-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a userName obj
    var userGender = {
      // name from name input
      name: $("#name").val().trim(),
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/usegender", userGender)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
      });
  
    // empty each input box by replacing the value with an empty string
    $("#name").val("");
  
  });