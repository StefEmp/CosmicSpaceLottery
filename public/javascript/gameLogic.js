

var luckyDipArray = [];
var lottoArray = [];
var matches = [];
var points = 0;
var playerArray = [];



var lotto = { 
    max : 10,
    num : 6,
}

var lucky = { 
    max : 10,
    num : 6,
}



function lottery() {
    printNumbers(getLotto((lotto.num),lotto.max),"lotto");
    resultsLuckyDip(luckyDipArray, lottoArray);
    resultsPlayerChoice(playerArray, lottoArray)
}
                
function luckyDip() {
    printNumbers(getLucky((lucky.num),lucky.max),"lucky");

}
function printNumbers(numbers,type){
    for(var x in numbers){
        document.getElementById(type+x).innerHTML = numbers[x];
    }
   
}

function printNumbersPlayer(){
    let cells = document.querySelectorAll("#table0 > tbody > tr:nth-child(2) > th");
    for(let i = 0; i < cells.length; ++i) {
        cells[i].innerHTML = playerArray[i];
}
}

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

function showLuckyDip(){
    console.log(luckyDipArray);
    console.log(lottoArray);
}

function resultsLuckyDip(luckyDipArray, lottoArray){
    var matches = luckyDipArray.filter(function(item){
        return lottoArray.indexOf(item) > -1
      })
      console.log(matches)
      console.log("Total matches: ", matches.length)
      document.getElementById("result").innerHTML = "you have got: " + matches.length + " matches!";
      
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


   function resultsPlayerChoice(playerArray, lottoArray){
    var matches = playerArray.filter(function(item){
        return lottoArray.indexOf(item) > -1
      })
      console.log(matches)
      console.log("Total matches: ", matches.length)
      document.getElementById("result").innerHTML = "you have got: " + matches.length + " matches!";
      
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

function addTo() { 
   

    playerChoice = parseInt(document.getElementById("userinput").value);
    
    if (playerArray.length < 6 && playerArray.indexOf(playerChoice) === -1){
        playerArray.push(playerChoice);  
    console.log(playerArray);
    if(playerArray.length == 6){
        printNumbersPlayer()
        alert("you have now chosen your 6 numbers!");
    }
    
    return false;
    }
    
    else {
        console.log(playerArray);
        
        alert("you have used a duplicate, try another number!");
       return false;
       
    }
    
 } 

 function showArray() {
     console.log(playerArray);
     console.log(lottoArray);
 }

 