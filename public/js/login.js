$(document).ready(function () {
    // Getting jQuery references to the post body, title, form, and author select
    var bodyInput = $("#body");
    var titleInput = $("#title");
    var recoveryInput = $("#recovery");
    var cmsForm = $("#cms");
    var authorSelect = $("#author");
    var login = $(".login");

    // Adding an event listener for when the form is submitted

    // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
    var url = window.location.search;
    var postId;
    var authorId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;

    login.on("click", function () {
        var userName = titleInput.val().trim();
        var userPassword = bodyInput.val().trim();

        $.get("/api/posts", function (data) {
            console.log("data below");
            console.log(data);
            console.log("data above")

            var validation = true; 


            for (var i = 0; i < data.length; i++) {
                if (data[i].title === userName && data[i].body === userPassword) {
                    return alert("Welcome") ;
                }

                if (data[i].title === userName && data[i].body !== userPassword) {
                    return alert("check your password, watch out for case senstivity.")
                }

                if (data[i].title !== userName) {
                    validation = false; 
                }
            }

            if (validation === false) {
                alert("Invalid Username or Password");
            }

        });




        // Once the user clicks the submit, we will: 
        // 1. Grab the values of user's input
        // 2. Make a call to get the post (Database of user's information)
        // 3. Then compare the database to the user's input (validation)
        // 4. Then if valid user, send them a success message and then direct them to the game page. 

    });

    $.get("/api/posts", function (data) {
        console.log("data below");
        console.log(data);
        console.log("data above")

        for (var i = 0; i < data.length; i++) {
    
        }

    });

});