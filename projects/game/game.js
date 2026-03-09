let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function Start() {
    clear();
    print("\nYou're life as a hamster has begun. You will be transferred to a petstore, where you must navigate obstacles and escape to find freedom or stay.");
    print("\nType start to begin" +
        "\n\tType start");
    
    function processInput(input){
        if (input.toLowerCase() === "petstore") {
            petstore();
        } else {
            stayHere();
            waitThenCall(Start);
        }
    }
    waitForInput(processInput);
}

function petstore() {
    clear();
    print("\nYou are in the petstore. You will have 3 different homes to choose from.");
    print("\nThe first house belongs to an old lady, do you want to go with her? If yes, type House1 if not, type petstore to remain here." +
        "\n\tlocationHouse1");
    
    function processInput(input){
        if (input.toLowerCase() === "House1") {
            House1();
        } else {
		if(input.toLowerCase()==="petstore"){
                 petstore();
	}
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            Start();
    }
    waitForInput(processInput);
}
