// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
 var choice = "";
 var computerchoice ="";
 var winner= "";
 var randomnumber=0;
 
 
$("#shoot").click(function(){
    var choice = $("#input").val()
  $("#userChoice").text(choice);
   
    
      var randomNumber = Math.random();
      
      if(randomNumber < 1 && randomNumber > .66){
      computerchoice  = "rock"; 
          
      }else if(randomNumber < .66 && randomNumber > .33){
          computerchoice  = "paper"; 
          
      }else if(randomNumber > 0  && randomNumber < .33){
          computerchoice  = "scissors"; 
      }
    
     $("#computerChoice").text(computerchoice);
     
     
     //next is the acutal rps 
     
      // when they all equal the same thing 
      
      if(choice ==="paper" && computerchoice === "paper"){
          ("#result").text("tied");
      }else if(choice ==="rock" && computerchoice === "rock"){
          ("#result").text("tied");
          
      }else if (choice ==="paper" && computerchoice === "paper"){
          ("#result").text("tied");
          
          
          //now for when user picks paper
      }else if(choice ==="paper" && computerchoice === "rock"){
          ("#result").text("you win 😀!!");
          
      }else if(choice ==="paper" && computerchoice === "scissors"){
         $("#result").text("you lost !!");
         
          //now when user is always rock 
      }else if(choice ==="rock" && computerchoice === "scissors"){
         $("#result").text("you win 😀!!");
          
      }else if(choice ==="rock" && computerchoice === "paper"){
         $("#result").text("you lost !!"); 
           
           // now when its always user and paper
      }else if(choice ==="paper" && computerchoice === "scissors"){
         $("#result").text("you lost !!"); 
         
      }else if (choice ==="paper" && computerchoice === "rock"){
         $("#result").text("you win !!");
         }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
});

// DOCUMENT READY FUNCTION BELOW
 
