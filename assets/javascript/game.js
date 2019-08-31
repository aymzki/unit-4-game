 //Document ready makes sure webpage is ready before starting jQuery code
 $(document).ready(() => {

 //Set "targetNumber" that the user should be aiming to reach
 var targetNumber = 50;

 //Set "number-to-guess" header to match targetNumber
 $("#number-to-guess").text(targetNumber);


 //Made a counter to track user's total
 var counter = 0;
    // Create on-click event that responds to button clicks of the crystal image.   
 $(".crystal-image").on("click", function() {

    //Increment by 1 every time user clicks the crystal
    counter += 10;

    // Clicking the button triggers an alert message.
    alert("Your new score is: " + counter);

    //Check if click counter matches targetNumber
    if (counter === targetNumber) {

        //If numbers match, celebrate the win
        alert("You win!");
    }

    //If the user's counter exceeds targetNumber they lose.
    else if (counter >= targetNumber) {

        alert("You lose!");
    }

  });

});