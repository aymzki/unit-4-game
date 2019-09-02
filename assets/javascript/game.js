//Document ready makes sure webpage is ready before starting jQuery code
$(document).ready(() => {

    //Set "targetNumber" that the user should be aiming to reach

        var targetNumber = Math.floor(Math.random() * ((120-19) + 1)) + 19;

        //Set "number-to-guess" header to match targetNumber
        $("#number-to-guess").text(targetNumber);


    //Made a counter to track user's total
    var counter = 0;
    var youWin = 0;
    var youLose = 0;

    generateNumber()

    function generateNumber() {

        for (var i = 0; i < 5; i++) {

            var index = i + 1;

            var randomNumber = Math.floor(Math.random() * 12);

            //each iteration will have a var imageCrystal
            var imageCrystal = $("#crystal" + index);

            //each imageCrystal will be assigned a data attribute depending on number options
            imageCrystal.attr("data-crystalvalue", randomNumber);

        }

    }


    // Create on-click event that responds to button clicks of the crystal image.   
    $(".crystal-image").on("click", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        //Increment by that random number every time user clicks the crystal
        counter += crystalValue;
        console.log(crystalValue);

        $("#totalScore").text("Your total score is: " + counter);


        // Clicking the button triggers an alert message.

        alert("Your new score is: " + counter);


        //Check if click counter matches targetNumber
        if (counter === targetNumber) {

            youWin++;
            $("#wins").append(youWin);

            //If numbers match, celebrate the win
            alert("You win!");

            counter = 0;

            generateNumber();

        }

        //If the user's counter exceeds targetNumber they lose.
        else if (counter >= targetNumber) {

            youLose++;
            $("#losses").append(youLose);

            alert("You lose!");

            counter = 0;

            generateNumber();
        }



    });



});
