$(document).ready(function () {
  // Getting jQuery references to the post body, title, form, and author select
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var recoveryInput = $("#recovery");
  var cmsForm = $("#cms");
  var authorSelect = $("#author");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var postId;
  var authorId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;


  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      title: titleInput
        .val()
        .trim(),
      body: bodyInput
        .val()
        .trim(),
      AuthorId: authorSelect.val()
    };

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = postId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }

    clearData();
  }

  // Submits a new post and brings user to blog page upon completion
  function submitPost(post) {
    $.post("/api/posts", post, function () {

      // window.location.href = "/blog";
    });

  }


  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
        method: "PUT",
        url: "/api/posts",
        data: post
      })
      .then(function () {

        // window.location.href = "/blog";
      });
  }

  function clearData() {
    bodyInput.val("");
    titleInput.val("");
    recoveryInput.val("");
    alert("Thanks for signing up")
  }
});