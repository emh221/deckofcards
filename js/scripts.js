$(document).ready(function(){
  $("form#displaydeck").submit(function(){

    var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

    var suits = ["spades", "clubs", "diamonds", "hearts"]

    var deck = []

    suits.forEach(function(suit) {
      cards.forEach(function(card){
        $("ul#cardlist").append("<li>" + card + " of " + suit + "</li>")
      });
    });


    $("#cardlist").show();

     event.preventDefault();
  });

});
