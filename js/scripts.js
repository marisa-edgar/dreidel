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
    
    let player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    let player1Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    player1Name.playerName=player1Name;
    player2Name.playerName=player2Name;
  });
  $("button#new-game").click(function(event){
    $(".player-console").hide();
    clearValues();
    player1.newGame();
    player2.newGame();
    $("#round-total-1").empty();
    $("#total-score-1").empty();
    $("#dreidel-spin-1").empty();
    $("#round-total-2").empty();
    $("#dreidel-spin-2").empty();

    $(".start-menu").show();
  });

  $("button#player1-spin").click(function(event){
    player1.spin = spindreidel();
    $("#dreidel-spin-1").text(player1.spin);
    player1.spinone();
    $("#round-total-1").text(player1.tempscore);
  });

  $("button#player2-spin").click(function(event){
    player2.spin = spindreidel();
    $("#dreidel-spin-2").text(player2.spin);
    player2.spinone();
    $("#round-total-2").text(player2.tempscore);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#dreidel-spin-1").empty();
    player1.winnercheck();
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-total-2").empty();
    $("#dreidel-spin-2").empty();
    player2.winnercheck();
  });

});