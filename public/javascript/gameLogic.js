

var luckyDipArray = [];
var lottoArray = [];
var matches = [];
var matches2 = [];
var points = 0;
var playerArray = [];

var addNumber = [];

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
}
                
function luckyDip() {
    printNumbers(getLucky((lucky.num),lucky.max),"lucky");

}
function printNumbers(numbers,type){
    for(var x in numbers){
        document.getElementById(type+x).innerHTML = numbers[x];
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
}


   function resultsPlayerChoice(addNumber, lottoArray){
    var matches2 = addNumber.filter(function(item){
        return lottoArray.indexOf(item) > -1
      })
      console.log(matches2)
      console.log("Total matches: ", matches2.length)
      document.getElementById("result").innerHTML = "you have got: " + matches2.length + " matches!";
      
      switch(true){
          case matches2.length == 3:
            points = points + 50;
            break;
            case matches2.length == 4:
                points = points + 100;
                break;
                case matches2.length == 5:
                    points = points + 200;
                    break;
                    case matches2.length == 6:
                        points = points + 500;
                        break;
                        
      }
    
      document.getElementById("points").innerHTML = "you have got: " + points + " points!";
}

function addTo() { 
   

    playerChoice = parseInt(document.getElementById("userinput").value);
    
    if (addNumber.length < 6){
        addNumber.push(playerChoice);  
    console.log(addNumber);
    return false;
    }
    else {
        console.log(addNumber);
       alert("you have now chosen your 6 numbers!");
       return false;
    }

 } 

 function showArray() {
     console.log(addNumber);
     console.log(lottoArray);
 }