let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
let petstoreDiscovered = false;
let House1Discovered = false;
let House2Discovered = false;
let House3Discovered = false;
let beenHere = false;
let backyardDiscovered = false;



//Declare your other global variables here

//Make one function for each location
function start() {
    clear();
    print("\nYou're life as a hamster has begun. You must navigate obstacles and escape to find freedom or stay locked in a cage forever.");
    print("\nType start to begin");
	funtion processInput(input){
		if(input.toLowerCase()==="start"){
			petstore();
    }
	} 
    waitForInput(processInput);
}

function petstore() {
	petstoreDiscovered = true;
    clear();
    print("\nYou are in the petstore. You will have 3 different homes to choose from.");
    print("\nThe first house belongs to an old lady, do you want to go with her? If yes, type House1 if not, type petstore to remain here.");
    
    function processInput(input){
        if (input.toLowerCase() === "House1") {
           function House1();
        } else {
		if(input.toLowerCase()==="petstore"){
                 function petstore();
	}
        }
    }
    waitForInput(processInput);
}

function House1() {
	House1Discovered = true;
print("\nYou are in now in your new home. Do you want to escape?" + "\n\tbackyard\n\tstay here");

	function processInput(input){
		if (input.toLowerCase() === "backyard"){
			backyard();
		}else if (input.toLowerCase() === "stay here") {
			House1();
		}
	}
		waitForInput(processInput);
}

function end(){
	print("\nYou weren't able to escape successfully, would you like play again? Say yes or no");
	function processInput(input){
		if(input.toLowerCase() === "yes"){
			start();
		}else if (input.toLowerCase() === "no"){
			print("Thank you for playing!");
			gameActive=false;
		}
	}
		waitForInput(processInput);
}else{
	gameActive = false;
}

function House1(){
	House1Discovered = true;
	if (!beenHere){
		print("\nYou spend the rest of your life inside the cage, always thinking about what the outside world is like.");
		end(();
	}
}

function backyard(){
backyardDiscovered = true;

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function welcome(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            function petstore();
    }
    waitForInput(processInput);
}
