function Player(turn){
  this.spin = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}
let player1 ="";
let player2 ="";

let spindreidel =function () {
  return Math.floor(4*.random())+1;
}

Player.prototype.spinone = function() {
  if (this.spin === 1) {
    this.tempscore = 0;
    alert("sorry" + this.playerName + ",you got nun nothing happens")

  } else {
    this.tempscore += this.spin;
  }
}


Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;

  alert(this.playerName + ",your turn is over");
}


Player.prototype.winnerCheck = function () {
  if (this.totalscore >= 100) {
    alert(this.playerName + "you are the winner");
  }
}

Player.prototype.newGame = function () {
  this.spin = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.playerName = "";
}

let clearValues = function () {
  $(".player1Name").val("");
  $(".player2Name").val("");
}

$(document).ready(function() {

  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 = new Player(false);
    $(".player-console").show();
    $("start-menu").hide(); 
  })
})