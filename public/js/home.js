$(document).ready(function () {

  blogContainer = $(".blog-container");
  // Variable to hold our posts
  var posts;

  // The code below handles the case where we want to get blog posts for a specific author
  // Looks for a query param in the url for author_id
  var url = window.location.search;

  $.get("/api/posts", function (data) {
    console.log("data below");
    console.log(data);
    console.log("data above")

    for (var i = 0; i < data.length; i++) {
      console.log(data[i].id)
    }

    console.log(data); 
    // if (data.length < 1) {
    //   displayEmpty(); 
    // }
    // posts = data;
    // if (!posts || !posts.length) {
    //     displayEmpty(author);
    // } else {
    //     initializeRows();
    // }
  });

  displayEmpty(); 

  // This function displays a message when there are no posts
  function displayEmpty() {
    var query = window.location.search;

    blogContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({
      "text-align": "center",
      "margin-top": "50px"
    });
    messageH2.html("Login to play our game navigate <a href='/cms" + query +
      "'>here</a> in order to get started.");
    blogContainer.append(messageH2);
  }

});