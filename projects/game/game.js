let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

let hidingSpot = false;
//Declare your other global variables here

//Make one function for each location

function petstore() {
    clear();
    print("\nYou are in the petstore. You will have 2 different homes to choose from.");
    print("\nPick a house to go to or type petstore to remain here.");
	print("\n\thouse1\n\thouse2\n\tpetstore");
    
    function processInput(input){
        if (input.toLowerCase() === "house1") {
            houseOne();
        } else if (input.toLowerCase() === "house2"){
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
clear();
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
	clear();
print("\nYou have made it outside, should you run across the field or dig a tunnel to escape?");
	print("\n\tfield\n\ttunnel");

	function processInput(input){
		if (input.toLowerCase() === "field"){
			field();
		}else if (input.toLowerCase() === "tunnel"){
			tunnel();
		}
	}
		waitForInput(processInput);
	}
function field(){
	clear();
print("\nYou run across the field, just as you think you've  made it a hawk swoops down and catches you.");
			end();
		}

function tunnel(){
	clear();
print("\nYou dig a tunnel across the backyard. You are hidden underground and the hawk doesn't see you. You are safe.");
	endWin();
}

function houseTwo(){
	clear();
	print("\nYou are now in your new house! Do you want to escape?");
	print("\n\tyes\n\tno");

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
	clear();
	print("\nYou made it into the living room and see a crack in the floorboards. If you chew it a little you'll be able to squeeze through. Do you want to start chewing?");
	print("\n\tyes\n\tno");

	function processInput(input){
		if (input.toLowerCase() === "yes"){
			hidingSpot=true;
	clear();
	print("\nYour owner also has a dog which is now looking at you curiously. It begins walking over to you, you can either stay where you are or hid under the floorboards. What do you choose?");
	print("\n\tstay here\n\thide");

	function processInput(input){
		if (input.toLowerCase() === "stay here"){
			stayHere();
			print("\nYou stayed and were eaten by the dog!");
			end();
		}else if (input.toLowerCase() === "hide"){
		floorboards();
		}
	}
			waitForInput(processInput);
		}else if (input.toLowerCase() === "no"){
			hidingSpot=false;
			clear();
			print("\nYour owner also has a dog which is now looking at you. It begins walking over to you, pick one of these options:");
			print("\n\tstay here\n\thide");

			function processInput(input){
				if (input.toLowerCase() ==="stay here"){
				clear();
					print("\nYou were eated by the dog!");
					end();
				}else if (input.toLowerCase() ==="hide"){
					clear();
					print("\nYou ran towards the crack and began chewing. However because you hadn't widened it beforehand, you were too slow and the dog caught you.");
					end();
				}
			}
			waitForInput(processInput);
		}
	}

	waitForInput(processInput);
}
function floorboards(){
	clear();
	if(hidingSpot === true){
print("You are now under the floorboards of the house. Both the dog and your owner will never find you down here.");
print("Congratulations! You are now free, you can freely roam and eat all the crumbs left around.");
endWin();
}else{
	print("You ran to hide under the floorboards but the dog caught you and ate you :(");
}
waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! You've been born as a hamster and must navigate the world and make the right choices to escape and gain freedom. Type start to begin.");

    function processInput(input){
	    if (input.toLowerCase() === "start"){
             petstore();
    }
    }
    waitForInput(processInput);
}
