

var luckyDipArray = [];
var lottoArray = [];
var matches = [];
var points = 0;
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

function resultsYas(luckyDipArray, lottoArray){
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
    
