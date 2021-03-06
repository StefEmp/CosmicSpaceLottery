var luckyDipArray = [];
var lottoArray = [];
var matches = [];
var points = 0;
var playerArray = [];
//this object sets the maximum number of balls in the pool and specifies the number of ball choices for lottery 
//note - you can change these values to increase or decrease the odds - especially useful for debugging!
var lotto = { 
    max : 59,
    num : 6,
}
//this object sets the maximum number of balls in the pool and specifies the number of ball choices for lucky dip
//note - you can change these values to increase or decrease the odds - especially useful for debugging!
var lucky = { 
    max : 59,
    num : 6,
}
// this function manages the process of a couple of things:
// first the lottery is randomly generated by defining that 6 balls will be used from a pool of balls ranging from 1 -59, this is then applied into a table to present the results to the player
// Next a function is run that initates the matching of numbers, as well as any points and prizes that may have been earned - this is then presented in the web page this is for lucky dip + lottery results

function lotteryPlayerChoice() {
    printNumbers(getLotto((lotto.num),lotto.max),"lotto");
    resultsPlayerChoice(playerArray, lottoArray)
}
// This function is similar to previous function but for the player choices + lottery results
function lotteryLuckyDip(){
    printNumbers(getLotto((lotto.num),lotto.max),"lotto");
    resultsLuckyDip(luckyDipArray, lottoArray);
}

//this function generates the lucky dip results and applies them to a table to be presented to the player                
function luckyDip() {
    printNumbers(getLucky((lucky.num),lucky.max),"lucky");

}

//this function manages the mechanics of applying the lotto/lucky objects to their tables, by managing the process of transplanting data to the table elements
function printNumbers(numbers,type){
    for(var x in numbers){
        document.getElementById(type+x).innerHTML = numbers[x];
    }
   
}

//selects table elements to populate with playerArray values
function printNumbersPlayer(){
    let cells = document.querySelectorAll("#table0 > tbody > tr:nth-child(2) > th");
    for(let i = 0; i < cells.length; ++i) {
        cells[i].innerHTML = playerArray[i];
}
}

//manages the process of the lottery numbers, randomising results and applying them to both an array and to be used for moving the new data to the lottery table
function getLotto(totalBalls,balls) {
    var lottoNumbers = [];
    lottoArray = [];

    for (var i = balls; i > 0; i--){
        lottoNumbers.push(i);
    }
    lottoNumbers.sort(
        function(){
            return (Math.round(Math.random())-0.5);
        }
    );
    lottoArray = lottoNumbers.slice(0, totalBalls);
    
    return lottoNumbers.slice(0,totalBalls);
}

//same as the getLotto function but for the lucky dip
function getLucky(totalBalls,balls) {
    var luckyNumbers = [];
    luckyDipArray = [];
    for (var i = balls; i > 0; i--){
        luckyNumbers.push(i);
    }
    luckyNumbers.sort(
        function(){
            return (Math.round(Math.random())-0.5);
        }
    );
    luckyDipArray = luckyNumbers.slice(0,totalBalls);
    return luckyNumbers.slice(0,totalBalls);
   
}

// manages results from lucky dip
function resultsLuckyDip(luckyDipArray, lottoArray){
    //finds matches between lucky dip and lotto
    var matches = luckyDipArray.filter(function(item){
        return lottoArray.indexOf(item) > -1
      })
      // concatonation of number of matches and applies to result element
      document.getElementById("result").innerHTML = "you have got: " + matches.length + " matches!";
      // switch statement to manage points based on number of matches
      switch(true){
        case matches.length == 3:
        points = points + 50;
        break;
        case matches.length == 4:
        points = points + 100;
        break;
        case matches.length == 5:
        points = points + 200;
        break;
        case matches.length == 6:
        points = points + 500;
        break;            
      }
    //presents points accumulated to the player
      document.getElementById("points").innerHTML = "you have got: " + points + " points!";
    //switch statements to work out prizes for points gained
      switch(true){
          case points >= 50 && points <= 99:
          prize = "A Top Hat!";
          break;
          case points >= 100 && points <= 199:
          prize = "A Rolex Watch!";
          break;
          case points >= 200 && points <= 499:
          prize = "A BMW!";
          break;
          case points >= 500:
          prize = "A Package Holiday to Ibiza!";
          break;
          default: 
          prize = "Nothing";
                      
    }
    // presents attained prizes to player
    document.getElementById("prize").innerHTML = "You have won: " + prize;
}

// manages process of finding matching numbers between playerArray and lottoArray
   function resultsPlayerChoice(playerArray, lottoArray){
    var matches = playerArray.filter(function(item){
        return lottoArray.indexOf(item) > -1
      })
      document.getElementById("result").innerHTML = "you have got: " + matches.length + " matches!";
      //switch statements for points
      switch(true){
        case matches.length == 3:
        points = points + 50;
        break;
        case matches.length == 4:
        points = points + 100;
        break;
        case matches.length == 5:
        points = points + 200;
        break;
        case matches.length == 6:
        points = points + 500;
        break;
                        
      }
    
      document.getElementById("points").innerHTML = "you have got: " + points + " points!";
    //switch statements for prizes
      switch(true){
        case points >= 50 && points <= 99:
        prize = "A Top Hat!";
        break;
        case points >= 100 && points <= 199:
        prize = "A Rolex Watch!";
        break;
        case points >= 200 && points <= 499:
        prize = "A BMW!";
        break;
        case points >= 500:
        prize = "A Package Holiday to Ibiza!";
        break;
        default: 
        prize = "Nothing";             
    }
    document.getElementById("prize").innerHTML = "You have won: " + prize;
}

//manages process of adding player choices to playerArray
function addTo() { 
//had to parseInt so that player choices were converted to integars to be compared with lottoArray latter - this takes userinput, coverts it to an integar and populates playerArray
    playerChoice = parseInt(document.getElementById("userinput").value);
    //created to manage situations where the player may input a duplicate option (this disallows duplicates in the array)
    if (playerArray.length < 6 && playerArray.indexOf(playerChoice) === -1){
        playerArray.push(playerChoice);  
    //highlights with an alert when the player has chosen all 6 numbers
    if(playerArray.length == 6){
        printNumbersPlayer()
        alert("you have now chosen your 6 numbers!");
    }

    return false;
    }
    //this else statement posts an alert if a duplicate has been used
    else {
        alert("you have used a duplicate, try another number!");
        return false;
    }
 } 

