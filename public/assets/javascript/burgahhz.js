$(function() {
    $(".change-slap").on("click", function(event) {
      var id = $(this).data("id");
      var newSlap = $(this).data("newslap");
  
      var newSlapState = {
        slapped: newSlap
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newSlapState
      }).then(
        function() {
          console.log("changed slap to", newSlap);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burgerName: $("#newBurger").val().trim(),
        slapped: $("[name=slapped]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  


/*
$(document).ready(function() {
    $('.create-form').on('submit', (event) => {
        event.preventDefault();
         var newBurger = {
             burgerName: $('#newBurger').val().trim(),
             slapped: 0
         };

    });
    $('.change-slap').on('click', (event) => {
        var id = $(this).data("id");
        var newSlappd = $(this).data("newslap");
        var newSlapState = {
            slap: "true"
        };
        $.ajax("/api/burgers/"+id,{
            type: "PUT",
            data: newSlapState
        }).then(() => {
            console.log(`changed slapped to ${newSlappd}`);
            location.reload();
        }); 

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("created new burger");
            location.reload();
        });
    });


});
*/