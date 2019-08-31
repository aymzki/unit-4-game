 //Document ready makes sure webpage is ready before starting jQuery code
 $(document).ready(() => {

 //Made a counter to track user's total
 var counter = 0;
    // Create on-click event that responds to button clicks of the crystal image.   
 $(".crystal-image").on("click", function() {

    //Increment by 1 every time user clicks the crystal
    counter += 10;

    // Clicking the button triggers an alert message.
    alert("Your new score is: " + counter);

  });

});