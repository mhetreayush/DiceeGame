var randomNumber1= Math.round(Math.random()*5) +1;
      var randomNumber2= Math.round(Math.random()*5) +1;
      var dice1 = "images/dice" + randomNumber1 + ".png";
      var dice2 = "images/dice" + randomNumber2 + ".png";
      document.getElementById("img1").src=dice1;
      document.getElementById("img2").src=dice2;
      if (randomNumber1>randomNumber2){
        document.getElementById("winner").innerHTML = "Player 1 wins!"
      }
      else if ((randomNumber1===randomNumber2)){
        document.getElementById("winner").innerHTML = "It's A Draw!"
      }
      else{
        document.getElementById("winner").innerHTML = "Player 2 wins!"
      }