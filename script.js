  $("#nameBox").on("keyup", function() {
    var nameCheck = $("#nameBox").val();
    var result = nameCheck.match(/\d/);
    if (result != null) {
      $("#visible-error").css("color", "red");
      $("#visible-error").html("Name must contain only letters");
    } else if (nameCheck.length <= 2) {
          $("#visible-error").css("color", "red");
            $("#visible-error").html("Name must be at least 3 characters");
    } else {
      $("#visible-error").html("");
    }
  });