javascript:

/*How to use: Just run the code and if the a prompt appears then just continue playing*/

/*Setup and play asker*/

console.log("Launching Casino!");
var prom1 = confirm("Do you want to play casino?");

/*If user chose to play*/

if( prom1 == true ) {
    console.log("User wants to play casino!");

    /*Create an account if there isn't one*/
    
    var tokens;
    if (tokens == null) {
	var tokens = 100;
    	var newUser = true;
    	console.log("An account has been created for user.");
    }
    
    /*If user already has an account*/

    else {



    console.log("User has an account.");
    var newUser = false;

    /*Ask user if they want to play on their previous account or create a new one*/

    var createAccProm = confirm("It seems that you already have an account, do you want to log into it? If you choose to create a new account all your data will be wiped.");

    /*If answer was yes*/

    if (createAccProm == true) {
        console.log("User wants to log into their account.");
        newUser = false;
    }

    /*If answer was no*/

    else {
        newUser = true;
        console.log("User chose to create a new account.");
        var tokens = 100;
    }
    }

    /*Username choose*/

    /*If its a new user*/

    if (newUser == true) {
    	console.log("User needs to create a username.");
	var prom2 = prompt("Enter your username below:");
    }

    /*If its a returning user*/

    else {
        console.log(username + " already picked thier username.");
    }

    /*Print username in console*/

	var username = prom2;
	console.log("User is now know as " + username + " !");

    /*Number Picker*/

    var minNumber = 1;
    var maxNumber = 10;
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);

console.log("The number is " + randomnumber);

    /*Ask user what number they choose*/
	
	var prom3 = prompt("Hey " + username + " what number from 1 to 10 do you bet?");

var bettedNumber = prom3;

/*Check if the betted number is not too low*/

if (bettedNumber <= 0) {
    console.log(username + " betted a number too low so they got kicked.");
    alert("Sorry but the number you betted was too low.");
}

/*If the betted number was not too low*/

else {
    
    console.log("The betted number is not too high.");

    /*Check to see if number is not too high*/

if (bettedNumber > 10) {
    console.log(username + " betted a number too low so they got kicked.");
    alert("Sorry but the number you betted was too high.");
}

/*If number is not to low or high*/

else {
    /*Console token reminder*/

console.log("Hey " + username + " just a reminder, you have " + tokens + " tokens right now.");

/*Ask user how much tokens they bet*/

var prom4 = prompt("How much tokens do you bet?  Your current token balance is " + tokens + ".");

var tokensBetted = prom4;

/*If users number of tokens that they betted was too high*/

if (tokensBetted > tokens) {
	alert("Sorry but you do not have this amount of tokens.");
	console.log(username + " betted a number of tokens to high so they got kicked.");
}

/*If number of tokens betted was not to high*/

else {

/*If user guesssed right number*/

if (bettedNumber == randomnumber) {

    /*Add tokens*/

	var tokensToAdd = tokensBetted * 10;
            var tokens = tokens + tokensToAdd;

    /*Green Text*/

	console.log("%c " + username + " just won " + tokensToAdd + " tokens!", 'background: #222; color: #0eb00e');

    /*Tell users new token balance in console*/

    console.log(username + "'s new token balance is " + tokens + "!");

    /*Alert the user about their new token balance*/

	alert("Hey " + username + " you just won " + tokensToAdd + "  tokens!");


alert("Your new token balance is " + tokens + "!");

/*Ask user to play again*/

var askAgain = confirm("Do you want to play again?");

    /*If user chose to play again*/

	if (askAgain == true) {
                        console.log(username + " chose to play again!");
		alert("Repaste this code into your console to play again!");
    }

    /*If user chose not to play again*/

    else {
        console.log(username + " chose to not play again.");
    }

}

/*If the user lost a bet*/

else {

    /*Alert them about it*/

	console.log(username + " just lost.");

    /*Take away tokens*/

    var tokensToTake = tokensBetted;
    var tokens = tokens - tokensToTake;

    /*Alert the user about it and print their new token balance in the console*/

    console.log(username + "'s new token balance is " + tokens + ".");
    console.log(username + " just lost " + tokensToTake + " tokens.");
    alert("You just lost. Your new token balance is " + tokens + ".");

    /*Ask to play again*/
	
	var askAgain = confirm("Do you want to play again?");

    /*If they chose to play again*/

	if (askAgain == true) {

        /*Alert them about it and print it in the console*/

        console.log(username + " chose to play again!");
		alert("Repaste this code into your console to play again!");
    }

    /*Print in the console that the user does not want to play again*/

    else {
        console.log(username + " chose to not play again.");
    }
}

}   

}

}

}

/*If user chose to not play*/

else {
	console.log("User cancelled to play casino.");
}

