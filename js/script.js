// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
 var choice = "";
 var computerchoice ="";
 var winner= "";
 var randomnumber=0;
 var computerscore=0;
 var userscore = 0;
 
 
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
      
      if(choice === "paper" && computerchoice === "paper"){
          $("#result").text("tied");
    
         $("img").attr("src","http://i.imgur.com/6fPz4Vn.gif");

      }else if(choice === "rock" && computerchoice === "rock"){
          $("#result").text("tied");
         $("img").attr("src","http://i.imgur.com/6fPz4Vn.gif");

      }else if(choice === "scissors" && computerchoice === "scissors"){
          $("#result").text("tied");
          $("img").attr("src","http://i.imgur.com/6fPz4Vn.gif");
        
        
          
          //now for when user picks scissors
      }else if(choice === "scissors" && computerchoice === "rock"){
          $("#result").text("you win !!");
          $("img").attr("src","https://media.giphy.com/media/PSkITAfVsInja/giphy.gif");
          
      }else if(choice === "scissors" && computerchoice === "paper"){
         $("#result").text("you win !!");
         $("img").attr("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZU0MVPebiGLh6lSLTcuhVP0pIl0SiC7ltVchCF2dZrtFGnfW3g")
         
         
          //now when user is always rock 
      }else if(choice === "rock" && computerchoice === "scissors"){
         $("#result").text("you win !!");
          $("img").attr("src","https://media1.tenor.com/images/aefdfe482367415cd91019bb0a38b1fb/tenor.gif?itemid=5640429");
          
      }else if(choice === "rock" && computerchoice === "paper"){
         $("#result").text("you lost !!"); 
         $("img").attr("src","https://orig00.deviantart.net/9ab5/f/2010/316/7/6/you_just_lost_the_game_8d_by_xxleafberryxx-d32q1yi.gif");
           
           
           
           // now when its always user and paper
      }else if(choice === "paper" && computerchoice === "scissors"){
         $("#result").text("you lost !!");
         $("img").attr("src","https://orig00.deviantart.net/9ab5/f/2010/316/7/6/you_just_lost_the_game_8d_by_xxleafberryxx-d32q1yi.gif");
         
      }else if (choice === "paper" && computerchoice === "rock"){
         $("#result").text("you win !!");
          
           $("img").attr("src","https://art.pixilart.com/cf22171bbda1f35.gif");
          
         }else{
             $("img").attr("src","https://thumbs.gfycat.com/FalseJovialFoxhound-small.gif");
             $("#result").text("Invaild !! Try again!!");

         }
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
});

// DOCUMENT READY FUNCTION BELOW
 
