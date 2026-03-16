let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
let petstoreDiscovered = false;
let houseOneDiscovered = false;
let houseTwoDiscovered = false;
let backyardDiscovered = false;
let livingRoomDiscovered = false;
let floorboardsDiscovered= false;

//Declare your other global variables here

//Make one function for each location
function start() {
    clear();
    print("\nYou're life as a hamster has begun. You must navigate obstacles and make the right choice to successfully escape and be free.");
    print("\nType start to begin");
	function processInput(input){
		if(input.toLowerCase()==="start"){
			petstore();
    }
	} 
    waitForInput(processInput);
}

function petstore() {
	petstoreDiscovered = true;
    clear();
    print("\nYou are in the petstore. You will have 2 different homes to choose from.");
    print("\nPick a house to go to or type petstore to remain here.");
	print("\n\thouseOne\n\thouseTwo\n\tpetstore");
    
    function processInput(input){
        if (input.toLowerCase() === "houseOne") {
            houseOne();
        } else if (input.toLowerCase() === "houseTwo"){
		houseTwo();
	} else if (input.toLowerCase() === "petstore"){
		stayHere();
		print("n\You didn't leave the petstore and spent your whole life here. You died from old age.");
		end();
        }
    }
    waitForInput(processInput);
}

function houseOne() {
	houseOneDiscovered = true;
print("\nYou are in now in your new home. Do you want to escape?");
print("\n\tbackyard\n\tstay here");

	function processInput(input){
		if (input.toLowerCase() === "backyard"){
			backyard();
		}else if (input.toLowerCase() === "stay here") {
			end();
		}
	}
		waitForInput(processInput);
}

function end(){
	print("\nYou weren't able to escape successfully, would you like play again?");
	print("\n\tyes\n\tno");
	function processInput(input){
		if(input.toLowerCase() === "yes"){
			start();
		}else if (input.toLowerCase() === "no"){
			print("\nThank you for playing!");
			gameActive=false;
		}
	}
		waitForInput(processInput);
}

function endWin(){
	print("\nYou have successfully escaped! Would you like to play again?");
	print("\n\tyes\n\tno");

	function processInput(input){
		if(input.toLowerCase() === "yes"){
			start();
		}else if(input.toLowerCase() === "no"){
			print("\nThank you for playing!");
			gameActive=false;
		}
	}
	waitForInput(processInput);
}

function backyard(){
backyardDiscovered = true;
print("\nYou have made it outside and are now free!");
	endWin();
}

function houseTwo(){
	houseTwoDiscovered = true;
	print("\nYou are now in your new house! Do you want to escape?");
	print("\ntyes\n\tno");

	function processInput(input){
		if (input.toLowerCase() === "yes"){
			livingRoom();
		}else if (input.toLowerCase() === "no"){
			end();
		}
	}
	waitForInput(processInput);
}

function livingRoom(){
	livingRoomDiscovered = true;
	print("\nYou made into the living room, but are immedieatly faced with a problem.");
	print("\nYour owner also has a dog which is now looking at you curiously. It begins walking over to you, you can either stay where you are or hid under the floorboards. What do you choose?");
	print("\n\tstay here\n\tfloorboards");

	function processInput(input){
		if (input.toLowerCase() === "stay here"){
			stayHere();
			print("\nYou stayed and were eaten by the dog!");
			end();
		}else if (input.toLowerCase() === "floorboards"){
		floorboards();
		}
	}
	waitForInput(processInput);
}
function floorboards();{
floorboardsDiscovered = true;
print("You are now under the floorboards of the house. Both the dog and your owner will never find you down here.");
print("Congratulations! You are now free, you can freely roam and eat all the crumbs left around.");
endWin();
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function welcome(){
    print("Welcome to my game! Type hamster to begin");

    function processInput(input){
	    if(input.toLowerCase() === "hamster"){
             petstore();
    }
    }
    waitForInput(processInput);
}
